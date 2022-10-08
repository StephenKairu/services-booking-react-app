import React, { useEffect, useRef } from "react";

export default function Paypal() {

    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: ( actions) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "30min Shave",
                            amount: {
                                value: 10.00
                            }
                        }
                    ]
                })
            }, 
            onApprove: async ( actions) => {
                const order = await actions.order.capture()
                console.log(order);
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [paypal])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}