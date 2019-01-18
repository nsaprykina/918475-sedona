var btn=document.querySelector(".search-btn");
var popup=document.querySelector(".hotel-search-wrapper");
var entry=popup.querySelector("[name=calendar]");
var form=popup.querySelector("form");
var departure=popup.querySelector("[name=date]");
var adult=popup.querySelector(".input-adult");
var kids=popup.querySelector(".input-kids");
var storage=localStorage.getItem("adult");

var isStorageSupport=true;
storage="";

btn.addEventListener("click", function (evt) {
	evt.preventDefault();				
	popup.classList.toggle("search-wrapper-show");
	entry.focus();
	if (storage) {
		adult.value=storage;
		departure.focus();
	} else {
		entry.focus();
	}
});

form.addEventListener("submit", function(evt) {				
	if (!entry.value || !departure.value || !adult.value || !kids.value) {
		evt.preventDefault();
		console.log("Нужно ввести даты въезд, выезд, взрослых и детей");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("adult", adult.value);
			localStorage.setItem("kids", kids.value);
		}
	}
});