import { defineGenerator, Instant } from "./types";
import { instant } from "./utils";

export const list = defineGenerator<[number | Instant | string]>(
  (type, ...ins) => () => {
    let listType: number = 1
    const marker = ['-', '*', '+']
    if (typeof type === 'number') {
      listType = type
    } else ins.unshift(type)
    return instant(ins).map((i) => {
      const rows = i.split('\n')
      if (rows.every(row => marker.includes(row.trim()[0]))) {
        return rows.map(row => `  ${row}`).join('\n')
      }
      return `${marker[listType - 1]} ${i}`
    }).join('\n')
  }
)