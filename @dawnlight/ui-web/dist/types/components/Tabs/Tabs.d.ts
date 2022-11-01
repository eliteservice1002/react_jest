import React from 'react';
export interface TabsProps {
    readonly selectedIndex: number;
    readonly onChange: (index: number) => void;
    readonly className?: string;
}
export declare const Tabs: React.FC<TabsProps>;
