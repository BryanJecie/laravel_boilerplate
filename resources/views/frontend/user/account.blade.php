@extends('frontend.layouts.app')

@section('title', __('My Account'))

@section('content')
    <div class="container py-4">
        <div class="row" style="margin-top: 5vh;">
            <div class="col-md-12">
                <ul class="list-inline float-right">

                    <li class="list-inline-item login-text">
                        <a href="{{ route('frontend.biometric.index') }}"> Home </a>
                    </li>
                    @if ($logged_in_user->isAdmin())
                        <li class="list-inline-item login-text">
                            <a href="{{ route('admin.dashboard') }}"> Backend </a>
                        </li>
                    @endif
                </ul>
            </div>
            <div class="col-md-12">
                <div class="card shadow mb-4 border-top bg-cream">
                    <div class="card-header py-4 d-flex flex-row align-items-center ">
                        <h4 class="m-0 font-weight-bold header-title">
                            @lang('My Account')
                        </h4>
                    </div>

                    <div class="card-body">

                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <x-utils.link :text="__('My Profile')" class="nav-link active" id="my-profile-tab"
                                    data-toggle="pill" href="#my-profile" role="tab" aria-controls="my-profile"
                                    aria-selected="true" />

                                <x-utils.link :text="__('Edit Information')" class="nav-link" id="information-tab" data-toggle="pill"
                                    href="#information" role="tab" aria-controls="information" aria-selected="false" />

                                @if (!$logged_in_user->isSocial())
                                    <x-utils.link :text="__('Password')" class="nav-link" id="password-tab" data-toggle="pill"
                                        href="#password" role="tab" aria-controls="password" aria-selected="false" />
                                @endif

                                @if (false)
                                    <x-utils.link :text="__('Two Factor Authentication')" class="nav-link" id="two-factor-authentication-tab"
                                        data-toggle="pill" href="#two-factor-authentication" role="tab"
                                        aria-controls="two-factor-authentication" aria-selected="false" />
                                @endif

                            </div>
                        </nav>

                        <div class="tab-content" id="my-profile-tabsContent">
                            <div class="tab-pane fade  show active" id="my-profile" role="tabpanel"
                                aria-labelledby="my-profile-tab">
                                @include('frontend.user.account.tabs.profile')
                            </div><!--tab-profile-->

                            <div class="tab-pane fade pt-3" id="information" role="tabpanel"
                                aria-labelledby="information-tab">
                                @include('frontend.user.account.tabs.information')
                            </div><!--tab-information-->

                            @if (!$logged_in_user->isSocial())
                                <div class="tab-pane fade pt-3" id="password" role="tabpanel"
                                    aria-labelledby="password-tab">
                                    @include('frontend.user.account.tabs.password')
                                </div><!--tab-password-->
                            @endif

                            <div class="tab-pane fade pt-3" id="two-factor-authentication" role="tabpanel"
                                aria-labelledby="two-factor-authentication-tab">
                                @include('frontend.user.account.tabs.two-factor-authentication')
                            </div><!--tab-information-->
                        </div><!--tab-content-->
                    </div>
                </div>


                @if (false)



                    <x-frontend.card>
                        <x-slot name="header">

                            @lang('My Account')

                            <span class="float-right">
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <strong class="mb-0">
                                            <a class="font-weight-bold" href="{{ route('frontend.biometric.index') }}">
                                                Biometric
                                            </a>
                                        </strong>
                                    </li>
                                    @if ($logged_in_user->isAdmin())
                                        <li class="list-inline-item">
                                            <strong class="mb-0">
                                                <a class="font-weight-bold" href="{{ route('frontend.biometric.index') }}">
                                                    Backend
                                                </a>
                                            </strong>
                                        </li>
                                    @endif
                                </ul>
                            </span>

                        </x-slot>

                        <x-slot name="body">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <x-utils.link :text="__('My Profile')" class="nav-link active" id="my-profile-tab"
                                        data-toggle="pill" href="#my-profile" role="tab" aria-controls="my-profile"
                                        aria-selected="true" />

                                    <x-utils.link :text="__('Edit Information')" class="nav-link" id="information-tab" data-toggle="pill"
                                        href="#information" role="tab" aria-controls="information"
                                        aria-selected="false" />

                                    @if (!$logged_in_user->isSocial())
                                        <x-utils.link :text="__('Password')" class="nav-link" id="password-tab"
                                            data-toggle="pill" href="#password" role="tab" aria-controls="password"
                                            aria-selected="false" />
                                    @endif

                                    @if (false)
                                        <x-utils.link :text="__('Two Factor Authentication')" class="nav-link" id="two-factor-authentication-tab"
                                            data-toggle="pill" href="#two-factor-authentication" role="tab"
                                            aria-controls="two-factor-authentication" aria-selected="false" />
                                    @endif

                                </div>
                            </nav>

                            <div class="tab-content" id="my-profile-tabsContent">
                                <div class="tab-pane fade pt-3 show active" id="my-profile" role="tabpanel"
                                    aria-labelledby="my-profile-tab">
                                    @include('frontend.user.account.tabs.profile')
                                </div><!--tab-profile-->

                                <div class="tab-pane fade pt-3" id="information" role="tabpanel"
                                    aria-labelledby="information-tab">
                                    @include('frontend.user.account.tabs.information')
                                </div><!--tab-information-->

                                @if (!$logged_in_user->isSocial())
                                    <div class="tab-pane fade pt-3" id="password" role="tabpanel"
                                        aria-labelledby="password-tab">
                                        @include('frontend.user.account.tabs.password')
                                    </div><!--tab-password-->
                                @endif

                                <div class="tab-pane fade pt-3" id="two-factor-authentication" role="tabpanel"
                                    aria-labelledby="two-factor-authentication-tab">
                                    @include('frontend.user.account.tabs.two-factor-authentication')
                                </div><!--tab-information-->
                            </div><!--tab-content-->
                        </x-slot>
                    </x-frontend.card>
                @endif
            </div><!--col-md-10-->
        </div><!--row-->
    </div><!--container-->
@endsection



@push('before-styles')
    <style>
        html,
        body {
            height: 100%;
            margin: 0;
            padding: 0;
        }

        body {
            background-image: url("/img/Login-BG.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
        }

        .bg-cream {
            background-color: #fffddd !important;
        }

        .card-text {
            font-size: 24px;
            color: #785b4c !important;
            font-weight: bolder;
            text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .form-title {
            font-weight: bold;
            color: #fffddd;
        }

        #btn-login {
            background-color: #fffddd !important;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }

        .home-link {
            position: fixed;
            font-size: 18px;
            right: 0;
            color: #785b4c !important;
            text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            font-weight: bold;
        }

        .login-text a {
            color: #785b4c !important;
            font-size: 18px;
            font-weight: bold;
            text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        }
    </style>
    <!--Your JavaScript Assets or Code Goes Here -->
@endpush
