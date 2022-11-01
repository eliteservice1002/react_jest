import React from 'react';
export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
    readonly name: string;
    readonly checked?: boolean;
}
export declare const Checkbox: React.FC<CheckboxProps>;
