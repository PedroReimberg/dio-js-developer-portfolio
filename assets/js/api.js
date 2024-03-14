async function fetchProfileData() {
	const url =
		'https://raw.githubusercontent.com/PedroReimberg/dio-js-developer-portfolio/master/data/profile.json'
	const fetching = await fetch(url)
	return await fetching.json()
}
