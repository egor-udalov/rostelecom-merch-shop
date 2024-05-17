import Hero from '@/components/modules/MainPage/Hero/Hero'
import Categories from '@/components/modules/MainPage/Categories/Categories'
import { useGate } from 'effector-react'
import { MainPageGate } from '@/context/goods'

const MainPage = () => {
  useGate(MainPageGate)

  return (
    <main>
      <Hero />
      <Categories />
    </main>
  )
}

export default MainPage
