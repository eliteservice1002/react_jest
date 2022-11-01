export declare type IsFunction<T> = T extends (...args: any[]) => any ? T : never;
export declare const isFunction: <T extends {}>(value: T) => value is IsFunction<T>;
