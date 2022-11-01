import React from 'react';
export interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    readonly label: string;
}
export declare const IconLink: React.FC<IconLinkProps>;
