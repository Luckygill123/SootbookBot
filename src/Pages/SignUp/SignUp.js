import React, { useState, useEffect } from 'react';
import locales from "../../Constants/en.json";
import FogoLogo from '../../assets/images/logo_fogo.svg';
import { Link, useNavigate } from "react-router-dom";
import CreatAccountPage from '../../Components/SignUpRegistration/CreateAccountPage';
import EmailVerifyPage from '../../Components/SignUpRegistration/EmailVerificationPage';
import RegistrationPage from '../../Components/SignUpRegistration/RegistrationPage';
import SubscriptionPlanPage from '../../Components/SignUpRegistration/SubscriptionPlanPage';
import PaymentMethodPage from '../../Components/SignUpRegistration/PaymentMethod';
import { CountryList } from '../../services/Countrylist.sevice';
import { setData, addData } from '../../Slices/CountryListSlice';
import { useSelector, useDispatch } from 'react-redux';
import './SignUp.scss';


function SignUp(props) {
    const data = useSelector((state) => state?.countrylist?.data.country);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [countryData, setCountryData] = useState('');
    const [createAccount, setCreateAccount] = useState(true);
    const [emailVerifyPage, setEmailVerifyPage] = useState(false);
    const [registrationPage, setRegistrationPage] = useState(false);
    const [subscriptionPlan, setSubscriptionPlan] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(false);
    const [stepperState, setStepperState] = useState([1]);
    const [amount, setAmount] = useState("")
    const stepperItem = [
        {
            label: "About yourself"
        },
        {
            label: "Verification"
        },
        {
            label: "Registration"
        },
        {
            label: "Subscribtion"
        },
        {
            label: "Payment"
        },
    ]
    function handleEmailverifyPage(index) {
        setEmailVerifyPage(true);
        setCreateAccount(false);
        setStepperState([...stepperState, index])
    }

    function handleContinueRegistration(index) {
        setEmailVerifyPage(false);
        setCreateAccount(false);
        setRegistrationPage(true)
        setStepperState([...stepperState, index])
    }

    function handlecontinueSubscription(index) {
        setEmailVerifyPage(false);
        setCreateAccount(false);
        setRegistrationPage(false);
        setSubscriptionPlan(true)
        setStepperState([...stepperState, index])
    }

    const handlePaymentMethod = (index, value) => {
        setEmailVerifyPage(false);
        setCreateAccount(false);
        setRegistrationPage(false);
        setSubscriptionPlan(false);
        setPaymentMethod(true);
        setStepperState([...stepperState, index]);
        setAmount(value)
    }

    function handleDrawer() {
        if (document.querySelector("#right_action.show")) {
            document.querySelector("#right_action.show").classList.remove("show")
        } else {
            document.querySelector("#right_action").classList.add("show")
        }

    }

    function handleCountryList() {
        CountryList().then((response) => {
            if (response && response.data) {
                dispatch(addData(response.data));
                // setCountryData(response.data)
            }

        })
    }

    useEffect(() => {
        document.scrollingElement.scrollTop = 0;
        handleCountryList()

    }, [])
    return (
        <React.Fragment>
            <div className='signUp_wrapper'>
                <div className='header'>
                    <div className='left_logoBlock' onClick={() => {
                        navigate("/")
                    }}>
                        <img src={FogoLogo} alt="fogo_logo"></img>
                    </div>
                    <div className='right_action' id="right_action">
                        <span className='closeBtn' onClick={() => handleDrawer()}>x</span>
                        <span className='dont_account'>{locales.already_have_account}</span>
                        <button className='signup_btn' onClick={() => {
                            navigate("/SignIn")
                        }}>{locales.signIn}</button>
                    </div>
                    <button className='burgerMenuBtn' onClick={() => handleDrawer()}>
                        <span className='seperator'></span>
                        <span className='seperator'></span>
                        <span className='seperator'></span>
                    </button>
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
                                    return (
                                        <li key={index} className={`${stepperState.includes(index + 1) ? `active` : ''}`}>
                                            <span className='index'>{index + 1}</span>
                                            <span className='text'>{item.label}</span>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                        {
                            createAccount && data && data.length > 0 && (
                                <CreatAccountPage countryDataList={data} emailVerifyPage={() => handleEmailverifyPage(2)} />
                            )
                        }
                        {
                            emailVerifyPage && (
                                <EmailVerifyPage continueRegistration={() => handleContinueRegistration(3)} />
                            )
                        }
                        {
                            registrationPage && (
                                <RegistrationPage continueSubscription={() => handlecontinueSubscription(4)} />
                            )
                        }
                        {
                            subscriptionPlan && (
                                <SubscriptionPlanPage paymethod={(value) => handlePaymentMethod(value, 5)} />
                            )
                        }
                        {
                            paymentMethod && (
                                <PaymentMethodPage paymentvalue={amount} />
                            )
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default SignUp;