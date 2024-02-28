import Image from "next/image";
import { useEffect, useState } from "react";
import { getUsers } from "./lib/actions/users";
import styles from "./home.module.css";
export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>

      {users.map((user: any) => {
        return (
          <div key={user.id} className={styles.user}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        );
      })}
    </div>
  );
}
