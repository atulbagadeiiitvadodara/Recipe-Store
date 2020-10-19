import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../Styles/OTPscreen.css'

const OTPscreen = () =>{

    const [otp, setOTP] = useState("");

    const handleInputChange = (e) => {
        setOTP(e.target.value);
        // console.log(otp);
	};

    return(
        <div className="OTP">
            <h2>Enter OTP to Proceed</h2>
            <form action="/payment">
                <input name="otp" placeholder="eg. 123456" onChange={handleInputChange} />
                <Link to={{
                    pathname: "/payment",
                    otpProp: `${otp}`
                }}>
                    <button>Submit</button>
                </Link>
            </form>
        </div>
    )
}

export default OTPscreen;
