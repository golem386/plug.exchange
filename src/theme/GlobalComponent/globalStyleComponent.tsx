import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { ThemeProps } from '..';
interface StyledButtonProps {
  isActive?: boolean;
  theme?: ThemeProps;
  href?: string;
}
export const StyledButton = styled(Button)((props: StyledButtonProps) => ({
  background:
    props.theme && props.isActive
      ? props?.theme.palette.color.active
      : props.theme && props?.theme.palette.color.lightText,
  color:
    props.isActive && props.theme ? props?.theme.palette.color.white : props.theme && props?.theme.palette.color.text,
  height: 52,
  border: !props.isActive && props.theme ? '1px solid ' + props?.theme.palette.color.border : 'none',
}));
