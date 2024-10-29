import cardnote1 from '../assets/cardnote1.jpg'
import cardnote2 from '../assets/cardnote2.jpg'
import cardnote3 from '../assets/cardnote3.jpg'
import cardnote4 from '../assets/cardnote4.jpg'
import cardnote5 from '../assets/cardnote5.jpg'
import cardnote6 from '../assets/cardnote6.jpg'
import cardnote7 from '../assets/cardnote7.jpg'
import cardnote8 from '../assets/cardnote8.jpg'
import { Link } from 'react-router-dom'


const Cardnote = () => {
    const notes = [
        {msg: 'u are my soft spot :)', image : cardnote1, href:  '/note1'}, // soft spot
        {msg: 'i have a crush on u so bad', image : cardnote2, href:  '/note2'}, // no 1 parthy anthem
        {msg: 'i dont wanna live without u', image : cardnote3, href:  '/note3'}, // its not living if its not with u
        {msg: 'i wanna do things w u', image : cardnote4, href:  '/note4'}, // nothing bruno major
        {msg: 'i feel better when im w u', image : cardnote5, href:  '/note5'}, // i like me better w im w u
        {msg: 'sorry for lovin u too much', image : cardnote6, href:  '/note6'}, // dna
        {msg: 'it was dark till i met u', image : cardnote7, href:  '/note7'}, // daylight
        {msg: 'thank you for bein here', image : cardnote8, href:  '/note8'}, // semenjak ada dirimu

    ]
  return (
    <div className='mx-4 my-4'>
        <div className='grid grid-cols-2 gap-2'>
                {notes.map((note, index) => (
                    <Link to={note.href}>
                        <div key={index} className='grid grid-cols-10 bg-backgrey2 rounded-md'>
                            <div className='grid col-span-3'>
                                <img src={note.image}  className='w-full h-14 object-cover rounded-sm' />
                            </div>
                            <div className='grid col-span-7'>
                                <p className='text-[12px] leading-normal flex items-center justify-center px-2 text-white'>{note.msg}</p>
                            </div>
                        </div>
                    </Link>
                ))}
        </div>
    </div>
  )
}

export default Cardnote
