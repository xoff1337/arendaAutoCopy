let mainButton = document.getElementById("main-action");
let carButtons = document.getElementsByClassName("car-button");
let priceButton = document.getElementById("price-action");

mainButton.onclick = function () {
	document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}
for (var i = 0; i < carButtons.length; i++) {
	carButtons[i].onclick = function () {
		document.getElementById("price").scrollIntoView({behavior: "smooth"});
	}
}
priceButton.onclick = function () {
	if (document.getElementById("name").value === "") {
		alert('Заполните имя')
	} else if (document.getElementById("phone").value === "") {
		alert('Заполните телефон')
	} else if (document.getElementById("car").value === "") {
		alert('Заполните автомобиль')
	} else {
		alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время.')
	}
}

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