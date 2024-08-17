import React, { useState, useEffect } from 'react';
import locales from "../../Constants/en.json";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { IndustryList } from '../../services/Industrylist.service';
import { setData, addData } from '../../Slices/IndustryListSlice';
import { FileUploader } from "react-drag-drop-files";
import { Registration } from '../../services/Registration.service';

function RegistrationPage(props) {
    const fileTypes = ["JPG", "PNG", "GIF"];
    const data = useSelector((state) => state);
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
    const [countryselectedData, setCountrySelectedData] = useState('');
    const [industryselectedData, setIndustrySelectedData] = useState('');
    const [companyTypeData, setCompanyTypeData] = useState('');
    const [address, setAddress] = useState("")
    const [companyname, setCompanyname] = useState('');
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [vat, setVat] = useState("");
    const [tin, setTin] = useState("");
    const [heardValue, setHeardValue] = useState("");
    const [multibranch, setMultiBranch] = useState("");
    const [subscribeNews, setSubscribeNews] = useState(false);
    const [termscondition, setTermscondition] =  useState(false);

    const handleChange = (event) => {
        setCountrySelectedData(event.target.value);
    };

    const handleindustryChange = (event) => {
        setIndustrySelectedData(event.target.value)
    }

    const handleIndustryList = () => {
        IndustryList().then((response) => {
            if (response && response.data) {
                dispatch(addData(response.data));
            }

        })
    }

    const handlefileChange = (file) => {
        setFile(file);
    };

    const handlecompanyname = (e) => {
        setCompanyname(e.target.value)
    }

    const handleCompanyType = (e) => {
        setCompanyTypeData(e.target.value)
    }

    const handleaddress = (e) => {
        setAddress(e.target.value)
    }

    const handleEmpNumber = (e) => {
        setEmployeeNumber(e.target.value)
    }

    const handleVat = (e) => {
        setVat(e.target.value)
    }

    const handleTin = (e) => {
        setTin(e.target.value)
    }

    const handleheard = (e) => {
        setHeardValue(e.target.value)
    }

    const handleMultiBranch = (event) => {
        setMultiBranch(event.target.value);
      };

      const handlesubscribeNews = (e) => {
        setSubscribeNews(e.target.checked)
      }

      const handletermcondition = (e) => {
        setTermscondition(e.target.checked)
      }

      const handleRegistration = () => {
        const userid = JSON.parse(localStorage.getItem('profileData')).vendor._id;
        const formData = {
            userid: userid,
            companyname : companyname,
            industryselectedData : industryselectedData,
            companyTypeData : companyTypeData, 
            countryselectedData : countryselectedData, 
            address : address, 
            tin :tin, 
            vat : vat, 
            file : file, 
            employeeNumber :employeeNumber,
            heardValue : heardValue, 
            multibranch : multibranch, 
            subscribeNews : subscribeNews
        }
        Registration(formData).then((response) => {
            console.log("registration--", response);
            if(response && response.data){
                window.localStorage.setItem('profileData', JSON.stringify(response.data));
                props.continueSubscription()
            }
        })
       

      }
    useEffect(() => {
        document.scrollingElement.scrollTop = 0;
        handleIndustryList()

    }, [])

    console.log("form--", companyname,industryselectedData, companyTypeData, countryselectedData, address, tin, vat, file, employeeNumber, heardValue, multibranch, subscribeNews)
    return (
        <React.Fragment>
            <div className='registrationPage_wrapper'>
                <h2 className='title'>{locales.registration_title}</h2>
                <div className='body_container'>
                    <div className='grid_box'>
                        <div className='input_flexBox'>
                            <label>Company Name</label>
                            <input type='text' className='input_text' value={companyname} onChange={handlecompanyname}></input>
                        </div>
                        <div className='select_flexBox industry_selectBox'>
                            <label>Industry</label>
                            <Select
                                className="industry_select"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={industryselectedData}
                                label="Age"
                                onChange={handleindustryChange}
                            >
                                {
                                    data?.industryList?.data?.industry &&
                                    data?.industryList?.data?.industry.length > 0 &&
                                    data?.industryList?.data?.industry.map((item, index) => {
                                        return (
                                            <MenuItem key={index} value={item._id}>{item.name}</MenuItem>
                                        )
                                    })
                                }

                            </Select>
                        </div>
                    </div>
                    <div className='grid_box'>
                        <div className='select_flexBox industry_selectBox'>
                            <label>Company Type</label>
                            <Select
                                className="industry_select"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={companyTypeData}
                                label="Age"
                                onChange={handleCompanyType}
                            >
                                <MenuItem value={"Pharma Chemist"}>Pharma Chemist</MenuItem>
                                <MenuItem value={"Medical"}>Medical</MenuItem>
                                <MenuItem value={"Food Research"}>Food Research</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className='grid_box'>
                        <div className='select_flexBox'>
                            <label>Country</label>
                            <Select
                                className="country_select"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={countryselectedData}
                                label="Age"
                                onChange={handleChange}
                            >
                                {
                                    data?.countrylist.data &&
                                    data?.countrylist.data.country &&
                                    data?.countrylist.data.country.map((item, index) => {
                                        return <MenuItem key={index} name={item.name} value={item._id}>{item.name}</MenuItem>
                                    })
                                }
                            </Select>
                        </div>
                        <div className='input_flexBox'>
                            <label>Address</label>
                            <input type='text' className='input_text' value={address} onChange={handleaddress}></input>
                        </div>
                    </div>
                    <div className='grid_box'>
                        <div className='input_flexBox'>
                            <label>TIN</label>
                            <input type='text' className='input_text' value={tin} onChange={handleTin}></input>
                        </div>
                        <div className='input_flexBox'>
                            <label>VAT</label>
                            <input type='text' className='input_text' value={vat} onChange={handleVat}></input>
                        </div>
                    </div>
                    <div className='dropbox_container'>
                        <label className='label'>VAT Certification/ Business Licensee</label>
                        <div className='dropBox'>
                            <div className='content'>
                                <span className='up_title'>Drop your files here or <span className='bluehighlight'>browse</span></span>
                                <span className='soft_title'>Maximum size: 50MB</span>
                            </div>
                            <FileUploader maxSize={50} classes="fileUploader" handleChange={handlefileChange} name="file" types={fileTypes} />
                        </div>

                    </div>
                    <div className='grid_box'>
                        <div className='select_flexbox'>
                            <div className='dropdown'>
                                <label>Employee Number</label>
                                <Select
                                    className="country_select"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={employeeNumber}
                                    label="Age"
                                    onChange={handleEmpNumber}
                                >
                                    <MenuItem value={1 - 10}>1-10</MenuItem>
                                    <MenuItem value={11 - 50}>11-50</MenuItem>
                                    <MenuItem value={51 - 100}>51-100</MenuItem>
                                </Select>
                            </div>
                            <div className='dropdown'>
                                <label>How do you heard about this?</label>
                                <Select
                                    className="country_select"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={heardValue}
                                    label="Age"
                                    onChange={handleheard}
                                >
                                    <MenuItem value={'From friends'}>From friends</MenuItem>
                                    <MenuItem value={"From pharmacies"}>From pharmacies</MenuItem>
                                    <MenuItem value={"Google"}>Google</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className='bottom_inputOption'>
                        <ul>
                            <li>
                                <FormControl className='switch_radio'>
                                    <FormLabel id="demo-radio-buttons-group-label">Do you have multi branches</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        value={multibranch}
                                        onChange={handleMultiBranch}
                                    >
                                        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio />} label="No" />

                                    </RadioGroup>
                                </FormControl>
                            </li>
                            <li>
                                <FormGroup className='checkBox_block'>
                                    <FormControlLabel control={<Checkbox checked={termscondition} onChange={handletermcondition}/>} label="By creating the account you agree terms and conditions" />
                                </FormGroup>
                            </li>
                            <li>
                                <FormGroup className='checkBox_block'>
                                    <FormControlLabel control={<Checkbox checked={subscribeNews} onChange={handlesubscribeNews} />} label="Subscribe me to the newsletter" />
                                </FormGroup>
                            </li>
                        </ul>
                    </div>
                    <div className='action'>
                        <button className='next_btn' 
                        disabled={
                            (companyname!== "" &&
                            industryselectedData!=="" &&
                            companyTypeData!=="" &&
                            countryselectedData!=="" &&
                            address!=="" &&
                            tin!=="" &&
                            vat!=="" &&
                            file!=="" &&
                            employeeNumber!=="" &&
                            heardValue!=="" &&
                            multibranch!=="" ) ? false: true 
                        }
                        onClick={() => handleRegistration()}>{locales.continue_to_subscription}</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RegistrationPage