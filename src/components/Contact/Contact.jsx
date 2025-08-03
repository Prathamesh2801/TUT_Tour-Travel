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

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phoneNumber = '8623940232';
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(url, '_blank');
  };

  return (
    <section className="bg-gray-900 text-white py-16 sm:py-24 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Map Section */}
          <div className="w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.300098164905!2d77.22548221508366!3d28.612673282422193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e4a0893e69%3A0x58036f00e6cf7b84!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Form Section */}
          <div className="bg-blue-200 p-6 sm:p-8 lg:p-10 rounded-2xl">
            <form
              onSubmit={handleSubmit}
              className="bg-blue-100 p-6 sm:p-8 rounded-xl shadow-lg space-y-4"
            >
              <h2 className="text-2xl font-semibold text-indigo-900 text-center mb-4">
                Drop A Message
              </h2>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 h-14 px-4 rounded-xl"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 h-14 px-4 rounded-xl"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-xl"
                rows="4"
              />

              <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-6">
                <button
                  type="submit"
                  className="w-full sm:w-1/2 h-14 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  Send via WhatsApp
                </button>

                <button
                  type="button"
                  className="w-full sm:w-1/2 h-14 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
                  onClick={() => alert('Registration functionality coming soon!')}
                >
                  Registration
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
