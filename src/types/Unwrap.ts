export type UnwrapArray<A> = A extends Array<infer R> ? R : never;

export type UnwrapFunction<A> = A extends Array<(param: infer R) => void> ? R : never;

