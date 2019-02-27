var log = prompt("Input your login", "");
var password = "";

switch(log){
	case "admin":
		password = prompt("Input your password", "");
		if(password == "passw0rd"){
			alert("Welcome home!");
		}else if(password === null){
			alert("Canseled");
		}else{
			alert("Wrong password");
		}
		break;
	case null:
	alert("Canceled");
	break;
	default:
	alert("Access defined");
}

// if(log === "admin"){
// 	password = prompt("Input your password", "");
// 	if(password == "passw0rd"){
// 		alert("Welcome home!");
// 	}else if(password === null){
// 		alert("Canseled");
// 	}else{
// 		alert("Wrong password");
// 	}
// }else if(log === null){
// 	alert("Canceled");
// }else{
// 	alert("Access defined");
// }