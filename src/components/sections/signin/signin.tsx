import React, { useState } from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import signin from '../../../styles/scss/sections/index/about.module.scss';
import { useRouter } from 'next/router';

export default function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    // Define the event type explicitly
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Generate mailto link
            const mailtoLink = `mailto:connect@square-space.in?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

            // Open mail client with the generated link
            window.location.href = mailtoLink;

            // Optionally, navigate to another page
            await router.push('/');
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    };

    return (
        <Section classProp={`${signin.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                {/* Contact Form Section */}
                <section className={`${signin.content} ${signin.container}`} style={{ transition: 'all 0.3s ease-in-out' }}>
                    <div className={`${signin.copy}`} style={{ padding: '50px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', fontWeight: '700', color: '#2c3e50', letterSpacing: '1px', position: 'relative' }}>
                            Contact Us
                        </h2>
                        <form onSubmit={handleFormSubmit} style={{ maxWidth: '600px', margin: '0 auto' }} method='POST'>
                            {/* Name input */}
                            <div style={{ marginBottom: '30px' }}>
                                <label htmlFor='name' style={{ fontSize: '16px', color: '#34495e', marginBottom: '8px', display: 'block', transition: 'color 0.3s ease' }}>Name:</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '2px solid #ddd', fontSize: '16px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#2980b9'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                                />
                            </div>
                            {/* Email input */}
                            <div style={{ marginBottom: '30px' }}>
                                <label htmlFor='email' style={{ fontSize: '16px', color: '#34495e', marginBottom: '8px', display: 'block', transition: 'color 0.3s ease' }}>Email:</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '2px solid #ddd', fontSize: '16px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#2980b9'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                                />
                            </div>
                            {/* Message input */}
                            <div style={{ marginBottom: '40px' }}>
                                <label htmlFor='message' style={{ fontSize: '16px', color: '#34495e', marginBottom: '8px', display: 'block', transition: 'color 0.3s ease' }}>Message:</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '2px solid #ddd', fontSize: '16px', minHeight: '140px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = '#2980b9'}
                                    onBlur={(e) => e.currentTarget.style.borderColor = '#ddd'}
                                />
                            </div>
                            {/* Submit button */}
                            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: '#2980b9',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        padding: '14px 28px',
                                        fontSize: '18px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease, transform 0.2s ease',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1f6391'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
                                    onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(2px)'}
                                    onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    Send Message
                                </button>
                            </div>
                            {/* Privacy statement */}
                            <p style={{ textAlign: 'center', fontSize: '14px', color: '#7f8c8d', marginTop: '20px' }}>
                                I respect your privacy, no spam ever.
                            </p>
                        </form>
                    </div>
                </section>

                {/* Google Maps Section */}
                <section className={`${signin.content} ${signin.container}`} style={{ marginTop: '60px', transition: 'all 0.3s ease-in-out' }}>
                    <div className={`${signin.copy}`} style={{ padding: '50px', backgroundColor: '#f9f9f9', borderRadius: '16px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', fontWeight: '700', color: '#2c3e50', letterSpacing: '1px', position: 'relative' }}>
                            Our Location
                        </h2>
                        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '18px', color: '#7f8c8d', transition: 'color 0.3s ease' }}>
                            Square Space Architect, 2nd Floor, LM Tower, 206/207, Bhiwandi - Murbad Rd, Vishal Wadi, Bhadwad Naka, Sonale Village, Bhiwandi, Maharashtra 421302
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.37508903806452!2d73.07419896125792!3d19.28230425559657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd57115a183f%3A0x6c3b012d623e9c8e!2sSquare%20Space%20Architect!5e0!3m2!1sen!2sin!4v1725654505161!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                style={{ border: '0', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </Container>
        </Section>
    );
}
