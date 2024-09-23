'use client';

import React, { useEffect, useRef } from 'react';
import SectionTitle from "../../blocks/section.title";
import Section from "../../structure/section";

const historyEvents = [
    { year: 2009, event: "Foundation of AK & Associates", details: "AK & Associates was founded, laying the foundation for expertise in architectural and engineering consulting." },
    { year: 2016, event: "Expansion in Bhiwandi and Thane District", details: "Business operations expanded to Bhiwandi and surrounding areas within the Thane district, strengthening our regional presence." },
    { year: 2021, event: "Post-COVID Full-Fledged Operations", details: "Resumed full operations in Bhiwandi, Kalyan, Thane, and the greater MMR region, adapting to new market demands in the post-pandemic environment." },
    { year: 2023, event: "Inception of Square Space", details: "The concept of Square Space was introduced, unifying all services under one innovative platform to offer comprehensive architectural and engineering solutions." },
    { year: 2024, event: "Execution of Square Space Vision", details: "Square Space was successfully executed, establishing a new era of integrated and sustainable architectural services." }
];

export default function HistorySection() {
    const eventRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isDarkTheme = false;

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, { threshold: 0.1 });

        eventRefs.current.forEach(event => {
            if (event) observer.observe(event);
        });

        return () => observer.disconnect();
    }, []);

    const assignRef = (el: HTMLDivElement | null, index: number) => {
        eventRefs.current[index] = el;
    };

    return (
        <Section classProp="bg-transparent border-b border-gray-300 py-16">
            <section className="relative mx-auto max-w-screen-lg">
                <SectionTitle
                    title="Company History"
                    preTitle="Timeline"
                    subTitle="A journey through our key milestones and achievements in construction."
                />
                <div className="timelineGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {historyEvents.map((event, index) => (
                        <div
                            key={event.year}
                            ref={(el) => assignRef(el, index)}
                            className={`eventCard rounded-lg shadow-lg p-6 relative transition-all duration-300 transform hover:scale-105 ${isDarkTheme ? 'dark' : ''}`}
                        >
                            <div className="year text-center text-2xl font-bold text-blue-600 mb-4">{event.year}</div>
                            <h3 className="eventTitle text-xl font-semibold text-gray-800">{event.event}</h3>
                            <p className="eventDetails text-gray-600 mt-2">{event.details}</p>
                            {index < historyEvents.length - 1 && (
                                <div className="arrow-container absolute left-1/2 transform -translate-x-1/2 top-full mt-4">
                                    <div className="arrow arrow-left"></div>
                                    <div className="arrow arrow-right"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </Section>
    );
}
