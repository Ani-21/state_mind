"use client";

import Link from "next/link";

import { useStore } from "@/store/store";

export default function ClientsList() {
  const { clients } = useStore();

  return (
    <>
      <ul>
        {clients?.map((client) => (
          <p key={client.tvl}>
            <Link href={client.client}>{client.client}</Link>
          </p>
        ))}
      </ul>
    </>
  );
}
