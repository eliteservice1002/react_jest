import React from 'react';
export declare type ChipColor = 'primary' | 'lighter' | 'darker' | 'warning' | 'critical';
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly variant?: 'compact' | 'relaxed';
    readonly rounded?: 's' | 'm';
    readonly color?: ChipColor;
}
export declare const Chip: React.FC<ChipProps>;
