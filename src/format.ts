import { defineGenerator } from "./types";
import { instant } from "./utils";

export const sections = defineGenerator(
  (...ins) => () => instant(ins).join('\n\n')
)

export const g = defineGenerator(
  (...ins) => () => instant(ins).join(' ')
)

export const tab = defineGenerator(
  (...ins) => () => '  ' + instant(ins).join('\n  ')
)

export const nl = defineGenerator(
  (...ins) => () => instant(ins).join('\n')
)
export const document = sections
