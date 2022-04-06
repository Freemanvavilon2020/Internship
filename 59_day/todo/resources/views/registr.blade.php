@extends('layouts.auth')
@section('content')

<main class="form-signin">
    <form action="{{route('addUser')}}" method="post">
        @csrf
        @if ($errors->any())
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
        @endif
        <div class="form-floating mb-1">
            <input type="text" class="form-control" id="floatingName" placeholder="Name" value="{{old('name')}}" name="name">
            <label for="floatingName">Name</label>
        </div>
        <div class="form-floating mb-1">
            <input type="email" class="form-control" id="floatingInput" placeholder="Email" value="{{old('email')}}"name="email">
            <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-1">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password">
            <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating mb-1">
            <input type="password" class="form-control" id="floatingPassword" placeholder=Confirm name="confirm">
            <label for="floatingPassword">Confirm password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit" name="go">Sign up</button>
        <div class="form-floating"><a href="{{ route('login') }}">Are you registered with ToDo?</a></div>
    </form>
</main>
@endsection
