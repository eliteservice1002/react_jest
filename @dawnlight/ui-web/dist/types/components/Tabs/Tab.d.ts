import React from 'react';
export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    readonly index?: number;
    readonly isFocused?: boolean;
    readonly tabsHaveNativeFocus?: boolean;
    readonly selectedIndex?: number;
}
export declare const Tab: React.FC<TabProps>;
