import React,{useEffect,useRef} from 'react'

export default function PayPal() {
    const paypal = useRef()
    useEffect(() => {
        
        window.paypal.Buttons({
            createOrder:(data,actions,err)=>{
                return actions.order.create({
                    internt:"CAPTURE",
                    purchase_units:[
                        {
                            description:"cool looking table",
                            amount:{
                                currency_code:"ILS",
                                value:650.00
                            }
                        }
                    ]
                })
            },
            onApprove:async(data,actions)=>{
                const order = await actions.order.capture();
                console.log(order);
            },
            onError:(err)=>{
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
