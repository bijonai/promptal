import { defineGenerator } from "./types";
import { instant } from "./utils";

const title = (level: number) => defineGenerator<[string]>(
  (text, ...ins) => () => `${'#'.repeat(level)} ${text}\n` + instant(ins).join('\n')
)

export const h1 = title(1)
export const h2 = title(2)
export const h3 = title(3)
export const h4 = title(4)
export const h5 = title(5)
export const h6 = title(6)
