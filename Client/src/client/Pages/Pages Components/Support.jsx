import React from "react";
import BackGround from "../../components/ui/GridBG";

const Support = () => {
  return (
    <div>
      <BackGround para="What can we help you with?" />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          Support Center
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          We're here to assist you with any questions or concerns about Festify's event creation and management services. Reach out to us via email or phone, or explore the FAQs below for quick answers.
        </p>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Email Support
              </h3>
              <p className="text-gray-700 mb-4">
                For detailed inquiries or documentation-related questions, email us at:
              </p>
              <a
                href="mailto:aditya895754@gmail.com"
                className="text-blue-600 font-medium underline"
              >
                aditya895754@gmail.com
              </a>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Call Support
              </h3>
              <p className="text-gray-700 mb-4">
                Need quick assistance? Call us on our support numbers:
              </p>
              <p className="font-medium text-gray-800">
                +91 8957545504 <br /> +91 8011101309
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How do I create an event on Festify?
              </h3>
              <p className="text-gray-700">
                To create an event, log in to your account, click on "Create Event," and fill in the necessary details, including event name, date, location, and description.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Can I manage multiple events at once?
              </h3>
              <p className="text-gray-700">
                Yes, Festify allows you to create and manage multiple events simultaneously. You can view all your events in the "My Events" section.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How do I contact support if I face an issue?
              </h3>
              <p className="text-gray-700">
                You can reach out to us via the email or phone numbers listed above. We're happy to assist you with any problems you encounter.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
