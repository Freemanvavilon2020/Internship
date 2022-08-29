<?php
$is_error = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'] ?? '';
  $email = $_POST['email'] ?? '';
  $password = $_POST['password'] ?? '';
  $confirm = $_POST['confirm'] ?? '';


//Валидацияя
  if (empty($name) || !preg_match('/^[а-яА-Я]{3}|[a-zA-Z]{3}$/', $name)) {
    $is_error['name'] = "Enter your name";
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $is_error['email'] = "Invalid email";
  }

  if (empty($password) || empty($confirm) || $password !== $confirm) {
    $is_error['password'] = "Password mismatch";
  }

//Создаем пользователя
  if (empty($is_error)) {
    function createUser($email, $name, $password)
    {
      require 'connect_db.php';
      $sql = "INSERT INTO `users` (`email`, `name`, `password`) VALUES (:email, :name, :password)";
      $params = [
        "email" => $email,
        "name" => $name,
        "password" => password_hash($password, PASSWORD_DEFAULT)
      ];
      return $conn->prepare($sql)->execute($params);
    }
    if (createUser($name, $email, $password, $confirm)) {

      header('Location: login.php');
      exit;
    }
  }
}
?>
<?php include('templates/header.php'); ?>

<main class="form-signin">
  <form action="registr.php" method="POST">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>
    <?php if ($is_error) : ?>
      <div class="alert alert-danger" role="alert"><?php foreach ($is_error as $k => $value) {
                                                      echo $value . '</br>';
                                                    } ?>
      </div>
    <?php endif; ?>
    <div class="form-floating mb-1">
      <input type="text" class="form-control" id="floatingName" placeholder="Name" name="name" value="<?php echo isset($name) ? $name : "" ?>">
      <label for="floatingName">Name</label>
    </div>
    <div class="form-floating mb-1">
      <input type="email" class="form-control" id="floatingInput" placeholder="Email" name="email" value="<?php echo isset($email) ? $email : "" ?>">
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
    <div class="form-floating"><a href="login.php">Are you registered with ToDo?</a></div>
  </form>
</main>

<?php include('templates/footer.php'); ?>