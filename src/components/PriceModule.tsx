import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import CountUpModule from './CountUp';

export default function PriceModule({price, type, canEdit=false, setPrice}: any) {
  const [animationStartPrice, setAnimationStartPrice] = useState<any>(0)
  
  const setPriceHandler = (e: any) => {
    if (Number(e) <= 300 && Number(e) >= 0) {
      setPrice(e)
    }
  }

  useEffect(() => {
    if (price !== 180) {
      setAnimationStartPrice(Number(price))
    }
  }, [price])

  return (
    <div className="schema-right price-module">
        <p>$</p>
        {canEdit ? (
          <>
            <input type="number" value={price} onChange={(e: any) => setPriceHandler(e.target.value)} />
            <CountUp start={animationStartPrice} end={price}>
              {({ countUpRef }) => (
                <span ref={countUpRef} />
              )}
            </CountUp>
          </>
        ) : (
        <CountUpModule number={price} />
        )}
        <p>/ {type}</p>
    </div>
  )
}
