import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // ✅ Fixed string interpolation using backticks
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = '8623940232'; // <-- Replace with your number
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(url, '_blank');
  };

  return (
<section 
 className="bg-gradient-to-r from-blue-950 via-purple-600 to-purple-400 text-white py-24 text-center">

    <section className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {/* Map Section */}
          <div className="lg:mb-0 mb-10 z-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <div className="w-full h-[700px] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.300098164905!2d77.22548221508366!3d28.612673282422193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e4a0893e69%3A0x58036f00e6cf7b84!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-blue-200 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl z-20">
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto p-6 h-[100%] bg-blue-500 flex flex-col justify-around  rounded-xl shadow-lg space-y-4"
            >
              <h2 className="text-xl font-semibold text-indigo-900 text-center">
                Drop A Message
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border h-[60px] p-2 rounded-xl"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border h-[60px] p-2 rounded-xl"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border h-[60px] p-2 rounded-xl"
                rows="4"
              />

              <button
                type="submit"
                className="w-full h-[60px] bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}
