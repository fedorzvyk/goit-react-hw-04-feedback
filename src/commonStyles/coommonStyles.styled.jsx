import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  background-color: ${p => p.theme.colors.primary};
  cursor: pointer;
  min-width: 80px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  transition: transform 250ms linear, border-color 250ms linear,
    color 250ms linear;
  :hover,
  :focus-visible {
    transform: scale(1.1);
  }
`;
