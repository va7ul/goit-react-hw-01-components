import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List, Item } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendListItem friend={friend} />
        </Item>
      ))}
    </List>
  );
};
