<!doctype html>
<html>
<head>
<title> ANDUXY WEB </title>
<style>

div {
    border: 1px solid black;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-right: 150px;
    margin-left: 80px;
    background-color: rgb(146, 76, 10);
}



div {
    border: 1px solid black;
    background-color: rgb(216, 91, 143);
    padding-top: 100px;
    padding-right: 50px;
    padding-bottom: 100px;
    padding-left: 50px;
}

 p{
    padding: 30px;
    border: 1px solid #4CAF50;
}


h1, h2{
 font-family: consolas;
border: 2px solid #73AD21;
border-radius: 50px;

}

body{

 background-image: url("background.jpg");
}


body{
    border: 30px solid rgb(4, 1, 7);
}



p {
    border: 50px solid rgb(227, 240, 49);
}



h1 {
    font-family: muli, Helvetica, sans-serif;
}


ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
    border-right:1px solid #bbb;
}

li:last-child {
    border-right: none;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}



</style>
</head>
<div>
<body>
<h1 style="color: gold; font-size:70px; background-image: url(image2.jpg);"><center> MUSIC LIKE A MEDICINE </center></h1>







<ul>
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style="float:right"><a href="#about">About</a></li>
</ul>
<br><br>

<form action="/action_page.php">
  <label for="fname">User name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Password:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Sign in">
</form>
<p style="color: gold; class="1"> Click the "Sign-in" button and you will allowed to insert yo details to get access in our website.<br><br><a href="https://www.w3schools.com" width="100" height="100">Click here to get the songs</a></p>

<br><br>

<h2 style="background-image: url(image.jpg); color: rgb(4, 156, 42);"><center> Get free music from us - PLAY NOW  </center> </h2>

<select>
  <option value="Select">select</option>
  <option value="saab">video only</option>
  <option value="opel">audio only</option>
  <option value="audi">Audi & video</option>
</select>


<br><br>

<center>
<video width="600" controls>
  <source src="vdeo.mp4" type="video/mp4">
  <source src="vdeo.ogg" type="video/ogg">
  Your browser does not support HTML5 video.
</video>
</center>

<br>

<button type="button" onclick="alert('Created by:Kelvin Makombe')">Click Me!</button>
</div>
</body>

























</html>