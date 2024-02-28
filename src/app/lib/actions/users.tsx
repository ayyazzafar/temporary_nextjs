"use server";

import { redirect } from "next/navigation";

export async function getUsers() {
  try {
    let response = await fetch("http://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
  } catch (e: any) {
    redirect("/test");
  }
}
