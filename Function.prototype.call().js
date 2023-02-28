Function.prototype.mycall = function (thisArg, ...args) {
	thisArg = thisArg ?? window;
	thisArg = Object(thisArg);
	let func = Symbol();
	console.log(Object(func));
	thisArg[func] = this;
	const val = thisArg[func](...args);
	delete thisArg[func];
	return val;
};
