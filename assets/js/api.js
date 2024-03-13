async function fetchProfileData() {
	const url =
		'https://raw.githubusercontent.com/PedroReimberg/json-test/main/data/profile.json'
	const fetching = await fetch(url)
	return await fetching.json()
}
