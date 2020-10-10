let theme = localStorage.getItem('theme')

findAge();

if (theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('themeDot')

for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option Clicked')
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href ='default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href ='blue.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href ='purple.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href ='green.css'
	}

	localStorage.setItem('theme', mode)

}


function findAge(){
	var today = new Date();
	var birthDate = new Date("1996-01-01");
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }

    var str = document.getElementById("myAge").innerHTML;
    var res = str.replace("unknown", age);
    document.getElementById("myAge").innerHTML = res;
}