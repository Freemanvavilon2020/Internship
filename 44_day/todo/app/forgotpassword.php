<?php
$is_error = false;
$emailDb = 'test@mail.ru';
$successfully = '';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';


    function getEmail($email, $emailDb)
    {
        if ($email !== $emailDb) {
            return false;
        }
        return true; 
    }

    if (getEmail($email, $emailDb)) {
        $successfully = "On $email sent a link to reset your password. Check your email";
        header('Refresh: 8; URL = http://localhost:8001/login.php');
    } else {
        $is_error = true;
    }
}

?>
<?php include('templates/header.php'); ?>
<main class="form-signin">
    <form action="forgotpassword.php" method="POST">
        <?php if ($is_error) : ?>
            <div class="alert alert-danger" role="alert">User with this email was not found</div>
        <?php endif; ?>
        <?php if ($successfully) : ?>
            <div class="alert alert-success" role="alert"><?php echo $successfully ?></div>
        <?php endif; ?>
        <h1 class="h3 mb-3 fw-normal">Enter Email Address</h1>
        <div class="form-floating mb-1">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email">
            <label for="floatingInput">Email address</label>
        </div>
        <button class="w-80 btn btn-lg btn-primary mt-2" type="submit" name="go">
            <a href="login.php"></a>Send email</button>
        <div class="form-floating"><a href="login.php">Back to login</a></div>
    </form>
</main>
<?php include('templates/footer.php'); ?>