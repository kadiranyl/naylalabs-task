import { animations } from "lib/Animations";
import Image from "next/image";
import CountUpModule from "./CountUp";
import Radium from 'radium';

export default function ProfileBox() {
  return (
    <Radium.StyleRoot className="box profile-box" style={animations.fadeInDown}>
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
    </Radium.StyleRoot>
  )
}
