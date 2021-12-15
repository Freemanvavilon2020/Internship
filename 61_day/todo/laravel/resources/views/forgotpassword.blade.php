@extends('layouts.auth')
@section('content')
<main class="form-signin">
    <form action="{{ route('addEmail') }}" method="POST">
        @csrf
        @isset($notemail)
        <div class="alert alert-danger" role="alert">User with this email was not found</div>
        @endisset
        @isset($successfully)
        <div class="alert alert-success" role="alert">On {{ $email }} sent a link to reset your password. Check your email</div>
        @endisset
        <h1 class="h3 mb-3 fw-normal">Enter Email Address</h1>
        <div class="form-floating mb-1">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email">
            <label for="floatingInput">Email address</label>
        </div>
        <button class="w-80 btn btn-lg btn-primary mt-2" type="submit" name="go">Send email</button>
        <div class="form-floating"><a href="{{ route('login') }}">Back to login</a></div>
    </form>
</main>
@endsection
