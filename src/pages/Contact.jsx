

const Contact = () => {
  return (
    <div className="p-6 sm:p-8 font-mono w-full px-8 md:px-[9%] max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-2xl font-bold">CONTACT <span className="text-gray-500">US</span></h1>
        <hr className="w-20 mx-auto mt-2 border-gray-400"/>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start mb-12 space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Contact Form */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-700">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <div>
              <button 
              
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-[15px] font-medium hover:bg-gray-700 transition duration-300">
              Send Message
              </button>
            </div>
          </form>
        </div>

       
        <div className="lg:w-1/2 w-full lg:pl-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the contact information below.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> support@selfbook.com
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +123-456-7890
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong> 033 Ebook Store, Bhopal, 462022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
