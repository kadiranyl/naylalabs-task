export default function PriceModule({price, type, canEdit=false, setPrice}: any) {
  const setPriceHandler = (e: any) => {
    if (Number(e) <= 300) {
      setPrice(e)
    }
  }
  
  return (
    <div className="schema-right price-module">
        <p>$</p>
        {canEdit ? (
          <>
            <input type="number" value={price} onChange={(e: any) => setPriceHandler(e.target.value)} />
            <span>{price}</span>
          </>
        ) : (
        <span>{price}</span>
        )}
        <p>/ {type}</p>
    </div>
  )
}
