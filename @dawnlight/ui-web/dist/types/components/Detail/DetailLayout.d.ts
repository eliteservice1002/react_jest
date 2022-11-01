import React from 'react';
export interface DetailLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly variant?: 'main' | 'mainAside';
}
export declare const DetailLayout: React.FC<DetailLayoutProps>;
