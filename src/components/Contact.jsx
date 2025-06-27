import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
