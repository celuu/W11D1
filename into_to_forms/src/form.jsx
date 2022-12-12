import { useState } from "react";

function Form(props){

    const[user, setUser] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        phoneType: '',
        staff: '',
        bio: '',
        emailNotifications: ''
    })

    const [errors, setErrors] = useState([]);
    const validate = (()=>{
        let errors = [];

        if (user.name.length === 0){
            errors.push('first name cannot be blank');
        }
        if (user.email.length === 0 || !user.email.includes('@') || !user.email.includes('.com') ){
            errors.push('invalid email')
        }
        if (user.phoneNumber.length > 1){
            if (user.phoneNumber.length !== 10){
                errors.push('invalid phone number')
            }
        }
        if (user.bio.length > 280){
            errors.push('Too many characters')
        }
        return errors;
    });

    const handleChange = ((incomingKey) => {
        return e => {
            const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
            setUser(newObj);
        }

    });

    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(user);
        let errors = validate();
        console.log(errors);

        if (errors.length){
            setErrors(errors)
        } else {
            setUser({
                name: '',
                email: '',
                phoneNumber: '',
                phoneType: '',
                staff: '',
                bio: '',
                emailNotifications: ''
            });
            setErrors([]);
        }
    })

    const showErrors = (()=>{
        if (!errors.length){
            return null;
        }
        return(
            <ul>
                {errors.map((error, i)=> <li key={i}>{error}</li>)}
            </ul>
        )
    })


    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Name" onChange={handleChange('name')} value={user.name}></input>
            <input type='text' placeholder="Email" onChange={handleChange('email')} value={user.email}></input>
            <input type='tel' placeholder="Phone Number" onChange={handleChange('phoneNumber')} value={user.phoneNumber}></input>
            <select type='textbox' placeholder="Phone Type" onChange={handleChange('phoneType')} value={user.phoneType}>
                <option value='home'>Home</option>
                <option value='work'>Work</option>
                <option value='mobile'>Mobile</option>
            </select>
            <label>Instructor
                <input type='radio' onChange={handleChange('staff')} value="instructor"></input>
            </label>
             <label>Student
                <input type='radio' onChange={handleChange('staff')} value="student"></input>
            </label>
            
            <input type='textarea' placeholder="Bio" onChange={handleChange('bio')} value={user.bio}></input>
            <label>Yes
                <input type='checkbox' onChange={handleChange('emailNotifications')} value='yes'></input>
            </label>
            <label>No
                <input type='checkbox' onChange={handleChange('emailNotifications')} value='no'></input>
            </label>
            <button>Submit</button>
            {showErrors()}
        </form>
        </>
    )
}

export default Form;