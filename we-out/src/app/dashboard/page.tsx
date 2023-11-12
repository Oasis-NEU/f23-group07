'use client';

import { useState } from "react";
import CardStack from "../swipe/cardstack";
import { setDoc, getDocs, doc, collection, getFirestore } from "firebase/firestore";
import { User } from "firebase/auth";

function Dashboard() {
  const getUsers = async () => {
    const db = getFirestore();
    const usersRef = collection(db, "users");
    const usersSnapshot = await getDocs(usersRef);
    const usersList = usersSnapshot.docs.map(doc => doc.data() as User);
    return usersList;
  }

  return (
    <div>
      <CardStack users={getUsers()} />
    </div>
  );
}

export default Dashboard;