const switchTheme = () => {
	document.body.classList.toggle('darkMode');

	// Guarda la elección en el localStorage
	if (document.body.classList.contains('darkMode')) {
		localStorage.setItem('dark-mode', true);
	} else {
		localStorage.setItem('dark-mode', false);
	}
};

$switchThemeBtn.addEventListener('click', switchTheme);

// consulta cual es el modo elegido y setea las propiedades nocturnas
const setLocalStorageTheme = () => {
	if (localStorage.getItem('dark-mode') == 'true') {
		document.body.classList.add('darkMode');
		$switchThemeBtn.textContent = 'Modo Diurno';
		$logo.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/logo-mobile-modo-noct.svg';
		$crearGifBtn.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/CTA-crar-gifo-modo-noc.svg';
		$burgerMenu.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/burger-modo-noct.svg';
		$navbarSearchBtn.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search-mod-noc.svg';
		$navbarSearchCloseBtn.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/close-modo-noct.svg';
		$searchBtn.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/icon-search-mod-noc.svg';
		$searchCloseBtn.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/close-modo-noct.svg';
		$previousBtn.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-left-md-noct.svg';
		$nextBtn.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/button-slider-right-md-noct.svg';
		$camera.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/camara-modo-noc.svg';
		$celuloide.src = 'GIFOS_UI+Kit_Desktop+y+Mobile/GIFOS-UI-Desktop+Mobile-Update/assets/pelicula-modo-noc.svg';
	} else {
		document.body.classList.remove('darkMode');
		$switchThemeBtn.textContent = 'Modo Nocturno';
	}
};

setLocalStorageTheme();