import Announcement from '../components/announcement.component'
import Categories from '../components/categories.component'
import Navbar from '../components/navbar.components'
import Products from '../components/products.component'
import Slider from '../components/slider.component'



const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default Home