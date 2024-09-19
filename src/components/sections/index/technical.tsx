// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

// Section scss
import technical from '../../../styles/scss/sections/index/about.module.scss'


export default function Technical() {
	return (
		<Section classProp={`${technical.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical Expertise"
					preTitle="Square Space"
					subTitle="We deliver cutting-edge architectural and consulting solutions using the best tools in the industry."
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>
						<CopyBlock
							title="Strategic Thinking"
							icon={['fas', 'chart-network']}
							copy="With a solid foundation in architectural design and engineering, we approach every project with strategic thinking. Our innovative solutions and up-to-date industry practices ensure that we deliver exceptional results tailored to our clients' needs."
							iconClass={technical.icon}
							containerClass={technical.container}
						/>

						<BadgesBlock
							title="Software We Excel In"
							copy="Our team is proficient in industry-leading software that enhances our design and consulting services. From detailed architectural plans to interior design, we utilize powerful tools to bring your vision to life."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

						<BadgesBlock
							title="Technologies We Implement"
							copy="We specialize in using advanced technologies to deliver comprehensive architectural and engineering solutions. Our expertise spans from detailed 3D modeling to precise structural analysis, ensuring that your projects are built on a foundation of excellence."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

					</div>
					<div className={`${technical.image} ${technical.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background" loading="eager" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}


// Badge Block
const software = [
	{ key: 'photoshop', name: 'Photoshop', type: 'devicon' },
	{ key: 'figma', name: 'AutoCAD', type: 'devicon' },
	{ key: 'jetbrains', name: 'SketchUp', type: 'devicon' },
	{ key: 'vscode', name: 'Revit', type: 'devicon' },
	{ key: 'blender', name: 'Lumioun', type: 'devicon' },
	{ key: 'unity', name: 'V-Ray', type: 'devicon' },
	{ key: 'androidstudio', name: '3ds Max', type: 'devicon' },
	{ key: 'unrealengine', name: 'Archicad', type: 'devicon' }
]


const tech = [
	{ key: 'javascript', name: 'Lumion', type: 'devicon' },
	{ key: 'nodejs', name: 'AutoCAD', type: 'devicon' },
	{ key: 'react', name: 'Revit', type: 'devicon' },
	{ key: 'nextjs', name: 'SketchUp', type: 'devicon' },
	{ key: 'php', name: 'Photoshop', type: 'devicon' },
	{ key: 'wordpress', name: '3ds Max', type: 'devicon' },
	{ key: 'html5', name: 'Archicad', type: 'devicon' },
	{ key: 'css3', name: 'Chief Architect', type: 'devicon' },
	{ key: 'sass', name: 'V-Ray', type: 'devicon' },
	{ key: 'git', name: 'Enscape', type: 'devicon' },
	{ key: 'mysql', name: 'Rhino', type: 'devicon' },
	{ key: 'mongodb', name: 'Grasshopper', type: 'devicon' },
	{ key: 'python', name: 'Vectorworks', type: 'devicon' },
	{ key: 'java', name: 'Twinmotion', type: 'devicon' },
	{ key: 'csharp', name: 'Blender', type: 'devicon' },
	{ key: 'django', name: 'InDesign', type: 'devicon' },
	{ key: 'typescript', name: 'CorelDRAW', type: 'devicon' },
	{ key: 'c', name: 'SketchBook', type: 'devicon' },
	{ key: 'cplusplus', name: 'Affinity Designer', type: 'devicon' },
	{ key: 'jquery', name: 'Adobe Illustrator', type: 'devicon' },
	{ key: 'kotlin', name: 'Floorplanner', type: 'devicon' },
	{ key: 'vuejs', name: 'Cedreo', type: 'devicon' },
	{ key: 'tailwind', name: 'Roomstyler', type: 'devicon' },
	{ key: 'bootstrap', name: 'HomeByMe', type: 'devicon' },
	{ key: 'npm', name: 'Sweet Home 3D', type: 'devicon' },
	{ key: 'yarn', name: 'Planner 5D', type: 'devicon' },
	{ key: 'angularjs', name: 'Live Home 3D', type: 'devicon' },
	{ key: 'android', name: 'TAD Designer', type: 'devicon' },
	{ key: 'firebase', name: 'Roomle', type: 'devicon' },
	{ key: 'flask', name: 'SmartDraw', type: 'devicon' }
];
