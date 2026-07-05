import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for audit. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "audit",
  "locale": "zh",
  "title": "酒精使用障碍筛查量表（AUDIT）",
  "description": "世界卫生组织开发的10项筛查工具，用于筛查危险和有害的饮酒行为以及可能的酒精依赖。",
  "instructions": "请回答以下关于您在过去12个月内饮用含酒精饮料情况的问题。一杯指一杯标准饮酒量（例如一杯啤酒或葡萄酒，或一份烈酒）。",
  "options": [
    "从不",
    "每月不到一次",
    "每月一次",
    "每周一次",
    "每天或几乎每天"
  ],
  "questions": {
    "audit-1": {
      "text": "您多久喝一次含酒精的饮料？",
      "options": [
        "从不",
        "每月一次或更少",
        "每月2到4次",
        "每周2到3次",
        "每周4次或更多"
      ]
    },
    "audit-2": {
      "text": "在您饮酒的日子里，通常一天喝多少杯含酒精的饮料？",
      "options": [
        "1或2杯",
        "3或4杯",
        "5或6杯",
        "7到9杯",
        "10杯或更多"
      ]
    },
    "audit-3": {
      "text": "您多久有一次在同一场合喝下六杯或更多？"
    },
    "audit-4": {
      "text": "在过去一年中，您多久有一次发现自己一旦开始喝酒就停不下来？"
    },
    "audit-5": {
      "text": "在过去一年中，您多久有一次因为饮酒而未能完成通常应做的事情？"
    },
    "audit-6": {
      "text": "在过去一年中，您多久有一次在大量饮酒后的早晨需要先喝一杯才能让自己振作起来？"
    },
    "audit-7": {
      "text": "在过去一年中，您多久有一次在饮酒后感到内疚或后悔？"
    },
    "audit-8": {
      "text": "在过去一年中，您多久有一次因为饮酒而想不起前一晚发生的事情？"
    },
    "audit-9": {
      "text": "您或其他人是否曾因您饮酒而受伤？",
      "options": [
        "否",
        "是，但不是在过去一年内",
        "是，在过去一年内"
      ]
    },
    "audit-10": {
      "text": "是否有亲友、医生或其他医务人员对您的饮酒表示担忧，或建议您减少饮酒？",
      "options": [
        "否",
        "是，但不是在过去一年内",
        "是，在过去一年内"
      ]
    }
  },
  "bands": {
    "zone-1": "一区：低风险——酒精健康教育",
    "zone-2": "二区：危险饮酒——建议给予简单指导",
    "zone-3": "三区：有害饮酒——简短咨询并持续监测",
    "zone-4": "四区：可能存在依赖——转诊进行诊断评估"
  }
};

export default pack;
