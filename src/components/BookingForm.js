import { useState } from 'react';

export default function BookingForm(){
const [formData,setFormData]=useState({name:'',email:'',guests:'',date:''});
const [errors,setErrors]=useState({});

const validate=()=>{
 let e={};
 if(!formData.name)e.name='Name is required';
 if(!formData.email.includes('@'))e.email='Valid email required';
 if(formData.guests<1||formData.guests>10)e.guests='Guests must be between 1 and 10';
 if(!formData.date)e.date='Date is required';
 setErrors(e);
 return Object.keys(e).length===0;
}

const handleSubmit=(x)=>{
x.preventDefault();
if(validate())alert('Booking successful!');
}

const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
}

return(
<form onSubmit={handleSubmit}>
<label>Name</label>
<input name='name' onChange={handleChange}/>
{errors.name && <p>{errors.name}</p>}

<label>Email</label>
<input name='email' onChange={handleChange}/>
{errors.email && <p>{errors.email}</p>}

<label>Guests</label>
<input name='guests' type='number' onChange={handleChange}/>
{errors.guests && <p>{errors.guests}</p>}

<label>Date</label>
<input name='date' type='date' onChange={handleChange}/>
{errors.date && <p>{errors.date}</p>}

<button type='submit'>Reserve Table</button>
</form>
)
}
