import BussinessManagement from '@/components/homepage/BussinessManagement'
import CommonChallenges from '@/components/homepage/CommonChallenges'
import FeaturedOn from '@/components/homepage/FeaturedOn'
import FindOneApplication from '@/components/homepage/FindOneApplication'
import LessBusyness from '@/components/homepage/LessBusyness'
import MeMateFeatureAgile from '@/components/homepage/MeMateFeatureAgile'
import MemateFeatureBoastEfficiency from '@/components/homepage/MemateFeatureBoastEfficiency'
import MeMateFeatureMotivateTeam from '@/components/homepage/MeMateFeatureMotivateTeam'
import MeMateFeatureStreamline from '@/components/homepage/MeMateFeatureStreamline'
import MeMateFinanceInsights from '@/components/homepage/MeMateFinanceInsights'
import MeMateWorkForce from '@/components/homepage/MeMateWorkForce'
import NewsAndUpdate from '@/components/homepage/NewsAndUpdate'
import SeamlessInegration from '@/components/homepage/SeamlessInegration'
import SuccessStories from '@/components/homepage/SuccessStories'
import ZeroOfferOnboarding from '@/components/homepage/ZeroOfferOnboarding'
import React from 'react'

const Home = () => {
  return (
   <>
   <BussinessManagement />
   <LessBusyness />
   <FeaturedOn />
   <FindOneApplication />
   <CommonChallenges />
   <ZeroOfferOnboarding />
   <MeMateFeatureStreamline />
   <MemateFeatureBoastEfficiency />
   <MeMateFinanceInsights />
   <MeMateFeatureMotivateTeam />
   <MeMateFeatureAgile />
   <MeMateWorkForce />
   <SeamlessInegration />
   <SuccessStories />
   <NewsAndUpdate />
   </>
  )
}

export default Home