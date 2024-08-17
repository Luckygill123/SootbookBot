import React, { useState, useRef } from 'react';
import locales from "../../Constants/en.json";
import OtpInput from 'react-otp-input';
import { Otpverification } from '../../services/Otpverfication.service';

function EmailVerifyPage(props) {

    const [otp, setOtp] = useState('');

    const handleotpVerify = () => {

        const userid = JSON.parse(localStorage.getItem('profileData')).vendor._id;
        Otpverification(userid, otp).then((response) => {
            if(response && response.statusText == "OK"){
               if(response.data?.message == locales.success_otp_message){
                props.continueRegistration()
               }
            }

    
        })
    }


    return (
        <React.Fragment>
            <div className='emailverifyPage_wrapper'>
                <h2 className='title'>{locales.check_email_text}</h2>
                <div className='body_container'>
                    <p className='email_info_text'>{locales.email_info_text}</p>
                    <span className='otp_verify_title'>{locales.otp_verification_title}</span>
                    <div className='otp_verification_box'>
                        <label className='label'>{locales.verification_code_text}</label>
                        <div className='flex_box'>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span className='seperator'></span>}
                                renderInput={(props) => <input {...props} />}
                            />
                        </div>
                    </div>
                    <div className='action'>
                        <button className='next_btn' onClick={() => {
                            handleotpVerify()
                            }}>{locales.continue_to_registration}</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmailVerifyPage