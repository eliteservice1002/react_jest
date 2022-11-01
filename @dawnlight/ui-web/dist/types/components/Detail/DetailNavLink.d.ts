import React from 'react';
export interface DetailNavLinkProps extends React.ComponentPropsWithoutRef<'a'> {
    readonly selected?: boolean;
    readonly disabled?: boolean;
}
export declare const DetailNavLink: React.FC<DetailNavLinkProps>;
