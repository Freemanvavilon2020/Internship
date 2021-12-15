<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <title>Todo</title>


    <!-- Bootstrap core CSS -->
    <link href="{{ asset('assets/bootstrap-5.1.3-dist/css/bootstrap.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/todo.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ URL::asset("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css") }}">
    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
    </style>
</head>

<body class="text-center">
    <nav class="navbar navbar-dark bg-dark d-flex justify-content-end">
        <div class="navbar-nav d-flex justify-content-end">
            <div class="d-flex justify-content-start">
                <span>
                    <p class="text-white bg-dark">Hello:</br></p>
                </span>
                <a class="nav-link px-4" href="{{ route('logout') }}">Sign out</a>
            </div>
        </div>
    </nav>
    <main>
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="container d-flex justify-content-center">
                    <div class="col-md-12">
                        <div class="card px-3">
                            <div class="card-body">
                                <h4 class="card-title">Awesome Todo list</h4>
                                @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                                @endif
                                @isset($taskadd)
                                <div class="alert alert-success" role="alert">Added a new task</div>
                                @endisset
                                @isset($taskdel)
                                <div class="alert alert-success" role="alert">Task deleted</div>
                                @endisset
                                <form action="{{route('addTask')}}" method="POST">
                                    @csrf
                                    <div class="add-items d-flex">
                                        <input type="hidden" name="name" value="add">
                                        <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?" name="todo">
                                        <button class="add btn btn-primary font-weight-bold todo-list-add-btn" type="submit" name="go">Add
                                        </button>
                                    </div>
                                    <div class="list-wrapper">
                                        <ul class="d-flex flex-column-reverse todo-list">
                                            @foreach ($tasks as $task)
                                            @if ($task->checked == '1')
                                            <li class="d-flex bd-highlight mb-3">
                                                <div class="form-check completed">
                                                    <label class="form-check-label">
                                                        <input class="test" type="checkbox" data-todo-id="" checked="">{{ $task->title }}
                                                        <i class="input-helper"></i>
                                                    </label>
                                                </div>
                                                <span class="ml-auto bd-highlight"><a href="{{route('deleteTask',$task->id)}}" class="btn btn-danger d-flex flex-row">Delete</a></span>

                                            </li>
                                            @else
                                            <li class="d-flex bd-highlight mb-3">
                                                <div class="form-check main">
                                                    <label class="form-check-label">
                                                        <input class="test" type="checkbox" data-todo-id="">
                                                        <i class="input-helper"></i>
                                                    </label>
                                                </div>
                                                <span class="ml-auto bd-highlight"><a href="{{route('deleteTask',$task->id)}}" class="btn btn-danger d-flex flex-row">Delete</a></span>

                                            </li>
                                            @endif

                                            @endforeach


                                            <li class="d-flex bd-highlight mb-3">
                                                <div class="form-check main">
                                                    <label class="form-check-label">
                                                        <input class="test" type="checkbox" data-todo-id="">
                                                        <i class="input-helper"></i>
                                                    </label>
                                                </div>
                                                <span class="ml-auto bd-highlight"><a href="" class="btn btn-danger d-flex flex-row">Delete</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    @include('layouts/footer')
