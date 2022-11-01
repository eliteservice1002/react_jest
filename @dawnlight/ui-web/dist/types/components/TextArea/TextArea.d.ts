import React from 'react';
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    readonly bottomText?: string;
    readonly color?: 'dark' | 'light';
    readonly textareaClassName?: string;
}
export declare const TextArea: React.FC<TextAreaProps>;
