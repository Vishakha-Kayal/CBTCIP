import Hero from "./Hero"
import Categories from "./Categories"
import Events from "./Events"
import  GetStart  from "./GetStart"
import CreateWithUs from "./CreateWithUs"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <Hero/>
      <Categories/>
      <GetStart/>
      <Events/>
      <CreateWithUs />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home