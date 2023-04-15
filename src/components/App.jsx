import user from '../components/JSON/user.json';
import { ProfileUser } from './Profile/ProfileUser';

import data from '../components/JSON/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from '../components/JSON/friends.json';
import { FriendList } from './FriendList/FriendList';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../components/JSON/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
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
    </div>
  );
};
