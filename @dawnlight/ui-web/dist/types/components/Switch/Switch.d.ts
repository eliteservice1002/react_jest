import React from 'react';
declare type SwitchProps = {
    readonly onChange: () => void;
    readonly checked: boolean;
    readonly label: string;
    readonly disabled?: boolean;
};
export declare const Switch: React.FC<SwitchProps>;
export {};
