Array.prototype.myMap = function (fn, thisObj) {
	const thisArray = Object(this);
	if (!thisArray) throw new TypeError("This is null");

	if (typeof fn !== "function") throw new TypeError("callback is not a function");

	const length = thisArray.length;
	const mapped = new Array(length);

	thisArray.forEach((val, idx, arr) => {
		mapped[idx] = fn.call(thisObj, val, idx, arr);
	});
	return mapped;
};
