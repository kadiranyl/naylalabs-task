import axios from 'axios'
import { toastError, toastSuccess } from 'lib/Toastify';

export const sendPayment = async (e: any, plan: String, payment: Payment, email: String, setPlan: Function, setPayment: Function, setEmail: Function) => {
    e.preventDefault()

    try {
        const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'payment', { 
            plan,
            cardNumber: payment.cardNumber,
            cvc: payment.cvc,
            email
        })

        setPlan("")
        setPayment({
            cardNumber: String,
            cvc: Number
        })
        setEmail("")

        toastSuccess("Payment is successfull!")
    } catch(e) {
        toastError("Something went wrong, please try again.")
        console.log(e);
    }
}

interface Payment {
    cardNumber: String,
    cvc: Number
}