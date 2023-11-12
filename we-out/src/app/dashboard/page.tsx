'use client';

import { useState, useEffect } from "react";
import CardStack from "../swipe/cardstack";
import { setDoc, getDocs, doc, collection, getFirestore } from "firebase/firestore";
import { User } from "firebase/auth";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const db = getFirestore();
      const usersRef = collection(db, "users");
      const usersSnapshot = await getDocs(usersRef);
      const usersList = usersSnapshot.docs.map(doc => doc.data()); // Assuming User type is handled
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <CardStack users={users} />
    </div>
  );
}

export default Dashboard;