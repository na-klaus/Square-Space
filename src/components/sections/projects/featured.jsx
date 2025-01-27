import React, { useState, useEffect } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import css from '../../../styles/scss/sections/projects/featured.module.scss';
import content from '../../../content/projects/featured.json';

export default function FeaturedProjects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleViewDetails = (index) => {
        console.log("Learn More clicked for project:", index); // Debug log
        setSelectedProject(index); // Open modal and set project
        setActiveImageIndex(0); // Reset to first image in modal
        document.body.classList.add(css.modalOpen); // Prevent background scrolling
    };

    const closeModal = () => {
        console.log("Closing modal"); // Debug log
        setSelectedProject(null); // Close modal
        document.body.classList.remove(css.modalOpen); // Re-enable background scrolling
    };

    const handleImageClick = (index) => {
        setActiveImageIndex(index); // Change active image in modal
    };

    useEffect(() => {
        // Animate project cards when they come into view
        const projectCards = document.querySelectorAll(`.${css.projectCard}`);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(css.animateIn);
                    }
                });
            },
            { threshold: 0.5 }
        );

        projectCards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <Section classProp={css.featuredProjects}>
            <Container>
                <SectionTitle
                    title="Featured Projects"
                    preTitle="Our Work"
                    subTitle="Innovative and sustainable designs, inspired by architectural excellence."
                />
                {/* Project Grid */}
                <div className={css.projectsGrid}>
                    {content.map((data, index) => (
                        <div key={index} className={css.projectCard}>
                            <div className={css.imageContainer}>
                                <img src={data.images[0].url} alt={data.project} />
                                <div className={css.overlay}>
                                    <h3>{data.project}</h3>
                                    <button onClick={() => handleViewDetails(index)}>Learn More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject !== null && (
                    <div className={`${css.modal} ${selectedProject !== null ? css.show : ''}`}>
                        <div className={css.modalOverlay} onClick={closeModal}></div>
                        <div className={css.modalContent}>
                            <button className={css.closeButton} onClick={closeModal}>
                                &times;
                            </button>
                            <h2>{content[selectedProject].project}</h2>
                            <p>{content[selectedProject].description}</p>
                            <div className={css.modalImage}>
                                <img
                                    src={content[selectedProject].images[activeImageIndex].url}
                                    alt={`Project View ${activeImageIndex + 1}`}
                                />
                            </div>
                            <div className={css.thumbnailGallery}>
                                {content[selectedProject].images.map((img, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={img.url}
                                        alt={`Thumbnail ${imgIndex + 1}`}
                                        className={activeImageIndex === imgIndex ? css.activeThumbnail : ''}
                                        onClick={() => handleImageClick(imgIndex)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </Section>
    );
}
