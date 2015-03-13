function redirect()
{
  document.getElementById("SignupButton").onclick = function() 
  {
  	addUserToList();	
  	//window.location.href = "homepage.html";
  };
}

function addUserToList()
{
  var emailofUser = document.getElementById('email').value;
  var pwdOfUser = document.getElementById('pwd').value;
  var nickNmeOfUser = document.getElementById('nickName').value;

    
  console.log(emailofUser);

  setCookie(emailofUser, emailofUser, 2);
  var y = readCookie(emailofUser);
  console.log(y);
}

function setCookie(cName, cValue, days)
{
  console.log("cookie name: " + cName + " cookie value: " + cValue);
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 *100));
  var expires = "expires=" + date.toGMTString();
  var saveThisCookie = cName + "=" + cValue + "; " + expires + "; path=/";
  console.log(saveThisCookie);
  document.cookie = saveThisCookie;
}

function readCookie(name) 
{
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
	
  for(var i=0;i < ca.length;i++) 
  {
	var c = ca[i];
	
	while (c.charAt(0)==' ') 
	{
	  c = c.substring(1,c.length);
	}

	if (c.indexOf(nameEQ) == 0) 
	{
	  return c.substring(nameEQ.length,c.length);
    }
  }

  return null;
}

function checkCookie() 
{
  var toBeChecked = document.getElementById('email').value;
  var username = getCookie(toBeChecked);
  console.log("ye")
  
  if (username != "") 
  {
    alert("Welcome again " + username);
  }
  
  else
  {
    username = prompt("Please enter your name:", "");
    
    if (username != "" && username != null) 
    {
      setCookie("username", username, 365);
    }
  }
}