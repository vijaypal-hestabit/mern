import { useState } from "react";
// import Button from './Button'

let ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [desc, setDesc] = useState('')
    const [nameErr, setNameErr] = useState(0)
    const [emailErr, setEmailErr] = useState(0)
    const [numberErr, setNumberErr] = useState(0)
    const [descErr, setDescErr] = useState(0)
    const [validName, isValidName] = useState(false)
    const [validEmail, isValidEmail] = useState(false)
    const [validNumber, isValidNumber] = useState(false)
    const [validDesc, isValidDesc] = useState(false)

    let nameHandler = (e) => {
        let name = e.target.value
        if (name.length > 0 && /^[a-zA-Z]*$/g.test(name)) {
            setNameErr(0)
            isValidName(true)
        } else {
            setNameErr(1)
        }
        setName(name)
    }

    let emailHandler = (e) => {
        let email = e.target.value
        if (email.length > 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailErr(0)
            isValidEmail(true)
        } else {
            setEmailErr(1)
        }
        setEmail(email)
    }
    let numberHandler = (e) => {
        let number = e.target.value
        if (number.length > 0 && /^[0-9]*$/g.test(number)) {
            setNumberErr(0)
            isValidNumber(true)
        } else {
            setNumberErr(1)
        }
        setNumber(number)
    }
    let descHandler = (e) => {
        let desc = e.target.value
        let wordCount = desc.split(" ").length

        if (wordCount >= 10 && wordCount <= 100) {
            setDescErr(0)
            isValidDesc(true)
        } else {
            setDescErr(1)
        }
        setDesc(desc)
    }

    let getFormData = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            setNameErr(2)
        }

        if (email.length === 0) {
            setEmailErr(2)
        }

        if (number.length === 0) {
            setNumberErr(2)
        }

        if (desc.length === 0) {
            setDescErr(2)
        }

        if (validName && validEmail && validNumber && validDesc) {
            let userData = {
                "body":
                {
                    "email": email,
                    "message": desc,
                    "name": name,
                    "tel": number
                }
            }
            fetch('https://gradbay.hestawork.com/api/contact/submit ', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(userData) // body data type must match "Content-Type" header
            }).then(response => response.json())
                .then(userData =>
                    {
                        if(userData.success){
                            alert(userData.successMsg)
                        }
                    }
                    // console.log(userData)
                )
            // console.log(userData)
        }


    }
    return (
        <div >
            <form onSubmit={getFormData}>
                <div>
                    <input type="text" onChange={nameHandler} placeholder="Enter name" />
                    <div className="error">{nameErr === 1 ? 'Enter alphabet only' : nameErr === 2 ? 'Enter your name' : ''}</div>
                </div>
                <div>
                    <input type="text" onChange={emailHandler} placeholder="Enter email" /><br />
                    <div className="error">{emailErr === 1 ? 'Enter valid email' : emailErr === 2 ? 'Enter your email' : ''}</div>
                </div>
                <div>
                    <input type="text" onChange={numberHandler} placeholder="Enter phone" /><br />
                    <div className="error">{numberErr === 1 ? 'Enter number only' : numberErr === 2 ? 'Enter your number' : ''}</div>
                </div>
                <div>
                    <textarea onChange={descHandler} placeholder="Enter Description" rows='5' /><br />
                    <div className="error">{descErr === 1 ? 'Enter min 10 and max 100 word' : descErr === 2 ? 'Write something here' : ''}</div>
                </div>
                <input type="submit" value="submit" />
                {/* <Button backgroundColor="red" title="Save"/>
                <Button backgroundColor="green"/>
                <Button backgroundColor="yellow"/>
                <Button backgroundColor="blue"/>
                <Button/> */}
            </form>
        </div>
    )
}

export default ContactUs;