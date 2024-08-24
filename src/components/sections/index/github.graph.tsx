'use client';

import React, { useState } from 'react';
import SectionTitle from "../../blocks/section.title";
import Section from "../../structure/section";
import Container from "../../structure/container";

const timelineEvents = [
    { year: 2010, event: "Company Founded", details: "Company was founded with the mission to revolutionize the tech industry." },
    { year: 2014, event: "Launched First Major Product", details: "Introduced our flagship product, which received widespread acclaim and recognition." },
    { year: 2019, event: "Expanded to New Markets", details: "Opened new offices and expanded our reach to international markets." },
    { year: 2021, event: "Received Industry Award", details: "Awarded 'Best Innovation' by leading industry body for our groundbreaking solutions." },
    { year: 2024, event: "Reached 1 Million Users", details: "Achieved a significant milestone with over 1 million users worldwide." }
];

export default function HistorySection() {
    const [expandedYear, setExpandedYear] = useState<number | null>(null);

    const handleToggle = (year: number) => {
        // If the clicked year is already expanded, collapse it
        if (expandedYear === year) {
            setExpandedYear(null);
        } else {
            // Otherwise, expand the clicked year
            setExpandedYear(year);
        }
    };

    return (
        <Section classProp="border-b border-gray-300">
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Company History"
                    preTitle="Timeline"
                    subTitle="A journey through our key milestones and achievements from 2010 to 2024."
                />
                <section className="relative py-16 mx-auto max-w-screen-lg flex flex-col items-center">
                    {timelineEvents.map((event, index) => (
                        <div 
                            key={event.year} 
                            className="relative mb-10 w-full cursor-pointer"
                            onClick={() => handleToggle(event.year)}
                        >
                            {index < timelineEvents.length - 1 && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-24 bg-gray-300 z-0" />
                            )}
                            <div
                                className={`relative p-6 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-800 dark:to-blue-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md transform transition-all duration-300 ease-out ${
                                    expandedYear === event.year ? 'scale-105 shadow-lg' : 'hover:scale-105'
                                }`}
                            >
                                <h3 className="text-2xl font-bold text-center text-white dark:text-gray-100">{event.year}</h3>
                                <p className="mt-2 text-center text-white dark:text-gray-300">{event.event}</p>
                                {expandedYear === event.year && (
                                    <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 shadow-inner">
                                        <p className="text-gray-700 dark:text-gray-300">{event.details}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </Container>
        </Section>
    );
}
