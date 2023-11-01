"use client"
import React, { useEffect, useState } from 'react'
import './form.css'
import { SubmitHandler, useForm } from 'react-hook-form'

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
    <div className="form-container">
      <h1>Contact Us</h1>
      <form>
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder='amir'
            {...register("name", { required: true })}
          />
          {errors.name && <span>please inter a name</span>}
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder='amir.962@yahoo.com'
            {...register("email", { required: true })}
          />
          {errors.email && <span>please inter a email</span>}

        </div>
        <div className="input-field">
          <label htmlFor="password">password</label>
          <input type='password' id="password" placeholder='enter password'
            {...register("password", { required: true })}
          />
          {errors.password && <span>please inter a password</span>}

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactUsForm;