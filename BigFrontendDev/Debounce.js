function debounce(func, wait) {
	let myTimeout;
	return (...args) => {
		if (myTimeout) clearTimeout(myTimeout);
		myTimeout = setTimeout(() => func(...args), wait);
	};
}
