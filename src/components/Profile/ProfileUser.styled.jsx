import styled from 'styled-components';

export const Profile = styled.div`
  box-shadow: ${p => p.theme.color.shadow};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 10px 5px;

  background-color: ${p => p.theme.color.white};
  border-top-left-radius: ${p => p.theme.radii.sm};
  border-top-right-radius: ${p => p.theme.radii.sm};
  h2 {
    color: ${p => p.theme.color.title};
    :hover,
    :focus {
      transform: scale(1.045);
    }
  }
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  height: 100px;
  width: 100px;

  border-radius: ${p => p.theme.radii.round};
  box-shadow: ${p => p.theme.color.shadowBtn};
`;

export const Info = styled.p`
  color: ${p => p.theme.color.textInfo};
  font-size: 12px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  background-color: ${props => props.theme.color.background};
  border-bottom-left-radius: ${p => p.theme.radii.sm};
  border-bottom-right-radius: ${p => p.theme.radii.sm};

  font-size: 10px;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    padding: 10px;
    :not(:last-child) {
      border-right: 1px dotted black;
    }

    &:hover,
    &:focus {
      background: ${p => p.theme.color.colorBtn};
      box-shadow: ${p => p.theme.color.shadowBtn};
    }
  }
`;
export const Label = styled.span`
  color: ${p => p.theme.color.textInfo};
`;
export const Quantity = styled.span`
  font-weight: 800;
`;
