import { connect } from 'react-redux'

import { Header } from './components/header/Header'
import { Banner } from './components/main/banner/Banner'
import { AboutUs } from './components/main/about us/AboutUs'
import { JACCarousel } from './components/main/JACCarousel/JACCarousel'
import { ZoomlionContainer } from './components/main/zoomlionCarousel/ZoomlionContainer'
import { ContactsBlock } from './components/main/contacts/ContactsBlock'
import { BeforeFooter } from './components/main/beforeFooter/BeforeFooter'
import { Footer } from './components/footer/Footer'

import type { GlobalStateType } from './redux/reduxStore'
import type { InitialZoomlionStateType } from './redux/zoomlionReducer'
import type { InitialJACStateType } from './redux/JACReducer'
import type { InitialCompanyInfoStateType } from './redux/companyInfoReducer'

import './common styles/index.scss'



type MapStatePropsType = {
  zoomlionData: InitialZoomlionStateType,
  JACData: InitialJACStateType,
  companyInfoData: InitialCompanyInfoStateType
}


const App: React.FC<MapStatePropsType> = ({ zoomlionData, JACData, companyInfoData }) => {
  return (
    <div className="wrapper">
      <Header logo={companyInfoData.logoImg} label={companyInfoData.label} />
      <main className='main'>
        <Banner slogan={companyInfoData.slogan} bannerImages={companyInfoData.bannerImages} />
        <AboutUs aboutUs={companyInfoData.aboutUsParagraphs} />

        <ZoomlionContainer zoomlionData={zoomlionData} /> 

        <JACCarousel JACData={JACData} />
        <ContactsBlock phone={companyInfoData.phone} email={companyInfoData.email} address={companyInfoData.address} schedule={companyInfoData.schedule} />
        <BeforeFooter logo={companyInfoData.logoImg} slogan={companyInfoData.slogan} label={companyInfoData.label} />
      </main>
      <Footer userAgree={companyInfoData.userAgreePargraphs} copyright={companyInfoData.copyright} />
    </div>
  );
}

const mapStateToProps = function (state: GlobalStateType) {
  return ({
    zoomlionData: state.forZoomlionData,
    JACData: state.forJACData,
    companyInfoData: state.forCompanyInfoData
  })
}
const AppContainer = connect<MapStatePropsType, {}, {}, GlobalStateType>(mapStateToProps)(App)

export { AppContainer }
