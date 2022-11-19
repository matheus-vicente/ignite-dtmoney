import { ThemeProvider } from "styled-components";

import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./hooks/Transaction";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  );
}
