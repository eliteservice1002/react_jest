import React from 'react';
export interface SearchFieldProps extends React.ComponentPropsWithRef<'input'> {
    readonly id: string;
    readonly label: string;
}
export declare const SearchField: React.FC<SearchFieldProps>;
