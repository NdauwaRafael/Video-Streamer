<!doctype html>
<html lang="{{ app()->getLocale() }}" style="height: auto">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <title>Tutorial Master</title>
</head>
<body style="height: auto">
<div id="app" style="height: auto">

        @auth
        <main-page :authenticate="true">
            <div v-if="$route.name" style="height: auto">
                <router-view></router-view>
            </div>
            <div  v-else style="height: auto">
                @yield('content')
            </div>
        </main-page>

            @else

            <main-page :authenticate="false">
                <div style="height: auto">
                    <div class="top-right links">
                        <a href="{{ route('login') }}">Login</a>
                        <a href="{{ route('register') }}">Register</a>
                    </div>
                    @yield('content')
                </div>
            </main-page>

                @endauth



</div>
<script type="text/javascript" src="{{ asset('/js/main.js')}}"></script>
</body>
</html>
