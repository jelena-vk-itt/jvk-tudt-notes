<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8"/>	
    <link rel="shortcut icon" type="image/x-icon" href="res/images/logo.png"/>
    <link rel="stylesheet" type="text/css" href="res/styles/main.css"/>
    <title>Name form processed</title>
  </head>

  </head>
  <body>

    <h1>Hi <span class="red"><?php
			       function test_input($data) {
			       $data = trim($data);
			       $data = stripslashes($data);
			       $data = htmlspecialchars($data);
			       return $data;
			       }
			       
			       $firstname = $middlename = $surname = "";
			       
			       if ($_SERVER["REQUEST_METHOD"] == "POST") {
			       $firstname = test_input($_POST["firstname"]);
			       $middlename = test_input($_POST["middlename"]);
			       $surname = test_input($_POST["surname"]);
			       } else {
					echo "---" . $_SERVER["REQUEST_METHOD"] . "---";
				}
			       
			       echo "". $firstname . " " . $middlename . " " . $surname;?></span>, thanks for entering your name.</h1>
  </body>
</html> 
