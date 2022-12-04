import axios from 'axios'
import { toastError } from 'lib/Toastify';

export const sendPayment = async (e: any, plan: String, payment: Payment, email: String, setPlan: Function, setPayment: Function, setEmail: Function, setShowSuccessfulPopup: Function, setShowUnsuccessfulPopup: Function, setResetCvc: Function) => {
    e.preventDefault()    

    if (plan && payment.cardNumber && payment.cvc && email && payment.cvc >= 100) {
        console.log("Plan: " + plan);
        console.log("Card Number: " + payment.cardNumber);
        console.log("CVC: " + payment.cvc);
        console.log("E-mail: " + email);

        setShowSuccessfulPopup(true)
        setPlan()
        setPayment({
            cardNumber: "",
            cvc: NaN
        })
        setEmail()
        setResetCvc(true)

        const form: any = document.getElementById("send-payment-form")

        form?.reset()

        

         // The scenario that has to be
        
        // try {
        //     const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'payment', { 
        //         plan,
        //         cardNumber: payment.cardNumber,
        //         cvc: payment.cvc,
        //         email
        //     })
        
        //     setShowSuccessfulPopup(true)
        //     setPlan()
        //     setPayment({
        //         cardNumber: "",
        //         cvc: NaN
        //     })
        //     setEmail()
        //     setResetCvc(true)

        //     const form: any = document.getElementById("send-payment-form")

        //     form?.reset()

        // } catch(e) {
        //     setShowUnsuccessfulPopup(true)
        //     console.log(e);
        // }
        
    } else if (!plan) {
        toastError("Please pick a plan!")
    } else if (!payment.cardNumber) {
        toastError("Please pick a payment method!")
    } else if (!payment.cvc || payment.cvc <= 100) {
        toastError("Please write your CVC!")
    } else if (!email) {
        toastError("Please enter your e-mail!")
    }
}

interface Payment {
    cardNumber: String,
    cvc: Number
}