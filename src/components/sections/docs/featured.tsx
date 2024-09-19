import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import css from '../../../styles/scss/sections/articles/team.module.scss';

export default function Recent() {
    return (
        <Section classProp="borderBottom">
            {/* Placeholder message */}
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title="Our Team"
                    preTitle="Update In Progress"
                    subTitle="We are currently updating this section. Please check back soon for the latest team information."
                />

                {/* Optional: A simple placeholder section */}
                <section className={css.teamGrid}>
                    <div className={css.placeholder}>
                        <p>Our team information will be updated shortly. Thank you for your patience!</p>
                    </div>
                </section>
            </Container>
        </Section>
    );
}
