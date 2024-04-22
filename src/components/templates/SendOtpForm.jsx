import { SendOtp } from "../../services/auth";
import styles from './SendOtpForm.module.css'


function SendOtpForm({setStep, setMobile, mobile}) {

    const submitHandeler = async (event) =>{
        event.preventDefault()
        if( mobile.length !== 11) return;

        console.log(mobile);
        const {response, error} =await SendOtp(mobile)
        console.log({response, error});
        // console.log(event);
        if(response) setStep(2)
    }

  return (
    <form onSubmit={submitHandeler} className={styles.form}>
        <p>ورود به حساب کاربری</p>
        <span>
            برای استفاده از امکانات دیوار، لطفا شماره خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد.
        </span>
        <label htmlFor="input"> شماره موبایل خود را وارد کنید</label>
            <input 
                type="number" 
                id="input" 
                placeholder="شماره موبایل" 
                value={mobile}
                onChange={e => setMobile(e.target.value)}
                />
                <button type='submit'>ارسال کد تایید</button>
        
    </form>
  )
}

export default SendOtpForm