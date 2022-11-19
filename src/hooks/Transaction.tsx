import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../lib/axios";

interface Transaction {
  id: number;
  price: number;
  category: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  type: "income" | "outcome";
}

interface CreateTransactionInput {
  price: number;
  category: string;
  description: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

const TransactionContext = createContext({} as TransactionContextType);

interface TransactionProviderProps {
  children?: ReactNode;
}

function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  }

  async function createTransaction({
    type,
    price,
    category,
    description,
  }: CreateTransactionInput) {
    const response = await api.post("transactions", {
      type,
      price,
      category,
      description,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

function useTransactions() {
  const context = useContext(TransactionContext);

  if (context === null) {
    throw new Error(
      "The method useTransaction must used within a TransactionProvider"
    );
  }

  return context;
}

export { TransactionProvider, useTransactions };
