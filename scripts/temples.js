const navigation = document.querySelector('.navigation')

-
menu.addEventListener('click', () => {
	menu.classList.toggle('show');
	layout.classList.toggle('show');
	toggleMenuButton();
});


function toggleMenuButton() {
	menu.classList.toggle('show');
	layout.classList.toggle('show');
};	