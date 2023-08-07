import {
  TransactionTable,
  HeaderTr,
  TransactionTr,
  TransitionTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <HeaderTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </HeaderTr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionTr key={id} $odd={index % 2 === 0}>
            <TransitionTd>{type}</TransitionTd>
            <TransitionTd>{amount}</TransitionTd>
            <TransitionTd>{currency}</TransitionTd>
          </TransactionTr>
        ))}
      </tbody>
    </TransactionTable>
  );
};
