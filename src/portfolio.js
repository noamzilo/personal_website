const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: 'https://noamzilo.github.io/personal_website',
	title: ' ',
}

const about = {
	// all the properties are optional - can be left empty or deleted
	name: 'Noam Salomonski',
	role: 'Machine Learning and Data Engineer',
	description:
		'I have 10+ years of experience, specializing in scalable ML systems and workflow optimization. Proven track record of reducing manual workloads by 25x and improving detection rates to 95% in production systems. Top 1% Stack Overflow contributor with 27,500+ points, reaching 10M+ people.',
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
		name: 'ML data pipelines & Computer Vision at Scale',
		description:
			'Designed SDKs and automated ETL processes handling 1M+ images/week across BigQuery, MongoDB, and OneFS, creating 30+ datasets in ClearML, S3, and Dataloop. Boosted detection rates to 95% through optimized preprocessing and retraining workflows. Achieved 10x pipeline performance improvement and 80% preprocessing runtime reduction. Led standardization initiatives reducing redundant work by 15%.',
		stack: ['Python', 'PyTorch', 'numpy', 'TensorFlow', 'SQL', 'AWS', 'Computer Vision', 'Optimization',
			'Data Modeling', 'Data Pipelines', 'ETL', 'BigQuery', 'MongoDB', 'ClearML', 'S3', 'Dataloop',
		],
		livePreview: 'https://www.uveye.com/blog/',
	},
	{
		name: 'Cardiac Mapping System In Vivo',
		description:
			'Developed cardiac time-series prediction framework with PyTorch Lightning, automating 95% of manual processes. Created custom tooling and designed real-time mapping pipeline using Python and ZeroMQ for in-vivo procedures. Created end-to-end solutions from the physics level to Unity frontend visualization, enabling reliable clinical usage and driving business growth.',
		stack: ['Python', 'PyTorch Lightning', 'numpy', 'pandas', 'ZeroMQ', 'Unity', 'Time Series Analysis',
			'Real-time Systems', 'Signal Processing', 'Feature Engineering', 'SQL', 'Data Modeling', 'Machine Learning',
		],
		livePreview: 'https://tinyurl.com/3far3csy',
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
