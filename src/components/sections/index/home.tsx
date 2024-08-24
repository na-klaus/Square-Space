// Core packages
import Image from 'next/image'

// Imports
import Section from '../../structure/section';
import Container from '../../structure/container';

import SectionTitle from '../../blocks/section.title'

import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

import about from '../../../styles/scss/sections/index/about.module.scss';
import React from "react";

export default function Home() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Us"
					preTitle="Our Vision"
					subTitle="At Square Space, our vision is to redefine architectural design by merging creativity with functionality. With a focus on innovative solutions and sustainable practices, we aim to create spaces that enhance the way people live, work, and interact. Our journey is driven by a commitment to excellence and a passion for crafting environments that inspire and stand the test of time."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="https://avatars.githubusercontent.com/u/75434191?v=4" width={600} height={800} alt="Square Space" loading="eager" />
					</div>
					<div className={about.copy}>
						<CopyBlock
							title="Design Philosophy"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fas', 'paint-brush' ]}
							copy="Our design philosophy centers on creating spaces that are both aesthetically pleasing and highly functional. We believe in a collaborative approach, working closely with clients to understand their needs and vision. By integrating sustainable practices and innovative technologies, we ensure that our designs are not only beautiful but also practical and enduring."
						/>
						<CopyBlock
							title="Project Execution"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'tasks']}
							copy="We approach every project with a meticulous focus on detail and efficiency. From initial concept through to final completion, our team manages every aspect of the project with precision. Our goal is to deliver outstanding results on time and within budget, while maintaining the highest standards of quality and craftsmanship."
						/>
					</div>
				</section>
				<section className={about.content}>
					<div className={about.copy}>
						<CopyBlock
							title="Sustainability"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'leaf']}
							copy="Sustainability is a core principle in our design approach. We are committed to using eco-friendly materials and energy-efficient solutions to minimize the environmental impact of our projects. By incorporating green building practices, we strive to create spaces that are both environmentally responsible and economically viable."
						/>
						<CopyBlock
							title="Innovation"
							containerClass={about.container}
							iconClass={about.icon}
							icon={['fas', 'lightbulb']}
							copy="Innovation drives our design process. We continually explore new ideas and technologies to push the boundaries of architectural design. Our team is dedicated to finding creative solutions that meet the unique challenges of each project, ensuring that our designs are both forward-thinking and functional."
						/>
						<BadgesBlock
							title="Our Expertise"
							containerClass={about.container}
							list={expertise}
							fullContainer="fullContainer"
							block="expertise"
							icon="archway"
							copy="Our expertise spans various architectural domains, from residential to commercial projects. We pride ourselves on our ability to adapt to different styles and requirements, bringing a wealth of knowledge and experience to every project we undertake."
							headerIcon={`${about.icon}`} 
							invertedColor={undefined}
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}

const expertise = [
	{ key: 'residential', name: 'Residential Design', type: 'fad', icon: 'home' },
	{ key: 'commercial', name: 'Commercial Spaces', type: 'fad', icon: 'building' },
	{ key: 'landscape', name: 'Landscape Architecture', type: 'fad', icon: 'tree' },
	{ key: 'interior', name: 'Interior Design', type: 'fad', icon: 'couch' },
];
