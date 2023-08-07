import { styled } from 'styled-components';

export const List = styled.ul`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 20px;
  padding: 10px 20px;
  border: 1px solid black;
  background-color: white;
`;
