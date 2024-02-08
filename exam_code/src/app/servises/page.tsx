import Navbar from '@/components/Navbar'
import UserExpirence from '@/components/Users'
import Form from '@/components/Form'
import Ideas from '@/components/Ideas'
import Footer from '@/components/Footer'
import Banner_ser from '@/components/Banners/Banner_ser'

const Services = () => {
  return (
    <div>
          <Navbar />
          <Banner_ser/>
          <UserExpirence/>
          <Ideas/>
          <Form/>
          <Footer/>
    </div>
  )
}

export default Services