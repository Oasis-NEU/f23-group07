"use client";

import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { setDoc, getDocs, doc, collection, getFirestore } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";

function CreateProfile() {
  const [profilePic, setProfilePic] = useState<string>("");
  const [daysAvailable, setDaysAvailable] = useState<string[]>([]);
  const [timesAvailable, setTimesAvailable] = useState<{ [key: string]: { start: string, end: string } }>({});
  const [experienceLevel, setExperienceLevel] = useState<string>("");

  const user = auth.currentUser;

  const handleCustomization = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const db = getFirestore();

    const id = user.uid;

    const userRef = doc(collection(db, "users"), id);
    setDoc(userRef, {
      profilePic: profilePic,
      daysAvailable: daysAvailable,
      timesAvailable: timesAvailable,
      experienceLevel: experienceLevel
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", height: "92vh" }}>
      <div className="Container">
        <div className="pt-14 px-8">
          <header className="Header font-sans font-bold">Profile Customization</header>
          <Form onSubmit={handleCustomization}>
            
            {/* Profile Picture Input */}
            <Form.Group>
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" onChange={e => setProfilePic(URL.createObjectURL((e.target as HTMLInputElement).files[0]))} />
            </Form.Group>

            {/* Days Available */}
            <Form.Group>
              <Form.Label>Days Available</Form.Label>
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                <Form.Check 
                  type="checkbox"
                  label={day}
                  onChange={() => {
                    if (daysAvailable.includes(day)) {
                      setDaysAvailable(prev => prev.filter(d => d !== day));
                    } else {
                      setDaysAvailable(prev => [...prev, day]);
                    }
                  }}
                />
              ))}
            </Form.Group>

            {/* Times Available */}
            <Form.Group>
              <Form.Label>Times Available</Form.Label>
              {daysAvailable.map(day => (
                <div key={day}>
                  <Form.Label>{day}</Form.Label>
                  <Form.Control type="time" onChange={e => setTimesAvailable(prev => ({ ...prev, [day]: { ...prev[day], start: e.target.value } }))} />
                  <Form.Control type="time" onChange={e => setTimesAvailable(prev => ({ ...prev, [day]: { ...prev[day], end: e.target.value } }))} />
                </div>
              ))}
            </Form.Group>

            {/* Experience Level */}
            <Form.Group>
              <Form.Label>Experience Level</Form.Label>
              {['beginner', 'intermediate', 'advanced'].map(level => (
                <Form.Check 
                  type="radio"
                  name="experienceLevel"
                  label={level.charAt(0).toUpperCase() + level.slice(1)}
                  onChange={() => setExperienceLevel(level)}
                />
              ))}
            </Form.Group>

            <Button
              type="submit"
              href="/dashboard"
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
