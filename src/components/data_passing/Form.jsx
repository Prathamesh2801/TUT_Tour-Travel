import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Table from './Table';

export default function Form() {
    // const [email, setEmail] = useState('')
    // const [pass, setPass] = useState('')
    // const [submittedEmail, setSubmittedEmail] = useState('')
    // const [submittedPass, setSubmittedPass] = useState('')
    // const [isSubmit, setSubmit] = useState(false)
    // const navigate = useNavigate()
    const message = (e) => {
        e.preventDefault(); 
    toast.success('Welcom to your website!')
    }

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        

    })

    function handleChange(e) {
        // const name = e.target.name
        // const value = e.target.value 

        const { name, value } = e.target;
        
        // if (name === "email") {
  
        //     setUser({
        //         email: value,
        //         password: ''
        //     })
        // }
        // else {
        //     setUser({
        //         email: '',
        //         password: value
        //     })
        // }
        // setUser((prevVal) => {
        //     if (name === "email") {
        //         return setUser({
        //             email: value,
        //             password: prevVal.password
        //         })
        //     }
        //     else {
        //         setUser({
        //             email: prevVal.email,
        //             password: value
        //         })
        //     }
        // }

        // )

        setUser((preVal) => ({
            ...preVal, [name]: value
        }))
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setSubmittedEmail(email)
    //     setSubmittedPass(pass)

    //     setSubmit(true)
    //     console.log("Email : ", email)

    //     navigate('/')
    // }

    // function emailChange(e) {
    //     setEmail(e.target.value)
    //     setSubmit(false)
    // }



    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account 

                        </h1>
                        <form  onSubmit={message}  class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="text" name="username" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleChange} />
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleChange} />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange} />
                            </div>


                            <button type="submit"  class="w-full text-white  bg-blue-700  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">Create an account</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Table  user={user}/>
        </section>
    )
}
