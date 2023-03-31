import React from 'react'
import { MenuItem } from '@mui/material'
import Select from '@mui/material/Select';
const SelectOptions = ({newAmount, updateAmount}) => {
    const selectAmount = 20;
    if(newAmount > selectAmount){
        selectAmount = newAmount;
    }
    //trick to create an array with a specific length..
  return (
            <Select id='amount' value={newAmount} className='productAmount' onChange={updateAmount}>
        {[...Array(selectAmount)].map((item,idx)=>{
            return <MenuItem key={idx} value={idx+1}>{idx+1}</MenuItem>
        })}
        </Select>
  )
}

export default SelectOptions