<?php
session_start();

if (isset($_SESSION["email"]) && ($_SESSION["password"])) {
  header("Location: index.php");
  exit();
}

$notlogin = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'] ?? '';
  $password = $_POST['password'] ?? '';
  $_SESSION["email"] = $email;
  $_SESSION["password"] = $password;



  function getUser($email)
  {
    require 'connect_db.php';
    $sql = "SELECT * FROM `users` WHERE `email` = :email";
    $params = [
      "email" => $email
    ];

    $getuser = $conn->prepare($sql);
    $getuser->execute($params);
    return $getuser->fetch(PDO::FETCH_ASSOC);
  }
  $user1 = getUser($email);

  if (!$user1 || !password_verify($password, $user1['password'])) {
    $notlogin = true;
  } else {
    header('Location: index.php');
    exit;
  }
}


include('templates/header.php');
?>
<main class="form-signin">
  <form action="login.php" method="POST">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <?php if ($notlogin) : ?>
      <div class="alert alert-danger" role="alert">Incorrect login or password</div>
    <?php endif; ?>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="" name="email">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password">
      <label for="floatingPassword">Password</label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit" name="submit">Sign in</button>
    <div class="form-floating"><a href="registr.php">Sign up for ToDo</a></div>
    <div class="form-floating"><a href="forgotpassword.php">Forgot your email or password?</a></div>
  </form>
</main>

<?php include('templates/footer.php'); ?>