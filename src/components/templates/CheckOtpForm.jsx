import React from 'react'
import { checkOtp } from 'services/auth';
import {setCookie} from '../../utils/cookie'
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../../services/user';
import styles from './CheckOtpForm.module.css'


function CheckOtpForm({code, setCode, mobile, setStep}) {
  const navigate = useNavigate();
  const {refetch}= useQuery(["profile"], getProfile)
  const submitHandeler = async (event) =>{
    event.preventDefault();
    // console.log({code, mobile});
    if(code.length !== 5) return;
    const {response, error} = await checkOtp(mobile, code)
    if (response){
      console.log(response);
      setCookie(response.data);
      navigate("/")
      refetch()
    }
    if(error){
      console.log(error.response.data.message
        );
    }
  }
  return (
    <form onSubmit={submitHandeler} className={styles.form}>
      <p>تایید کد ارسال شده</p>
      <span>کد پیامک شده به  "{mobile}" را وارد کنید.</span>
      <label htmlFor="input"></label>
      <input type="text" id="input" value={code} placeholder='کد تایید' onChange={e => setCode(e.target.value)} />
      <button type='submit'>ورود</button>
      <button onClick={()=> setStep(1)} className={styles.backButton}>تغییر شماره موبایل</button>
    </form>
  )
}

export default CheckOtpForm