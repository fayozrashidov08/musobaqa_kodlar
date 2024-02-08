import Navbar from '@/components/Navbar'
import UserExpirence from '@/components/Users'
import Form from '@/components/Form'
import Ideas from '@/components/Ideas'
import Footer from '@/components/Footer'
import Banner_abt from '@/components/Banner_abt'

const Services = () => {
  return (
    <div>
          <Navbar />
          <Banner_abt/>
          <UserExpirence/>
          <Ideas/>
          <Form/>
          <Footer/>
    </div>
  )
}

export default Services