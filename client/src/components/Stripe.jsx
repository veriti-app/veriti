import React from "react";
// import CardCheckOut from "./CardCheckOut";

const Stripe = () => (
  <section>
    <form action="/create-checkout-session" method="POST">
      <button type="submit" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
        Checkout
      </button>
      
      <div className="py-6">
        {/* <CardCheckOut /> */}
    </div>
    </form>
  </section>
);

export default Stripe; 