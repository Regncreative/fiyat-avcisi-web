import { LocaleProvider } from './i18n/LocaleContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Demo } from './components/Demo'
import { Features } from './components/Features'
import { Why } from './components/Why'
import { Stack } from './components/Stack'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import './styles/global.css'

export default function App() {
  return (
    <LocaleProvider>
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <Features />
        <Why />
        <Stack />
        <FAQ />
      </main>
      <Footer />
    </LocaleProvider>
  )
}
