<?php
$server = "localhost" ;
$username = "root" ;
$password = "" ;
$dbname = "form" ;

$con= mysqli_connect($server,$username,$password,$dbname);
 if(isset($_POST['submit'])){
   if(!empty($_POST['name'])  && !empty($_POST['email']) && !empty($_POST['message'])){
    
    $name = $_POST['name'] ;
    $email = $_POST['email'] ;
    $msg = $_POST['message'] ;
    

    $query = "insert into person(fullname,email,message) values('$name' , '$email', '$msg')" ;
     $run = mysqli_query($con,$query) or die(mysqli_error());
     if($run){
         echo " Form submitted successfully" ;
     } 
     else{
         echo "form not submittes" ;
     }
     
    }
   else{
       echo " all feilds required";
   }
 }

?>