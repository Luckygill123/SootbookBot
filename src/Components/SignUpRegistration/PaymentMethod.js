import React, { useState } from 'react';
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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function PaymentMethodPage(props){

    return (
        <React.Fragment>
            <div className='paymentMethodPage_wrapper'>
            <h2 className='title'>{locales.payment_method_title}</h2>
            <div className='body_container'>
            <FormControl className='paymentModes'>
            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel className='bank_transfer' value="Bank transfer" control={<Radio />} label="Bank transfer " />
                <FormControlLabel className='pay_pal' value="PayPal" control={<Radio />} label="PayPal" />
                <FormControlLabel className='credit_debit' value="Credit/Debit card" control={<Radio />} label="Credit/Debit card" />
            </RadioGroup>
            </FormControl>
            <div className='form_container'>
                <form>
            <div className='input_box name_cardBox'>
                <label>
                Name on card (As written on card)
                </label>
                <input type='text' placeholder='NAME SURNAME' className='input_text'></input>
            </div>
            <div className='input_box card_number_box'>
                <label>
                Name on card (As written on card)
                </label>
                <input type='text' placeholder='xxxx-xxxx-xxxx-xxxx' className='input_text'></input>
            </div>
            <div className='input_box grid_box'>
                <div className='flex_item'>
                    <label>Expiry date</label>
                    <input type="text" placeholder='MM/YY' className='input_text'></input>
                </div>
                <div className='flex_item cvv_code'>
                    <label>Security code</label>
                    <input type="text" placeholder='MM/YY' className='input_text'></input>
                </div>
            </div>
            <div className='action'>
                <button className='pay_btn'>{locales.pay_now}</button>
            </div>
            </form>
            </div>
            
            </div>
            </div>
        </React.Fragment>
    )
}

export default PaymentMethodPage