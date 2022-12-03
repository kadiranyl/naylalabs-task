import { BsArrowRight } from 'react-icons/bs'
import { TbPlanet } from 'react-icons/tb'
import { GiPlanetConquest } from 'react-icons/gi'
import PlanLeftOneRightSchema from 'components/PlanLeftOneRightSchema'
import TwoLeftOneRightSchema from 'components/TwoLeftOneRightSchema'

export default function UpgradePlan() {
  return (
    <form className="box main-left">
        <h2>Upgrade your plan</h2>
        <p>Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>

        <PlanLeftOneRightSchema planIcon={<GiPlanetConquest size={34} />} planName="Small Business" price="8,350" active={true} />
        <PlanLeftOneRightSchema planIcon={<TbPlanet size={32} />} planName="Big Business" price="12,650" />

        <h3 className='box-mt-high'>Payment details</h3>
        <TwoLeftOneRightSchema imageInfo={{src: "/mastercard.png", alt: "Mastercard"}} cardName="My card 1" cardNumber="2344 xxxx xxxx 8880" />
        <TwoLeftOneRightSchema imageInfo={{src: "/visa.png", alt: "Visa"}} cardName="My card 2" cardNumber="8890 xxxx xxxx 1234" />
        <button type='button' className='text-btn box-mt'>Add Payment Method</button>

        <input type="email" name="email" placeholder='Email address' className='email-input box-mt-high' />

        <button className="big-btn box-mt">
        Proceed to payment
        <BsArrowRight size={20} />
        </button>
    </form>
  )
}
