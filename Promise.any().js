function any(promises) {
	return new Promise((resolve, reject) => {
		const errors = [];
		promises.forEach((promise, idx) => {
			Promise.resolve(promise)
				.then((val) => resolve(val))
				.catch((err) => {
					errors[idx] = err;
					if (errors.length == promises.length)
						reject(new AggregateError("No Promise in Promise.any was resolved", errors));
				});
		});
	});
}
