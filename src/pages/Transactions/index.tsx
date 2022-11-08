import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import {
  TransactionContainer,
  TransactionsTable,
  PriceHighlight,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 7.433,00</PriceHighlight>
              </td>
              <td>Desenvolvimento</td>
              <td>13/08/2022</td>
            </tr>

            <tr>
              <td width="50%">God of War Ragnarok</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 280,00</PriceHighlight>
              </td>
              <td>Games</td>
              <td>03/11/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
}
