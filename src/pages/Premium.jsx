import axios from "axios";
import { BASE_URL } from "../utils/data";
import { useEffect, useState } from "react";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);

  //make an api call for verifed payments
  const verifyPremiumUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/premium/verify`, {
        withCredentials: true,
      });

      if (res.data.isPremium) {
        setIsUserPremium(true);
      }
    } catch (err) {
      console.error("Failed to verify premium status:", err);
    }
  };

  //whenver page loads udpate if already a premium user

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const handleBuy = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true },
    );

    const { amount, keyId, currency, notes, orderId } = order.data;
    // Open Razorpay Checkout
    const options = {
      key: keyId, // Replace with your Razorpay key_id
      amount, // Amount is in currency subunits.
      currency,
      name: "PairUpDev",
      description: "Upgrade Account",
      order_id: orderId, // This is the order_id created in the backend
      prefill: {
        name: `${notes.firstName} ${notes.lastName}`,
        email: notes.emailID,
      },
      theme: {
        color: "#F37254",
      },

      //handler function for payment captured
      //when the dialoug box is closed then the handler fun will called on sucess
      handler: async function (res) {
        try {
          await axios.post(BASE_URL + "/payment/verify", res, {
            withCredentials: true,
          });

          setIsUserPremium(true);

          alert("🎉 Welcome to PairUpDev Premium!");
        } catch (err) {
          console.error(err);
          alert("Payment verification failed.");
        }
      },
    };
    //it should open the razarpay dialog box
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (isUserPremium) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="card bg-success text-success-content shadow-xl w-96">
          <div className="card-body text-center">
            <h2 className="text-3xl font-bold">🎉 You're a Premium Member</h2>

            <p className="mt-2">Thank you for supporting PairUpDev.</p>

            <p>Enjoy all premium features 🚀</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">
          Upgrade Your Developer Journey 🚀
        </h1>

        <p className="text-base-content/70 mt-4 text-lg">
          Unlock premium networking features and connect with more developers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Premium */}
        <div className="card bg-base-200 shadow-2xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title text-3xl">⭐ Premium</h2>

            <p className="text-4xl font-bold mt-2">
              499Rs
              <span className="text-lg font-normal"> / month</span>
            </p>

            <div className="divider"></div>

            <ul className="space-y-4 text-lg">
              <li>✅ 100 Connection Requests / day</li>

              <li>✅ Premium Profile Badge</li>

              <li>✅ Unlimited Profile Views</li>

              <li>✅ Unlimited Developer Search</li>

              <li>✅ Priority Customer Support</li>

              <li>✅ Early Access to New Features</li>
            </ul>

            <div className="card-actions mt-8">
              <button
                className="btn btn-primary w-full"
                onClick={() => handleBuy("Premium")}
              >
                Buy Premium
              </button>
            </div>
          </div>
        </div>

        {/* Premium Pro */}
        <div className="card bg-primary text-primary-content shadow-2xl border-2 border-primary relative">
          <div className="absolute right-5 top-5 badge badge-warning badge-lg">
            MOST POPULAR
          </div>

          <div className="card-body">
            <h2 className="card-title text-3xl">🚀 Premium Pro</h2>

            <p className="text-4xl font-bold mt-2">
              999Rs
              <span className="text-lg font-normal"> / month</span>
            </p>

            <div className="divider divider-neutral"></div>

            <ul className="space-y-4 text-lg">
              <li>✅ Unlimited Connection Requests</li>

              <li>✅ Premium Pro Badge</li>

              <li>✅ Unlimited Messaging</li>

              <li>✅ Unlimited Profile Views</li>

              <li>✅ Priority in Feed Recommendations</li>

              <li>✅ See Who Viewed Your Profile</li>

              <li>✅ AI Profile Optimization</li>

              <li>✅ Early Access to Premium Features</li>

              <li>✅ Priority Support</li>
            </ul>

            <div className="card-actions mt-8">
              <button
                className="btn btn-warning w-full text-black"
                onClick={() => handleBuy("PremiumPro")}
              >
                Buy Premium Pro
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-12 text-base-content/70">
        Secure payments powered by{" "}
        <span className="font-semibold">Razorpay</span>. Cancel your
        subscription anytime.
      </div>
    </div>
  );
};

export default Premium;
