import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    }).format(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData?.name,
        from_email: formData?.email,
        message: formData?.description,
        to_name: "Trishal Makhija",
        submit_date: formatDate(new Date()),
        current_year: new Date().getFullYear(),
      };
      
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', description: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 px-4">
      <Toaster position="bottom-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                      placeholder-transparent peer"
              placeholder="Name"
            />
            <label
              htmlFor="name"
              className="absolute left-4 -top-2.5 bg-[#0B1121] px-1 text-sm text-gray-400
                      transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                      peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                      peer-focus:text-red-500"
            >
              Name
            </label>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                      placeholder-transparent peer"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-2.5 bg-[#0B1121] px-1 text-sm text-gray-400
                      transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                      peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                      peer-focus:text-red-500"
            >
              Email
            </label>
          </div>
        </div>

        {/* Description Textarea */}
        <div className="relative">
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                    placeholder-transparent peer resize-none"
            placeholder="Description"
          />
          <label
            htmlFor="description"
            className="absolute left-4 -top-2.5 bg-[#0B1121] px-1 text-sm text-gray-400
                    transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                    peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm 
                    peer-focus:text-red-500"
          >
            Description
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 
                   text-white rounded-lg transition-colors duration-200 flex items-center 
                   justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;