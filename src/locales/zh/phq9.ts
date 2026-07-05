import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for phq9. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "phq9",
  "locale": "zh",
  "title": "患者健康问卷（PHQ-9）",
  "description": "一份包含9个条目的自评问卷，用于筛查抑郁并测量其严重程度。",
  "instructions": "在过去的2周里，您被以下任何一个问题困扰的频率如何？",
  "options": [
    "完全没有",
    "有几天",
    "一半以上的天数",
    "几乎每天"
  ],
  "questions": {
    "phq9-1": {
      "text": "做事时提不起兴趣或没有乐趣"
    },
    "phq9-2": {
      "text": "感到心情低落、沮丧或绝望"
    },
    "phq9-3": {
      "text": "入睡困难、睡不安稳或睡眠过多"
    },
    "phq9-4": {
      "text": "感觉疲倦或没有活力"
    },
    "phq9-5": {
      "text": "食欲不振或吃得过多"
    },
    "phq9-6": {
      "text": "觉得自己很糟糕——或觉得自己很失败，或让自己或家人失望"
    },
    "phq9-7": {
      "text": "难以集中注意力做事，例如看报纸或看电视"
    },
    "phq9-8": {
      "text": "动作或说话缓慢到别人可能已经察觉？或者正好相反——烦躁或坐立不安，动来动去的情况比平时多得多"
    },
    "phq9-9": {
      "text": "有不如死掉或以某种方式伤害自己的念头"
    }
  },
  "bands": {
    "minimal": "极轻度抑郁",
    "mild": "轻度抑郁",
    "moderate": "中度抑郁",
    "moderately-severe": "中重度抑郁",
    "severe": "重度抑郁"
  },
  "flags": {
    "suicidality": "报告了自我伤害或自杀意念（第9项）——需要临床关注"
  }
};

export default pack;
