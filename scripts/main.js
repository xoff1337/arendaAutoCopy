document.getElementById("main-action").addEventListener('click', () => {
	document.getElementById('cars').scrollIntoView({behavior: "smooth"});
});

let carButtons = document.querySelectorAll(".car-button");
carButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('price').scrollIntoView({behavior: "smooth"});
				document.getElementById('car').value = button.parentElement.getElementsByClassName("car-item-title")[0].innerHTML;

        document.getElementById('select-car').value = button.parentElement.getElementsByClassName("car-item-title")[0].innerHTML; /*hidden*/
    });    
});

document.getElementById('validation').addEventListener('click', function() {
	if (document.getElementById("price-form").checkValidity()) {
			alert('Спасибо за Вашу заявку.\nМы свяжемся с Вами в ближайшее время.')
	} 
})

document.addEventListener("DOMContentLoaded", function () {
	let layer = document.querySelector('.price-image');
	document.addEventListener('mousemove', (event) => {
			layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 10) + 'px,' + ((event.clientY * 0.1) / 3) + 'px,0px)';
	});

	const elem = document.querySelector(".main");
	document.addEventListener('scroll', () => {
			elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
	})
});