import React from 'react';
export interface SvgProps extends React.HTMLAttributes<HTMLOrSVGElement> {
    readonly width?: number;
    readonly height?: number;
}
export declare const SvgIcon: React.FC<SvgProps>;
