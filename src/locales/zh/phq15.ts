import type { InventoryLocalePack } from "../../types.ts";

/** Chinese locale pack for phq15. AI translation (Anthropic Claude, claude-opus-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  id: "phq15",
  locale: "zh",
  title: "患者健康问卷-15（PHQ-15）",
  description: "一份包含 15 个条目的自评量表，用于测量常见躯体症状的严重程度，并筛查躯体化及躯体形式障碍。",
  instructions: "在过去 4 周里，以下问题对您的困扰程度如何？",
  options: ["完全没有困扰", "有一点困扰", "困扰很大"],
  questions: {
    "phq15-1": { text: "胃痛" },
    "phq15-2": { text: "背痛" },
    "phq15-3": { text: "手臂、腿部或关节（膝盖、髋部等）疼痛" },
    "phq15-4": { text: "痛经或其他与月经有关的问题［仅限女性］" },
    "phq15-5": { text: "头痛" },
    "phq15-6": { text: "胸痛" },
    "phq15-7": { text: "头晕" },
    "phq15-8": { text: "昏厥" },
    "phq15-9": { text: "感到心跳剧烈或加速" },
    "phq15-10": { text: "气短" },
    "phq15-11": { text: "性交时疼痛或有困难" },
    "phq15-12": { text: "便秘、大便稀溏或腹泻" },
    "phq15-13": { text: "恶心、胀气或消化不良" },
    "phq15-14": { text: "感到疲倦或没有精力" },
    "phq15-15": { text: "睡眠困难" },
  },
  bands: {
    minimal: "躯体症状极轻微",
    low: "躯体症状严重程度较低",
    medium: "躯体症状严重程度中等",
    high: "躯体症状严重程度较高",
  },
};

export default pack;
