import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#F2EDEB] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/9b950076-bfba-418b-9022-a86bafc72dc4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ba7ba1] text-[#2b2b46]'>Contact</p>
                <p className='text-[#2b2b46] font-medium py-4'>// Submit the form below or shoot me an email - nettles.anna@gmail.com</p>
            </div>
            <input className='bg-[#ba7ba1] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ba7ba1]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ba7ba1] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-[#2b2b46] border-[#2b2b46] border-2 hover:bg-[#2b2b46] hover:text-[#F2EDEB] 
            hover:border-[#F2EDEB] px-4 py-3 my-8 mx-auto flex items-center font-medium'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact