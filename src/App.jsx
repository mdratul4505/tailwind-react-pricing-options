
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import PricingOPrion from './Components/PricingOption/PricingOPrion'
import ResultChat from './Components/ResultChart/ResultChat'
import axios from 'axios'
import MarksChart from './Components/MarksChart/MarksChart'




const PricingPromice = fetch('/PricingData.json').then(res => res.json())
const marksDataPromice = axios.get('./MarksData.json')


function App() {


  return (
    <>

      <header>
        {/* <DaisyNav/> */}
      </header>
      <NavBar />

      <main>
        <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
          <PricingOPrion PricingPromice={PricingPromice}>
          </PricingOPrion>
        </Suspense>

        <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
          <MarksChart marksDataPromice ={marksDataPromice}></MarksChart>
        </Suspense>

        <ResultChat>

        </ResultChat>

      </main>

      <footer>

      </footer>



    </>
  )
}

export default App
