import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { useState } from "react";
import styles from './AddPost.module.css'
import { getCookie } from "../../utils/cookie";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null
  })
  const {data} = useQuery(["get-categories"], getCategory);
  const chengHandeler = event =>{
    // console.log(event.target.name);
    if (event.target.name !== "images"){
      setForm({...form, [event.target.name]:event.target.value})
      console.log(form);
    }else{
      setForm({...form, [event.target.name]:event.target.files[0]});
    }
  }
  const addHandeler = event =>{
    event.preventDefault();
    const formData = new FormData();
    for (let i in form){
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");
    axios.post("http://localhost:3400/post/create", formData, {
      headers:{
        "Content-Type" : "multipart/form-data",
        Authorization: `bearer ${token}`
      },
    })
    .then(res =>toast.success(res.data.message))
    .catch((error)=>toast.error("مشکلی پیش آمد."));

    // console.log(formData);
  }

  return (
    <form onChange={chengHandeler} className={styles.form}>
        <h3>افزودن آگهی</h3>
        <label htmlFor="title">عنوان</label>
        <input type="text" name="title" id="title"/>
        <label htmlFor="title">توضیحات</label>
        <textarea name="content" id="content" />
        <label htmlFor="amount">قیمت</label>
        <input type="number" name="amount" id="amount"/>
        <label htmlFor="city">شهر</label>
        <input type="text" name="city" id="city"/>
        <label htmlFor="category">دسته بندی</label>
        <select name="category" id="category">
            {data?.data.map(i => 
            <option key={i._id} value={i._id}>
            {i.name}
            </option>)}
        </select>
        <label htmlFor="images">عکس</label>
        <input type="file" name="images" id="images"/>
        <button onClick={addHandeler}>ایجاد</button>
        <Toaster />
    </form>
  )
}

export default AddPost