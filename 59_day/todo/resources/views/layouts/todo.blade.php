@include('layouts/headertodo')
<body class="text-center">
    <nav class="navbar navbar-dark bg-dark d-flex justify-content-end">
        <div class="navbar-nav d-flex justify-content-end">
            <div class="d-flex justify-content-start">
                <div class="dropdown text-end">
                    <a href="#" class="d-block link-dark text-decoration-none" id="dropdownUser1">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">

                    </a>
                </div>
                <span><p class="text-white"">Hello:USER</p></span>
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
                                <div class="alert alert-dark" role="alert">Task deleted</div>
                                @endisset
                                @isset($taskupdated)
                                <div class="alert alert-primary" role="alert">Task taskupdated</div>
                                @endisset
                                <form action="{{ route('addTask') }}" method="POST" name="todoForm">
                                    @csrf

                                    <input type="hidden" name="action" id="task" value="add">
                                    <input type="hidden" name="id" id="taskId" value="">
                                    <input type="hidden" name="chekTask" id="chekTask" value="0">

                                    <div class="add-items d-flex">
                                        <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?" name="todo">
                                        <button class="add btn btn-primary font-weight-bold todo-list-add-btn" type="submit" name="go" value="Send">Add</button>
                                    </div>
                                    <div class="list-wrapper" id="main">
                                        <ul class="d-flex flex-column-reverse todo-list">
                                            @foreach ($tasks as $key=>$value)
                                            <li class="d-flex bd-highlight mb-3" id="{{$value['id']}}">
                                                <div class="form-check">
                                                    <label class="form-check-label" id="{{$value['id']}}">
                                                        <input class="testchek" type="checkbox" {{$value['checked'] ? "checked" : ""}}>
                                                        @if($value['checked'] == '1')
                                                        <i class="input-helper completed"> {{$value['title'] }}</i>
                                                        @else <i class="input-helper"> {{$value['title'] }}</i>
                                                        @endif
                                                    </label>
                                                </div>
                                                <button class="btn btn-danger d-flex flex-row ml-auto bd-highlight">delete</button>
                                            </li>
                                            @endforeach
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
