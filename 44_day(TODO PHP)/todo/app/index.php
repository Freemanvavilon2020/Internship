<?php
session_start();
require 'connect_db.php';
$is_error = false;
$successfully = '';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $todo = $_POST['todo'] ?? '';
    //$id = $_POST['id'] ?? '';

    //Добавляю задание
    if (empty($todo)) {
        $is_error = true;
    } else {
        $stmt = $conn->prepare("INSERT INTO tasks(title) VALUE(?)");
        $res = $stmt->execute([$todo]);

        if ($res) {
            $successfully = "Task added";
        } else {
            header("Location: ../index.php");
            $conn = null;
            exit();
        }
    }
}




if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $id = $_GET['id'] ?? '';

    //Удаляю задание
    if (empty($id)) {
    } else {
        $stmt = $conn->prepare("DELETE FROM tasks WHERE id=?");
        $res = $stmt->execute([$id]);

        if ($res) {
            $successfully = "Task deleted";
        } else {
            $successfully = "The task has not been completed yet";;
        }
    }
}


include('templates/header_index.php');
?>
<nav class="navbar navbar-dark bg-dark d-flex justify-content-end">
    <div class="navbar-nav d-flex justify-content-end">
        <div class="d-flex justify-content-start">
            <span>
                <p class="text-white bg-dark">Hello:</br><?php echo $_SESSION["email"] ?></p>
            </span>
            <a class="nav-link px-4" href="logout.php">Sign out</a>
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
                            <?php if ($successfully) : ?>
                                <div class="alert alert-success" role="alert"><?php echo $successfully ?></div>
                            <?php endif; ?>
                            <?php if ($is_error) : ?>
                                <div class="alert alert-danger" role="alert">Task not added</div>
                            <?php endif; ?>
                            <form action="index.php" method="POST">
                                <div class="add-items d-flex">
                                    <input type="hidden" name="name" value="add">
                                    <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?" name="todo">
                                    <button class="add btn btn-primary font-weight-bold todo-list-add-btn" type="submit" name="go">Add</button>
                                </div>
                                <div class="list-wrapper">
                                    <?php
                                    $todos = $conn->query("SELECT * FROM tasks ORDER BY id DESC");
                                    ?>
                                    <ul class="d-flex flex-column-reverse todo-list">
                                        <?php while ($todo = $todos->fetch(PDO::FETCH_ASSOC)) { ?>
                                            <?php if ($todo['checked']) { ?>
                                                <li class="d-flex bd-highlight mb-3">
                                                    <div class="form-check completed">
                                                        <label class="form-check-label">
                                                            <input class="test" type="checkbox" data-todo-id="<?php echo $todo['id']; ?>" checked=""><?php echo $todo['title'] ?>
                                                            <i class="input-helper"></i>
                                                        </label>
                                                    </div>
                                                    <span class="ml-auto bd-highlight"><a href="index.php?id=<?= $todo['id'] ?>" class="btn btn-danger d-flex flex-row">Delete</a></span>
                                                </li>
                                            <?php } else { ?>
                                                <li class="d-flex bd-highlight mb-3">
                                                    <div class="form-check main">
                                                        <label class="form-check-label">
                                                            <input class="test" type="checkbox" data-todo-id="<?php echo $todo['id']; ?>"><?php echo $todo['title'] ?>
                                                            <i class="input-helper"></i>
                                                        </label>
                                                    </div>
                                                    <span class="ml-auto bd-highlight"><a href="index.php?id=<?= $todo['id'] ?>" class="btn btn-danger d-flex flex-row">Delete</a></span>
                                                </li>
                                            <?php } ?>
                                        <?php } ?>
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
<script>
    let element = document.querySelectorAll('.main');
    element.forEach((ele) => {
        ele.addEventListener('change', function() {
            ele.classList.toggle("completed");
            console.log(ele);
            let tests = document.querySelector('.test').value;
            console.log(tests);
            let url='complete.php';
            fetch(url, {
                method: 'POST',
            })
            // let xhr = new XMLHttpRequest();
            // xhr.open("POST", "complete.php");
            // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            // xhr.send(data); // отправляем запрос на сервер


            // xhr.onreadystatechange = function() { //Вызывает функцию при смене состояния.
            //     if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            //         // Запрос завершён. Здесь можно обрабатывать результат.
            //     }
            // }

        })
    })
</script>
<?php include('templates/footer.php'); ?>