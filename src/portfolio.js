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
		image: 'uveye1.jpg',
		description:
			'Designed SDKs and automated ETL processes handling 1M+ images/week across BigQuery, MongoDB, and OneFS, creating 30+ datasets in ClearML, S3, and Dataloop. Boosted detection rates to 95% through optimized preprocessing and retraining workflows. Achieved 10x pipeline performance improvement and 80% preprocessing runtime reduction. Led standardization initiatives reducing redundant work by 15%.',
		stack: ['Python', 'PyTorch', 'numpy', 'TensorFlow', 'SQL', 'AWS', 'Computer Vision', 'Optimization',
			'Data Modeling', 'Data Pipelines', 'ETL', 'BigQuery', 'MongoDB', 'ClearML', 'S3', 'Dataloop',
		],
		livePreview: 'https://www.uveye.com/blog/',
	},
	{
		name: 'Cardiac Mapping System In Vivo',
		image: 'doctors1.jpg',
		description:
			'Developed cardiac time-series prediction framework with PyTorch Lightning, automating 95% of manual processes. Created custom tooling and designed real-time mapping pipeline using Python and ZeroMQ for in-vivo procedures. Created end-to-end solutions from the physics level to Unity frontend visualization, enabling reliable clinical usage and driving business growth.',
		stack: ['Python', 'PyTorch Lightning', 'numpy', 'pandas', 'ZeroMQ', 'Unity', 'Time Series Analysis',
			'Real-time Systems', 'Signal Processing', 'Feature Engineering', 'SQL', 'Data Modeling', 'Machine Learning',
		],
		livePreview: 'https://tinyurl.com/3far3csy',
	},
	{
		name: 'Avionic Real-Time Data Distribution System',
		image: 'f15.jpg',
		description:
			'Developed real-time data pipelines using DDS for airborne systems, transforming native-per-hardware development into a generic API layer. Enabled 60+ developers to collaborate efficiently, reduced regulation overhead by 90%, and accelerated development cycles. Optimized aerial image registration runtime by 90+% using classical CV techniques. Created a reusable framework for aerial and satellite image processing that became the foundation for future Air Force projects. Developed APIs and embedded applications for airborne platforms, ensuring seamless integration across simulation, algorithm, and application teams.',
		stack: ['C++', 'Python', 'DDS', 'Real-time Systems', 'Computer Vision', 'API Development',
			'System Integration', 'Embedded Systems', 'Image Processing', 'Cross-team Collaboration',
			'Performance Optimization', 'Regulatory Compliance'
		],
	},
	{
		name: 'JustGptIt.com',
		image: 'justgptit.jpg',
		description:
			'A parodic website similar to LetMeGoogleThatForYou.com, attracting hundreds of new users weekly through organic growth. Developed a serverless web application using GCP, React, Django, Docker, GitHub Actions, PostgreSQL, and CloudFlare. Leveraged Google Cloud Run and CloudFlare reverse proxy with GitHub Pages for deployment. Implemented link-shortening and query-caching using PostgreSQL to optimize cost and latency. Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment. Demonstrated end-to-end problem solving, from product design and frontend to cloud deployment.',
		stack: ['React', 'Django', 'PostgreSQL', 'Docker', 'Google Cloud Platform', 'CloudFlare',
			'GitHub Actions', 'CI/CD', 'Cloud Run', 'GitHub Pages', 'Serverless Architecture',
			'Full Stack Development', 'Web Development'
		],
		sourceCode: 'https://github.com/noamzilo/JustGptIt',
		livePreview: 'https://justgptit.com',
	},
]

const skills = [
	// Core ML & Data Engineering
	'Machine Learning',
	'Deep Learning',
	'Computer Vision',
	'Data Engineering',
	'ETL Pipeline Design',
	'Time Series Analysis',
	'Signal Processing',

	// Programming Languages
	'Python',
	'C++',
	'SQL',

	// ML Frameworks & Libraries
	'PyTorch',
	'PyTorch Lightning',
	'TensorFlow',
	'Keras',
	'numpy',
	'pandas',

	// Cloud & Data Infrastructure
	'AWS',
	'S3',
	'BigQuery',
	'MongoDB',
	'ClearML',
	'Dataloop',

	// System Design & Architecture
	'Real-time Systems',
	'Distributed Systems',
	'Message Queues/Brkokers',
	'API Development',
	'System Integration',
	'Performance Optimization',

	// Development Tools & Practices
	'Git',
	'Docker',
	'CI/CD',
	'Agile Development',

	// Domain Knowledge
	'Image Processing',
	'Feature Engineering',
	'Data Modeling',
	'Embedded Systems',
]

const contact = {
	// email is optional - if left empty Contact section won't show up
	email: 'contact@noamsalomonski.com',
}

export { header, about, projects, skills, contact }
