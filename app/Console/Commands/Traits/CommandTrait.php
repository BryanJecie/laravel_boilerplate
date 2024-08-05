<?php

namespace App\Console\Commands\Traits;

trait CommandTrait
{
    protected function ok($title)
    {
        $this->info("✔ $title");
    }

    protected function notOk($title)
    {
        $this->error("✖ $title");
    }

    protected function title($value)
    {
        $this->output->title(str_pad($value, 50));
    }
}
