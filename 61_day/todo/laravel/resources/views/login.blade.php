@extends('layouts.auth')
@section('content')
<main class="form-signin">
    <form action="{{ route('getUser') }}" method="POST">
        @csrf
        @isset($notlogin)
        <div class="alert alert-danger" role="alert">Incorrect login or password</div>
        @endisset
        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="email" value="{{old('email')}}" name="email">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password">
            <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit" name="submit">Sign in</button>
        <div class="form-floating"><a href="{{ route('register') }}">Sign up for ToDo</a></div>
        <div class="form-floating"><a href="{{ route('forgotpassword') }}">Forgot your email or password?</a></div>
    </form>
</main>
@endsection
