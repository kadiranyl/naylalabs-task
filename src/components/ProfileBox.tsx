import Image from "next/image";

export default function ProfileBox() {
  return (
    <div className="box profile-box">
        <Image src="/banner.jpeg" fill alt="Banner" className='banner' objectFit='cover' />
        <div className="profile-photo">
            <Image src="/user.png" fill alt="Banner" objectFit='cover' />
        </div>

        <h2 className='profile-title'>Filip Martin Jose</h2>
        <p className='city'>Los Angeles</p>

        <button type='button' className="small-btn">Pro Level</button>

        <div className="flex-row statics">
            <div className="flex-col">
            <p className='key'>Followers</p>
            <span className='value'>980</span>
            </div>
            <div className="flex-col">
            <p className='key'>Projects</p>
            <span className='value'>142</span>
            </div>
            <div className="flex-col">
            <p className='key'>Rank</p>
            <span className='value'>129</span>
            </div>
        </div>
    </div>
  )
}
