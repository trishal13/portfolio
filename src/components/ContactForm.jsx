// make it work using smtp and add toast
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleSubmit = (e) => {
    // e.preventDefault();
    // Handle form submission logic here
    // console.log(formData);
    alert(JSON.stringify(formData, null, 2));
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
            <div className="relative">
            <input
                type="text"
                name="name"
                id="name"
                value={formData?.name}
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
                    type="text"
                    name="email"
                    id="email"
                    value={formData?.email}
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
                value={formData?.description}
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
          className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 
                     text-white rounded-lg transition-colors duration-200 flex items-center 
                     justify-center gap-2 group"
        >
          Send Message
        <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;