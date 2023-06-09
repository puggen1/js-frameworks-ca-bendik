import {useState} from 'react'
import {useForm} from 'react-hook-form'
import InputSection from '../../components/Input'
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactMain } from './index.styles';
import { schema } from '../../utils/schema/contactSchema';
import Button from '../../components/Button';
import { Alert, Snackbar, Typography } from '@mui/material';
/**
 * @description a contact page with 4 input / text areas, console.log()'s the data if all requirement of shcema is met
 * @returns the contact page
 */
const Contact = () => {
  const [open, setOpen] = useState(false);
  const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})
  //logging out the  form data
  const onSubmit = (data) => {
    setOpen(false)
    console.log(data)
    setOpen(true)
  }
  return (
    <>
    { open ?  <Snackbar open={open} autoHideDuration={2000}
  onClose={()=>{setOpen(false)}}
  anchorOrigin={{ vertical:"top", horizontal:"center" }}>
    <Alert severity="success" sx={{ width: '100%' }}>
      Message sent!
    </Alert>
  </Snackbar>:null}
    <ContactMain>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputSection id="fullName" hookData="fullName" errors={errors} hookFunction={register} placeholder="Full Name"  inputType="input"/>
        <InputSection id="email" hookData="email" errors={errors} hookFunction={register} placeholder="Email" inputType="input"/>
        <InputSection id="subject" hookData="subject" errors={errors} hookFunction={register} placeholder="Subject"  inputType="input"/>
        <InputSection id="body" hookData="body" errors={errors} hookFunction={register} placeholder="Body" inputType="textarea"/>
        <div className='submit'><Button  type="submit" text="Send"/>
        {open && <Typography variant="body1" component="p">Message sent!</Typography>}
</div>
      </form>
    </ContactMain>
    </>
  )
}

export default Contact