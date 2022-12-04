export default function TextBtn({text, mt=false}: any) {
  return (
    <button type='button' className={'text-btn' + (mt ? " box-mt" : "")}>
        {text}
    </button>
  )
}
