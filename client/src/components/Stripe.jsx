import React, { useState } from "react";
import { json } from "react-router-dom";
import CardNoCTA from "./CardNoCTA";

const Stripe = () => {
  const [amount, setAmount] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({ amount: amount }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section>
      <form>
        <input
          type="number"
          onChange={(event) => setAmount(event.target.value)}
        ></input>
        <button
          onClick={handleSubmit}
          type="submit"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Checkout
        </button>

        <div className="py-6">
          <CardNoCTA />
          <div>
            <section>
              <div className="product">
                <img
                  src="https://i.imgur.com/EHyR2nP.png"
                  alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                  <h3>Stubborn Attachments</h3>
                  <h5>$20.00</h5>
                </div>
              </div>
              <form action="/create-checkout-session" method="POST">
                <button type="submit">Checkout</button>
              </form>
            </section>
            {/* <section>
              <p>{message}</p>
            </section> */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Stripe;
