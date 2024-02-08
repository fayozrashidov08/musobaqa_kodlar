import Navbar from '@/components/Navbar'
import Banner from "@/components/Banner"
import OurProjects from "@/components/OurProjects"
import Provide from "@/components/Provide"
import Form from '@/components/Form'
import Ideas from '@/components/Ideas'
import Footer from '@/components/Footer'
import Words from '@/components/Words'
import Users from '@/components/Users'

const Login = () => {
  return (
    <div>
          <Navbar />
          <Banner />
          <Words/>
          <OurProjects/>
          <Provide/>
          <Users/>
          <Ideas/>
          <Form/>
          <Footer/>
    </div>
  )
}

export default Login