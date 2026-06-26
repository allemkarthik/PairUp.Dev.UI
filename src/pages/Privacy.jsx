import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">
        Privacy Policy
      </h1>

      <p className="mb-4">
        PairUp.dev values your privacy and is committed to protecting
        your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Information We Collect
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Name and profile information.</li>
        <li>Email address.</li>
        <li>Skills and interests.</li>
        <li>Profile photo.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        How We Use Information
      </h2>

      <p>
        Your information is used to create your profile, improve the
        platform, and help you connect with other developers.
      </p>
    </div>
  );
};

export default Privacy;