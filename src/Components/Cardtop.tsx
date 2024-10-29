import image1 from '../assets/album1.jpg'
import image2 from '../assets/album2.jpg'
import image3 from '../assets/album3.jpg'
import image4 from '../assets/album4.jpg'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cardtop = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    const cards = [
        {img : image1, title: 'i want u to know sayang that u will always be loved by me' },
        {img : image2, title: 'i love all of ur scars so much baby so dont be insecure abt it okay :)' },
        {img : image3, title: 'someday u gon overcome all of ur fears and trauma bcs i believe in u' },
        {img : image4, title: 'be with me always, okay? thats what i want' },
    ]
  return (
    <div className='mx-4 pt-2'>
        {/* <h2 className='text-[20px] font-bold my-4 text-white'>Your top memory</h2>
            <Slider {...settings}>
                {cards.map((card,index) =>(
                        <div key={index} className='p-1 px-2'>
                            <img src={card.img} className='w-full h-24 object-cover rounded-sm' alt="" />
                            <h4 className='text-[12px] font-normal my-2 text-white text-opacity-70 leading-[14px]'>{card.title}</h4>
                        </div>
                ))}
            </Slider> */}
            <h2 className='text-[20px] font-bold my-4 text-white'>Top Remix</h2>
            <Slider {...settings}>
                {cards.map((card,index) =>(
                        <div key={index} className='p-1 px-2 cursor-pointer'>
                            <img src={card.img} className='w-full h-24 object-cover rounded-sm' alt="" />
                            <h4 className='text-[12px] font-normal my-2 text-white text-opacity-70 leading-[14px]'>{card.title}</h4>
                        </div>
                ))}
            </Slider>
    </div>
  )
}

export default Cardtop
