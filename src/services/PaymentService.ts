import axios from 'axios'
import { toastError, toastSuccess } from 'lib/Toastify';

export const sendPayment = async (e: any, plan: String, payment: Payment, email: String, setPlan: Function, setPayment: Function, setEmail: Function, setShowPopup: Function, setResetCvc: Function) => {
    e.preventDefault()   
    
    console.log(plan);
    

    if (plan && payment.cardNumber && payment.cvc && email && payment.cvc >= 100) {
        setShowPopup(true)
        setPlan()
        setPayment({
            cardNumber: "",
            cvc: NaN
        })
        setEmail()
        setResetCvc(true)

        const form: any = document.getElementById("send-payment-form")

        form?.reset()
    } else if (!plan) {
        toastError("Please pick a plan!")
    } else if (!payment.cardNumber) {
        toastError("Please pick a payment method!")
    } else if (!payment.cvc || payment.cvc <= 100) {
        toastError("Please write your CVC!")
    } else if (!email) {
        toastError("Please enter your e-mail!")
    }

    // The scenario that has to be
    
    // try {
    //     const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'payment', { 
    //         plan,
    //         cardNumber: payment.cardNumber,
    //         cvc: payment.cvc,
    //         email
    //     })

    //     setShowPopup(true)
    //     setPlan("")
    //     setPayment({
    //         cardNumber: String,
    //         cvc: Number
    //     })
    //     setEmail("")

    //     toastSuccess("Payment is successfull!")
    // } catch(e) {
    //     toastError("Something went wrong, please try again.")
    //     console.log(e);
    // }
}

interface Payment {
    cardNumber: String,
    cvc: Number
}