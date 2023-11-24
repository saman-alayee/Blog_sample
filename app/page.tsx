import AboutUs from '@/components/about-us';
import Products from '@/components/blogCategory';
import Hero from '@/components/hero';
export default function Page() {  
  return (
    <div>
      <div>
        <Hero/>
      </div>
      <div className='bg-transparent'>
        <AboutUs />
      </div>
      <div className='bg-transparent'>
        <Products />
      </div>
    </div>
  )
}


/*
      <Products />


*/