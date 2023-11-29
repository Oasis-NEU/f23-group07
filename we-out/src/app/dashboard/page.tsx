'use client';

import { useState, useEffect } from "react";
import CardStack from "../swipe/cardstack";
import 

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {

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