import React, { useState, useEffect } from 'react';
import locales from "../../Constants/contant.json";
import FogoLogo from '../../assets/images/logo_fogo.svg';
import { Link, useNavigate } from "react-router-dom";
import CreatAccountPage from '../../Components/SignUpRegistration/CreateAccountPage';
import EmailVerifyPage from '../../Components/SignUpRegistration/EmailVerificationPage';
import RegistrationPage from '../../Components/SignUpRegistration/RegistrationPage';
import SubscriptionPlanPage from '../../Components/SignUpRegistration/SubscriptionPlanPage';
import PaymentMethodPage from '../../Components/SignUpRegistration/PaymentMethod';
import './SignUp.scss';


function SignUp(props) {
    const navigate = useNavigate();
    const [createAccount, setCreateAccount] =  useState(true);
    const [emailVerifyPage, setEmailVerifyPage] =  useState(false);
    const [registrationPage, setRegistrationPage] =  useState(false);
    const [subscriptionPlan, setSubscriptionPlan] =  useState(false);
    const [paymentMethod, setPaymentMethod] =  useState(false);
    const [stepperState, setStepperState] =  useState([1]);
    const stepperItem = [
        {
            label:"About yourself"
        },
        {
            label:"Verification"
            },
        {
            label:"Registration"
                },
        {
            label:"Subscribtion"
                    },
        {
            label:"Payment"
                        },
    ]

    function handleEmailverifyPage(index){
        setEmailVerifyPage(true);
        setCreateAccount(false);
        setStepperState([...stepperState, index])
    }

    function handleContinueRegistration(index){
        setEmailVerifyPage(false);
        setCreateAccount(false);
        setRegistrationPage(true)
        setStepperState([...stepperState, index])
    }

    function handlecontinueSubscription(index){
        setEmailVerifyPage(false);
        setCreateAccount(false);
        setRegistrationPage(false);
        setSubscriptionPlan(true)
        setStepperState([...stepperState, index])
    }

    const handlePaymentMethod = (index) => {
        setEmailVerifyPage(false);
        setCreateAccount(false);
        setRegistrationPage(false);
        setSubscriptionPlan(false);
        setPaymentMethod(true);
        setStepperState([...stepperState, index])
    }

    useEffect(() => {
        document.scrollingElement.scrollTop = 0
    }) 
    return (
        <React.Fragment>
            <div className='signUp_wrapper'>
                <div className='header'>
                    <div className='left_logoBlock'>
                        <img src={FogoLogo} alt="fogo_logo"></img>
                    </div>
                    <div className='right_action'>
                        <span className='dont_account'>{locales.already_have_account}</span>
                        <button className='signup_btn' onClick={() => {
                            navigate("/SignIn")
                        }}>{locales.signIn}</button>
                    </div>
                </div>
                <div className='main_container'>
                    <div className={`content_wrapper 
                        ${createAccount && 'create_account'}
                        ${emailVerifyPage && 'email_verify'} 
                        ${registrationPage && 'registration'}
                        ${subscriptionPlan && 'subscriptionPlan'}
                        ${paymentMethod && 'paymentMethod'}`}>
                    <div className='stepper_container'>
                        <ul>
                            {stepperItem && stepperItem.length > 0 && stepperItem.map((item, index) => {
                                return  (
                                    <li key={index} className={`${stepperState.includes(index+1) ? `active` :''}`}>
                                        <span className='index'>{index+1}</span>
                                        <span className='text'>{item.label}</span>                                    
                                        </li>
                                )
                            })}
                            
                        </ul>
                    </div>
                    {
                        createAccount && (
                            <CreatAccountPage emailVerifyPage={() => handleEmailverifyPage(2)}/>
                        )
                    }
                    {
                        emailVerifyPage && (
                            <EmailVerifyPage continueRegistration={() => handleContinueRegistration(3)}/>
                        )
                    }
                    {
                        registrationPage && (
                            <RegistrationPage continueSubscription={() => handlecontinueSubscription(4)}/>
                        )
                    }
                    {
                        subscriptionPlan && (
                            <SubscriptionPlanPage paymethod={() => handlePaymentMethod(5)}/>
                        )
                    }
                    {
                      paymentMethod  && (
                            <PaymentMethodPage/>
                        )
                    }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default SignUp;