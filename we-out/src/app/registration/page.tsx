"use client";

import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Link from 'next/link'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import login from "../../assets/login.jpeg";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

function RegistrationScreen() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [confirmationPasswordShown, setConfirmationPasswordShown] =
    useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmationPassword = () => {
    setConfirmationPasswordShown(!confirmationPasswordShown);
  };

  const handleRegistration = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        handleRegistrationDB(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleRegistrationDB = async (user: any) => {
    const db = getFirestore();
    const id = user?.uid;
    const userRef = doc(collection(db, "users"), id);
    setDoc(userRef, {
      name: this.name
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "92vh",
      }}
    >
      <div className="Container">
        <div className="pt-14 px-8">
          <header className="Header font-sans font-bold">Sign Up</header>
          <hr className="pt-0" />
          <Form className="Form" onSubmit={handleRegistration}>
          <InputGroup className="mb-3" hasValidation>
              <Form.Control
                required
                type="name"
                placeholder="Full Name"
                value={name}
                className= "text-black"
                isInvalid={name.trim().length === 0}
                onChange={(e) => {
                  const val = e.target.value;
                  setName(val);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name!
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3" hasValidation>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                value={email}
                className="text-black"
                isInvalid={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !!email}
                onChange={(e) => {
                  const val = e.target.value;
                  setEmail(val);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Invalid email address
              </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                required
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                value={password}
                className="text-black"
                onChange={(e) => {
                  const val = e.target.value;
                  setPassword(val);
                }}
              />
              <Button
                variant="outline-secondary"
                id="addon"
                onClick={togglePassword}
                className="ShowButton"
              >
                <i
                  className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}
                />
              </Button>
            </InputGroup>
            <InputGroup className="mb-3" hasValidation>
              <Form.Control
                type={confirmationPasswordShown ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmationPassword}
                className="text-black"
                isInvalid={
                  password !== confirmationPassword && !!confirmationPassword
                }
                onChange={(e) => {
                  const val = e.target.value;
                  setConfirmationPassword(val);
                }}
              />
              <Button
                variant="outline-secondary"
                id="addon2"
                onClick={toggleConfirmationPassword}
                className="ShowButton"
              >
                <i
                  className={
                    confirmationPasswordShown
                      ? "fas fa-eye-slash"
                      : "fas fa-eye"
                  }
                />
              </Button>
              <Form.Control.Feedback type="invalid">
                Passwords do not match!
              </Form.Control.Feedback>
            </InputGroup>
            <Button
              variant="outline-secondary"
              type="submit"
              className='SubmitButton'>
              Sign up
            </Button>
            {error && <div className="text-danger mt-3">{error}</div>}
          </Form>
          <div className="SwitchLoginCreateGroup">
            <p>Already have an account?</p>
            <Link className="font-sans font-bold" href="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className="bg-info z-0">
        <img src={login.src} className="object-fill h-full" width="1178px" />
      </div>
    </div>
  );
}

export default RegistrationScreen;
