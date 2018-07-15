<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <title>Tutorial Master</title>
</head>
<body>
<div id="app">
    <main-page>
        @auth
            <div v-if="$route.name">
                <router-view></router-view>
            </div>
            <div  v-else>
                @yield('content')
            </div>
            @else
                <div v-if="$route.name">
                    <router-view></router-view>
                </div>
                <div>
                    <div class="top-right links">
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    </div>
                    @yield('content')
                </div>
                @endauth
    </main-page>


</div>
<script type="text/javascript" src="{{ asset('/js/main.js')}}"></script>
</body>
</html>
