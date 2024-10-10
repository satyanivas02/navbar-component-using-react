import {Typography} from '@mui/material';
import React from 'react';

interface TextProps{
    variant: 'h1'|'body1'|'body2';
    text: string;
}

const Text: React.FC<TextProps>=({variant, text})=>{
    return(
        <Typography variant={variant}>{text}</Typography>
    );
}
export default Text;