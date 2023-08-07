import { styled } from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Tag = styled.p`
  margin-top: 5px;
`;

export const Location = styled.p`
  margin-top: 5px;
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  background-color: lightslategrey;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const ListLable = styled.span``;

export const ListQuantity = styled.span`
  font-weight: bold;
`;
