<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Tutorial Master</title>
</head>
<body>
<div id="app" style="height: 100%">

    @if (Route::has('login'))
        @auth
            <main-page>
                <div style="height: 100%" v-if="$route.name">
                    <router-view></router-view>
                </div>
                <div style="height: 100%" v-else>
                    @yield('content')
                </div>
            </main-page>
            @else

                <div class="top-right links">
                    <a href="{{ route('login') }}">Login</a>
                    <a href="{{ route('register') }}">Register</a>
                </div>
                @yield('content')
                @endauth

            @endif


</div>
<script type="text/javascript" src="{{ asset('/js/main.js')}}"></script>
</body>
</html>
