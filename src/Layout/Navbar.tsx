import image1 from '../assets/1a.jpg'

const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-6"> 
        <div className="relative flex h-16 items-center justify-between">
            <div className='flex flex-row items-center space-x-2'>
                <img src={image1} className='w-10 h-10 object-cover rounded-[50%] mr-2'  alt="" />
                <h4 className='bg-greenback text-backgrey text-[14px] rounded-full px-4 py-2 font-medium text-center whitespace-nowrap'>For My Baby</h4>
            </div>
        </div>
    </div>
  )
}

export default Navbar
