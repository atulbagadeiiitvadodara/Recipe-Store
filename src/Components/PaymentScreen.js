import React from 'react'
import '../Styles/PaymentScreen.css'

const PaymentScreen = (props) =>{

    return(
        <div>
            {
                (props.location.otpProp === "123456")
                ? <div className="resultPage"> Your Payment was Successful ! </div>
                : <div className="resultPage"> Failure! Wrong or Invalid OTP. </div>
            } 
        </div>
    )
}

export default PaymentScreen;