import React, { useCallback, useState,useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import axios from 'axios';
import app from "../../Base";




const SignUp = ({ history }) => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [firebaseId,setfirebaseId] = useState("")
    const [password,setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");
    const [post, setPost] = useState('redux');
    const isInvalid = password !== passConfirm || password === '';

    useEffect(()=>{
        const postUser = async() =>{
            
            axios.post("/api/users", {post})
            .then(res => console.log(res))
        }

        postUser()
    }, [post])

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        console.log(email)
        console.log(name)
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((cred)=>{
                    if (!cred) {
                        return;
                    }

                    history.push("/");
                    setfirebaseId(cred.user.uid);
                    console.log (firebaseId)

                    const user = {
                        name: name,
                        email: email,
                        firebaseId: firebaseId
                    }

                    setPost(user)
                    alert("Account creation successful");
                })
            
        } catch (error) {
            alert(error);
        }
    }, [history, email, password, firebaseId, name]);


    return (

        <div>
            <form onSubmit={handleSignUp}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" id="name" onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" name="email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirm</label>
                    <input type="password" className="form-control" onChange={e => setPassConfirm(e.target.value)} />
                </div>
                <button type="submit" className="btn btns w-25 px-4" id="add-btn-free" style={{ marginLeft: 100 }} disabled={isInvalid}>Free</button>
                <button type="submit" className="btn btns w-25 mx-5 px-4" id="add-btn-full" disabled={isInvalid}>Full</button>
            </form>

        </div>

    );

};

export default withRouter(SignUp);
