@extends('layouts.app')

@section('content')
    <a class="menu-toggle rounded" href="#">
        <i class="fas fa-bars"></i>
    </a>
    <nav id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a class="js-scroll-trigger" href="{{url('/')}}">{{config('app.name')}}</a>
            </li>
            <li class="sidebar-nav-item">
                <a class="js-scroll-trigger" href="#page-top">Home</a>
            </li>
        </ul>
    </nav>
    <header class="masthead d-flex">
        <div class="container text-center my-auto">
            <h1 class="mb-1">{{config('app.name')}}</h1>
            <h3 class="mb-5"><em>{{config('app.subtitle')}}</em></h3>
        </div>
        <div class="overlay"></div>
    </header>
    <footer class="footer text-center">
        <div class="container">
{{--            <ul class="list-inline mb-5">--}}
{{--                <li class="list-inline-item">--}}
{{--                    <a class="social-link rounded-circle text-white" href="#">--}}
{{--                        <i class="icon-social-github"></i>--}}
{{--                    </a>--}}
{{--                </li>--}}
{{--            </ul>--}}
            <p class="text-muted small mb-0">Copyright &copy; <a href="{{config('app.url')}}">{{config('app.name')}}</a> {{now()->year}}.</p>
        </div>
    </footer>
    <a class="scroll-to-top rounded js-scroll-trigger" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
@endsection
