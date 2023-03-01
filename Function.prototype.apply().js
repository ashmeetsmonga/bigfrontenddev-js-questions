Function.prototype.myApply = function (context, args) {
	if (!Array.isArray(args)) throw new Error("The second argument must be an array");
	const fn = Symbol();
	context[fn] = this;
	const value = context._fn(...args);
	delete context[fn];
	return value;
};
