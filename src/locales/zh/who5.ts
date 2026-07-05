import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for who5. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "who5",
  "locale": "zh",
  "title": "世界卫生组织五项身心健康指标（WHO-5）",
  "description": "一份包含5个条目的自评量表，用于测量过去两周的主观心理幸福感。得分越高，表示身心健康状况越好。",
  "instructions": "请针对以下五条陈述，逐条选出最接近您在过去两周内感受的选项。",
  "options": [
    "任何时候都没有",
    "有些时候",
    "少于一半的时间",
    "多于一半的时间",
    "大部分时间",
    "所有时间"
  ],
  "questions": {
    "who5-1": {
      "text": "我感到愉快、心情舒畅"
    },
    "who5-2": {
      "text": "我感到平静和放松"
    },
    "who5-3": {
      "text": "我感到精力充沛、充满活力"
    },
    "who5-4": {
      "text": "我醒来时感到清爽、休息充分"
    },
    "who5-5": {
      "text": "我的日常生活充满了让我感兴趣的事物"
    }
  },
  "bands": {
    "low": "幸福感低——提示可能存在抑郁，建议进行评估",
    "reduced": "幸福感降低——建议进行抑郁筛查",
    "good": "幸福感良好"
  }
};

export default pack;
