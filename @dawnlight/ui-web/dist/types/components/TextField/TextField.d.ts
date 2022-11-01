import React from 'react';
export interface TextFieldProps extends React.ComponentPropsWithRef<'input'> {
    readonly id: string;
    readonly mask?: string;
    readonly color?: 'dark' | 'light';
}
export declare const TextField: React.FC<TextFieldProps>;
