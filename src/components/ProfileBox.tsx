import Image from "next/image";
import CountUpModule from "./CountUp";

export default function ProfileBox() {
  return (
    <div className="box profile-box">
        <Image src="/banner.jpeg" fill alt="Banner" className='banner' objectFit='cover' />
        <div className="profile-photo">
            <Image src="/user.png" fill alt="Banner" objectFit='cover' />
        </div>

        <h2 className='profile-title'>Filip Martin Jose</h2>
        <p className='city'>Los Angeles</p>

        <button type='button' className="btn small-btn">Pro Level</button>

        <div className="flex-row statics">
            <div className="flex-col">
            <p className='key'>Followers</p>
            <CountUpModule number={980} className="value" />
            </div>
            <div className="flex-col">
            <p className='key'>Projects</p>
            <CountUpModule number={142} className="value" />
            </div>
            <div className="flex-col">
            <p className='key'>Rank</p>
            <CountUpModule number={129} className="value" />
            </div>
        </div>
    </div>
  )
}
