import React from 'react'

const Contact = () => {
    return (
        <>
            <h1 className='text-center font-bold underline mt-2'>Contact Page</h1>
            <div className="container flex w-3/4 m-auto my-5">

                <div className="address w-1/2 bg-green-300 p-8 rounded-md me-10">
                    <h1> Our Store</h1>
                    <h2> Lagankhel, Lalitpur</h2>
                    <h2> Phone: 01 -5523889</h2>
                    <h3> Email: info@ourstore.com</h3>
                    <h3> Website: www.ourstore.com</h3>
                </div>
                <div className="contactform bg-slate-400 p-8 w-1/2 rounded-md">

                    <h1 className='text-center'>Contact Form</h1>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' className='w-full outline-gray-200 px-4 py-1 rounded-md' />

                    <label htmlFor="sub">Subject</label>
                    <input type="text" id='sub' className='w-full outline-gray-200 px-4 py-1 rounded-md' />

                    <label htmlFor="body">Body</label>
                    <textarea id="body" className='w-full px-4 py-1 rounded-md outline-gray-200 resize-none'></textarea>

                    <button className='submit w-full mt-2'>Submit</button>
                </div>
            </div>
            <div className="map w-3/4 m-auto my-5 rounded-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.662849531253!2d85.31829230997366!3d27.665901027220944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19000a4f32cf%3A0x53f71813950137ff!2sEvolve%20IT%20Hub%20Nepal!5e0!3m2!1sen!2snp!4v1710145132986!5m2!1sen!2snp" width="100%" height="450" style={{ "border": "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Contact