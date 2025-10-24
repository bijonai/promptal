import { defineGenerator } from "./types";
import { instant } from "./utils";

export const code = defineGenerator(
  (...ins) => () => `\`${instant(ins).join(' ') }\``
)

export const codeblock = defineGenerator<[string]>(
  (lang, ...ins) => () => `\`\`\`${lang}\n${instant(ins).join('\n') }\n\`\`\``
)
