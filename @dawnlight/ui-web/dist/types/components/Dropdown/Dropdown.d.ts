import React, { ReactNode } from 'react';
declare type DropdownChildren = ReactNode | (({ open: boolean }: {
    open: any;
}) => ReactNode);
export interface DropdownProps {
    readonly button: React.ReactElement;
    readonly children: DropdownChildren;
}
export declare const Dropdown: React.FC<DropdownProps>;
export {};
