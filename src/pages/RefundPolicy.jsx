const RefundPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-6 text-gray-600">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <div className="space-y-6 text-base leading-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            1. Subscription Payments
          </h2>
          <p>
            PairUp.dev offers premium subscription plans that provide access to
            additional features. Payments are processed securely through our
            payment partner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            2. Refund Eligibility
          </h2>
          <p>
            Refund requests may be considered within <strong>7 days</strong> of
            the original purchase if you experience a technical issue that
            prevents you from using the premium features and we are unable to
            resolve the issue.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            3. Non-Refundable Situations
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Change of mind after purchasing.</li>
            <li>Partial use of a subscription.</li>
            <li>Account suspension due to violation of our Terms of Service.</li>
            <li>Failure to cancel a subscription before renewal (if applicable).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            4. How to Request a Refund
          </h2>

          <p>
            To request a refund, contact our support team with:
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Your registered email address</li>
            <li>Transaction ID</li>
            <li>Reason for the refund request</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            5. Processing Time
          </h2>

          <p>
            Approved refunds are generally processed within <strong>5–10 business days</strong>,
            depending on your payment provider or bank.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            6. Contact Us
          </h2>

          <p>
            For refund-related questions, please contact us through the Contact
            page available on PairUp.dev.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;