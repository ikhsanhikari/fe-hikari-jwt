var baseURL = 'http://localhost:8080/';

var btnSignUp = document.getElementById('btnSignUp');
var token = localStorage.getItem('token');

btnSignUp.addEventListener('click',function(){
	signup();
})

 async function signup(){
 	let name = document.querySelector('#name').value;
	let username = document.querySelector('#username').value;
	let password = document.querySelector('#password').value;
	let email = document.querySelector('#email').value;

	let req = {};
	let roles = [];
	roles.push('ROLE_ADMIN');
	req.name = name;
	req.username = username;
	req.password=password;
	req.email = email;
	req.roles = roles;

	console.log(JSON.stringify(req));

	const loginResponse = await fetch(baseURL+'users/signup',{
		method: 'POST',
		body:JSON.stringify(req),
		headers:{
			'Content-type' : 'application/json'
			// 'Authorization': 'Bearer '+token
		}
	});
	const response = await loginResponse.json();
	if(response.code == 200){
		localStorage.setItem('token',response.token);
		window.location.href = '/pages-sign-in.html';
	}else{
		document.querySelector('#messageError').innerHTML = 'invalid request'
	}
}