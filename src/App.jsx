import React from 'react'
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Comissioners } from './components/Comissioners'
import { Videos } from './components/Videos'
import { Meeting } from './components/Meeting'
import { Policy } from './components/Policy'
import { Petition } from './components/Petition'
import { Records } from './components/Records'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { Links } from './components/Links'
import { Footer } from './components/Footer'


import { Current } from './components/Current'
import { Report } from './components/Report'
import { Audit } from './components/Audit'
import { Resolution } from './components/Resolution'

import { SmokeDetectorApplication } from './components/SmokeDetectorApplication'
import { SmokeDetectorInspectionFees } from './components/SmokeDetectorInspectionFees'
import { SmokeDetectorInspectionPaymentForm } from './components/SmokeDetectorInspectionPaymentForm'
import { BusinessRegistrationPermitFees } from './components/BusinessRegistrationPermitFees'
import { Fees } from './components/Fees'
import { SmokeDetectorInstructions } from './components/SmokeDetectorInstructions'
import { FireExtinguisherInstructions } from './components/FireExtinguisherInstructions'
import { SmokeRequirements } from './components/SmokeRequirements'
import { FirePreventionLessons } from './components/FirePreventionLessons'
import { VideoReading } from './components/VideoReading'
import { GeneralPrevention } from './components/GeneralPrevention'
import { FirePreventionChecklist } from './components/FirePreventionChecklist'
import { FireSafetyTrailerPresentation } from './components/FireSafetyTrailerPresentation'
import { SpringSummer } from './components/SpringSummer'
import { FireworksSafety } from './components/FireworksSafety'
import { WinterTips } from './components/WinterTips'
import { OperationHoly } from './components/OperationHoly'
import { GetOutAlive } from './components/GetOutAlive'
import { SelfInspectionAffidavit } from './components/SelfInspectionAffidavit'
import { BusinessRegistrationUpdate } from './components/BusinessRegistrationUpdate'




export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smoke-detector-application" element={<SmokeDetectorApplication />} />
          <Route path="/smoke-detector-inspection-fees" element={<SmokeDetectorInspectionFees />} />
          <Route path="/smoke-detector-inspection-payment-form" element={<SmokeDetectorInspectionPaymentForm />} />
          <Route path="/business-registration-permit-fees-payment-form" element={<BusinessRegistrationPermitFees />} />
          <Route path="/smoke-detector-instructions" element={<SmokeDetectorInstructions />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/fire-extinguisher-instructions" element={<FireExtinguisherInstructions />} />
          <Route path="/smoke-requirements" element={<SmokeRequirements />} />
          <Route path="/fire-prevention-lessons" element={<FirePreventionLessons />} />
          <Route path="/reading" element={<VideoReading />} />
          <Route path="/general-prevention" element={<GeneralPrevention />} />
          <Route path="/fire-prevention-checklist" element={<FirePreventionChecklist />} />

          <Route path="/spring-and-summer-fire-prevention-tips" element={<SpringSummer />} />
          <Route path="/fireworks" element={<FireworksSafety />} />
          <Route path="/winter-fire-prevention-tips" element={<WinterTips />} />
          <Route path="/operation-holy-smokes" element={<OperationHoly />} />
          <Route path="/fire-is" element={"http://www.njfiresafety.com/"} />


          <Route path="/fire-safety-trailer-presentation" element={<FireSafetyTrailerPresentation />} />
          <Route path="/get-out-alive" element={<GetOutAlive />} />

          <Route path="/comissioners" element={<Comissioners />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/petition" element={<Petition />} />
          <Route path="/records" element={<Records />} />
          <Route path="/links" element={<Links />} />

          <Route path="/current" element={<Current />} />
          <Route path="/resolution" element={<Resolution />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/report" element={<Report />} />

          <Route path="/monroe-township-fire-district-1-affidavit-self-inspection" element={<SelfInspectionAffidavit />} />
          <Route path="/business-registration-update-form" element={<BusinessRegistrationUpdate />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
