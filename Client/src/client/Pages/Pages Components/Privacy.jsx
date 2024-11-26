import React from "react";

const Privacy = () => {
  return (
    <div className="w-full bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-extrabold text-yellow-400 text-center mb-10">
          Privacy Policy
        </h1>
        <p className="text-lg text-teal-400 text-center mb-16 max-w-3xl mx-auto">
          This Privacy Policy outlines how Festify collects, uses, and protects
          your information when you use our platform for event creation and
          management.
        </p>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
              1. Information We Collect
            </h2>
            <p className="text-gray-300 mb-6">
              Festify collects information to provide a seamless user
              experience. The types of data we gather include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-teal-400">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                contact number, and similar details.
              </li>
              <li>
                <strong>Event Details:</strong> Names, descriptions, schedules,
                and other event-related data.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type, and
                device information to improve functionality.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-6">
              We use your information to deliver and improve our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-teal-400">
              <li>To enable event creation, management, and participation.</li>
              <li>To provide support and resolve technical issues.</li>
              <li>To analyze and improve platform functionality.</li>
              <li>To send updates, notifications, and service-related alerts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
              3. Protecting Your Data
            </h2>
            <p className="text-gray-300 mb-6">
              Festify employs industry-standard security measures to safeguard
              your data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-teal-400">
              <li>Encryption of sensitive data during transmission.</li>
              <li>Regular security audits and vulnerability assessments.</li>
              <li>Access control measures to restrict unauthorized access.</li>
            </ul>
            <p className="text-gray-300 mt-4">
              While we strive to ensure the highest level of data security, we
              encourage users to safeguard their login credentials.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
              4. Sharing Your Information
            </h2>
            <p className="text-gray-300 mb-6">
              Festify does not sell your personal data. Your information is only
              shared under these circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-teal-400">
              <li>
                With trusted partners or service providers to enhance platform
                performance.
              </li>
              <li>To comply with legal requirements or court orders.</li>
              <li>
                With your explicit consent for specific integrations or
                partnerships.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
              5. Your Rights
            </h2>
            <p className="text-gray-300 mb-6">
              You have the right to access, update, or delete your data. To
              exercise your rights, please contact us at:
            </p>
            <p className="text-teal-400 font-medium">
              <a href="mailto:aditya895754@gmail.com" className="underline">
                aditya895754@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-300">
              Festify may update this Privacy Policy from time to time to
              reflect changes in our practices or comply with legal
              requirements. Please revisit this page periodically to stay
              informed.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
              7. Contact Us
            </h2>
            <p className="text-gray-300 mb-4">
              For questions, concerns, or requests regarding this Privacy
              Policy, please contact us at:
            </p>
            <p className="text-teal-400 font-medium">
              <a href="mailto:aditya895754@gmail.com" className="underline">
                aditya895754@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
