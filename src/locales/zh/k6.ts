import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for k6. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "k6",
  "locale": "zh",
  "title": "凯斯勒心理困扰量表（K6）",
  "description": "一份包含6个条目的筛查量表，用于测量过去30天内的非特异性心理困扰程度。",
  "instructions": "以下问题询问您在过去30天内的感受情况。",
  "options": [
    "完全没有",
    "很少的时候",
    "有些时候",
    "大部分时候",
    "所有时候"
  ],
  "questions": {
    "k6-1": {
      "text": "在过去30天里，您有多经常感到紧张？"
    },
    "k6-2": {
      "text": "在过去30天里，您有多经常感到绝望？"
    },
    "k6-3": {
      "text": "在过去30天里，您有多经常感到坐立不安或烦躁不安？"
    },
    "k6-4": {
      "text": "在过去30天里，您有多经常感到情绪低落到什么都无法让您开心起来？"
    },
    "k6-5": {
      "text": "在过去30天里，您有多经常感到做任何事都很费力？"
    },
    "k6-6": {
      "text": "在过去30天里，您有多经常感到自己一无是处？"
    }
  },
  "bands": {
    "low": "低度心理困扰",
    "moderate": "中度心理困扰",
    "serious": "重度心理困扰"
  }
};

export default pack;
