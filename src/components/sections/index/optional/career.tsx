// Core packages
import Badges from '../../../utils/badge.list'

// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss (now for Job Openings)
import career from '../../../../styles/scss/sections/index/career.module.scss'
import Education from "./education";

export default function JobOpenings() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Job Openings"
					preTitle="Join Our Team"
					subTitle="We are looking for talented individuals to join our team. Explore our current job openings and apply today to become part of our innovative architectural journey."
				/>
				<section className={career.area}>
					<div className={career.position}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Junior Architect</h3>
								<h4>Permanent Full Time · Open Now</h4>
							</span>
							<p>
								We are seeking a Junior Architect with a minimum of 6 months experience or a motivated fresher with strong skills in architectural design software. The ideal candidate should be proficient in AutoCAD, Lumion, and SketchUp.
							</p>
							<p>
								If you're passionate about architecture, have a keen eye for detail, and are eager to contribute to impactful projects, we want to hear from you.
							</p>
							<a href="mailto:connect@square-space.in" className={career.applyButton}>Apply Now</a>
						</div>
						<div className={career.companyAlt}></div>

						<Badges list={architectSkills} block="stack" fullContainer="fullContainer" color={undefined}/>
					</div>
				</section>
			</Container>
			<Education/>
		</Section>
	)
}

// Skills for Junior Architect position
const architectSkills = [
	{ key: 'autocad', name: 'AutoCAD', type: 'software' },
	{ key: 'lumion', name: 'Lumion', type: 'software' },
	{ key: 'sketchup', name: 'SketchUp', type: 'software' },
];
