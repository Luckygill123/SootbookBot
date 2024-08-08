import React, { useState } from 'react';
import locales from "../../Constants/contant.json";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function RegistrationPage(props){
    return (
        <React.Fragment>
            <div className='registrationPage_wrapper'>
            <h2 className='title'>{locales.registration_title}</h2>
            <div className='body_container'>
                <div className='grid_box'>
                    <div className='input_flexBox'>
                        <label>Company Name</label>
                        <input type='text' className='input_text'></input>
                    </div>
                    <div className='select_flexBox industry_selectBox'>
                        <label>Industry</label>
                        <Select
                        className="industry_select"
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
                    </div>
                </div>
                <div className='grid_box'>
                    <div className='select_flexBox industry_selectBox'>
                        <label>Company Type</label>
                        <Select
                        className="industry_select"
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
                    </div>
                </div>
                <div className='grid_box'>
                    <div className='select_flexBox'>
                        <label>Country</label>
                        <Select
                        className="country_select"
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
                    </div>
                    <div className='input_flexBox'>
                        <label>Address</label>
                        <input type='text' className='input_text'></input>
                    </div>
                </div>
                <div className='grid_box'>
                <div className='input_flexBox'>
                        <label>TIN</label>
                        <input type='text' className='input_text'></input>
                    </div>
                    <div className='input_flexBox'>
                        <label>VAT</label>
                        <input type='text' className='input_text'></input>
                    </div>
                </div>
                <div className='dropbox_container'>
                    <label>VAT Certification/ Business Licensee</label>
                    <div className='dropBox'>
                        <div className='content'>
                            <span className='up_title'>Drop your files here or <span className='bluehighlight'>browse</span></span>
                            <span className='soft_title'>Maximum size: 50MB</span>
                        </div>
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
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                        >
                        <MenuItem value={10}>IND</MenuItem>
                        <MenuItem value={20}>USA</MenuItem>
                        <MenuItem value={30}>ENG</MenuItem>
                        </Select>
                        </div>
                        <div className='dropdown'>
                            <label>How do you heard about this?</label>
                            <Select
                        className="country_select"
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
                            >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                                
                            </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                        <FormGroup className='checkBox_block'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="By creating the account you agree terms and conditions" />
                        </FormGroup>
                        </li>
                        <li>
                        <FormGroup className='checkBox_block'>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Subscribe me to the newsletter" />
                        </FormGroup>
                        </li>
                    </ul>
                </div>
                <div className='action'>
                    <button className='next_btn' onClick={() => props.continueSubscription()}>{locales.continue_to_subscription}</button>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default RegistrationPage