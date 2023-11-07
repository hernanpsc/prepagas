// Mobile Menu

var clickListener = false;


function openCloseMenu() {
	
	if (clickListener == false) {
		document.getElementById("header_menu").style.display = "block";
		clickListener = true;
	} else {
		document.getElementById("header_menu").style.display = "none";
		clickListener = false;
	}
	
}

function openCloseItem(e) {
	var innerHTML = document.getElementById(e).innerHTML;
	var htmlParts;
	
	var itemListener = document.getElementById(e).getAttribute("value");
	
	if (itemListener == 0) {
		
		htmlParts = innerHTML.split("▼");
		document.getElementById(e).innerHTML = htmlParts[0] + " &#9650" + htmlParts[1];
		
		document.getElementById(e).nextElementSibling.style.display = "block";
		
		document.getElementById(e).setAttribute("value", 1);
		
	} else {
		
		htmlParts = innerHTML.split("▲");
		document.getElementById(e).innerHTML = htmlParts[0] + " &#9660" + htmlParts[1];
		
		document.getElementById(e).nextElementSibling.style.display = "none";
		
		document.getElementById(e).setAttribute("value", 0);
		
	}
}