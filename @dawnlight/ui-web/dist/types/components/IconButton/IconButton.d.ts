import React from 'react';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    readonly variant?: 'filled' | 'bare';
    readonly label: string;
}
export declare const IconButton: React.FC<IconButtonProps>;
