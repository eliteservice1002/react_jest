import React from 'react';
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    readonly isOpen: boolean;
    readonly onClose: (value: boolean) => void;
    readonly showOverlay?: boolean;
    readonly initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
}
export declare const Dialog: React.FC<DialogProps>;
