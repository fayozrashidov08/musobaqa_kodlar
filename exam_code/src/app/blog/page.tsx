import Navbar from '@/components/Navbar'
import UserExpirence from '@/components/Users'
import Form from '@/components/Form'
import Ideas from '@/components/Ideas'
import Footer from '@/components/Footer'
import Banner_blog from '@/components/Banner_blog'

const Services = () => {
  return (
    <div>
          <Navbar />
          <Banner_blog/>
          <UserExpirence/>
          <Ideas/>
          <Form/>
          <Footer/>
    </div>
  )
}

export default Services