import React, { useState } from 'react';
import locales from "../../Constants/contant.json";

function EmailVerifyPage(props){
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
                    <input type='text' className='input_code'></input>
                    <input type='text' className='input_code'></input>
                    <input type='text' className='input_code'></input>
                    <input type='text' className='input_code'></input>
                    <input type='text' className='input_code'></input>
                    <input type='text' className='input_code'></input>

                    </div>
                </div>
                <div className='action'>
                    <button className='next_btn' onClick={() => props.continueRegistration()}>{locales.continue_to_registration}</button>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default EmailVerifyPage