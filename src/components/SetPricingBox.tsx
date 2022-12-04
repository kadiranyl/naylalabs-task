import { BiTime } from 'react-icons/bi'
import { BsReceipt } from 'react-icons/bs'
import ReactSlider from "react-slider";
import PriceModule from 'components/PriceModule'
import { useState } from 'react';

export default function SetPricingBox() {
  const [price, setPrice] = useState<any>(180)
  const minPrice: any = 20
  const maxPrice: any = 300

  return (
    <div className="box set-pricing">
        <h2>Set up your pricing</h2>
        <p>Please set up your hourly or fixed rate so that the client is aware of your pricing.</p>

        <div className="flex-row hourly-fixed">
            <div className="pickable">
              <input className="hidden-input" type="radio" name="pricing-type" />
              <BiTime size={36} />
              <span>Hourly</span>
            </div>
            <div className="pickable">
              <input className="hidden-input" type="radio" name="pricing-type" />
              <BsReceipt size={36} />
              <span>Fixed</span>
            </div>
        </div>

        <PriceModule price={price} type="month" canEdit={true} setPrice={setPrice} />

        <ReactSlider
        className="customSlider"
        trackClassName="customSlider-track"
        thumbClassName="customSlider-thumb"
        min={minPrice}
        max={maxPrice}
        value={price}
        onChange={(e: any) => setPrice(e)}
        />

        <div className="flex-row price-min-max">
            <p>${minPrice}</p>
            <p>${maxPrice}</p>
        </div>

    </div>
  )
}
