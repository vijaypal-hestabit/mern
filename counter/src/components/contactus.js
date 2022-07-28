import { useState } from "react";


let ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [desc, setDesc] = useState('')
    const [nameErr, setNameErr] = useState(0)
    const [emailErr, setEmailErr] = useState(0)
    const [numberErr, setNumberErr] = useState(0)
    const [descErr, setDescErr] = useState(0)

    let nameHandler = (e) => {
        let name = e.target.value
        if (name.length > 0 && /^[a-zA-Z]*$/g.test(name)) {
            setNameErr(0)
        } else {
            setNameErr(1)
        }
        setName(name)
    }

    let emailHandler = (e) => {
        let email = e.target.value
        if (email.length > 0 && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailErr(0)
        } else {
            setEmailErr(1)
        }
        setEmail(email)
    }
    let numberHandler = (e) => {
        let number = e.target.value
        if (number.length > 0 && /^[0-9]*$/g.test(number)) {
            setNumberErr(0)
        } else {
            setNumberErr(1)
        }
        setNumber(number)
    }
    let descHandler = (e) => {
        let desc = e.target.value
        let wordCount  = desc.split(" ").length

        if (wordCount >= 10 && wordCount <=100) {
            setDescErr(0)
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

        // console.log(name)
        // console.log(email)
        // console.log(number)
        // console.log(desc)

    }
    return (
        <div >
            <form onSubmit={getFormData}>
                <div>
                    <input type="text" onBlur={nameHandler} placeholder="Enter name" />
                    <div className="error">{nameErr === 1 ? 'Enter alphabet only' : nameErr === 2 ? 'Enter your name' : ''}</div>
                </div>
                <div>
                    <input type="text" onBlur={emailHandler} placeholder="Enter email" /><br />
                    <div className="error">{emailErr === 1 ? 'Enter valid email' : emailErr === 2 ? 'Enter your email' : ''}</div>
                </div>
                <div>
                    <input type="text" onBlur={numberHandler} placeholder="Enter phone" /><br />
                    <div className="error">{numberErr === 1 ? 'Enter number only' : numberErr === 2 ? 'Enter your number' : ''}</div>
                </div>
                <div>
                    <textarea onBlur={descHandler} placeholder="Enter Description" rows='5' /><br />
                    <div className="error">{descErr === 1 ? 'Enter min 10 and max 100 word' : descErr === 2 ? 'Write something here' : ''}</div>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default ContactUs;