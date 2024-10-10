import styled from 'styled-components';
import { Stack, Divider } from '@mui/material';

export const StyledStack = styled(Stack)`
  width: 271px;
  padding-left: 40px;
  padding-top: 40px;
  padding-bottom: 100px;
  padding-right: 30px;
`;

export const ItemStack = styled(Stack)<{ active?: boolean }>`
  background-color: ${(props) => (props.active ? '#E0F7FA' : 'transparent')}; // Highlight active item
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #E0F7FA; // On hover effect for non-active items
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 20px ;
`;
