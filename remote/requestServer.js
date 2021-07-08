

const requestServer = function (method, url, payload) {
	return new Promise((resolve, reject) => {
		let options = {
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
		};
		if (method === "POST") {
			options.body = JSON.stringify(payload);
		}
        console.log(
            `\x1b[32m  Request ${url} : ${JSON.stringify(payload)} \x1b[0m`,
          );
		fetch(url, options)
			.then((serverResponse) => {
				if (serverResponse.ok) {
					serverResponse
						.json()
						.then((data) => {
							resolve(data);
						})
						.catch((err) => {
							reject("Parse Failed", err);
						});
				} else {
					reject("Invalid Response");
				}
			})
			.catch((err) => {
				reject("Failed Request", err);
			});
	});
}

export default requestServer;