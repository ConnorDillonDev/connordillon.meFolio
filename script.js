let theme = localStorage.getItem('theme')

findAge();

if (theme == null){
	setTheme('green')
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
		document.getElementById('theme-style').href ='lightmode.css'
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

function emailClipboard(){
	var copyText = document.createElement("textarea");
	document.body.appendChild(copyText);
	copyText.value = "connordillon.me@outlook.com";
  	copyText.select();
  	document.execCommand("copy");
  	document.body.removeChild(copyText);
  	alert("Email Copied!");
}

function mobileClipboard(){
	var copyText = document.createElement("textarea");
	document.body.appendChild(copyText);
	copyText.value = "+44776651506";
  	copyText.select();
  	document.execCommand("copy");
  	document.body.removeChild(copyText);
  	alert("Mobile Number Copied!");
}

function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
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

    var str = document.getElementById("rightColumn__myAge").innerHTML;
    var res = str.replace("unknown", age);
    document.getElementById("rightColumn__myAge").innerHTML = res;
}