import React from 'react';
export interface SelectOptionProps extends React.HTMLAttributes<HTMLLIElement> {
    readonly value: string;
    readonly as?: React.ElementType;
    readonly disabled?: boolean;
}
export declare const SelectOption: React.FC<SelectOptionProps>;
