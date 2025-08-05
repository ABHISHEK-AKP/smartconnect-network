'use client';

import React, { useRef } from 'react';
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_da4xw6x',
        'template_opieehj',
        form.current,
        'OnzEMIh-lhOoPMLUM'
      )
      .then(
        () => {
          form.current?.reset();
          alert('Email sent successfully!');
        },
        (error) => {
          console.error('Email error:', error.text);
        }
      );
  };

  return (
    <div id="contact">
      <section className="bg-white dark:bg-black w-full flex items-center justify-center md:p-10 xl:p-30 lg:p-20 p-5">
        <div className="bg-white dark:bg-black p-10 flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left Side */}
          <div className="flex-1 flex flex-col justify-end space-y-8">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-400 text-left">Find us</h2>

            <div className="flex items-start space-x-4 p-4 bg-gray-50  dark:bg-gray-900 rounded-xl">
              <div className="text-white dark:text-gray-400 text-xl w-12 h-12 flex items-center justify-center rounded-full bg-[#002ECC]">
                <FaPhone />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg dark:text-gray-400">Call Us</h4>
                <p className="text-gray-700 dark:text-gray-500 md:text-md text-sm">+1587-573-0100, +1647-936-8455</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <div className="text-white dark:text-gray-400 text-xl w-12 h-12 flex items-center justify-center rounded-full bg-[#002ECC]">
                <FaEnvelope />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg dark:text-gray-400">Email Now</h4>
                <p className="text-gray-700 dark:text-gray-500 md:text-md text-sm">info@scnltd.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <div className="text-white dark:text-gray-400 text-xl w-12 h-12 flex items-center justify-center rounded-full bg-[#002ECC]">
                <FaLocationDot />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg dark:text-gray-400">Locations</h4>
                <p className="text-gray-700 dark:text-gray-500 md:text-md text-sm">
                  GTA (ON) | Calgary (AB)
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col justify-between space-y-2 text-left">
            <p className="text-gray-500 md:text-md text-sm">Contact Info</p>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-500 mt-0">Keep In Touch</h2>
            <p className="text-gray-600 dark:text-gray-500 md:text-md text-sm">
              We prioritize responding to your inquiries promptly to ensure you receive the
              assistance you need in a timely manner
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg shadow-md md:text-md text-sm mt-4"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg shadow-md md:text-md text-sm"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg shadow-md md:text-md text-sm"
              ></textarea>
              <button
                type="submit"
  className="bg-[#002ECC] hover:bg-blue-600 text-white dark:text-gray-400 px-4 py-2 rounded-lg shadow-md transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
