import PriceModule from "./PriceModule";

export default function PlanLeftOneRightSchema({planIcon, planName, price, active=false}: any) {
  return (
    <div className={"two-left-one-right-schema plan-schema" + (active ? " active" : "")}>
      <div className="schema-left">
        <div className="plan-icon">
          {planIcon}
        </div>
        <div className="flex-col">
          <span className="name">{planName}</span>
          <button type='button' className='text-btn box-mt-small'>Change Plan</button>
        </div>
      </div>
      <PriceModule price={price} type="year" />
    </div>
  )
}
