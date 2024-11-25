import React from "react";

const Terms_Of_Services = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Welcome to Festify! By using our platform for event creation and management, you agree to comply with these terms of service. Please read them carefully.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing or using Festify, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-6">
              As a user of Festify, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide accurate and up-to-date information during registration and event creation.</li>
              <li>Ensure all content uploaded or shared complies with applicable laws and does not infringe on any third-party rights.</li>
              <li>Use the platform solely for legitimate event creation and management purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Event Content and Responsibility
            </h2>
            <p className="text-gray-700 mb-6">
              You retain ownership of all content you submit to Festify, including event details, images, and descriptions. However, by using the platform, you grant Festify a non-exclusive, worldwide license to use, display, and distribute your content for the purpose of providing our services.
            </p>
            <p className="text-gray-700">
              You are solely responsible for the accuracy and legality of your event content. Festify reserves the right to remove any content deemed inappropriate or in violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Prohibited Activities
            </h2>
            <p className="text-gray-700 mb-6">
              Users are strictly prohibited from engaging in the following activities:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Uploading or sharing illegal, fraudulent, or harmful content.</li>
              <li>Attempting to breach the security of the platform or other users' accounts.</li>
              <li>Using the platform for unauthorized commercial purposes or spam.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              Festify is not liable for any damages resulting from your use of the platform, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Errors in event details or scheduling.</li>
              <li>Loss of data or unauthorized access to your account.</li>
              <li>Disruptions caused by technical or external factors beyond our control.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Termination of Service
            </h2>
            <p className="text-gray-700">
              Festify reserves the right to suspend or terminate your account if you violate these terms or engage in activities that harm the platform or its users. You may also terminate your account at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-gray-700">
              Festify may update these Terms of Service from time to time to reflect changes in our services or legal requirements. Continued use of the platform after updates constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Support and Contact
            </h2>
            <p className="text-gray-700 mb-6">
              For questions, concerns, or support, please contact us at:
            </p>
            <p className="text-gray-700 font-medium">
              <a href="mailto:aditya895754@gmail.com" className="text-blue-600 underline">
                aditya895754@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms_Of_Services;
