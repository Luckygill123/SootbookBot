import React, {useEffect, useState} from 'react';
import locales from "../../Constants/contant.json";
import FogoLogo from '../../assets/images/logo_fogo.svg';
import GoogleIcon from "../../assets/images/google_logo.svg";
import EyeOff from "../../assets/images/eye-off.svg";
import ResetPasswordModal from '../../Components/Modals/ResetPasswordModal';
import CreateNewPasswordModal from '../../Components/Modals/CreateNewPasswordModal';
import EmailVerificationModal from '../../Components/Modals/EmailVerificationModal';
import {Link, useNavigate  } from "react-router-dom";
import "./SignIn.scss";


function SignIn(props){
    const navigate = useNavigate();
const [open, setOpen] = useState(false);
const [signInView, setSignInView] = useState(true);
const [createPassState, setCreatePassState] = useState(false);
const [emailVerify, setEmailVerify] = useState(false);

function handlecloseState() {
    setOpen(false);
    setSignInView(true)
}

function handleCreatePassState(){
    setCreatePassState(true);
    setOpen(false)
}

function handleNextButtonClick(){
    setSignInView(true);
    setCreatePassState(false)
}

useEffect(() => {
    document.scrollingElement.scrollTop = 0
})
return(
    <React.Fragment>
      <div className='signIn_wrapper'>
           <div className='header'>
            <div className='left_logoBlock'>
                <img src={FogoLogo} alt="fogo_logo"></img>
            </div>
            <div className='right_action'>
                <span className='dont_account'>{locales.dont_have_account}</span>
                <button className='signup_btn' onClick={() => {
                    navigate("/SignUp")
                }}>{locales.signUp}</button>
            </div>
           </div>
           <div className={`main_container ${signInView && 'signInModal_show'}`}>
            {
                signInView && (
                    <div className='signIn_formBlock'>
                        <h2 className='title'>{locales.signin_into_account}</h2>
                        <div className='sign_in_google'>
                            <button className='googleButton' onClick={() => {
                                setEmailVerify(true);
                                setSignInView(false)
                            }}>
                                <span className='icon'>
                                    <img src={GoogleIcon} alt='google_icon'></img>
                                </span>
                                <span className='text'>{locales.signIn_google}</span>
                            </button>
                        </div>
                        <span className='or_seperator'>
                            <span className='text'>or</span>
                        </span>
                        <form className='form_container'>
                            <div className='username_fielbox'>
                                <label for="email_input">{locales.email_label}</label>
                                
                                <input type='text' className='email_input' id="email_input" placeholder='you@example.com'></input>
                                
                            </div>
                            <div className='password_fielbox'>
                                <label for="password_input">{locales.password_label}</label>
                                <div className='flexBox'>
                                <input type='password' className='password_input' id="password_input"></input>
                                <span className='eye_icon'>
                                    <img src={EyeOff} alt='eye_off_icon'></img>
                                </span>
                                </div>                                
                                <span className='pass_length_msg'>{locales.pass_length_msg}</span>
                            </div>
                            <div className='submit_action'>
                                <button className='submitBtn'>{locales.signIn}</button>
                            </div>
                            <div className='forgot_pass_action'>
                                <span className='link' onClick={() => {
                                    setSignInView(false)
                                    setOpen(true)}}>{locales.forgot_password}</span>
                            </div>
                        </form>
                    </div>
                )
            }
           </div>
        </div> 


        { open && (
            <ResetPasswordModal
            openState={open}
            handlecloseState={handlecloseState}
            CreatePasswordModal={handleCreatePassState}
            />
        )
            
        }

        {
            createPassState &&
          ( 
            <CreateNewPasswordModal
            creatPasswordState={createPassState}
            nextButtonClick={handleNextButtonClick}
            
            />
          )  
        }

        {
            emailVerify && (
                <EmailVerificationModal
                emailVerifyState={emailVerify}
                />
            )
        }
    </React.Fragment>
)
}

export default  SignIn;