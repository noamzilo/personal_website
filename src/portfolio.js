const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: 'https://noamzilo.github.io/personal_website',
	title: ' ',
}

const about = {
	// all the properties are optional - can be left empty or deleted
	name: 'Noam Salomonski',
	role: 'Machine Learning Engineer',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	resume: 'https://drive.google.com/file/d/1pGqA4FMvDAAbyah4DRYL0qMEoWFZG1Ag/view?usp=sharing',
	social: {
		linkedin: 'https://www.linkedin.com/in/noam-salomonski/',
		github: 'https://github.com/noamzilo',
		stackoverflow: 'https://stackoverflow.com/users/913098/gulzar',
	},
}

const projects = [
	// projects can be added an removed
	// if there are no projects, Projects section won't show up
	{
		name: 'Project 1',
		description:
			'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
		stack: ['SASS', 'TypeScript', 'React'],
		sourceCode: 'https://github.com',
		livePreview: 'https://github.com',
	},
	{
		name: 'Project 2',
		description:
			'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
		stack: ['SASS', 'TypeScript', 'React'],
		sourceCode: 'https://github.com',
		livePreview: 'https://github.com',
	},
	{
		name: 'Project 3',
		description:
			'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
		stack: ['SASS', 'TypeScript', 'React'],
		sourceCode: 'https://github.com',
		livePreview: 'https://github.com',
	},
]

const skills = [
	// skills can be added or removed
	// if there are no skills, Skills section won't show up
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Redux',
	'SASS',
	'Material UI',
	'Git',
	'CI/CD',
	'Jest',
	'Enzyme',
]

const contact = {
	// email is optional - if left empty Contact section won't show up
	email: 'noamsalomonski@gmail.com',
}

export { header, about, projects, skills, contact }
