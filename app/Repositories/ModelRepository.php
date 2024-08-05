<?php

namespace App\Repositories;

use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

abstract class ModelRepository
{
    protected Model $model;
    protected Builder $query;
    protected int $paginate = 10;
    protected int $page = 1;
    protected string $orderBy = 'desc';
    protected string $orderField = 'id';
    protected array $filters = [];
    protected bool $simpleFilter = true;

    abstract public function model(): Model;

    public function __construct()
    {
        $this->query = ($this->model())->newQuery();
    }

    /*
     * Need to find a way to declare an abstract function with dynamic arguments
     * abstract public function store(): Model;
     * abstract public function update(): Model;
     */

    public function use(Model $model): self
    {
        $this->model = $model;

        return $this;
    }

    public function query(): Builder
    {
        return $this->model()->newQuery();
    }

    public function find(int $id, bool $continueQuery = false)
    {
        $this->model = $this->query->withoutGlobalScopes()->find($id);

        if (!$continueQuery) {
            return $this->model;
        }

        return $this;
    }

    public function findOriginal(int $id)
    {
        return $this->query->where('original_id', $id)->first();
    }

    public function page(int $page): self
    {
        $this->page = $page;

        return $this;
    }

    public function paginate(int $paginate): self
    {
        $this->paginate = $paginate;

        return $this;
    }

    public function search($query, array $fields): self
    {
        if (!empty($query) && ($query != 'null')) {
            $this->query = $this->query->where(function($q) use ($fields, $query) {
                foreach ($fields as $field) {
                    $q->orWhere($field, 'like', "%{$query}%");
                }
            });
        }

        return $this;
    }

    public function orderBy(string $field, string $order): self
    {
        $this->orderField = $field;
        $this->orderBy = $order;

        return $this;
    }

    public function filter(array $fields, bool $simple = true): self
    {
        $this->filters = $fields;
        $this->simpleFilter = $simple;

        return $this;
    }

    public function count(): int
    {
        return $this->query->paginate()->total();
    }

    public function get(): Paginator
    {
        if ($this->simpleFilter) {
            $this->query = $this->simpleFilter($this->query, $this->filters);
        } // Else -> complex OR custom filters

        return $this->query
            ->orderBy($this->orderField, $this->orderBy)
            ->simplePaginate($this->paginate, ['*'], 'page', $this->page);
    }

    public function item(): Model
    {
        return $this->query->first();
    }

    private function simpleFilter(Builder $query, array $fields): Builder
    {
        foreach ($fields as $key => $value) {
            $query->where($key, $value);
        }

        return $query;
    }

    public function delete(): bool
    {
        return $this->model->delete();
    }

    public function enable(string $enableField = 'is_enabled'): bool
    {
        $model = $this->model;
        $model->{$enableField} = true;

        return $model->save();
    }

    public function disable(string $enableField = 'is_enabled'): bool
    {
        $model = $this->model;
        $model->{$enableField} = false;

        return $model->save();
    }
}
