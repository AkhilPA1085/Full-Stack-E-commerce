import Announcement from '../components/announcement.component'
import Categories from '../components/categories/categories.component'
import Footer from '../components/footer.component'
import Navbar from '../components/navbar.components'
import NewsLetter from '../components/newsletter.component'
import Products from '../components/products/products.component'
import Slider from '../components/slider.component'



const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home