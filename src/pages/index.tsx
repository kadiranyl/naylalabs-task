import ProfileBox from 'components/ProfileBox'
import SetPricingBox from 'components/SetPricingBox'
import UpgradePlan from 'components/UpgradePlan'
import type { NextPage } from 'next'
import { FadeInUp, FadeInDown } from "lib/Animations"

const Home: NextPage = () => {
  return (
    <main>
      <FadeInUp>
        <UpgradePlan/>
      </FadeInUp>
      <FadeInDown>
        <div className="main-right">
          <ProfileBox />
          <SetPricingBox />
        </div>
      </FadeInDown>
    </main>
  )
}

export default Home
