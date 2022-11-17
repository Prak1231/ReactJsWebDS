import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/footer'
import Header from './Components/Header'
import About from './Components/Ui/About'
import Blog from './Components/Ui/Blog'
import Counter from './Components/Ui/Counter'
import Hero from './Components/Ui/Hero'
import NewsLetter from './Components/Ui/NewsLetter'
import Services from './Components/Ui/Services'
import Team from './Components/Ui/Team'
import Testimonial from './Components/Ui/Testimonial'

function App() {
  // const [theme, setTheme] = useState('')

  // const toggleTheme = () => {
  //   theme === '' ? setTheme('light-theme') : setTheme('')
  // }

  // useEffect(() => {
  //   document.body.className = theme
  // }, [theme])
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
