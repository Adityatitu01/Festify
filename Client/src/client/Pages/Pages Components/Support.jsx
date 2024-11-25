import React from "react";
import BackGround from "../../components/ui/GridBG";

const Support = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <BackGround para="How Can We Assist You?" />

      {/* Support Center Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-teal-400 text-center mb-6">
          Support Center
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Need help? We're here for you. Explore the FAQ, contact us via email,
          or give us a call. Our team is dedicated to providing the support you
          need.
        </p>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 border border-teal-500 rounded-lg shadow-md bg-gray-800">
              <h3 className="text-xl font-medium text-teal-400 mb-2">
                Email Support
              </h3>
              <p className="text-gray-300 mb-4">
                For detailed inquiries or documentation-related questions, email
                us at:
              </p>
              <a
                href="mailto:aditya895754@gmail.com"
                className="text-yellow-400 font-semibold underline"
              >
                aditya895754@gmail.com
              </a>
            </div>
            <div className="p-6 border border-teal-500 rounded-lg shadow-md bg-gray-800">
              <h3 className="text-xl font-medium text-teal-400 mb-2">
                Call Support
              </h3>
              <p className="text-gray-300 mb-4">
                Need quick assistance? Call us on our support numbers:
              </p>
              <p className="font-semibold text-yellow-400">
                +91 8957545504 <br /> +91 8011101309
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section>
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 border border-teal-500 rounded-lg shadow-md bg-gray-800">
              <h3 className="text-lg font-medium text-teal-400 mb-2">
                How do I create an event on Festify?
              </h3>
              <p className="text-gray-300">
                To create an event, log in to your account, click on "Create
                Event," and fill in the necessary details, including the event
                name, date, location, and description.
              </p>
            </div>
            <div className="p-6 border border-teal-500 rounded-lg shadow-md bg-gray-800">
              <h3 className="text-lg font-medium text-teal-400 mb-2">
                Can I manage multiple events at once?
              </h3>
              <p className="text-gray-300">
                Yes, Festify allows you to create and manage multiple events
                simultaneously. You can view all your events in the "My Events"
                section.
              </p>
            </div>
            <div className="p-6 border border-teal-500 rounded-lg shadow-md bg-gray-800">
              <h3 className="text-lg font-medium text-teal-400 mb-2">
                How do I contact support if I face an issue?
              </h3>
              <p className="text-gray-300">
                You can reach out to us via the email or phone numbers listed
                above. We're happy to assist you with any problems you
                encounter.
              </p>
            </div>
            <div className="p-6 border border-teal-500 rounded-lg shadow-md bg-gray-800">
              <h3 className="text-lg font-medium text-teal-400 mb-2">
                What are the benefits of using Festify?
              </h3>
              <p className="text-gray-300">
                Festify simplifies event management with tools for event
                creation, volunteer coordination, and analytics. Plus, it's
                user-friendly and designed to save you time and effort.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Call to Action */}
      <div className=" py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-500 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-200 text-lg mb-6">
            Our team is here to help. Feel free to reach out at any time. We're
            committed to ensuring your Festify experience is seamless and
            enjoyable.
          </p>
          <a
            href="mailto:aditya895754@gmail.com"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
