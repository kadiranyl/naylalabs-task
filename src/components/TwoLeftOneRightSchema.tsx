import Image from "next/image";

export default function TwoLeftOneRightSchema({imageInfo, cardName, cardNumber, value, setValue, cvc, setCvc}: any) {
  return (
    <div className="two-left-one-right-schema box-mt">
      <input type="radio" name="payment-type" value={cardName} onChange={(e) => setValue(e.target.value)} checked={value === cardName} className="hidden-input" required />
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
        <input type="text" name="cvc" placeholder='CVC' accept={`[0-9]*`} maxLength={3} onClick={() => setValue(cardName)} value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </div>
    </div>
  )
}
