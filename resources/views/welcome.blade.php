<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Bounce Admin</title>
    </head>
    <body>
        <div id="app">
            <main-page>
                @if (Route::has('login'))
                    <div class="top-right links">
                        @auth
                            <div v-if="$route.name">
                                <layout></layout>
                            </div>
                        <div v-else>
                            @yield('content')
                        </div>
                        @else
                            <div v-if="$route.name">
                                <auth-component></auth-component>
                            </div>
                        <div v-else>
                            @yield('content')
                        </div>
                            <a href="{{ route('login') }}">Login</a>
                            <a href="{{ route('register') }}">Register</a>
                            @endauth
                    </div>
                @endif
            </main-page>
        </div>
        <script type="text/javascript" src="{{ asset('/js/main.js')}}"></script>
    </body>
</html>
