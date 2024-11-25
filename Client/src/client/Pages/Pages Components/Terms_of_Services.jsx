import React from "react";

const TermsOfServices = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Page Header */}
      <div className=" py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-yellow-400">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto">
            Welcome to Festify! By using our platform for event creation and
            management, you agree to comply with these terms. Please read them
            carefully.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300">
              By accessing or using Festify, you agree to be bound by these
              Terms of Service and our Privacy Policy. If you do not agree with
              any part of these terms, please discontinue use of our platform.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              2. User Responsibilities
            </h2>
            <p className="text-gray-300 mb-4">
              As a user of Festify, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                Provide accurate and up-to-date information during registration
                and event creation.
              </li>
              <li>
                Ensure all content uploaded or shared complies with applicable
                laws and does not infringe on any third-party rights.
              </li>
              <li>
                Use the platform solely for legitimate event creation and
                management purposes.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              3. Event Content and Responsibility
            </h2>
            <p className="text-gray-300 mb-6">
              You retain ownership of all content you submit to Festify,
              including event details, images, and descriptions. However, by
              using the platform, you grant Festify a non-exclusive, worldwide
              license to use, display, and distribute your content for the
              purpose of providing our services.
            </p>
            <p className="text-gray-300">
              You are solely responsible for the accuracy and legality of your
              event content. Festify reserves the right to remove any content
              deemed inappropriate or in violation of these terms.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              4. Prohibited Activities
            </h2>
            <p className="text-gray-300 mb-4">
              Users are strictly prohibited from engaging in the following
              activities:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Uploading or sharing illegal, fraudulent, or harmful content.</li>
              <li>
                Attempting to breach the security of the platform or other
                users' accounts.
              </li>
              <li>
                Using the platform for unauthorized commercial purposes or spam.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-300 mb-4">
              Festify is not liable for any damages resulting from your use of
              the platform, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Errors in event details or scheduling.</li>
              <li>Loss of data or unauthorized access to your account.</li>
              <li>
                Disruptions caused by technical or external factors beyond our
                control.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              6. Termination of Service
            </h2>
            <p className="text-gray-300">
              Festify reserves the right to suspend or terminate your account if
              you violate these terms or engage in activities that harm the
              platform or its users. You may also terminate your account at any
              time by contacting us.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-gray-300">
              Festify may update these Terms of Service from time to time to
              reflect changes in our services or legal requirements. Continued
              use of the platform after updates constitutes acceptance of the
              revised terms.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
              8. Support and Contact
            </h2>
            <p className="text-gray-300 mb-4">
              For questions, concerns, or support, please contact us at:
            </p>
            <p className="text-gray-300 font-medium">
              <a
                href="mailto:aditya895754@gmail.com"
                className="text-teal-400 underline"
              >
                aditya895754@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServices;
