import React, { useState } from 'react'
import "./FormFooter.css"
import gtmLogo from "../img/gtmLogo.png"
import axios from 'axios'
const FormFooter = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", formData)
            console.log("Data Response", res.data)
        } catch (error) {
            console.log("Error while sending you data")
        }
    }

    return (
        <>
            <main>
                <div className="mainContainer">
                    <div className="myBox">
                        <div className="imgBox">
                            <img src={gtmLogo} alt="" />
                        </div>
                        <h1 className='unpaidHeading iconAndText'>Unpaid Professionals</h1>
                        <div className="iconAndText">
                            <p>Hii We're UI/UX Designers</p>
                        </div>
                        <div className="iconAndText">
                            <img src="https://png.pngtree.com/png-vector/20191021/ourmid/pngtree-vector-location-icon-png-image_1834331.jpg" alt="" />
                            <p>6969 Gali, Mohalla 420 Nala Sopara</p>
                        </div>
                        <div className="iconAndText">
                            <img src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-email-icon-png-image_1757854.jpg" alt="" />
                            <p>Hit&runoverme@200speed.com</p>
                        </div>
                        <div className="iconAndText">
                            <img src="https://w7.pngwing.com/pngs/421/683/png-transparent-computer-icons-mobile-phones-telephone-email-home-business-phones-phone-icon-miscellaneous-angle-service-thumbnail.png" alt="" />
                            <p>(91+) 6996878896</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="myBox">
                        <h1 className='contactHeading'>Contact Us</h1>
                        <input onChange={handleChange} value={formData.name} className='inputForm' name='name' type="text" placeholder='Name' />
                        <input onChange={handleChange} value={formData.number} className='inputForm' name='number' type="number" placeholder='Number' />
                        <input onChange={handleChange} value={formData.email} className='inputForm' name='email' type="email" placeholder='Email' />
                        <input onChange={handleChange} value={formData.message} className='inputForm inputTextArea' name='message' type="text" placeholder='Message' />
                        <button className='inputForm' type='submit'>Submit</button>
                    </form>
                    <div className="myBox">
                        <div className="footerPages">
                            <h1 className='companyHeading'>Company</h1>
                            <a href="/">About Us</a>
                            <a href="/">Careers</a>
                            <a href="/">FAQs</a>
                            <a href="/">Contact Us</a>
                        </div>
                        <div className="imgLogoFooter">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="" />
                            <img src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png" alt="" />
                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default FormFooter