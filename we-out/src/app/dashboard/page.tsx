'use client';
import React, { useState, useEffect } from 'react';

function Dashboard() {

  const data = [
    {
      "firstName": "John",
      "lastName": "Doe"
    },
    {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    {
      "firstName": "Bob",
      "lastName": "Smith"
    }
  ]



  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <button onClick={() => alert('Edit profile')}>Edit Profile</button>
        <button onClick={() => alert('Log out')}>Log Out</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {data.map((item, index) => (
          <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <p>{item.firstName}</p>
            <button onClick={() => alert('Liked')}>Like</button>
            <button onClick={() => alert('Rejected')}>Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;