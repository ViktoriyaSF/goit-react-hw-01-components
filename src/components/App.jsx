import user from '../components/JSON/user.json';
import { ProfileUser } from './Profile/ProfileUser';

import data from '../components/JSON/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../components/JSON/friends.json';
import { FriendList } from './FriendList/FriendList';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/JSON/transactions.json';

import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Container } from './BasicStyles/Container.styled';

export const App = () => {
  return (
    <Container>
      <ProfileUser
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Container>
  );
};
