import {Paper} from '@mui/material';
import type {PaperProps, SxProps, Theme} from '@mui/material';

type PanelProps = Omit<PaperProps, 'variant'>;

const panelStyle = {
    borderRadius: 4,
    borderColor: '#e7e9ee',
    boxShadow: '0 1px 2px rgba(25, 32, 48, 0.03)',
    bgcolor: '#ffffff'
};

const primaryPanelStyle = {
    p: {xs: 3, md: 4},
    color: '#fff',
    bgcolor: '#254b41',
    borderColor: '#254b41',
    backgroundImage: 'radial-gradient(circle at 92% 18%, rgba(180, 221, 202, 0.22), transparent 28%)'
};

const mergeStyles = function (baseStyle: SxProps<Theme>, sx: SxProps<Theme> | undefined): SxProps<Theme> {
    if (sx === undefined) return baseStyle;
    return [baseStyle, ...(Array.isArray(sx) ? sx : [sx])] as SxProps<Theme>;
};

export const Panel = function ({sx, ...props}: PanelProps) {
    return <Paper {...props} variant="outlined" sx={mergeStyles(panelStyle, sx)} />;
};

export const PrimaryPanel = function ({sx, ...props}: PanelProps) {
    return <Panel {...props} sx={mergeStyles(primaryPanelStyle, sx)} />;
};
