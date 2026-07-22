import type { AssessmentDefinition, InventoryLocalePack } from "../types.ts";
import { Assessment } from "../assessment.ts";
import { PsytoolsError } from "../errors.ts";
import { applyLocale } from "../i18n.ts";
import { availableLocales, localePacks } from "../locales/index.ts";
import { phq9 } from "./phq9.ts";
import { gad7 } from "./gad7.ts";
import { dass21 } from "./dass21.ts";
import { who5 } from "./who5.ts";
import { asrs6 } from "./asrs6.ts";
import { aq10 } from "./aq10.ts";
import { audit } from "./audit.ts";
import { miniIpip } from "./mini-ipip.ts";
import { cesd } from "./cesd.ts";
import { ecrR } from "./ecr-r.ts";
import { erq } from "./erq.ts";
import { hsps } from "./hsps.ts";

export { phq9, gad7, dass21, who5, asrs6, aq10, audit, miniIpip, cesd, ecrR, erq, hsps };
export { twoWeekFrequencyOptions, twoWeekInstructions } from "./common.ts";

/** All predefined inventory definitions shipped with psytools, by id. */
export const inventories: Readonly<Record<string, AssessmentDefinition>> = {
  phq9,
  gad7,
  dass21,
  who5,
  asrs6,
  aq10,
  audit,
  "mini-ipip": miniIpip,
  cesd,
  "ecr-r": ecrR,
  erq,
  hsps,
};

export type InventoryId =
  | "phq9"
  | "gad7"
  | "dass21"
  | "who5"
  | "asrs6"
  | "aq10"
  | "audit"
  | "mini-ipip"
  | "cesd"
  | "ecr-r"
  | "erq"
  | "hsps";

/**
 * Instantiates a predefined inventory as an `Assessment`.
 *
 * Base definitions carry English only; other languages live in separate
 * locale-pack modules that are dynamically imported — and only then held
 * in memory — when listed in `options.locales` (data minimization by
 * default). The returned assessment's definition is still one complete,
 * serializable JSON object containing exactly the requested locales.
 *
 * `options.overrides` applies one or more local, partial locale packs
 * (same shape as the bundled ones) after the built-in packs, so a consumer
 * can reword specific questions/options/instructions without forking the
 * inventory. Later overrides win over earlier ones and over the built-in
 * text; each is validated exactly like a bundled pack (unknown question
 * ids and option-count mismatches still throw `invalid_argument`).
 *
 * @throws PsytoolsError `unknown_inventory` | `unknown_locale` | `invalid_argument`
 */
export async function loadInventory(
  id: InventoryId | string,
  options?: { locales?: string[]; overrides?: InventoryLocalePack | InventoryLocalePack[] },
): Promise<Assessment> {
  const definition = inventories[id];
  if (!definition) {
    const known = Object.keys(inventories).join(", ");
    throw new PsytoolsError("unknown_inventory", `Unknown inventory "${id}" (available: ${known})`);
  }
  let merged = definition;
  for (const locale of options?.locales ?? []) {
    if (locale === definition.defaultLocale) continue;
    const loader = localePacks[id]?.[locale];
    if (!loader) {
      throw new PsytoolsError(
        "unknown_locale",
        `No "${locale}" locale pack for inventory "${id}" (available: ${availableLocales(id).join(", ")})`,
      );
    }
    merged = applyLocale(merged, (await loader()).default);
  }
  const overrides = options?.overrides
    ? Array.isArray(options.overrides)
      ? options.overrides
      : [options.overrides]
    : [];
  for (const override of overrides) {
    merged = applyLocale(merged, override);
  }
  return new Assessment(merged);
}
