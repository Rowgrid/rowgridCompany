import React, { useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import '../App.css'

function Contact() {
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setnumber] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await axios
            .post(`https://rowgrid-company-r7gz.vercel.app/`, {
                Name,
                email,
                number,
                message,
            })
            .then((res) => {
                toast.success(res.data.message);
                setIsLoading(false);
                setName("");
                setEmail("");
                setnumber("");
                setMessage("");
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className=' md:flex md:justify-center md:items-center px-4'>
                    <div className='lg:w-[60%] bg-third md:w-[80%] md:h-full  '>
                        <div>
                            <div className=' flex flex-col justify-center items-center'>
                                <h1 className='cl font-bold text-6xl'>Write Us</h1>
                                <div className='w-32 h-1 bg-secondry rounded'></div>

                            </div>

                            <div className='flex flex-col space-y-4 m-6'>
                                <input value={Name}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setName(value.charAt(0).toUpperCase() + value.slice(1));
                                    }} className='h-10 in ' id='name' placeholder="Name" type="text" />
                                <input id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} className='h-10 in' placeholder="Email" type="email" />
                                <input  id="number"
                                    value={number}
                                    onChange={(e) => setnumber(e.target.value)} className='h-10 in' placeholder="Phone" type="phone" />
                            </div>
                        </div>
                        <div className=' m-6'>
                            <textarea id="message"
                                value={message}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setMessage(value.charAt(0).toUpperCase() + value.slice(1));
                                }} className=' my-4 h-32 in  w-[100%] ' placeholder='Message' name="" ></textarea>
                            <button className='w-full h-10 bg-secondry hover:bg-yellow-500 hover:text-[black] cursor-pointer mb-14 text-xl cl'>Submit</button>
                        </div>


                    </div>
                </div>
            </form>

        </>
    )
}

export default Contact
