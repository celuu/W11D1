import { useState, useEffect } from "react";

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

    const handleChange = ((incomingKey) => {
        return e => {
            const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
            setUser(newObj);
        }

    });

    const handleSubmit = ((e) => {
        e.preventDefault();
        console.log(user);


        setUser({
            name: '',
            email: '',
            phoneNumber: '',
            phoneType: '',
            staff: '',
            bio: '',
            emailNotifications: ''
        });
        





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
        </form>
        </>
    )
}

export default Form;