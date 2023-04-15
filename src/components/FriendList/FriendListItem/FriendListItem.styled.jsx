import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-evenly; */
  gap: 20px;
  padding: 10px 20px;

  width: 270px;

  box-shadow: ${p => p.theme.color.shadow};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.color.white};
  p {
    color: ${p => p.theme.color.title};
    font-size: 18px;
    font-weight: 600;
  }
  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const Status = styled.span`
  display: block;

  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  padding: 5px;

  border-radius: ${p => p.theme.radii.round};
  box-shadow: ${p => p.theme.color.shadowBtn};
`;
