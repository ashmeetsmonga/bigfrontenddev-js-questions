function allSettled(promises) {
	return new Promise((resolve, reject) => {
		const output = [];
		if (!promises.length) resolve(output);
		promises.forEach((promise, idx) => {
			Promise.resolve(promise)
				.then((value) => {
					output[idx] = { status: "fulfilled", value };
				})
				.catch((reason) => {
					output[idx] = { status: "rejected", reason };
				})
				.finally(() => {
					if (idx === promises.length - 1) resolve(output);
				});
		});
	});
}
