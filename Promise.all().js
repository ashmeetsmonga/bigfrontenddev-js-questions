function all(promises) {
	return new Promise((resolve, reject) => {
		const output = [];

		if (!promises.length) resolve(output);

		promises.forEach((promise, idx) => {
			Promise.resolve(promise)
				.then((data) => {
					output.push(data);
					if (idx === promises.length - 1) resolve(output);
				})
				.catch((err) => reject(err));
		});
	});
}
