function memoise(func) {
	const cache = new Map();
	return function (...args) {
		const key = args.join("|");

		if (cache.has(key)) return cache.get(key);

		const value = func.apply(this, args);
		cache.set(key, value);

		return value;
	};
}

const add = (a, b) => a + b;

const memoisedAdd = memoise(add);
memoisedAdd(1, 2);
memoisedAdd(3, 4);
memoisedAdd(1, 2);
