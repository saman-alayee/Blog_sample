import ParallaxBg from '@/components/paralaxBg/ParallaxBg'
import AboutUs from '@/components/about-us';
import Products from '@/components/blogCategory';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
export default function Page() {

  const containerClass:string='h-screen overflow-hidden grid place-items-center'
  const titleClass:string='flex flex-col justify-center items-center font-bold text-white dark:text-black relative font-splinesans z-20 text-7xl md:text-9xl'
  const imgClass:string='absolute inset-0 z-0 grayscale-[50%]'
  return (
    <div className='mb-0'>
      <ParallaxBg headerTitle={'BLOG'} containerClass={containerClass} titleClass={titleClass} imgClass={imgClass} searchBar={true}/>
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