
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';


// Section general blocks
// Spacing util
// Section scss
import looking from '../../../styles/scss/sections/index/looking.module.scss';
import section from '../../../styles/scss/blocks/section.title.module.scss'

export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>Our Expertise</h4>
				<h2 className={looking.json}>We Offer: &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Innovative Design Solutions</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Sustainable Architecture</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight3}>Custom Interiors</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>At Square Space, we bring your vision to life through creative and functional design. Our team is dedicated to crafting spaces that inspire and elevate everyday experiences.</h4>
				<p>Explore our portfolio to see how we transform spaces with our expertise in architecture and interior design. We take pride in our ability to adapt to diverse styles and requirements, ensuring each project is unique and impactful.</p>
			</Container>
		</Section>
	)
}
