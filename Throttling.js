function throttle(func, delay) {
	let wait = false;
	let lastArgs = null;

	return function (...args) {
		if (wait) {
			lastArgs = args;
			return;
		}
		func.call(this, ...args);
		wait = true;
		setTimeout(() => {
			lastArgs && func(...lastArgs);
			lastArgs = null;
		}, delay);
	};
}
