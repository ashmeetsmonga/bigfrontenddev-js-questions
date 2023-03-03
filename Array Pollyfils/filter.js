Array.prototype.myFilter = function (fn) {
	const output = [];

	this.forEach((val, idx, arr) => {
		if (fn(val, idx, arr)) output.push(val);
	});

	return output;
};
