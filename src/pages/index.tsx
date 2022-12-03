import ProfileBox from 'components/ProfileBox'
import SetPricingBox from 'components/SetPricingBox'
import UpgradePlan from 'components/UpgradePlan'
import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <>
      <main>
        <UpgradePlan />
        <div className="main-right">
          <ProfileBox />
          <SetPricingBox />
        </div>
      </main>
    </>
  )
}

export default Home
