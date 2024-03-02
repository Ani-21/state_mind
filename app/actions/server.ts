"use server";

import { Client } from "@/shared/types";

export async function getClients(): Promise<Client[]> {
  const response = await fetch(process.env.BASE_URL ?? "");
  return response.json();
}
