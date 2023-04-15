import PropTypes from 'prop-types';
import {
  Avatar,
  Profile,
  Description,
  Info,
  Stats,
  Label,
  Quantity,
} from './ProfileUser.styled';

export const ProfileUser = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <h2>{username}</h2>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </li>
      </Stats>
    </Profile>
  );
};

ProfileUser.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
