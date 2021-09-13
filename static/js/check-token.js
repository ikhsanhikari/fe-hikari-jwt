window.onload = function(){
	if( !isActiveToken()){
		alert('sesi habis, silahkan login ulang!');
		window.location.href = '/pages-sign-in.html';	
	}

	var username_profile = document.querySelector('#username_profile');
	var extToken = parseJwt(token);
	username_profile.innerHTML = extToken.sub;
}


function parseJwt (token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));

	return JSON.parse(jsonPayload);
};


