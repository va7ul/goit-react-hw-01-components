import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  ListItem,
  ListLable,
  ListQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <List>
        <ListItem>
          <ListLable>Followers</ListLable>
          <ListQuantity>{followers}</ListQuantity>
        </ListItem>
        <ListItem>
          <ListLable>Views</ListLable>
          <ListQuantity>{views}</ListQuantity>
        </ListItem>
        <ListItem>
          <ListLable>Likes</ListLable>
          <ListQuantity>{likes}</ListQuantity>
        </ListItem>
      </List>
    </Card>
  );
};
