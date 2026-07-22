import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for k10. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "k10",
  "locale": "zh",
  "title": "凯斯勒心理困扰量表（K10）",
  "description": "一份包含10个条目的筛查量表，用于测量过去30天内的非特异性心理困扰程度。",
  "instructions": "以下问题询问您在过去30天内的感受情况。",
  "options": [
    "完全没有",
    "很少的时候",
    "有些时候",
    "大部分时候",
    "所有时候"
  ],
  "questions": {
    "k10-1": {
      "text": "您有多经常感到无缘无故地疲惫不堪？"
    },
    "k10-2": {
      "text": "您有多经常感到紧张？"
    },
    "k10-3": {
      "text": "您有多经常感到紧张到无法平静下来？"
    },
    "k10-4": {
      "text": "您有多经常感到绝望？"
    },
    "k10-5": {
      "text": "您有多经常感到坐立不安或烦躁不安？"
    },
    "k10-6": {
      "text": "您有多经常感到坐立不安到无法安坐？"
    },
    "k10-7": {
      "text": "您有多经常感到情绪低落？"
    },
    "k10-8": {
      "text": "您有多经常感到做任何事都很费力？"
    },
    "k10-9": {
      "text": "您有多经常感到悲伤到什么都无法让您开心起来？"
    },
    "k10-10": {
      "text": "您有多经常感到自己一无是处？"
    }
  },
  "bands": {
    "low": "很可能状态良好",
    "mild": "轻度心理困扰",
    "moderate": "中度心理困扰",
    "severe": "重度心理困扰"
  }
};

export default pack;
