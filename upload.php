<?php
session_start();
if (isset($_SESSION['login'])){
    if ($_SESSION['login'] !== TRUE){
    ?>
    <!DOCTYPE html>
    <meta lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
        <title>Admin Upload</title>
    </head>
    <h1>Login</h1>
    <form method ="POST" action="verify.php">
        <label for="uname"><input name = "uname" type="text"></label><br>
        <label for = "pass"><input name = "pass" type="password"></label><br>
        <input Value="Login" type="submit">
    </form>
    <?php
} else {
    ?>
    <!DOCTYPE html>
    <meta lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
        <title>Admin Upload</title>
    </head>
    <h1>Upload Articles</h1>
    <form method ='POST' action="article_upload.php" enctype="multipart/form-data">
        <label for = "uname">Article Name: <input name = "title" type="text" required></label><br>
        <label for = "date">Date of publication: <input name = "date" type="date" required></label><br>
        <label for = "author">Writer Name: <input name="author" type="text" required></label><br>
        <label for = "image">Select an Image: <input id ="image" name ="image" type="file"></label>
        <br>
        <label for = "type">Select type of article</label>
        <label for = "type">Education<input name ="type" type = 'radio' value="1"></label>
        <label for = "type">Medical<input name ="type" type = 'radio' value="2"></label>
        <label for = "type">Food<input name ="type" type = 'radio' value="3"></label>
        <label for = "type">History<input name ="type" type = 'radio' value="4"></label>
        <label for = "type">Science<input name ="type" type = 'radio' value="5"></label>
        <label for = "type">Heritage<input name ="type" type = 'radio' value="6"></label>
        <label for = "type">Humor<input name ="type" type = 'radio' value="7"></label>
        <label for = "type">Poem<input name ="type" type = 'radio' value="8"></label>
        <label for = "type">Development<input name ="type" type = 'radio' value="9"></label>
        <br>
        <label for = "showcase">Showcase or not: <label for="showcase">Yes<input name = "showcase" type="radio" value=True></label> </label>
        <label for = "showcase">No<input name = "showcase" type="radio" value=False></label><br>
        <label for = "data">Article without title: <br> <textarea name="content" rows="20" cols="80"></textarea> </label>
        <br>

        <input type="submit" value="Upload">
    </form>
<?php }}else{ ?>
    <!DOCTYPE html>
    <meta lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
        <title>Admin Upload</title>
    </head>
    <h1>Login</h1>
    <form method ="POST" action="verify.php">
        <label for="uname"><input name = "uname" type="text"></label><br>
        <label for = "pass"><input name = "pass" type="password"></label><br>
        <input Value="Login" type="submit">
    </form>
<?php }?>
