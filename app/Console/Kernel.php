<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Log;

/**
 * Class Kernel.
 */
class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Clear Logs
        $this->clearLogs($schedule);
    }


    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }

    protected function clearLogs(Schedule $schedule)
    {
        $schedule->command('activitylog:clean')
            ->daily();

        $schedule->command('telescope:clear')
            ->weekly()
            ->days([1, 3, 5])
            ->at('2:00');

        $schedule->command('log-viewer:clear')
            ->weekly()
            ->days([1, 3, 5])
            ->at('1:00');
    }
}
