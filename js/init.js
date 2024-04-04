// Disable access to unsupported browsers
if (/MSIE|Trident/.test(window.navigator.userAgent)) {
	window.location.href = '/images/unsupported.png';
}

// Dark mode
if (
	localStorage.theme === 'dark' ||
	(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	document.documentElement.classList.add('dark');
	document.documentElement.style.colorScheme = 'dark';
} else {
	document.documentElement.classList.remove('dark');
	document.documentElement.style.colorScheme = 'light';
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
	if (!('theme' in localStorage)) {
		const colorScheme = e.matches ? 'dark' : 'light';
		if (colorScheme === 'dark') {
			document.documentElement.classList.add('dark');
			document.documentElement.style.colorScheme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.style.colorScheme = 'light';
		}
	}
});

// Security Warning
if (window.location.hostname !== 'localhost') {
	// eslint-disable-next-line
	console.log('%cSecurity Warning!!', 'color:orange; font-size: 40px; font-weight: bold;');
	// eslint-disable-next-line
	console.log(
		'%cThis is a browser feature intended for developers only. ' +
			'If you decide to copy and paste code here, you could potentially ' +
			'expose yourself to the risk of falling victim to scams and ' +
			'inadvertently granting account access to a malicious individual.',
		'color:red; font-size: 20px;',
	);
}
