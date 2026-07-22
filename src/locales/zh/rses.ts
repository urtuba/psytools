import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for rses. AI translation (Anthropic Claude, claude-sonnet-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "rses",
  "locale": "zh",
  "title": "罗森伯格自尊量表（RSES）",
  "description": "一份包含10个条目的量表，用于测量总体自我价值感，涵盖对自我的积极和消极情感。",
  "instructions": "以下是一系列关于您对自己总体感受的陈述。请指出您对每条陈述的同意或不同意程度。",
  "options": [
    "非常不同意",
    "不同意",
    "同意",
    "非常同意"
  ],
  "questions": {
    "rses-1": {
      "text": "总的来说，我对自己感到满意"
    },
    "rses-2": {
      "text": "有时我觉得自己一无是处"
    },
    "rses-3": {
      "text": "我觉得自己拥有不少优点"
    },
    "rses-4": {
      "text": "我能够像大多数人一样把事情做好"
    },
    "rses-5": {
      "text": "我觉得自己没有什么值得自豪的地方"
    },
    "rses-6": {
      "text": "有时我确实感到自己毫无用处"
    },
    "rses-7": {
      "text": "我觉得自己是一个有价值的人，至少和别人是平等的"
    },
    "rses-8": {
      "text": "我希望自己能更加尊重自己"
    },
    "rses-9": {
      "text": "总的来说，我倾向于认为自己是个失败者"
    },
    "rses-10": {
      "text": "我对自己持积极的态度"
    }
  },
  "bands": {
    "low": "自尊水平较低",
    "normal": "处于正常范围",
    "high": "自尊水平较高"
  }
};

export default pack;
