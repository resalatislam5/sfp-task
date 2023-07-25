import Image from 'next/image';
import banner from '../ass/banner.png'
export default function HomeM() {
    return (
        <div className='text-white relative'>
            <div className='w-full'>
            <Image className='' src={banner} alt="banner" />
            </div>
            <div className='absolute md:top-1/3 sm:top-[20%] top-[10%] pl-[5%] container'>
            <h2 className="lg:text-7xl sm:text-4xl text-2xl">Premium Electirc <br /> Motor Bike/Scooter</h2>
                    <p className='py-5 text-[#E7E7E7] hidden sm:flex'>Tour the city of Dallas on an electric bike & see what the city has to <br /> offer or just rent & go!</p>
                <div className="mt-3  sm:mt-0">
                <button className="btn bg-[#EC6861] border-none text-white px-5 text-xl hover:bg-[#f57871]">Shop Now</button>
                </div>
            </div>
        </div>
    );
}

