import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">
        About PairUp.dev
      </h1>

      <p className="text-lg mb-6">
        PairUp.dev is a developer networking platform designed to help
        developers connect, collaborate, and grow together.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Our Mission
      </h2>

      <p className="mb-4">
        We believe great projects happen when developers find the right
        people to build with. PairUp.dev helps developers discover
        potential collaborators based on skills, interests, and goals.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        What You Can Do
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Create your developer profile.</li>
        <li>Showcase your skills and interests.</li>
        <li>Connect with other developers.</li>
        <li>Build projects together.</li>
        <li>Grow your professional network.</li>
      </ul>
    </div>
  );
};

export default About;