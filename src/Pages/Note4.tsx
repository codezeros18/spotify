import video1 from '../assets/vid3.mp4';
import AudioPlayer from '../Components/AudioPlayer';
import Lyric from '../Components/Lyric';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const Note1 = () => {  
  return (
    <>
        <div className="relative w-full min-h-[90vh] overflow-hidden">
            <div className='absolute top-0 left-0 w-full z-10 p-4 text-[20px]'>
                <button className='text-[30px]'>
                    <Link to={'/'}>
                        <FaAngleDown/>
                    </Link>
                </button>
            </div>
            {/* Background video container */}
            <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" 
                style={{
                    backgroundImage: `url(${video1})`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center",
                    opacity: 0.9,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" />
            </div>
            
            <div className="absolute bottom-24 left-0 w-full p-4 z-20">
                <div className="px-4 py-4">
                    <h2 className="text-[18px] font-[600] text-white">Nothing</h2>
                    <h4 className="text-[16px] text-white text-opacity-50">LINTANG</h4>
                </div>
            </div>
            
            <AudioPlayer />
        </div>
        <div className='mb-60'>
            <Lyric />
        </div>
    </>
  )
}

export default Note1;
