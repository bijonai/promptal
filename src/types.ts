export type Generator<T extends Array<unknown> = Instant[]> = (...args: [...T, ...Item[]]) => Instant
export type Instant = () => string
export type Item = string | Instant

export const defineGenerator = <T extends Array<unknown> = Instant[]>(generator: Generator<T>): Generator<T> => generator
