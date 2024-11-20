import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserLoggedIn } from '../../utils/helper';

function SignIn() {

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(null);
    const [showBox, setShowBox] = useState(false);

    const navigate = useNavigate();

    const formRefs = {
        email: useRef(),
        password: useRef()
    };

    useEffect(() => {
        if (isUserAuthenticated) {
            fetchUserDetails();
        }
    }, [isUserAuthenticated])

    const fetchUserDetails = async () => {
        console.log('fetching user details');

        const response = await fetch(`http://localhost:3000/user/${formRefs.email.current.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).then((res) => {
            if (res.status == 201) {
                return res.json();  
            }
            else {
                return null;
            }
        }).then((res) => {
            console.log(res);
            navigate('/', { state: { user: res } });
            window.location.reload();
        });
    };

    const handleSignIn = async () =>
    {
        const response = await fetch('http://localhost:3000/user/signin', {
            method: 'POST',
            body: JSON.stringify({
                email : formRefs.email.current.value,
                password: formRefs.password.current.value
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            if (res.status == 201) 
            {
                setShowBox(true);
                setIsUserAuthenticated(true);
            }
            else
            {
                setShowBox(true);
                setIsUserAuthenticated(false);
            }
            return res.json();
        }).then((res) => {
            localStorage.setItem('token', res.user);
            localStorage.setItem('email', formRefs.email.current.value);
            alert('User Authenticated Successfully');
            console.log(res);
        })
    }

    const handleClick = (event) => {
        event.preventDefault();
        const formData = {
            email: formRefs.email.current.value,
            password: formRefs.password.current.value,
        };
        console.log(formData);
        handleSignIn();
    };

    return (
        <> 
        {
            showBox && isUserAuthenticated && <div className="alert alert-success" role="alert">
                                User Authenticated Successfully
                            </div>
        }
        {
            showBox && !isUserAuthenticated && <div className="alert alert-danger" role="alert">
                                User Authentication Failed
                            </div>
        } 
        <div className="container mt-5">
            <div className="mb-3 row">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail" ref={formRefs.email} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" ref={formRefs.password} />
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Sign In</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignIn;
