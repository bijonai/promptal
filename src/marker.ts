import { defineGenerator } from "./types";
import { instant } from "./utils";

export const link = defineGenerator<[string]>(
  (url, ...ins) => () => `[${instant(ins).join(' ')}](${url})`
)

export const image = defineGenerator<[string]>(
  (url, ...ins) => () => `![${instant(ins).join(' ')}](${url})`
)

export const footnote = defineGenerator<[string]>(
  (text, ...ins) => () => `[^${text}]${instant(ins).join(' ')}`
)

export const b = defineGenerator(
  (...ins) => () => `**${instant(ins).join(' ')}**`
)

export const i = defineGenerator(
  (...ins) => () => `*${instant(ins).join(' ')}*`
)

export const s = defineGenerator(
  (...ins) => () => `~~${instant(ins).join(' ')}~~`
)

export const u = defineGenerator(
  (...ins) => () => `__${instant(ins).join(' ')}__`
)

export const del = defineGenerator(
  (...ins) => () => `~~${instant(ins).join(' ')}~~`
)

export const ins = defineGenerator(
  (...ins) => () => `++${instant(ins).join(' ')}++`
)

export const tag = defineGenerator<[string]>(
  (tag, ...ins) => () => `<${tag}>${instant(ins).join(' ')}</${tag}>`
)
