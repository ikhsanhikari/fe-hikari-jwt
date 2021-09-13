logout = document.querySelector('#logout');

logout.addEventListener('click',function(){
	localStorage.removeItem('token');
	window.location.href = 'pages-sign-in.html';
})