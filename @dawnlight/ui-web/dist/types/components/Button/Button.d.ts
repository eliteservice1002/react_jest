import React, { HTMLAttributes } from 'react';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    readonly variant?: 'filled' | 'outlined' | 'bare';
    readonly color?: 'accent' | 'subtle' | 'inverseSubtle' | 'accentLight';
    readonly width?: 'shrink' | 'expand' | 'fixed';
    readonly as?: 'a' | 'button';
    readonly disabled?: boolean;
    readonly href?: string;
}
export declare const Button: React.FC<ButtonProps>;
