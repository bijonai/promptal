import { Item } from "./types";

export const instant = (ins: Item[]): string[] => ins.map((i) => typeof i === 'string' ? i : i())