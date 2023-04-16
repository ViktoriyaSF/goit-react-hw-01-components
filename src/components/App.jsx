import user from '../JSON/user.json';
import { ProfileUser } from './Profile/ProfileUser';

import data from '../JSON/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../JSON/friends.json';
import { FriendList } from './Friends/FriendList/FriendList';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../JSON/transactions.json';

import { GlobalStyle } from './BasicStyles/GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
