import React from 'react';
export interface DialogConfirmationProps {
    readonly isOpen: boolean;
    readonly onClose: (value: boolean) => void;
    readonly onConfirm: () => void;
    readonly children: {
        titleText: string;
        subtitleText?: string;
        cancelText: string;
        confirmationText: string;
    };
}
export declare const DialogConfirmation: React.FC<DialogConfirmationProps>;
