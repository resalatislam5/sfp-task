import Link from 'next/link';
import bike from '././../ass/Rad-Runner-Ebike 1_ccexpress 1.png'
import Image from 'next/image';
export default function Product() {
    return (
        <section className='2xl:mx-40 xl:mx-20 mx-5 my-28  xl:h-[600px] '>
            <div className='flex justify-between mb-12'>
                <h2 className="text-[#100707] text-2xl lg:text-4xl font-bold">Accessories Collections</h2>
                <p className='text-[#EC6861] text-lg'>View all</p>
            </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:absolute gap-5 xl:gap-0 '>
            {
                [...Array(4)].map(e => <div  className='2xl:w-[400px] xl:w-[19rem]  w-80 2xl:h-[448px] lg:hover:h-[512px] lg:hover:bg-white lg:hover:shadow-lg p-4 bg-[#F9F9F9] rounded-xl Electric mx-auto'>
                    <div className='mb-10 mt-7'>
                        <Image src={bike} alt="" />
                    </div>
                    <div>
                        <h3 className="text-[#100707] font-bold text-2xl">In City Wheels Electric Bike</h3>
                        <p className='text-[#676767] font-semibold text-lg'>$1,499.00</p>
                        <Link href="*" ><button className="btn bg-[#1A2A49] hover:bg-[#EC6861] w-full mt-6 lg:hidden Electric-btn text-white">Add to cart</button></Link>
                    </div>
                    
                </div>)
            }
        </div>
    </section>
    );
}


