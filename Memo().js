function memo(func, resolver = (...args) => args.join("_")) {
	const cache = new Map();
	return function (...args) {
		const key = resolver(...args);
		if (cache.has(key)) return cache.get(key);
		const value = func.apply(this, args);
		cache.set(key, value);
		return value;
	};
}
