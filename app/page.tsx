import ClientsList from "@/components/client-list/clients-list";
import Provider from "@/store/provider";

import { getClients } from "./actions/server";

export default async function Home() {
  const clients = await getClients();

  return (
    <Provider clients={clients}>
      <main>
        <h1 className="text-3xl font-bold underline">State Mind Clients</h1>
        <ClientsList />
      </main>
    </Provider>
  );
}
