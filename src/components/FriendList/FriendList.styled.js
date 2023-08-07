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
export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$status ? ' green' : 'red')};
`;
export const Avatar = styled.img``;
export const Name = styled.p`
  font-weight: bold;
`;
