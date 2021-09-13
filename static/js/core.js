// core start
function toPage(id,filename){
	document.querySelector('#'+id).innerHTML = loadPage(filename);
};

function removeClass(elements){
	for (var i = 0; i < elements.length; i++) {
		elements[i].classList.remove('active');
	}
}


function isActiveToken(){
	if( token == null){
		return false;	
	}else{
		if (parseJwt(token).exp < Date.now() / 1000) {
			localStorage.clear();
			return false;
		}else{
			return true;
		}
	}
}

function navigate(id,filename,obj){
	if(obj!=null){
		var elements = document.querySelectorAll('.sidebar-item');
		for (var i = 0; i < elements.length; i++) {
			elements[i].classList.remove('active');
			elements[i].onclick = function (event) {
				removeClass(elements);
				this.classList.add("active");
			}
		}
		if(isActiveToken()){
			document.querySelector('#'+id).innerHTML = loadPage('pages/'+filename);	
		}else{
			alert('sesi habis, silahkan login ulang!');
			window.location.href = '/pages-sign-in.html';
		}
	}
};

// loadPage
function loadPage(href){
	// var xmlhttp = new XMLHttpRequest();
	// xmlhttp.open("GET", href, false);
	// xmlhttp.send();
	// return xmlhttp.responseText;

	var xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function() {
		if (this.readyState === this.DONE) {
        console.log('Success load '+href); // do something; the request has completed
    	}
	}
	xhr.open("GET", href,false) // replace with URL of your choosing
	xhr.send()
	return xhr.responseText;
}


// add side bar and navbar and footer
toPage('navbar','common/navbar.html');
toPage('sidebar','common/sidebar.html');
toPage('footer','common/footer.html');

// set content
toPage('content','pages/dashboard.html');