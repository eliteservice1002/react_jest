import React, { ReactNode } from 'react';
export interface DropdownItemRenderProps {
    active: boolean;
    disabled: boolean;
}
export interface DropdownItemProps {
    readonly as?: React.ElementType;
    readonly disabled?: boolean;
    readonly children: (renderProps: DropdownItemRenderProps) => ReactNode | ReactNode;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
