class Formatter {
	static capitalize(s) {
		return s.charAt(0).toUpperCase() + s.slice(1);
	}

	static sanitize(s) {
		return s.replace(/[!@#$%^&*{}()]/g, "");
	}

	static titleize(string) {
		let splitted = string.split(" ");
		let excluded = [
			"the",
			"a",
			"an",
			"but",
			"of",
			"and",
			"for",
			"at",
			"by",
			"from",
		];
		let newArray = [];
		newArray.push(Formatter.capitalize(splitted[0]));

		for (let i = 1; i < splitted.length; i++) {
			if (excluded.includes(splitted[i])) {
				newArray.push(splitted[i]);
			} else {
				newArray.push(Formatter.capitalize(splitted[i]));
			}
		}
		return newArray.join(" ");
	}
}
