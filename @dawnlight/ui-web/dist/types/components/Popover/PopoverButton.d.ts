import React from 'react';
export interface PopoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    readonly as?: React.ElementType;
    readonly className?: string;
    readonly variant?: string;
    readonly label?: string;
}
export declare const PopoverButton: React.FC<PopoverButtonProps>;
