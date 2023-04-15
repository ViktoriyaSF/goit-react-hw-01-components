import styled from 'styled-components';
import { getRandomHexColor } from '../utils/getRandomHexColor';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  box-shadow: ${p => p.theme.color.shadow};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.color.white};
  h2 {
    text-align: center;
    font-weight: 800;
    padding: 20px 0;
  }
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  padding: 10px;
  width: 55px;

  color: ${p => p.theme.color.white};

  background-color: ${props => getRandomHexColor(props.index)};
  :first-child {
    border-bottom-left-radius: ${p => p.theme.radii.md};
  }

  :last-child {
    border-bottom-right-radius: ${p => p.theme.radii.md};
  }
  &:hover,
  &:focus {
    background: ${p => p.theme.color.colorBtn};
    box-shadow: ${p => p.theme.color.shadowBtn};
    color: ${props => props.theme.color.text};
  }
`;

export const Label = styled.span`
  font-size: 0.75em;
`;
export const Percentage = styled.span`
  font-size: 1.1em;
  font-weight: 700;
`;
