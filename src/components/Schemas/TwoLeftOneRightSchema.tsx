import Image from "next/image";
import { useEffect, useState } from "react";

export default function TwoLeftOneRightSchema({imageInfo, cardName, cardNumber, value, setValue}: any) {
  const [cvc, setCvc] = useState<any>()

  useEffect(() => {
    setValue({cardNumber, cvc: Number(cvc)})
  }, [cvc])

  useEffect(() => {
    
    if (value.cvc === null || value.cvc === undefined) {
      console.log(value.cvc);
      setCvc(NaN)
    }
  }, [value.cvc])


  const cvcHandler = (e: any) => {
    if (e <= 999) {
      setCvc(e)
    }
  }
  
  return (
    <div className="two-left-one-right-schema">
      <input type="radio" name="payment-type" value={cardNumber} onChange={(e) => setValue({cardNumber, cvc})} checked={value.cardNumber === cardNumber} className="hidden-input" />
      <div className="schema-left">
        <div className="bank">
          <Image src={imageInfo.src} fill alt={imageInfo.alt} />
        </div>
        <div className="flex-col">
          <span className="name">{cardName}</span>
          <p>{cardNumber}</p>
        </div>
      </div>
      <div className="schema-right">
        <input type="number" name="cvc" placeholder='CVC' onClick={() => setValue({cardNumber, cvc})} value={cvc} onChange={(e) => cvcHandler(e.target.value)} />
      </div>
    </div>
  )
}
