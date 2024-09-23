import React, { useState } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import career from '../../../styles/scss/sections/index/career.module.scss';
import qna from '../../../../src/content/index/qna.json';

interface QnAItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

const QnA: React.FC = () => {
    const [qnas, setQnas] = useState<QnAItem[]>(qna);

    const toggleAnswer = (index: number) => {
        setQnas((prevState) => {
            return prevState.map((item, idx) => ({
                ...item,
                isOpen: idx === index ? !item.isOpen : false,
            }));
        });
    };

    return (
        <Section classProp={`${career.section} py-16`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle 
                    title="Q & A" 
                    preTitle="" 
                    subTitle="Find answers to frequently asked questions." 
                />

                <div className="qna-section space-y-4">
                    {qnas.map((qna, index) => (
                        <div key={index} className="qna-item border-b pb-4">
                            <div
                                className="question font-semibold text-lg cursor-pointer flex justify-between items-center p-4 bg-gray-200 rounded-md"
                                onClick={() => toggleAnswer(index)}
                            >
                                <span>{qna.question}</span>
                                <span>{qna.isOpen ? '-' : '+'}</span>
                            </div>
                            {qna.isOpen && (
                                <div className="answer text-gray-700 mt-2 p-4 bg-white rounded-md shadow-sm">
                                    {qna.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Click Me Button */}
                
            </Container>
        </Section>
    );
};

export default QnA;
