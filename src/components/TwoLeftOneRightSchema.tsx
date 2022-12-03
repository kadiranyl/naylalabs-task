import Image from "next/image";

export default function TwoLeftOneRightSchema({imageInfo, cardName, cardNumber}: any) {
  return (
    <div className="two-left-one-right-schema box-mt">
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
        <input type="text" name="cvc" placeholder='CVC' accept={`[0-9]*`} maxLength={3} />
      </div>
    </div>
  )
}
