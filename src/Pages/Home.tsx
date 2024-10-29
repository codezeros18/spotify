import Navbar from '../Layout/Navbar'
import Cardnote from '../Components/Cardnote'
import Cardtop from '../Components/Cardtop'

const Home = () => {
  return (
    <>
    <div className='font-montserrat max-h-full'>
        <Navbar/>
        <Cardnote/>
        <Cardtop/>
    </div>
    </>
  )
}

export default Home

