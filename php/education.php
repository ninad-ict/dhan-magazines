<!DOCTYPE html>

<html>
    <body style="background: orangered">
        <?php
        $database = new PDO('mysql:host=localhost:8889; dbname=DPS', 'mayur', 'ajgm2020')
        ?>
        <img style="height: 100px; length: 600px; margin-left: 350px" src="../images/Education.png">
        <!-- h1 style="text-align: center; color: white">Education</h1 -->
        <?php
        $sql = "SELECT *  FROM articles WHERE type = 1 ORDER BY date desc LIMIT 100";
        $qry = $database -> prepare($sql);
        $qry -> execute();
        $articles = $qry -> fetchAll(PDO::FETCH_ASSOC);
        ?>
        <div style="margin: auto; width: 1000px">
            <?php
            foreach($articles as $article ){
                $author = $article['author'];
                $title = $article['title'];
                $photo = $article['photo_path'];
                $content = substr($article['content'],0, 250);
                $date = $article['date'];

                echo "<div style='background: white; border:2px solid gray; border-radius: 18px; padding: 9px; margin-top: 5px; margin-bottom: 5px'>";
                echo "<h1>$title</h1>";
                echo "<h3>- $author</h3>";
                echo "<p>$content"."..."."</p>";
                echo "<a href='../html/$title".".html"."'><input type='button' value = 'Read more..' style='height: 30px; width: 100px; color: white; background: red'></a>";
                echo "</div>";

            }
            ?>
        </div>
    </body>
</html>