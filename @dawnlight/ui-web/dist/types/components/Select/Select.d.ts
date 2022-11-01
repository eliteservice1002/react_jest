import React from 'react';
export interface SelectProps {
    readonly id: string;
    readonly value: string;
    readonly displayText: string;
    readonly onChange: (value: string) => void;
    readonly as?: React.ElementType;
    readonly disabled?: boolean;
    readonly color?: 'dark' | 'light';
}
export declare const Select: React.FC<SelectProps>;
