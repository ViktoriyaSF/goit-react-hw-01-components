import PropTypes from 'prop-types';
import { FriendCard, Status, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendCard>
    <Status isOnline={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </FriendCard>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
