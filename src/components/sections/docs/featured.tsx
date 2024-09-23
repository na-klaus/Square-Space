import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title';
import Icon from '../../utils/icon';
import css from '../../../styles/scss/sections/articles/team.module.scss';
import teamData from '../../../content/docs/featured.json';

export default function Recent() {
    return (
        <Section classProp="borderBottom">
            {/* @ts-ignore */}
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title="Meet the Minds Behind Our Success"
                    preTitle="Our Expert Team"
                    subTitle="The dedicated professionals driving our vision forward."
                />

                <section className={css.teamGrid}>
                    {
                        teamData.map(({ name, position, image, description }, index) => (
                            <article key={index} className={css.teamMember}>
                                <div className={css.imageWrapper}>
                                    <Image 
                                        src={image} 
                                        alt={`Image of ${name}`} 
                                        height={300} 
                                        width={300} 
                                        loading="eager" 
                                        className={css.teamImage} 
                                    />
                                </div>
                                <div className={css.textWrapper}>
                                    <h3 className={css.teamName}>{name}</h3>
                                    <p className={css.teamPosition}>{position}</p>
                                    <p className={css.teamDescription}>{description}</p>
                                </div>
                            </article>
                        ))
                    }
                </section>
            </Container>
        </Section>
    );
}
