Function.prototype.myBind = function (context, ...args) {
	let fn = this;
	return function (...args2) {
		let _fn = Symbol();
		context[_fn] = fn;
		const finalArgs = [...args, ...args2];
		context[_fn](...finalArgs);
		delete context[_fn];
	};
};
