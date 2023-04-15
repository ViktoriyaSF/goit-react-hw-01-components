import styled from 'styled-components';

export const Table = styled.table`
  padding: 10px;
  max-width: 90%;
  width: 90%;
  text-align: center;

  box-shadow: ${p => p.theme.color.shadow};
  border-radius: ${p => p.theme.radii.lg};

  background-color: ${p => p.theme.color.white};
`;
export const Thead = styled.thead`
  background-color: ${props => props.theme.color.background};
  color: ${p => p.theme.color.title};
`;

export const Tr = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.color.colorTabl};
  }
  :hover {
    background-color: ${p => p.theme.color.textInfo};
  }
`;

// background-color: ${props => props.index % 2 === 0 ?
// ${p => p.theme.color.white} :
// ${p => p.theme.color.colorTabl}
