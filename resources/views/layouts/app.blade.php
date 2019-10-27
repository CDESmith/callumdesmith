<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" prefix="og: http://ogp.me/ns#">
<head>
    <meta charset="utf-8">
    <meta name="author" content="{{config('app.name')}}">
    <meta name="description" content="{{config('app.subtitle')}}">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{config('app.name')}} | {{config('app.subtitle')}}</title>
    <meta property="og:title" content="{{config('app.name')}} | {{config('app.subtitle')}}">
    <meta property="og:description" content="{{config('app.subtitle')}}">
    <meta property="og:site_name" content="{{config('app.name')}}">
    <meta property="og:locale" content="en_gb">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{config('app.url')}}">
    <meta property="og:image" content=""> <!-- 200x200px - 1200x1200px -->
</head>
<body>
    @yield('content')
</body>
</html>
