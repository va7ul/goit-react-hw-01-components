import { styled } from 'styled-components';

export const TransactionTable = styled.table`
  width: 300px;
  margin: 50px auto;
  border: 1px solid black;
`;
export const HeaderTr = styled.tr`
  background-color: blue;
  color: white;
`;
export const TransactionTr = styled.tr`
  background-color: ${props => (props.$odd ? 'white' : 'lightblue')};
`;
export const TransitionTd = styled.td`
  text-align: center;
`;
