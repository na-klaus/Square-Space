import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core'; // Import IconProp

const server_port = 'http://square-space.in/api/chat/'; // change this to your server port

interface ChatMessage {
    text: string;
    sender: 'user' | 'bot';
    senderName: string;
    senderImage: string;
}

// Predefined questions and answers
const predefinedQA = [
    { question: "What is your name?", answer: "I am your Chat Assistant." },
    { question: "How can I help you?", answer: "You can ask me anything or type 'help' to get a list of commands." },
    { question: "What is the company website?", answer: "Our website is https://square-space.in." },

    // Greetings
    { question: "hi", answer: "Hello! How can I assist you today?" },
    { question: "hii", answer: "Hi! What can I do for you?" },
    { question: "hello", answer: "Hi there! How can I help you?" },
    { question: "hey", answer: "Hey! Need assistance with something?" },
    { question: "hello there", answer: "Hi! What would you like to know today?" },
    { question: "hi there", answer: "Hello! How may I assist you today?" },
    { question: "hii there", answer: "Hi! What can I help you with?" },
    { question: "hey there", answer: "Hey! How can I be of service?" },

    // Variations of greetings with additional context
    { question: "hi, how are you?", answer: "I'm an AI, so I'm always ready to assist! How can I help?" },
    { question: "hello, how are you?", answer: "I'm here to help you with any questions! What would you like to ask?" },
    { question: "hii, how are you?", answer: "I'm just a chatbot, but I'm doing great! How about you?" },
    { question: "hi, what's up?", answer: "I'm here to help you with anything you need! How can I assist?" },
    { question: "hello, what's new?", answer: "Not much, but I'm here to help! What would you like to know?" },

    // Questions about Square Space
    { question: "What services does Square Space provide?", answer: "We offer architectural design, project management, and consultation services." },
    { question: "Where is Square Space located?", answer: "Our main office is located in Mumbai, India." },
    { question: "How can I contact Square Space?", answer: "You can reach us via our contact form on the website or call us at +91-1234567890." },
    { question: "What is the Square Space contact number?", answer: "You can contact us at +91-1234567890 for any inquiries." },
    { question: "What is Square Space's email?", answer: "Our email is contact@square-space.in." },
    { question: "How do I get in touch with Square Space?", answer: "You can either fill out the contact form on our website or call us directly." },
    
    // Office hours and appointments
    { question: "What time does Square Space open?", answer: "Our office hours are from 9:00 AM to 6:00 PM, Monday to Friday." },
    { question: "When does Square Space close?", answer: "We close at 6:00 PM every weekday." },
    { question: "Is Square Space open on weekends?", answer: "No, we are closed on weekends, but you can reach us via email or schedule a meeting online." },
    { question: "How can I book a consultation?", answer: "You can book a consultation by visiting our website or calling us at +91-1234567890." },
    { question: "How do I schedule a meeting?", answer: "To schedule a meeting, you can visit the 'Book a Consultation' section on our website or call us directly." },

    // Questions about projects
    { question: "What kind of projects does Square Space work on?", answer: "We work on residential, commercial, and public architectural projects." },
    { question: "Can I see past projects?", answer: "Yes, you can view our portfolio on the 'Projects' page of our website." },
    { question: "Does Square Space handle residential projects?", answer: "Yes, we handle residential projects, offering a range of architectural and interior design services." },
    { question: "What are some recent projects of Square Space?", answer: "You can find our recent projects in the 'Project Portfolio' section on our website." },
    { question: "Can Square Space handle commercial architecture?", answer: "Yes, we specialize in commercial architecture, delivering functional and aesthetic designs for businesses." },
    
    // Services and specialties
    { question: "What architectural services does Square Space provide?", answer: "We offer services including design consultation, project management, and building inspections." },
    { question: "Does Square Space offer interior design?", answer: "Yes, we offer interior design services to complement our architectural projects." },
    { question: "Does Square Space offer 3D renderings?", answer: "Yes, we provide 3D renderings and models as part of our design process." },
    { question: "Does Square Space offer project management?", answer: "Yes, we offer complete project management services, ensuring your project runs smoothly from start to finish." },
    { question: "Can I get a custom design for my project?", answer: "Absolutely! We offer tailored designs to meet your specific project needs." },
    
    // General business FAQs
    { question: "What is the process to start a project with Square Space?", answer: "You can start by scheduling a consultation through our website, where we discuss your requirements and vision." },
    { question: "How long does it take to complete a project?", answer: "The timeline varies based on the project type, but we ensure timely delivery while maintaining high quality." },
    { question: "What is Square Space's design philosophy?", answer: "We focus on creating sustainable, functional, and innovative designs that meet our clients' needs." },
    { question: "Can I request changes during the project?", answer: "Yes, we encourage client input throughout the project, and modifications can be made according to your preferences." },

    // Client questions
    { question: "Who are Square Space's clients?", answer: "We work with a variety of clients, including homeowners, businesses, and government bodies." },
    { question: "Can I get a client reference?", answer: "Yes, upon request, we can provide references from past clients." },
    { question: "Does Square Space work internationally?", answer: "Yes, we are open to working on international projects." },

    // Payment and pricing
    { question: "What is the pricing for your services?", answer: "Our pricing depends on the scope of the project. We offer transparent pricing after an initial consultation." },
    { question: "Do you offer free consultations?", answer: "Yes, we offer a free initial consultation to discuss your project requirements." },
    { question: "What payment methods does Square Space accept?", answer: "We accept bank transfers, credit cards, and online payments." },
    
    // Miscellaneous
    { question: "Can I follow Square Space on social media?", answer: "Yes, follow us on Instagram, Facebook, and LinkedIn for the latest updates and design inspirations." },
    { question: "Is Square Space hiring?", answer: "You can check the 'Careers' section of our website for current job openings." },
    { question: "Can I collaborate with Square Space?", answer: "We are always open to collaborations! Please contact us to discuss partnership opportunities." },
    { question: "Does Square Space offer internships?", answer: "Yes, we offer internships for aspiring architects and designers. Please check our 'Careers' page for more details." }
];

