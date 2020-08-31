import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
function Login() {
    const signIn = () => {
        //sign in
    };
    return (
        <div className = "login">
            <div className="login_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                    alt="fb-logo"   
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="fb-name"
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
