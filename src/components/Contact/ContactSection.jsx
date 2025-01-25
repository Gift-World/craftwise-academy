import { useState } from 'react';
import Footer from '../Footer/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage form errors (e.g., missing fields)
  const [formError, setFormError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill out all fields.');
      return;
    }

    // Construct the mailto link
    const mailtoLink = `mailto:info@craftwiseacademy.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage:%0A${formData.message}`;

    // Open the email client with the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#2A1011] to-orange-900 py-16">
        <section id="contact" className="bg-gradient-to-br from-secondary via-secondary to-primary overflow-hidden py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white ">Contact Us</h2>
              <p className="text-white">Get in touch with the CraftWise Academy team</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-900 p-6 rounded-lg shadow-md">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {formError && (
                    <div className="text-red-500 text-center mb-4">
                      <p>{formError}</p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-red py-2 px-4 rounded-md hover:bg-secondary transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-orange-900 p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>

                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-white">Nairobi, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaPhone className="text-primary text-xl mt-1" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-white">+254 715 208 322</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaEnvelope className="text-primary text-xl mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-white">INFO@CRAFTWISEACADEMY.COM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
