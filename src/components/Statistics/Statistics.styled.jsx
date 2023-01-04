import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.bold};
  gap: ${p => p.theme.space[3]}px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  gap: ${p => p.theme.space[5]}px;
`;
