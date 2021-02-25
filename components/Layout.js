import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import Hero from '../components/Hero'
export default function Layout({children}) {
  return (
    <>
    <Navbar />
    
    <main>
    {children}
    </main>
    <Footer />
    </>
  )
}