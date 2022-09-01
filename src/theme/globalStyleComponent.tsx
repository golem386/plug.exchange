import { Button } from '@mui/material';
import { styled } from '@mui/system';

export const StyledButton = styled(Button)((props: { isActive: boolean; theme: object }) => ({
  background: props.isActive ? props.theme.palette.color.active : props.theme.palette.color.lightText,
  color: props.isActive ? props.theme.palette.color.white : props.theme.palette.color.text,
  height: 52,
  border: props.isActive ? 'none' : '1px solid ' + props.theme.palette.color.border,
}));
