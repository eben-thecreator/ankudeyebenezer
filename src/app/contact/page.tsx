import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="overflow-hidden py-20">
      <div className="container-custom max-w-screen-xl">
        {/* Contact Header */}
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
            Get in touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            We'd love to hear from you. Whether you have a project in mind, a question about our services, or just want to say hello, fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Form - Takes up 2/3 of the space on desktop */}
          <div className="md:col-span-2">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1"
                />
                <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                  I agree to the <Link href="/legal" className="underline hover:text-black">privacy policy</Link> and consent to being contacted regarding my request.
                </label>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-sm hover:bg-gray-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information - Takes up 1/3 of the space on desktop */}
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="block text-sm text-gray-500 mb-1">Email</span>
                  <a href="mailto:hello@luca-studio.com" className="hover:text-black transition-colors">
                    hello@luca-studio.com
                  </a>
                </p>
                <p>
                  <span className="block text-sm text-gray-500 mb-1">Phone</span>
                  <a href="tel:+441234567890" className="hover:text-black transition-colors">
                    +44 123 456 7890
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Office Location</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  123 Creative Street<br />
                  London, UK<br />
                  SW1A 1AA
                </p>
                <p className="text-sm">
                  Monday to Friday<br />
                  9:00 AM — 6:00 PM
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/ena.supply/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/ena_supply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  X.com
                </a>
                <a
                  href="https://www.threads.net/@ena.supply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Threads
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
