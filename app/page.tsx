import ParallaxBg from '@/components/paralaxhero/ParallaxBg'
import AboutUs from '@/components/about-us';
import Products from '@/components/product';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
export default function Page() {

  return (
    <div className='mb-0'>
      <ParallaxBg />
      <div className='bg-transparent w-full h-[120vh]'>
        <AboutUs />
      </div>
      <div className='bg-transparent w-full h-[130vh]'>
        <Products />
      </div>
    </div>
  )
}


/*
      <Products />


*/