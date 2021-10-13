<html>
    <head>
        <title>sinentlahla Form </title>
        
        <link rel="stylesheet" type="text/css" href="Style.css">
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
    </head>

<body>


<div id="contact-form">
	<div>
		<h1>Nice to Meet You!</h1> 
		<h4>Have a question or just want to get in touch? Let's chat.</h4> 
	</div>
    <form action="DatabaseConnection.php" method="post">

		   
			<div>
		      <label for="name">
		      	<span class="required">Full Name: *</span> 
		      	<input type="text" id="name" name="name" value="" placeholder="Your Name" required="required" tabindex="1" autofocus="autofocus" />
		      </label> 
			</div>
			<div>
		      <label for="email">
		      	<span class="required">Email: *</span>
		      	<input type="email" id="email" name="email" value="" placeholder="Your Email" tabindex="2" required="required" />
		      </label>  
			</div>
			
			<div>		          
		      <label for="message">
		      	<span class="required">Message: *</span> 
		      	<textarea id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required"></textarea> 
		      </label>  
			</div>
			<div>		           
		      <button name="submit" type="submit" id="submit" >SEND</button> 
			</div>
		   </form>


	</div>
</body>
</html>