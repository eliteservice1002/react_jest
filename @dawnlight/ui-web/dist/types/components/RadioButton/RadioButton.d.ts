import React from 'react';
export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
    readonly name: string;
    readonly value: string;
    readonly checked: boolean;
}
export declare const RadioButton: React.FC<RadioButtonProps>;
