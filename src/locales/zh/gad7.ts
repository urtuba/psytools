import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for gad7. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "gad7",
  "locale": "zh",
  "title": "广泛性焦虑障碍量表（GAD-7）",
  "description": "一份包含7个条目的自评问卷，用于筛查广泛性焦虑并测量其严重程度。",
  "instructions": "在过去的2周里，您被以下任何一个问题困扰的频率如何？",
  "options": [
    "完全没有",
    "有几天",
    "一半以上的天数",
    "几乎每天"
  ],
  "questions": {
    "gad7-1": {
      "text": "感到紧张、焦虑或心情烦躁"
    },
    "gad7-2": {
      "text": "无法停止或控制担忧"
    },
    "gad7-3": {
      "text": "对各种各样的事情担忧过多"
    },
    "gad7-4": {
      "text": "难以放松"
    },
    "gad7-5": {
      "text": "坐立不安，难以安静地坐着"
    },
    "gad7-6": {
      "text": "容易恼怒或易被激怒"
    },
    "gad7-7": {
      "text": "感到害怕，好像会有可怕的事情发生"
    }
  },
  "bands": {
    "minimal": "极轻度焦虑",
    "mild": "轻度焦虑",
    "moderate": "中度焦虑",
    "severe": "重度焦虑"
  }
};

export default pack;
