var userList = new Array();

function User(email, pass, nick)
{ 
  var email;
  var password;
  var nickname;
}

function addUserToList()
{
  var emailofUser = document.getElementsByName("email");
  var pwdOfUser = document.getElementsByName("pwd");
  var nickNmeOfUser = document.getElementsByName("nickName");

  var tempUser = new User(emailofUser, pwdOfUser, nickNmeOfUser);

  userList.push(tempUser);
}