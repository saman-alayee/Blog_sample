"use client"
import React, { useEffect, useState } from 'react'
import Styles from './ContactUs.module.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import Input from '../UI/Form/input'

type FormValues = {
  name: string,
  email: string,
  message: string
}
const ContactUsForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ defaultValues: { email: "", name: "", message: "", } })
  const [loading, setLoading] = useState(false)


  const onSubmit: SubmitHandler<FormValues> = async (e) => {
    console.log(e)
    setLoading(true)
    try {

      let authentication = {
        name: e.name,
        email: e.email,
        password: e.message
      }
      reset({
        email: "",
        name: "",
        message: "",
      })

    } catch (error) {
      console.log('some thing went wrong !')
    } finally {
      setLoading(false)
    }

  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center mt-20 bg-gradient-to-t from-gray-500 to-gray-300 dark:from-gray-800 dark:to-gray-500">
      <div className='flex flex-col md:flex-row items-center rounded-lg p-8 bg-gradient-to-b from-gray-500 to-gray-300 dark:from-gray-800 dark:to-gray-500'>
        <div className='flex md:justify-center items-center'>
          <Image src={'/images/HERO.jpg'} alt='form-pic' width={500} height={500} className=' rounded-lg hover:scale-110 transition-all duration-300' />
        </div>

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
              <input
                type="email" id="email" placeholder='amir.962@yahoo.com' className={Styles.formInput}
                {...register("email", {
                  required: true
                })}
              />
              {errors.email && <span className='text-red-600 ml-2 mt-2 text-xs'>please inter a email</span>}

            </div>
            <div className={Styles.inputField}>
              <label htmlFor="message" className={Styles.label}>message</label>
              <textarea id="message" placeholder='enter message' className={Styles.formInput}
                {...register("message", { required: true })}
              />
              {errors.message && <span className='text-red-600 ml-2 mt-2 text-xs'>please inter a password</span>}

            </div>
            <div className='w-full flex justify-center items-center'>
              <button disabled={loading} type="submit" className={Styles.formBtn}>Submit</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactUsForm;


