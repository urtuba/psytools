import type { AssessmentDefinition } from "../types.ts";
import { Assessment } from "../assessment.ts";
import { PsytoolsError } from "../errors.ts";
import { phq9 } from "./phq9.ts";
import { gad7 } from "./gad7.ts";
import { dass21 } from "./dass21.ts";
import { who5 } from "./who5.ts";
import { asrs6 } from "./asrs6.ts";
import { aq10 } from "./aq10.ts";

export { phq9, gad7, dass21, who5, asrs6, aq10 };
export { twoWeekFrequencyOptions, twoWeekInstructions } from "./common.ts";

/** All predefined inventory definitions shipped with psytools, by id. */
export const inventories: Readonly<Record<string, AssessmentDefinition>> = {
  phq9,
  gad7,
  dass21,
  who5,
  asrs6,
  aq10,
};

export type InventoryId = "phq9" | "gad7" | "dass21" | "who5" | "asrs6" | "aq10";

/**
 * Instantiates a predefined inventory as an `Assessment`.
 * @throws PsytoolsError `unknown_inventory`
 */
export function loadInventory(id: InventoryId | string): Assessment {
  const definition = inventories[id];
  if (!definition) {
    const known = Object.keys(inventories).join(", ");
    throw new PsytoolsError("unknown_inventory", `Unknown inventory "${id}" (available: ${known})`);
  }
  return new Assessment(definition);
}
