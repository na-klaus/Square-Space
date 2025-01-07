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

                {/* Director Section */}
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
                            <p className={css.teamPosition}>DIRECTOR</p>
                            <ul className={css.teamDescription}>
                                <li>Excels at navigating regulatory complexities.</li>
                                <li>Manages architectural projects seamlessly.</li>
                                <li>Deep expertise in permits, zoning, and compliance.</li>
                                <li>Guides teams with vision and foresight.</li>
                            </ul>
                            <div className={css.socialLinks}>
                                <a href="https://wa.me/9324555058" target="_blank" rel="noopener noreferrer" className={css.socialButton}>WhatsApp</a>
                                <a href="https://instagram.com/arshuansari" target="_blank" rel="noopener noreferrer" className={css.socialButton}>Instagram</a>
                                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className={css.socialButton}>Facebook</a>
                            </div>
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
                                        height={250} 
                                        width={250} 
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
