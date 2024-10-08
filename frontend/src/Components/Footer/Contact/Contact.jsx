import React, { useState } from 'react';
import { FaMap, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handler function to update form data when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler function to submit the form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend endpoint
      const response = await fetch('http://localhost:4000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      // Handle success message or errors
      // You can display a success message to the user here
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state or display error message to the user
    }
  };

  return (
    <div className='contact'>
      <section id='page-header' className='contact-header'>
        <h2>#let's talk</h2>
        <p>Leave a message. I love to hear from you</p>
      </section>

      <section id='contact-details' className='section-p1'>
        <div className='details'>
          <span>Get in Touch</span>
          <h2>Visit my agency location or contact me today</h2>
          <h3>Head Office</h3>
          <div>
            <ul>
              <li>
                <FaMap />
                <p>Eviva o, Downtown, Palava-421204, India</p>
              </li>
              <li>
                <FaEnvelope />
                <p>novaraj0102@gmail.com</p>
              </li>
              <li>
                <FaPhoneAlt />
                <p>+91 9372934245</p>
              </li>
              <li>
                <FaClock />
                <p>Monday to Saturday: 10:00a.m to 22:00p.m</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.781425180715!2d73.11313591393996!3d19.161042687039203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7950b5fdf7f31%3A0xa61f8940c348a447!2sCasa%20Eviva%20O!5e0!3m2!1sen!2sin!4v1672960739325!5m2!1sen!2sin'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='Google Map'
          ></iframe>
        </div>
      </section>

      <section id='form-details'>
        <form onSubmit={handleSubmit}>
          <span>Leave me a Message</span>
          <h2>I love to hear from you</h2>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='email'
            placeholder='E-mail'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name='message'
            cols='30'
            rows='10'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type='submit' className='normal'>
            Submit
          </button>
        </form>

        <div className='people'></div>
      </section>
    </div>
  );
};  

export default Contact;
