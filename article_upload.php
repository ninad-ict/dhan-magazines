<?php

if (! isset($_POST)){
    echo "<h1> Wrong way to access <a href='/upload.php'>click here</a> to go right page";
}else{
  $title = $_POST['title'];
  $date = $_POST['date'];
  $author = $_POST['author'];

  $type = $_POST['type'];

  $showcase = $_POST['showcase'];
if ($showcase == 'True'){
    $showcase = 1;
} elseif ($showcase == 'False'){
    $showcase = 0;
}
  $content = $_POST['content'];

  $image = $_FILES["image"]["name"];
  $temp = $_FILES["image"]['tmp_name'];

  if (move_uploaded_file($temp, "images/articles_image/".$image)){
      $photopath = "images/articles_image/".$image;
  }

  $database = new PDO("mysql:host=localhost; dbname=DPS", 'root', 'root');

  $qry = "INSERT INTO articles(date, title, author, photo_path, type, showcase, content) VALUES (:D, :T, :A, :P, :Ty, :S, :C)";
  $exe = $database ->prepare($qry);
  $success = $exe -> execute(
      array(
          ':D' => $date,
          ':T' => $title,
          ':A' => $author,
          ':P' => $photopath,
          ':Ty' => $type,
          ':S' => $showcase,
          ':C' => $content
      )
  );
  $dir = 'html/'.$title.".html" ;
  $file = fopen($dir, 'w');
  $content = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>E-DHAN Pragati Sandesh</title>
    </head>
    <body style="display: flex; justify-content: center; background:palevioletred; background-position: center; background-repeat: no-repeat; background-size: cover;">
        <div>
            <div style="width:600px; margin: auto; background: white; padding: 20px;">
                <h1 style="text-align: center">'.$title.'</h1>
                <h3 style="text-align: right">- '.$author.'</h3>
            </div>
    
            <div style="display:flex; justify-content: center">
                <img style="width:640px" src="'. "../".$photopath.'" >
            </div>
            <div>
                <div style="width:600px; margin: auto; background: white; padding: 20px" ><p style="line-height: 1.5; text-align: justify">' .$content.'</p></div>
      
            </div>
            <div>
                <a style="margin: 20px" href="../Namadhu%20Mannvasam%20Monthly%20Magazine%20tamil.php"><input type="button" value="Home Page"></a>
            </div>
        </div>
    </body>
    </html>' ;
  fwrite($file, $content);

  if ($success){
      echo "Article has been successfully uploaded. <a href='upload.php'>Click here</a> to upload more...";
  }else{
      echo "Work hard dude!";
  }

}
?>



