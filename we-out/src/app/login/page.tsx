"use client";

import { useState } from "react";
import { Button, Form, InputGroup} from "react-bootstrap";
import Link from 'next/link'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";
import login from "../../assets/login.jpg";

import { db } from "../firebase";

interface User {
  username: string;
  password: string;
}

function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [isClient, setIsClient] = useState<boolean>(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const id = user.uid;
        const getIsClient = async () => {
          let userRef = doc(collection(db, "users"), user.uid);
          let docSnap = await getDoc(userRef);
          if (docSnap.exists()) {
            setIsClient(true);
          } else {
            setIsClient(false);
          }
        };
        getIsClient();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
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
        <div className="pt-28 px-8">
          <header className="Header font-sans font-bold">Log in</header>
          <hr className="pt-0" />
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  const val = e.target.value;
                  setEmail(val);
                }}
                style={{ color: 'black' }}
              />
            </Form.Group>
            <InputGroup className="mb-3">
              <Form.Control
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => {
                  const val = e.target.value;
                  setPassword(val);
                }}
                style={{ color: 'black' }}
              />
              <Button
                variant="outline-secondary"
                id="addon"
                onClick={togglePassword}
                className="ShowButton">
                <i className={passwordShown ? "fas fa-eye-slash" : "fas fa-eye"}/>
              </Button>
            </InputGroup>
            <Button
              className="font-sans font-bold"
              variant="info"
              type="submit"
              href="/dashboard"
            >
              Login
            </Button>
          </Form>
          <div className="SwitchLoginCreateGroup font-sans">
            <p>Don't have an account?</p>
            <Link href="/registration/" className="font-sans font-bold">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-info z-0">
        <img src={login.src} className="object-fill h-full" width="1178px" />
      </div>
    </div>
  );
}

export default LoginScreen;
