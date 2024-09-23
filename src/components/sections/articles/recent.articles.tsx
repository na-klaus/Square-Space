import React, { useState } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import Image from 'next/image';
import SectionTitle from '../../blocks/section.title';
import Icon from '../../utils/icon';
import css from '../../../styles/scss/sections/articles/recent.module.scss';

const servicesData = [
    {
        title: "Architectural Design",
        description: "Providing innovative and sustainable architectural designs that balance aesthetics with functionality. We cater to diverse sectors including residential, commercial, and industrial.",
        image: "/img/arch.jpg", // Local image path
        image2x: "/img/arch@2x.jpg", // 2x version for Retina display
        image3x: "/img/arch@3x.jpg", // 3x version for High DPI display
        types: [
            "Residential", "Commercial", "Industrial", "Interior Design"
        ]
    },
    {
        title: "Consultancy Services",
        description: "We offer specialized consultancy services to help you plan, design, and implement effective solutions across various domains, including architecture, interior design, and urban planning.",
        image: "/img/consultancy.png",
        image2x: "/img/consultancy@2x.jpg",
        image3x: "/img/consultancy@3x.jpg",
        types: [
            "Architectural Planning", "Urban Development", "Project Management"
        ]
    }
    ,
    {
        title: "Liaisoning Services",
        description: "Navigating the complexities of regulatory requirements with our liaisoning services, including obtaining MMRDA licenses and handling other statutory approvals.",
        image: "/img/liaisoning.png",
        image2x: "/img/liaisoning@2x.jpg",
        image3x: "/img/liaisoning@3x.jpg",
        types: [
            "MMRDA License", "Building Permissions", "Environmental Clearances", "Completion Certificates"
        ]
    },
    {
        title: "Interior Design",
        description: "Offering creative interior design solutions that transform spaces into functional and aesthetically pleasing environments.",
        image: "/img/interior.png",
        image2x: "/img/interior@2x.jpg",
        image3x: "/img/interior@3x.jpg",
        types: [
            "Residential Interiors", "Commercial Interiors", "Space Planning"
        ]
    },
];

const Services: React.FC = () => {
    const [activeService, setActiveService] = useState<string | null>(null);

    const handleServiceClick = (title: string) => {
        setActiveService(activeService === title ? null : title);
    };

    return (
        <Section classProp="borderBottom">
            <Container spacing={['verticalXXXXLrg']}>
                <SectionTitle
                    title="Our Comprehensive Services"
                    preTitle="Expert Solutions"
                    subTitle="Explore our range of specialized services tailored to meet your requirements."
                />
                <section className={css.services}>
                    {servicesData.map(({ title, description, image, image2x, image3x, types }, index) => (
                        <article key={index} className={css.service}>
                            <div className={css.imageWrapper}>
                                <Image 
                                    src={image} 
                                    alt={`Image for ${title}`} 
                                    height={400} 
                                    width={600} 
                                    className={css.serviceImage} 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                  
                                    priority={index === 0} // Only prioritize loading the first image
                                />
                            </div>
                            <div className={css.textWrapper}>
                                <h3 className={css.serviceTitle}>{title}</h3>
                                <p className={css.serviceDescription}>{description}</p>
                            </div>
                            <button 
                                className={css.toggleButton} 
                                onClick={() => handleServiceClick(title)}
                            >
                                {activeService === title ? 'Hide Details' : 'View Types of Services'}
                            </button>
                            <div className={`${css.serviceDetails} ${activeService === title ? css.expanded : ''}`}>
                                <h4>Types of Services Offered:</h4>
                                <ul className={css.typesList}>
                                    {types.map((type, index) => (
                                        <li key={index} className={css.typeItem}>
                                            <Icon icon={['fas', 'check-circle']} /> {type}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </section>
            </Container>
        </Section>
    );
};

export default Services;
