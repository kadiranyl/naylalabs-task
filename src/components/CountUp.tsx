import React from 'react'
import CountUp from 'react-countup';

export default function CountUpModule({number, className}: any) {
  return (
    <CountUp start={0} end={Number(number)} delay={0}>
        {({ countUpRef }: any) => (
        <span className={className} ref={countUpRef} />
        )}
    </CountUp>
  )
}
