import styled from 'styled-components';

export const Profile = styled.div`
  box-shadow: ${p => p.theme.color.shadow};
  border-radius: ${p => p.theme.radii.sm};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;

  padding: 10px 5px;

  background-color: white;
  h2 {
    color: ${p => p.theme.color.title};
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
    &:hover {
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
