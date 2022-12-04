import Image from "next/image";
import { useEffect, useState } from "react";

export default function TwoLeftOneRightSchema({imageInfo, cardName, cardNumber, value, setValue, resetCvc, setResetCvc}: any) {
  const [cvc, setCvc] = useState<any>()

  const cvcHandler = (e: any) => {
    if (e <= 999 && e >= 0) {
      setCvc(e)
      setValue({cardNumber: cardNumber, cvc: e})
    }
  }

  useEffect(() => {
    if (resetCvc === true) {      
      setCvc(NaN)
      setResetCvc(false)
    }
  }, [resetCvc])

  useEffect(() => {
    setCvc(NaN)
    setValue({cardNumber: value.cardNumber , cvc: NaN})
  }, [value.cardNumber])

  return (
    <div className="two-left-one-right-schema payment-method">
      <input type="radio" name="payment-type" value={cardNumber} onChange={(e) => setValue({cardNumber: e.target.value, cvc: value.cvc})} checked={value.cardNumber === cardNumber} className="hidden-input" />
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
        <input type="number" name="cvc" placeholder='CVC' onClick={() => setValue({cardNumber, cvc: cvc})} value={cvc} onChange={(e) => cvcHandler(e.target.value)} />
      </div>
    </div>
  )
}
