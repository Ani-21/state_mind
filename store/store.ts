import { Client } from "@/shared/types";
import { create } from "zustand";

type ClientsState = {
  clients: null | Client[];
};
export const useStore = create<ClientsState>(() => ({
  clients: null,
}));
