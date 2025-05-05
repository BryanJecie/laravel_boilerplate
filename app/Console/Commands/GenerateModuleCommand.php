<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use ReflectionClass;

class GenerateModuleCommand extends Command
{
    protected string $moduleName;
    protected string $modulePath;
    protected string $commandPath;
    protected string $version;
    protected string|null $fileName;
    protected string $fileType;
    protected string $basePath = 'core';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:make {name} {--ver=v1} {--type=init} {--name=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate module directories and configurations';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->moduleName = $name = ucfirst(strtolower($this->argument('name')));
        $this->version = $version = $this->option('ver');
        $this->fileType = $this->option('type');
        $this->fileName = $this->option('name');

        $basePath = $this->basePath;

        if (!is_dir($basePath)) {
            File::makeDirectory($basePath, 0755, true, true);
        }

        $this->modulePath = $modulePath = $basePath.'/'.$name;
        $this->commandPath = $modulePath;

        if (in_array($this->fileType, ['controller', 'model', 'request']) && empty($this->fileName)) {
            $this->error('Missing [--name] option');
            return;
        }

        switch ($this->fileType) {
            case 'controller':
                $this->makeController($this->fileName);
                break;
            case 'model':
                $this->makeModel($this->fileName);
                break;
            case 'request':
                $this->makeRequest($this->fileName);
                break;
            case 'rule':
                $this->makeRule($this->fileName);
                break;
            default:
                if (is_dir($modulePath)) {
                    $this->error("Module with name {$name} already exist.");
                    return;
                }
                $this->generateModuleDirectories();
        }

        $this->info('Done.');
    }

    private function makeController(string $name): void
    {
        // Define the full path where the controller should be created
        $controllerDir = "{$this->modulePath}/Http/Controllers";
        $controllerPath = "{$controllerDir}/{$name}.php";

        // Make sure directory exists
        if (!is_dir($controllerDir)) {
            File::makeDirectory($controllerDir, 0755, true, true);
        }

        // Generate content for the controller
        $namespace = "Core\\{$this->moduleName}\\Http\\Controllers";
        $content = "<?php\n\nnamespace {$namespace};\n\n";
        $content .= "use App\\Http\\Controllers\\Controller;\n";
        $content .= "class {$name} extends Controller\n{\n    //\n}\n";

        // Write the controller file
        File::put($controllerPath, $content);

//        $controllerPath = "Core\\{$this->moduleName}\\Http\\Controllers\\{$name}";
//        $this->call('make:controller', ['name' => $controllerPath]);
    }

    private function makeModel(string $name): void
    {
        // Define the full path where the controller should be created
        $modelDir = "{$this->modulePath}/Models";
        $modelPath = "{$modelDir}/{$name}.php";

        // Make sure directory exists
        if (!is_dir($modelDir)) {
            File::makeDirectory($modelDir, 0755, true, true);
        }

        // Generate content for the Model
        $namespace = "Core\\{$this->moduleName}\\Models";
        $content = "<?php\n\nnamespace {$namespace};\n\n";
        $content .= "use Illuminate\\Database\\Eloquent\\Model;\n";
        $content .= "class {$name} extends Model\n{\n    //\n}\n";

        // Write the model file
        File::put($modelPath, $content);

//        $modelName = "Core\\{$this->moduleName}\\Models\\{$name}";
//        $this->call('make:model', ['name' => $modelName]);
    }

    private function makeRequest(string $name)
    {
        $requestPath = "Core\\{$this->moduleName}\\Http\\Requests\\{$name}";
        $this->call('make:request', ['name' => $requestPath]);
    }

    private function makeRule(string $name)
    {
        $ruleName = "Core\\{$this->moduleName}\\Rules\\{$name}";
        $this->call('make:rule', ['name' => $ruleName]);
    }

    private function generateModuleDirectories()
    {
        $moduleName = $this->moduleName;
        $modulePath = $this->modulePath;

        // Http directories
        $httpPath = $modulePath.'/Http';
        File::makeDirectory($httpPath, 0755, true, true);
        $requestPath = $modulePath.'/Http/Requests';
        File::makeDirectory($requestPath, 0755, true, true);
        $controllerPath = $modulePath.'/Http/Controllers';
        File::makeDirectory($controllerPath, 0755, true, true);
        $middlewarePath = $modulePath.'/Http/Middleware';
        File::makeDirectory($middlewarePath, 0755, true, true);

        // Models directory
        $modelsPath = $modulePath.'/Models';
        File::makeDirectory($modelsPath, 0755, true, true);

        // Create Services directory
        $servicePath = $modulePath.'/Services';
        File::makeDirectory($servicePath, 0755, true, true);
        $this->makeService($moduleName);

        // Routes directory
        $routesPath = $modulePath.'/Routes';
        File::makeDirectory($routesPath, 0755, true, true);
        File::put("{$routesPath}/api.php", '<?php');
        File::put("{$routesPath}/web.php", '<?php');
//        $this->configRouteServiceProviderForModuleRoutes($moduleName);

        // Generate Controller
        $this->makeController("{$moduleName}Controller");
        // Generate Model
        $this->makeModel($moduleName);
    }

