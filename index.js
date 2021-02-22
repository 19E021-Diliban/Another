list_td = document.getElementsByTagName("td");
// Getting all td tags

for(elems in list_td){

	// Comparing the inner values and setting text color
	
	if(list_td[elems].innerHTML == "sample"){
		list_td[elems].style.color = "#f00"
	}
	else{
		list_td[elems].style.color = "#ff0"
	}
}