function updateProfileInfo(profileData) {
	const photo = document.getElementById('profile.photo')
	photo.src = profileData.photo
	photo.alt = profileData.name

	const name = document.getElementById('profile.name')
	name.innerText = profileData.name

	const job = document.getElementById('profile.job')
	job.innerText = profileData.job

	const location = document.getElementById('profile.location')
	location.innerText = profileData.location

	const whatsapp = document.getElementById('profile.whatsapp')
	const number = profileData.whatsapp
	whatsapp.innerText = numberFormat(number)
	whatsapp.href = `https://wa.me/${profileData.whatsapp}`

	const email = document.getElementById('profile.email')
	email.innerText = profileData.email
	email.href = `mailto:${profileData.email}`

	const linkedin = document.getElementById('profile.linkedin')
	linkedin.innerText = profileData.linkedin
	linkedin.href = `https://www.${profileData.linkedin}`

	const github = document.getElementById('profile.github')
	github.innerText = profileData.github
	github.href = `https://www.${profileData.github}`
}

function numberFormat(number) {
	const regex = /^(\+\d{1,3})(\d{2})(\d{5})(\d{4})$/
	const match = number.match(regex)

	const [, countryCode, stateCode, numberStart, numberEnd] = match
	return `${countryCode} (${stateCode}) ${numberStart}-${numberEnd}`
}

function updateHardSkills(profileData) {
	const hardSkills = document.getElementById('profile.skills.hardSkills')

	hardSkills.innerHTML = profileData.skills.hardSkills
		.map(
			(skill) => `<li>
							<img src="${skill.logo}" alt="${skill.name}" />
						</li>`
		)
		.join('')
}

function updateSoftSkills(profileData) {
	const softSkills = document.getElementById('profile.skills.softSkills')

	softSkills.innerHTML = profileData.skills.softSkills
		.map((skill) => `<li>${skill}</li>`)
		.join('')
}

function updateLanguages(profileData) {
	const languages = document.getElementById('profile.languages')

	languages.innerHTML = profileData.languages
		.map((language) => `<li>${language}</li>`)
		.join('')
}

function updateProjects(profileData) {
	const projects = document.getElementById('profile.projects')

	projects.innerHTML = profileData.projects
		.map((project) => {
			const urlInnerText = String(project.url).substring(8)
			return `<li>
					<h3 ${project.github ? 'class="github' : 'class="project'}">${project.name}</h3>
					<a
						href="${project.url}"
						target="_blank"
						>${urlInnerText}</a>
				</li>`
		})
		.join('')
}

function updateExperience(profileData) {
	const experiences = document.getElementById('profile.experience')

	experiences.innerHTML = profileData.experiences
		.map((experience) => {
			return `<li>
						<h3 class="work">${experience.name}</h3>
						<a
							class="location"
							href="${experience.url}"
							target="_blank">
							${experience.location}
						</a>
						<p class="period">${experience.period}</p>
						<section class="description">
							${experienceSections(experience.sections)}
						</section>
					</li>`
		})
		.join('')
}

function experienceSections(sections) {
	return sections
		.map((section) => {
			return `<h4>
						${section.title}
					</h4>
					<ol>
						${section.points
							.map((point) => {
								return `
								<li>${point}</li>
								`
							})
							.join('')}
					</ol>`
		})
		.join('')
}

;(async () => {
	const profileData = await fetchProfileData()
	updateProfileInfo(profileData)
	updateSoftSkills(profileData)
	updateHardSkills(profileData)
	updateLanguages(profileData)
	updateProjects(profileData)
	updateExperience(profileData)
})()
