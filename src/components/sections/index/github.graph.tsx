'use client';

import React from 'react';
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
    return (
        <Section classProp="bg-transparent border-b border-gray-300 py-16">
            <section className="relative mx-auto max-w-screen-lg flex flex-col items-center">
                <SectionTitle
                    title="Company History"
                    preTitle="Timeline"
                    subTitle="A journey through our key milestones and achievements in construction."
                />
                <div className="relative w-full flex flex-col items-center space-y-12">
                    {historyEvents.map((event, index) => (
                        <div key={event.year} className="relative w-full flex flex-col items-center my-8">
                            {index > 0 && (
                                <div className="w-full flex justify-center">
                                    <div className="w-px h-24 bg-gray-300"></div>
                                </div>
                            )}
                            <div className="z-0 flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
                                <span className="text-xl font-bold text-white">{event.year}</span>
                            </div>
                            <div className="w-full px-4 py-4 bg-white rounded-lg shadow-lg text-center mt-4">
                                <h3 className="text-xl font-semibold text-gray-800">{event.event}</h3>
                                <p className="text-gray-600 mt-2">{event.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Section>
    );
}
