import { BsArrowRight } from 'react-icons/bs'
import { TbPlanet } from 'react-icons/tb'
import { GiPlanetConquest } from 'react-icons/gi'
import PlanLeftOneRightSchema from 'components/Schemas/PlanLeftOneRightSchema'
import TwoLeftOneRightSchema from 'components/Schemas/TwoLeftOneRightSchema'
import { useState } from 'react'
import TextBtn from './TextBtn'
import { sendPayment } from 'services/PaymentService'
import OrderSuccessful from './Popups/OrderSuccessful'
import OrderUnSuccessful from './Popups/OrderUnSuccessful'
import Radium from 'radium';
import { animations } from 'lib/Animations'

export default function UpgradePlan() {
  
  const plans = [
    {
      planIcon: <GiPlanetConquest size={34} />,
      planName: "Small Business",
      price: 8350
    },
    {
      planIcon: <TbPlanet size={32} />,
      planName: "Big Business",
      price: 12650
    }
  ]

  const payments = [
    {
      imageInfo: {
        src: "/mastercard.png",
        alt: "Mastercard"
      },
      cardName: "My card 1",
      cardNumber: "2344 xxxx xxxx 8880"
    },
    {
      imageInfo: {
        src: "/visa.png",
        alt: "Visa"
      },
      cardName: "My card 2",
      cardNumber: "8890 xxxx xxxx 1234"
    }
  ]

  const [showSuccessfulPopup, setShowSuccessfulPopup] = useState<Boolean>(false)
  const [showUnsuccessfulPopup, setShowUnsuccessfulPopup] = useState<Boolean>(false)
  const [plan, setPlan] = useState<String>("")
  const [payment, setPayment] = useState<any>({
    cardNumber: String,
    cvc: null
  })
  const [email, setEmail] = useState("")
  const [resetCvc, setResetCvc] = useState<Boolean>(false)  

  return (
    <>
    <Radium.StyleRoot>
    <form style={animations.fadeInDown} id="send-payment-form" className="box main-left" onSubmit={(e) => sendPayment(e, plan, payment, email, setPlan, setPayment, setEmail, setShowSuccessfulPopup, setShowUnsuccessfulPopup, setResetCvc )}>
        <h2>Upgrade your plan</h2>
        <p>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>

        {plans.map((plan, index) => (
        <PlanLeftOneRightSchema key={index} planIcon={plan.planIcon} planName={plan.planName} price={plan.price} setValue={setPlan} />
        ))}

        <h3 className='box-mt-high'>Payment details</h3>
        {payments.map((item, index) => (
          <TwoLeftOneRightSchema key={index} imageInfo={item.imageInfo} cardName={item.cardName} cardNumber={item.cardNumber} value={payment} setValue={setPayment} resetCvc={resetCvc} setResetCvc={setResetCvc} />
        ))}
        <TextBtn text="Add Payment Method" mt={true} />

        <input type="email" name="email" placeholder='Email address' className='email-input box-mt-high' value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type='submit' className="btn big-btn box-mt">
        Proceed to payment
        <BsArrowRight size={20} />
        </button>
    </form>
    </Radium.StyleRoot>

    {showSuccessfulPopup && (
      <OrderSuccessful setShowPopup={setShowSuccessfulPopup} />
    )}

    {showUnsuccessfulPopup && (
      <OrderUnSuccessful setShowPopup={setShowUnsuccessfulPopup} />
    )}
    </>
  )
}
