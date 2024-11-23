import React, { useRef, useState } from "react";

function SignUp() {
    const [isUserCreated, setIsUserCreated] = useState(false);
    const [isUserFailed, setIsUserFailed] = useState(false);
    const formRefs = {
        firstName: useRef(),
        lastName: useRef(),
        email: useRef(),
        password: useRef(),
    };

    const handleClick = () => {
        event.preventDefault();
        const formData = {
            firstName: formRefs.firstName.current.value,
            lastName: formRefs.lastName.current.value,
            email: formRefs.email.current.value,
            password: formRefs.password.current.value,
        };

        if (
            formData.firstName === "" ||
            formData.lastName === "" ||
            formData.email === "" ||
            formData.password === ""
        ) {
            alert("Please fill all the fields");
            return;
        }

        const response = fetch("http://localhost:3000/user/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            if (response.status === 201) {
                setIsUserCreated(true);
            } else {
                setIsUserFailed(true);
            }
        });
    };

    return (
        <>
            {isUserCreated && (
                <div className="alert alert-success" role="alert">
                    User Created Successfully
                </div>
            )}
            {isUserFailed && (
                <div className="alert alert-danger" role="alert">
                    User Creation Failed
                </div>
            )}

            <div className="container mt-5">
                <div className="mb-3 row">
                    <label
                        htmlFor="inputFirstName"
                        className="col-sm-2 col-form-label"
                    >
                        First Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputFirstName"
                            ref={formRefs.firstName}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label
                        htmlFor="inputLastName"
                        className="col-sm-2 col-form-label"
                    >
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="inputLastName"
                            ref={formRefs.lastName}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label
                        htmlFor="inputEmail"
                        className="col-sm-2 col-form-label"
                    >
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            ref={formRefs.email}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label
                        htmlFor="inputPassword"
                        className="col-sm-2 col-form-label"
                    >
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            ref={formRefs.password}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-10 offset-sm-2">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
