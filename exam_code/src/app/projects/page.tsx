import Navbar from '@/components/Navbar'
import UserExpirence from '@/components/Users'
import Form from '@/components/Form'
import Ideas from '@/components/Ideas'
import Footer from '@/components/Footer'
import Banner_prj from '@/components/Banners/Banner_prj'

const Services = () => {
  return (
    <div>
          <Navbar />
          <Banner_prj/>
          <UserExpirence/>
          <Ideas/>
          <Form/>
          <Footer/>
    </div>
  )
}

export default Services