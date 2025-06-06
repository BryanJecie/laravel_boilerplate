<?php

namespace App\Http\Livewire\Backend;

use App\Domains\Auth\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Rappasoft\LaravelLivewireTables\DataTableComponent;
use Rappasoft\LaravelLivewireTables\Views\Column;
use Rappasoft\LaravelLivewireTables\Views\Columns\ButtonGroupColumn;
use Rappasoft\LaravelLivewireTables\Views\Columns\LinkColumn;
use Rappasoft\LaravelLivewireTables\Views\Filter;
use Rappasoft\LaravelLivewireTables\Views\Filters\SelectFilter;

/**
 * Class UsersTable.
 */
class UsersTable extends DataTableComponent
{
    protected $model = User::class;


    /**
     * @var
     */
    public $status;

    /**
     * @var array|string[]
     */
    public array $sortNames = [
        'email_verified_at' => 'Verified',
        'two_factor_auth_count' => '2FA',
    ];

    /**
     * @var array|string[]
     */
    public array $filterNames = [
        'type' => 'User Type',
        'verified' => 'E-mail Verified',
    ];

    /**
     * @param  string  $status
     */
    public function mount($status = 'active'): void
    {
        $this->status = $status;
    }

    public function configure(): void
    {
        $this->setPrimaryKey('id');
    }

    public function builder(): Builder
    {
        $query = User::with('roles', 'twoFactorAuth')->withCount('twoFactorAuth');

        if ($this->status === 'deleted') {
            $query = $query->onlyTrashed();
        } elseif ($this->status === 'deactivated') {
            $query = $query->onlyDeactivated();
        } else {
            $query = $query->onlyActive();
        }

        return $query;
        // dd($this->getAppliedFilterWithValue('search'));
        // return $query
        //     ->when($this->getAppliedFilterWithValue('search'), fn ($query, $term) => $query->search($term))
        //     ->when($this->getAppliedFilterWithValue('type'), fn ($query, $type) => $query->where('type', $type))
        //     ->when($this->getAppliedFilterWithValue('active'), fn ($query, $active) => $query->where('active', $active === 'yes'))
        //     ->when($this->getAppliedFilterWithValue('verified'), fn ($query, $verified) => $verified === 'yes' ? $query->whereNotNull('email_verified_at') : $query->whereNull('email_verified_at'));
    }

    public function columns(): array
    {
        return [
            // Column::make('ID', 'id')
            //     ->sortable()
            //     ->setSortingPillTitle('Key')
            //     ->setSortingPillDirections('0-9', '9-0')
            //     ->secondaryHeader(function ($rows) {
            //         return $rows->sum('id');
            //     })
            //     ->html(),

            Column::make(__('Type'))
                ->sortable(),
            Column::make(__('Name'))
                ->sortable()
                ->searchable(),
            Column::make(__('E-mail'), 'email')
                ->sortable()
                ->searchable(),
            Column::make(__('Status'), 'active')
                ->sortable()
                ->searchable(),
            Column::make(__('Verified'), 'email_verified_at')
                ->sortable(),
            // Column::make(__('2FA'), 'two_factor_auth_count')
            //     ->sortable(),
            // Column::make(__('Roles')),
            // Column::make(__('Additional Permissions')),
            //    Column::make(__('Actions')),
        ];
    }


    public function filters(): array
    {
        return [
            SelectFilter::make('Active')
                ->options([
                    '' => 'All',
                    '1' => 'Yes',
                    '0' => 'No',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === '1') {
                        $builder->where('active', 1);
                    } elseif ($value === '0') {
                        $builder->where('active', 0);
                    }
                }),

            SelectFilter::make('User Type', 'type')
                ->options([
                    '' => 'Any',
                    User::TYPE_ADMIN => 'Administrators',
                    User::TYPE_USER => 'Users',
                ])
                ->filter(function (Builder $builder, string $value) {
                    $builder->where('type', $value ?? null);
                }),

            SelectFilter::make('E-mail Verified', 'email_verified_at')
                ->options([
                    '' => 'Any',
                    'yes' => 'Yes',
                    'no' => 'No',
                ])
                ->filter(function (Builder $builder, string $value) {
                    if ($value === 'yes') {
                        $builder->whereNotNull('email_verified_at');
                    } elseif ($value === 'no') {
                        $builder->whereNull('email_verified_at');
                    }
                }),
        ];
    }

    // public function rowView(): string
    // {
    //     return 'backend.auth.user.includes.row';
    // }



    // /**
    //  * @return Builder
    //  */
    // public function query(): Builder
    // {
    //     $query = User::with('roles', 'twoFactorAuth')->withCount('twoFactorAuth');

    //     if ($this->status === 'deleted') {
    //         $query = $query->onlyTrashed();
    //     } elseif ($this->status === 'deactivated') {
    //         $query = $query->onlyDeactivated();
    //     } else {
    //         $query = $query->onlyActive();
    //     }

    //     return $query
    //         ->when($this->getFilter('search'), fn ($query, $term) => $query->search($term))
    //         ->when($this->getFilter('type'), fn ($query, $type) => $query->where('type', $type))
    //         ->when($this->getFilter('active'), fn ($query, $active) => $query->where('active', $active === 'yes'))
    //         ->when($this->getFilter('verified'), fn ($query, $verified) => $verified === 'yes' ? $query->whereNotNull('email_verified_at') : $query->whereNull('email_verified_at'));
    // }

    // /**
    //  * @return array
    //  */
    // public function filters(): array
    // {
    //     return [
    //         'type' => Filter::make('User Type')
    //             ->select([
    //                 '' => 'Any',
    //                 User::TYPE_ADMIN => 'Administrators',
    //                 User::TYPE_USER => 'Users',
    //             ]),
    //         'active' => Filter::make('Active')
    //             ->select([
    //                 '' => 'Any',
    //                 'yes' => 'Yes',
    //                 'no' => 'No',
    //             ]),
    //         'verified' => Filter::make('E-mail Verified')
    //             ->select([
    // '' => 'Any',
    // 'yes' => 'Yes',
    // 'no' => 'No',
    //             ]),
    //     ];
    // }

    // /**
    //  * @return array
    //  */
    // public function columns(): array
    // {
    // return [
    //     Column::make(__('Type'))
    //         ->sortable(),
    //     Column::make(__('Name'))
    //         ->sortable(),
    //     Column::make(__('E-mail'), 'email')
    //         ->sortable(),
    //     Column::make(__('Verified'), 'email_verified_at')
    //         ->sortable(),
    //     Column::make(__('2FA'), 'two_factor_auth_count')
    //         ->sortable(),
    //     Column::make(__('Roles')),
    //     Column::make(__('Additional Permissions')),
    //     Column::make(__('Actions')),
    // ];
    // }

    // /**
    //  * @return string
    //  */
    // public function rowView(): string
    // {
    //     return 'backend.auth.user.includes.row';
    // }
}
