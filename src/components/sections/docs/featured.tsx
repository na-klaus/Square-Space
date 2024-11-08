import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title';
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

                {/* CEO Section */}
                <section className={css.ownerSection}>
                    <article className={css.owner}>
                        <div className={css.imageWrapper}>
                            <Image 
                                src="/img/owner.jpg" 
                                alt="Image of Arshad Ansari"
                                height={500} 
                                width={500} 
                                loading="eager" 
                                className={css.ownerImage} 
                            />
                        </div>
                        <div className={css.textWrapper}>
                            <h3 className={css.teamName}>Arshad Ansari</h3>
                            <p className={css.teamPosition}>CEO AND FOUNDER</p>
                            <p className={css.teamDescription}>
                            Arshad Ansari is the visionary Owner and CEO of Square Space, an industry leader in architectural and engineering consulting. With a keen eye for detail and a commitment to innovation, Arshad has steered Square Space towards delivering comprehensive solutions that encompass legal consulting, structured planning, interior design, liaisoning, and NOC permissions. His dedication to excellence has established Square Space as a trusted name in the field.
                            </p>
                        </div>
                    </article>
                </section>

                {/* Team Members Section */}
                <section className={css.teamGrid}>
                    {
                        teamData.map(({ name, position, image, description }, index) => (
                            <article 
                                key={index} 
                                className={`${css.teamMember} ${name === "Arshad Ansari" ? css.owner : ''}`}
                            >
                                <div className={css.imageWrapper}>
                                    <Image 
                                        src={image} 
                                        alt={`Image of ${name}`} 
                                        height={250}  // Updated size
                                        width={250}   // Updated size
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
