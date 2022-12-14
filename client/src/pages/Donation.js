import React from "react";
import Stripe from "../components/Stripe";

export default function Donation() {
    return (
        <div className="flex flex-col">
        <h1 className="text-3xl m-5">How much do you want to donate?</h1>
        <div>
          <form className="flex flex-col gap-4 ml-6 mb-2 border-gray-200 rounded-lg">
              <div>
                <div className="m-2 block">
                  <label
                    htmlFor="donation"
                    value="Donation amount"
                  />
                </div>
                <input className="rounded-md border-gray-200"
                  id="donation"
                  type="number"
                  name="price" 
                  placeholder="$00.00"
                  required={true}
                />
              </div>
    
                <div className="m-2">
                    < Stripe />
                </div>
            </form>
        </div>  
      </div>
    );
}

