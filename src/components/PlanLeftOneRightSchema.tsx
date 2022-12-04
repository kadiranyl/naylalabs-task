import PriceModule from "./PriceModule";
import TextBtn from "./TextBtn";

export default function PlanLeftOneRightSchema({planIcon, planName, price, setValue, defaultChecked=false}: any) {
  return (
    <div className="two-left-one-right-schema plan-schema">
      <input className="hidden-input" type="radio" name="plan-type" defaultChecked={defaultChecked} onChange={(e) => e.target.value === "on" && setValue(planName)} required />
      <div className="schema-left">
        <div className="plan-icon">
          {planIcon}
        </div>
        <div className="flex-col">
          <span className="name">{planName}</span>
          <TextBtn text="Change Plan" />
        </div>
      </div>
      <PriceModule price={price} type="year" />
    </div>
  )
}
