import React, { useCallback, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../Base";



const Login = ({ history }) => {
   
    
    const [Email, setEmail] = useState('');
    const isInvalid = Email ===''

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();
            const { password } = event.target.elements;
            try {
                
                await app
                    .auth()
                    .signInWithEmailAndPassword(Email, password.value)
                    .then(()=>{
                        if({history}){
                        history.push("/");
                        }else{
                           return <Redirect to="/home" />
                        }
                    })

                    
                
            } catch (error) {
                switch (error){
                    case "auth/invalid-email":
                       alert("Please enter a valid email address")
                        break;
                    default:
                    alert("An unknown error occured")
                    break;

            }
            } 
        },
        [history]
    );

    const forgotPw = useCallback(
       
           
        async event => {
            event.preventDefault();
         
            try {
                await app
                    .auth()
                    .sendPasswordResetEmail(Email)
                    .then(alert("A password reset email has been sent to " + Email))
                
            } catch (error) {
                alert(error);
            }
        }
    

    );


   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" />
                </div>
                <button type="submit" className="btn btns w-25 mx-5 px-4" id="login" >Login</button>
                <button type="push" className="btn btns w-50" id="forgot" disabled={isInvalid} onClick={forgotPw} >Forgot Password</button>
            </form>
        </div>
    );
}

export default withRouter(Login);