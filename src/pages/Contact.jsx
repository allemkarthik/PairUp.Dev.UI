

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">
        Contact Us
      </h1>

      <p className="mb-4">
        We'd love to hear from you.
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">Email</h2>
          <p>support@pairup.dev</p>
        </div>

        <div>
          <h2 className="font-semibold">Developer</h2>
          <p>Allem Sai Karthik</p>
        </div>

        <div>
          <h2 className="font-semibold">Purpose</h2>
          <p>
            Questions, feedback, bug reports, or collaboration inquiries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;