    /**
     * @param  string  $moduleName
     * @return void
     */
    private function makeService(string $moduleName): void
    {
        $serviceClassPath = "Core\\{$moduleName}\\Services\\{$moduleName}Service";
        $namespace = "Core\\{$moduleName}\\Services";
        $filePath = str_replace('\\', '/', $serviceClassPath).'.php';
        $content = "<?php\n\nnamespace {$namespace};\n\nclass {$moduleName}Service\n{\n    //\n}\n";
        File::put(base_path($filePath), $content);
    }

    private function configRouteServiceProviderForModuleRoutes(string $moduleName)
    {
        $classFilePath = app_path('Providers/RouteServiceProvider.php');

        if (file_exists($classFilePath)) {
            // Create a ReflectionClass instance
            $reflectionClass = new ReflectionClass('\App\Providers\RouteServiceProvider');
            // Specify the name of the method you want to modify
            $methodName = 'boot';

            if ($reflectionClass->hasMethod($methodName)) {
                // Get the ReflectionMethod object for the specified method
                $reflectionMethod = $reflectionClass->getMethod($methodName);
                // Read the contents of the method from the file
                $methodContents = file($classFilePath);
                // Get the starting line number of the method
                $endLine = $reflectionMethod->getEndLine();
                // Get the lines of the method
                $methodLines = array_slice(
                    $methodContents,
                    $reflectionMethod->getStartLine() - 1,
                    $endLine - $reflectionMethod->getStartLine() + 1
                );
                // Find the line number where you want to insert the new code
                $insertLine = $endLine - 1; // Inserting code after the second line of the method

                // Insert your new code at the desired line
                $lowerModuleName = strtolower($moduleName);
                $newCode = "\n\t\t\t // {$moduleName} Module \n\t\t\tRoute::middleware('api')\n\t\t\t\t->prefix('api/{$lowerModuleName}')\n\t\t\t\t->group(base_path('core/{$moduleName}/Routes/api.php'));";
                $newCode .= "\n\t\t\tRoute::middleware('web')\n\t\t\t\t->group(base_path('core/{$moduleName}/Routes/web.php'));\n";
                array_splice($methodLines, $insertLine - $reflectionMethod->getStartLine(), 0, $newCode);

                // Join the modified lines back into a string
                $modifiedMethodContents = implode('', $methodLines);

                // Replace the method contents in the file with the modified contents
                $fileContents = file_get_contents($classFilePath);
                $fileContents = str_replace(
                    implode(
                        '',
                        array_slice(
                            $methodContents,
                            $reflectionMethod->getStartLine() - 1,
                            $reflectionMethod->getEndLine() - $reflectionMethod->getStartLine() + 1
                        )
                    ),
                    $modifiedMethodContents,
                    $fileContents
                );
                file_put_contents($classFilePath, $fileContents);
            }
        }
    }

    private function getApiRouteTemplate(string $moduleName): string
    {
        $namespace = "Core\\{$moduleName}\\Http\\Controllers";
        $controller = "{$moduleName}Controller";

        return "<?php\n\nuse {$namespace}\\{$controller};\n\n// API Routes for {$moduleName} module\n";
    }

    private function getWebRouteTemplate(string $moduleName): string
    {
        $namespace = "Core\\{$moduleName}\\Http\\Controllers";
        $controller = "{$moduleName}Controller";

        return "<?php\n\nuse {$namespace}\\{$controller};\n\n// Web Routes for {$moduleName} module\n";
    }

    private function makeSeeder(string $name)
    {
        $seederName = "Core\\{$this->moduleName}\\Database\\Seeders\\{$name}";
        $this->call('make:seeder', ['name' => $seederName]);

        // Create database directory if it doesn't exist
        $databasePath = "{$this->modulePath}/Database";
        if (!is_dir($databasePath)) {
            File::makeDirectory($databasePath, 0755, true, true);
        }

        // Create seeders directory if it doesn't exist
        $seedersPath = "{$databasePath}/Seeders";
        if (!is_dir($seedersPath)) {
            File::makeDirectory($seedersPath, 0755, true, true);
        }
    }
}
