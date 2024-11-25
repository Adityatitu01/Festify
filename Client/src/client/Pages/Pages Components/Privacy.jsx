import React from "react";

const Privacy = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          This Privacy Policy explains how Festify collects, uses, and protects your information when you use our platform for event creation and management.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 mb-6">
              Festify collects the following types of information to provide a seamless experience:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Personal details such as your name, email address, and contact number.</li>
              <li>Details of the events you create or manage, including event names, descriptions, and schedules.</li>
              <li>Technical data like IP address, browser type, and device information to enhance platform functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-6">
              Your information is used to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Enable event creation and management features.</li>
              <li>Provide support and resolve technical issues.</li>
              <li>Improve our platform through data-driven insights.</li>
              <li>Send updates about features, security, or service changes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Protecting Your Data
            </h2>
            <p className="text-gray-700 mb-6">
              We take your data security seriously and implement best practices, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Encryption of sensitive information during transmission.</li>
              <li>Secure data storage and access controls.</li>
              <li>Regular audits to identify and mitigate vulnerabilities.</li>
            </ul>
            <p className="text-gray-700">
              While we strive to protect your data, no system is entirely foolproof. We encourage you to safeguard your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Sharing Your Information
            </h2>
            <p className="text-gray-700 mb-6">
              Festify does not sell your personal information. Your data is shared only in the following cases:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With trusted service providers to support platform functionality.</li>
              <li>To comply with legal obligations or enforce our terms of service.</li>
              <li>With your explicit consent for specific integrations or collaborations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-700 mb-6">
              You have the right to access, modify, or delete your data at any time. If you wish to exercise these rights, please contact us at:
            </p>
            <p className="text-gray-700 font-medium">
              <a href="mailto:aditya895754@gmail.com" className="text-blue-600 underline">
                aditya895754@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              Festify may update this Privacy Policy periodically to reflect changes in our services or legal requirements. We recommend reviewing this page regularly for updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Contact Us
            </h2>
            <p className="text-gray-700">
              For questions or concerns about this Privacy Policy, please reach out to us at:
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

export default Privacy;
