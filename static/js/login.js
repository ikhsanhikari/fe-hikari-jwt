var btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click',function(){
	login();
})

 async function login(){
	let email = document.querySelector('#email').value;
	let password = document.querySelector('#password').value;
	const loginResponse = await fetch(baseURL+'users/signin?username='+email+'&password='+password,{
		method: 'POST',
		body:{},
		headers:{
			'Content-type' : 'application/json'
		}
	});
	const response = await loginResponse.json();
	if(response.code == 200){
		localStorage.setItem('token',response.token);
		window.location.href = '/index.html';
	}else{
		document.querySelector('#messageError').innerHTML = 'invalid username or password'
	}
}