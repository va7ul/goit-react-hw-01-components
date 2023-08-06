import user from '../user.json';
import { GlobalStyle } from './Global.style';
import { Card } from './Profile/Profile';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div>
      <Card
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <GlobalStyle />
    </div>
  );
};
