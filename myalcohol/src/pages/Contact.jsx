import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="px-4 md:px-20 py-12 font-sans">
      {/* Heading and Paragraph */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">DROP US A LINE</h2>
        <p className="text-xl text-gray-700">
          Have a question or comment? Use the form below to send us a message and our team will get back to you ASAP. <br />
          Or reach us at <strong>+91 9667204722</strong> (10:00 AM to 7:00 PM, Monday to Sunday)
        </p>
      </div>

      {/* Two-Column Layout */}
     <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 max-w-6xl mx-auto">

        {/* Left Column - Form */}
        <div>
            <h1 className='text-3xl px-2 py-1'>Get in Touch</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              name="comment"
              placeholder="Comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded resize-none h-28 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 font-semibold"
            >
              SEND MESSAGE
            </button>
          </form>
         
        </div>

        {/* Right Column - Contact Info */}
        <div className=" text-gray-800 space-y-6">
          <div>
            <h4 className="text-2xl font-semibold">Marketed By:</h4>
            <p className='text-lg'>
              Jack Daniel First Floor, Plot 17, Pitam pura III Rd, Phase III, ,<br />
              Rohini east metro, Delhi, 110086, Delhi
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Manufactured By:</h4>
            <p className='text-lg'>
              Dani Daniel Pvt. Ltd<br />
              Ground Floor, Plot 417, Udyog Vihar III Rd, Phase III, Udyog Vihar,<br />
              Sector 20, Gurugram, 122008, Haryana
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Email:</h4>
            <a href="mailto:abcd@gmail.com" className="'text-lg' underline">
              abcd@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-2xl font-semibold">Contact Number:</h4>
            <p className='text-lg'>Call: +91 9250068676 (Mon-Sun 9:00 AM - 9:00 PM)</p>
            <p className='text-lg'>WhatsApp: +91 9667204722 (Mon-Sun 9:00 AM - 9:00 PM)</p>
          </div>
        </div>
      </div>

      
     
    </div>
  );
};

export default Contact;
