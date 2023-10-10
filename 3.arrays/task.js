function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((value, index) => {
		return value === arr2[index];
	})
}

function getUsersNamesInAgeRange(users, gender) {
	const filtredUsers = users.filter(user => user.gender === gender);
	if (filtredUsers.length === 0) {
		return 0;
	}

	const totalAge = filtredUsers.reduce((acc, user) => acc + user.age, 0);
	const averageAge = totalAge / filtredUsers.length;
	return averageAge;
}