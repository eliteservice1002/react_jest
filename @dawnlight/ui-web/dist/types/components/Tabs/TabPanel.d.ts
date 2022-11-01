import React from 'react';
export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly selectedIndex?: number;
    readonly index: number;
}
export declare const TabPanel: React.FC<TabPanelProps>;
