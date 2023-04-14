import PropTypes from 'prop-types';
// import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ list }) => {
  return (
    <ul className="friend-list">
      {list.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          <span className="status" active={isOnline}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
          {/* <FriendListItem item={item} /> */}
        </li>
      ))}
    </ul>
  );
};

FriendList.PropTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
