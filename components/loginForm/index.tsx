"use client"
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import Styles from './login.module.css'
import Link from 'next/link'

type loginForm = {
    type: string,
    handleSetCookie?: (arg: loginFormValues) => void
}
const EntryForm = ({ type, handleSetCookie }: loginForm) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<loginFormValues>({ defaultValues: { email: "", name: "", password: "", } })
    const [loading, setLoading] = useState(false)


    const onSubmit: SubmitHandler<loginFormValues> = (e) => {
        setLoading(true)
        try {

            let authentication = {
                name: e.name,
                email: e.email,
                password: e.password
            }
            reset({
                email: "",
                name: "",
                password: "",
            })

        } catch (error) {
            console.log('some thing went wrong !')
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className='flex items-center rounded-lg p-8 bg-gradient-to-bl from-gray-500 to-gray-300 dark:from-gray-800 dark:to-gray-500'>


                <div className='flex flex-col justify-center items-center'>
                    <h1 className={Styles.title}>{type}</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {type === 'SignUp' && <div className={Styles.inputField}>
                            <label htmlFor="name" className={Styles.label}>UserName</label>
                            <input type="text" id="name" placeholder='Amirgh8181' className={Styles.formInput}
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-red-600 ml-2 mt-2 text-xs'>please inter a name</span>}
                        </div>
                        }
                        <div className={Styles.inputField}>
                            <label htmlFor="email" className={Styles.label}>Email</label>
                            <input type="email" id="email" placeholder='amir.962@yahoo.com' className={Styles.formInput}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-600 ml-2 mt-2 text-xs'>please inter a email</span>}

                        </div>
                        <div className={Styles.inputField}>
                            <label htmlFor="password" className={Styles.label}>password</label>
                            <input type='password' id="password" placeholder='enter message' className={Styles.formInput}
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-600 ml-2 mt-2 text-xs'>please inter a password</span>}

                        </div>
                        <div className='w-full flex justify-center items-center'>
                            <button disabled={loading} type="submit" className={Styles.formBtn}>Submit</button>
                        </div>
                    </form>
                    <div className='mt-4'>
                        {type === "SignUp" ? 'you have existing account? ' : 'you dont have account '}
                        <Link href={type === "SignUp" ? '/login' : "SignUp"} className='text-blue-600'>{type === "SignUp" ? "login" : "SignUp"}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryForm