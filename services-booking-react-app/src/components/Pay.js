import React, { useState } from "react";
import Paypal from "./Paypal";

export default function Pay () {
    const [checkout, setCheckout] = useState(false);

    return (
        <div className="pay">
            {checkout ? (
                <Paypal />
            ) : (
                <button className="buttn"
                onClick={() => {
                    setCheckout(true);
                }}
                >Make Payment</button>
            )}
        </div>
    );
}