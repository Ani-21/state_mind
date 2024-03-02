"use client";

import { Client } from "@/shared/types";
import { useStore } from "./store";

type ProviderProps = {
  clients: Client[];
  children: JSX.Element;
};
export default function Provider(props: ProviderProps) {
  const { clients, children } = props;

  useStore.setState({
    clients,
  });

  return children;
}
