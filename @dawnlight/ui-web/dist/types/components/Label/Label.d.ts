import React from 'react';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    readonly control?: React.ReactNode;
}
export declare const Label: React.FC<LabelProps>;
