import Link from "next/link";
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt,FaPhoneAlt } from "react-icons/fa";
export default function TopHeader() {
    return (
        <div className='bg-[#EC6861] sm:px-16  text-white py-3 lg:flex justify-between'>
            <div className='flex flex-col gap-2 lg:flex-row lg:gap-4 items-center '>
                <p><span><FaMapMarkerAlt className='inline-block mr-2 w-6' /></span>4314 elm st. dallas, tx 75226</p>
                <div className="divider hidden lg:flex after:bg-white before:bg-white divider-horizontal h-5 "></div>
                <p><span><FaPhoneAlt className='inline-block mx-2 w-6' /></span>214-817-7168</p>
            </div>
            <div className='flex gap-4 text-2xl mt-3 lg:mt-0 justify-center'>
                 <a href='https://web.facebook.com/resalat.islam.18' target='_blank'><FaFacebook /></a>
                <a href='https://twitter.com/resalatislam5' target='_blank'><FaTwitter /></a>
                <a href='https://www.instagram.com/resalat.i/' target='_blank'><FaInstagram /></a>
                 <Link href='#'><FaYoutube /></Link>
            </div>
        </div>
    );
}
