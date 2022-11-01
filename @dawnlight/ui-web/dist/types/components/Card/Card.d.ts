import React from 'react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly color?: 'light' | 'dark';
    readonly rounded?: 'sm' | 'md' | 'lg';
    readonly padding?: 'none' | 'sm' | 'md';
}
export declare const Card: React.FC<CardProps>;
