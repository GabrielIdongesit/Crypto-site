import React from 'react'
import Laptop31 from '../assets/laptop31.png';

const Banner = () => {
  return (
    <div className='text-center drop-shadow-lg' style={{  
      backgroundImage: "url(" + "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.15752-9/294012721_454006316264024_2789008387592159863_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHMXpufNFJZN3N6WRLHb_ikTnr5AJSXsNZOevkAlJew1h2_WofHISy30lBTxi0xNV_Q2Y4vuN9Al7sB2pw7r_ko&_nc_ohc=qA-5DFazYFUAX9vS0Zn&_nc_ht=scontent.fabb1-1.fna&oh=03_AVIkYAG_Yh_yO2nD7dcIkwu2QAEl8aRffJiFiLmY6ePfaQ&oe=62FD22AE" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }} >
      <div className="w-full h-full  ">
    <div className=' w-full px-20 text-white' style={{paddingLeft:'50px'}}>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-'>
        <div className='text-[white] '  style={{marginTop:'100px', marginBottom:'200px'}}>
            <h1 className='text-6xl mt-10 font-bold uppercase'>PROFIT <span className='text-[white] '>MONTHLY</span></h1>
            <h5 className='text-xl font-bold ml-5'>gain access to quality research and <br />signals that is sure to boost your <br /> portfolio exponentially</h5>
            <div>
                <button className=' bg-[#9363B4] hover:scale-105 duration-300  hover:bg-[white] hover:text-[blue] mt-10 border p-2 px-[20px]  rounded-full shadow uppercase font-bold text-white font-style: italic mb-7'>Join Now</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Banner