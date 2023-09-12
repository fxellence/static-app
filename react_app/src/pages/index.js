import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HomePage } from '@/component/home_page/home_page'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
   
    <HomePage/>
  
  )
}
