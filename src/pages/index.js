import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/component/Header/Header'
import Home from './Home/Home'
import Stocks from './Stocks/Stocks'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <main
      
    >
   <Header/>
   <Home/>
<Stocks/>
    </main>
  )
}
