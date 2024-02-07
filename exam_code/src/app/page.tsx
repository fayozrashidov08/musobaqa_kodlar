import Navbar from '@/components/Navbar'
import Banner from "@/components/Banner"
import Brands from "@/components/Brands"
import OurProjects from "@/components/OurProjects"
import Provide from "@/components/Provide"
import UserExpirence from '@/components/UserExpirence'
import Form from '@/components/Form'
import Ideas from '@/components/Ideas'
import Footer from '@/components/Footer'

const Login = () => {
  return (
    <div>
          <Navbar />
          <Banner />
          <Brands />
          <OurProjects/>
          <Provide/>
          <UserExpirence/>
          <Ideas/>
          <Form/>
          <Footer/>
    </div>
  )
}

export default Login