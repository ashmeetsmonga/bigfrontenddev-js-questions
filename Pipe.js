function pipe(funcs) {
	return (x) => {
		for (let fn of funcs) {
			x = fn(x);
		}
		return x;
	};
}

// const times = (y) =>  (x) => x * y
// const plus = (y) => (x) => x + y
// const subtract = (y) =>  (x) => x - y
// const divide = (y) => (x) => x / y

// pipe([
//     times(2),
//     times(3)
//   ])
//   // x * 2 * 3

//   pipe([
//     times(2),
//     plus(3),
//     times(4)
//   ])
//   // (x * 2 + 3) * 4

//   pipe([
//     times(2),
//     subtract(3),
//     divide(4)
//   ])
//   // (x * 2 - 3) / 4
