import React, { useState } from 'react';
import locales from "../../Constants/contant.json";
import GoogleIcon from "../../assets/images/google_logo.svg";
import EyeOff from "../../assets/images/eye-off.svg";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link, useNavigate } from "react-router-dom";


function CreatAccount(props) {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className='creatAccountForm_wrapper'>
             <div className='form_container'>
                <form>
                    <h2 className='page_title'>{locales.create_account}</h2>
                    <div className='signup_google'>
                    <button className='googleButton' onClick={() => {
                                // setEmailVerify(true);
                                // setSignInView(false)
                            }}>
                                <span className='icon'>
                                    <img src={GoogleIcon} alt='google_icon'></img>
                                </span>
                                <span className='text'>{locales.signIn_google}</span>
                            </button>
                    </div>
                    <div className='or_seperate'>
                        or
                    </div>
                    <div className='input_flexBox'>
                        <label>{locales.full_name_label}</label>
                        <input type='text' className='text_input'></input>
                    </div>
                    <div className='input_flexBox'>
                        <label>{locales.email_label}</label>
                        <input type='text' className='text_input'></input>
                    </div>
                    <div className='input_flexBox password_box'>
                        <label>{locales.password_label}</label>
                        <div className='grid_box'>
                        <input type='text' className='text_input'></input>
                        <span className='eye_icon'>
                                    <img src={EyeOff} alt='eye_off_icon'></img>
                                </span>
                                <span className='pass_length_info'>{locales.pass_length_msg}</span>
                        </div>
                    </div>
                    <div className='input_flexBox phonenumber_box'>
                        <label>{locales.phone_number_label}</label>
                        <div className='grid_box'>
                        <Select
                        className="country_code"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                        >
                        <MenuItem value={10}>IND</MenuItem>
                        <MenuItem value={20}>USA</MenuItem>
                        <MenuItem value={30}>ENG</MenuItem>
                        </Select>
                        <input type='text' className='phone_input'></input>
                        </div>
                        
                    </div>
                    <div className='submit_action'>
                        <button className='continue_btn' onClick={() => props.emailVerifyPage()}>{locales.continue_to_verification}</button>
                    </div>
                </form>
             </div>
            </div>
        </React.Fragment>
    )
}


export default CreatAccount;