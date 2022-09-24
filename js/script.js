
document.getElementById("btnp").addEventListener("click",sub);

function sub(){
	var i1 = document.getElementById("name").value;
	var i2 = document.getElementById("email").value;
	var i3 = document.getElementById("subject").value;
	
	
	if(i1 == "" && i2 == "" && i3 == ""){
		document.getElementById("error").innerHTML="Please fill it first!";
		document.getElementById("error").style.color="red";
		}
	else if(i1 != "" && i2 != "" && i3 != ""){
		document.getElementById("sent").innerHTML="Your message has been sent.";
		document.getElementById("sent").style.color="green";
	}
	document.getElementById("myForm").reset();
}

