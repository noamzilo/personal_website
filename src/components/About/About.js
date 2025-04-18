import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
	const { name, role, description, resume, social } = about
	console.log(resume.charAt(0))
	return (
		<div className='about center'>
			{name && (
				<h1>
					Hi! I am <span className='about__name'>{name}</span>
				</h1>
			)}

			{role && <h2 className='about__role'>A {role}</h2>}
			<p className='about__desc'>
				{description}
			</p>

			<div className='about__contact center'>
				{/* {resume && (
					<a href={resume}>
						<span type='button' className='btn btn--outline'>
							Resume
						</span>
					</a>
				)} */}

				{social && (
					<>
						{social.github && (
							<a
								href={social.github}
								aria-label='github'
								className='link link--icon'
							>
								<GitHubIcon />
							</a>
						)}

						{social.linkedin && (
							<a
								href={social.linkedin}
								aria-label='linkedin'
								className='link link--icon'
							>
								<LinkedInIcon />
							</a>
						)}

						{social.stackoverflow && (
							<a
								href={social.stackoverflow}
								aria-label='stackoverflow'
								className='link link--icon'
							>
								<svg
									className='stackoverflow-icon'
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 384 512"
								>
									<path fill="currentColor" d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
								</svg>
							</a>
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default About
