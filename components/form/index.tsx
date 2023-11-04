"use client"
import React, { useEffect, useState } from 'react'
import Styles from './ContactUs.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'

type FormValues = {
  name: string,
  email: string,
  password: string
}
const ContactUsForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ defaultValues: { email: "", name: "", password: "", } })
  const [flagg, setFlagg] = useState(false)

  useEffect(() => {
    reset({
      email: "",
      name: "",
      password: "",
    })
  }, [flagg, reset])

  const onSubmit: SubmitHandler<FormValues> = (e) => {
    localStorage.clear();
    let authentication = {
      name: e.name,
      email: e.email,
      password: e.password
    }
    localStorage.setItem('userauth', JSON.stringify(authentication))
    setFlagg(!flagg);
  }

  return (
    <div className={Styles.formContainer}>

      <div className='flex flex-col justify-center items-center'>
        <h1 className={Styles.title}>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={Styles.inputField}>
            <label htmlFor="name" className={Styles.label}>UserName</label>
            <input type="text" id="name" placeholder='Amirgh8181' className={Styles.formInput}
              {...register("name", { required: true })}
            />
            {errors.name && <span className='text-red-600 ml-2 mt-2 text-xs'>please inter a name</span>}
          </div>
          <div className={Styles.inputField}>
            <label htmlFor="email" className={Styles.label}>Email</label>
            <input type="email" id="email" placeholder='amir.962@yahoo.com' className={Styles.formInput}
              {...register("email", { required: true })}
            />
            {errors.email && <span className='text-red-600 ml-2 mt-2 text-xs'>please inter a email</span>}

          </div>
          <div className={Styles.inputField}>
            <label htmlFor="password" className={Styles.label}>password</label>
            <input type='password' id="password" placeholder='enter password' className={Styles.formInput}
              {...register("password", { required: true })}
            />
            {errors.password && <span className='text-red-600 ml-2 mt-2 text-xs'>please inter a password</span>}

          </div>
          <div className='w-full flex justify-center items-center'>
            <button type="submit" className={Styles.formBtn}>Submit</button>
          </div>
        </form>
      </div>
      <div className='flex items-center p-8'>
        <Image src={'/images/HERO.jpg'} alt='form-pic' width={500} height={500} className='rounded-lg hover:scale-110 transition-all duration-300' />
      </div>
    </div>
  )
}

export default ContactUsForm;