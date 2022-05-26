import React from "react";

const Signup = () => {
    return (
    <>
        <div className="signup-container">
            <div className="signup-content">
                <h1>STACKsaver</h1>
                <h2>Signup/Login:</h2>
                <div className="signup-field"><h>example@emailaddress.co</h></div>
                <div className="signup-field"><h>Username</h></div>
                <div className="signup-field"><h>Password</h></div>
                <div className="signup-field"><h>Confirm Password</h></div>
                <div className="cancel-btn"><h>Cancel</h></div>
                <div className="sign-btn"><h>LOG IN</h></div>
            </div>
        </div>
    </>)
}

export default Signup;