// Utility function for simple string similarity check
const getSimilarityScore = (a: string, b: string) => {
    const wordsA = a.toLowerCase().split(' ');
    const wordsB = b.toLowerCase().split(' ');
    const commonWords = wordsA.filter(word => wordsB.includes(word)).length;
    return commonWords / Math.max(wordsA.length, wordsB.length);
};

const Chatbot: React.FC = () => {
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const welcomeMessage: ChatMessage = {
            text: 'Hi there! I am your Chat Assistant.',
            sender: 'bot',
            senderName: 'Chat Assistant',
            senderImage: '/img/logo.jpg',
        };
        setChatMessages([welcomeMessage]);

        const storedUserId = Cookies.get('userId'); // get the user ID from cookies
        if (storedUserId) {
            setUserId(storedUserId);
            const storedMessages = Cookies.get(`chatMessages_${storedUserId}`);
            if (storedMessages) {
                setChatMessages(JSON.parse(storedMessages));
            }
        } else {
            const newUserId = generateUserId();
            setUserId(newUserId);
            Cookies.set('userId', newUserId);
            Cookies.remove('chatMessages');
        }
    }, []);

    useEffect(() => {
        Cookies.set(`chatMessages_${userId}`, JSON.stringify(chatMessages));
    }, [chatMessages, userId]);

    const toggleChat = () => {
        setIsChatVisible(!isChatVisible);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    // Enhanced function to find the closest matching predefined question
    const getPredefinedAnswer = (userMessage: string) => {
        let bestMatch = null;
        let highestScore = 0;

        predefinedQA.forEach((qa) => {
            const score = getSimilarityScore(qa.question, userMessage);
            if (score > highestScore && score > 0.4) { // Threshold for similarity
                highestScore = score;
                bestMatch = qa.answer;
            }
        });

        return bestMatch;
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            const newMessage: ChatMessage = {
                text: message,
                sender: 'user',
                senderName: 'User',
                senderImage: '/img/user.jpg',
            };
            setChatMessages([...chatMessages, newMessage]);
            setMessage('');

            // Check if the message matches a predefined question
            const predefinedAnswer = getPredefinedAnswer(message);
            if (predefinedAnswer) {
                // If a predefined answer exists, respond without sending to server
                const botResponse: ChatMessage = {
                    text: predefinedAnswer,
                    sender: 'bot',
                    senderName: 'Chat Assistant',
                    senderImage: '/img/logo.jpg',
                };
                setChatMessages((prevMessages) => [...prevMessages, botResponse]);
            } else {
                // If no predefined answer, send to the server for processing
                sendMessageToServer(message, userId)
                    .then((response) => {
                        const botResponse: ChatMessage = {
                            text: response,
                            sender: 'bot',
                            senderName: 'Chat Assistant',
                            senderImage: '/img/logo.jpg',
                        };
                        setChatMessages((prevMessages) => [...prevMessages, botResponse]);
                    })
                    .catch(() => {
                        const errorMessage: ChatMessage = {
                            text: `Hey ${userId}\n An error occurred. Please try again later.`,
                            sender: 'bot',
                            senderName: 'Chat Assistant',
                            senderImage: '/img/logo.jpg',
                        };
                        setChatMessages((prevMessages) => [...prevMessages, errorMessage]);
                    });
            }
        }
    };

    const sendMessageToServer = (message: string, userId: string) => {
        return fetch(server_port, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, userId }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Server error');
                }
                return response.json();
            })
            .then((data) => {
                return data.response;
            });
    };

    const generateUserId = () => {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        return `user_${timestamp}_${random}`;
    };

    return (
        <div className="chatbot">
            {isChatVisible && (
                <div className="chatbot-container">
                    <div className="chat-header">
                        <h3>Chat Assistant</h3>
                    </div>
                    <div className="chat-body">
                        {chatMessages.map((chatMessage, index) => (
                            <div key={index} className={`message ${chatMessage.sender === 'bot' ? 'bot' : 'user'}`}>
                                {chatMessage.sender === 'bot' && (
                                    <div className="sender-info">
                                        <Image className="sender-image" height={16} width={16} src={chatMessage.senderImage} alt="bot image" loading="eager" />
                                        <span className="sender-name">{chatMessage.senderName}</span>
                                    </div>
                                )}
                                {chatMessage.sender === 'user' && (
                                    <div className="sender-info user-sender">
                                        <Image className="sender-image" height={16} width={16} src={chatMessage.senderImage} alt="Sender image" loading="eager" />
                                        <span className="sender-name">{chatMessage.senderName}</span>
                                    </div>
                                )}
                                <div className="message-content">{chatMessage.text}</div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={handleInputChange}
                        />
                        <FontAwesomeIcon icon={faPaperPlane as IconProp} className="send-icon" onClick={handleSendMessage} />
                    </div>
                </div>
            )}
            <div className={`chatbot-button ${isChatVisible ? 'active' : ''}`} onClick={toggleChat}>
                {isChatVisible ? <FontAwesomeIcon icon={faTimes as IconProp} className="close-icon" /> : <FontAwesomeIcon icon={faCommentAlt as IconProp} />}
            </div>
        </div>
    );
};

export default Chatbot;
