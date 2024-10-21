"use client";
import {
  QueryClientProvider as TanstackQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export const client = new QueryClient();

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <TanstackQueryClientProvider client={client}>
      {children}
    </TanstackQueryClientProvider>
  );
};

export default QueryClientProvider;
