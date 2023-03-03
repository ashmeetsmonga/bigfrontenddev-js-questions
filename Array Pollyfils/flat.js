// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

// Could you manage to implement your own one?

// Here is an example to illustrate

// const arr = [1, [2], [3, [4]]];

// flat(arr)
// // [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]

function flat(arr, depth = 1) {
	const output = [];
	arr.forEach((element) => {
		if (Array.isArray(element) && depth > 0) output.push(...flat(element, depth - 1));
		else output.push(element);
	});

	return output;
}
