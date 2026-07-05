import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for dass21. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "dass21",
  "locale": "zh",
  "title": "抑郁-焦虑-压力量表（DASS-21）",
  "description": "一份包含21个条目的自评问卷，用于测量过去一周的抑郁、焦虑和压力水平。",
  "instructions": "请阅读每一条陈述，并选择最能表明过去一周该陈述在多大程度上适用于您的选项。答案没有对错之分。请不要在任何一条陈述上花费太多时间。",
  "options": [
    "完全不适用于我",
    "在某种程度上适用于我，或有时适用",
    "在相当程度上适用于我，或大部分时间适用",
    "非常适用于我，或绝大部分时间适用"
  ],
  "questions": {
    "dass21-1": {
      "text": "我发现自己很难平静下来"
    },
    "dass21-2": {
      "text": "我注意到自己口干"
    },
    "dass21-3": {
      "text": "我似乎完全无法体验到任何积极的感受"
    },
    "dass21-4": {
      "text": "我感到呼吸困难（例如呼吸过快，或没有体力活动时也感到喘不过气）"
    },
    "dass21-5": {
      "text": "我发现自己很难主动去做事情"
    },
    "dass21-6": {
      "text": "我容易对事情反应过度"
    },
    "dass21-7": {
      "text": "我出现过颤抖（例如手抖）"
    },
    "dass21-8": {
      "text": "我觉得自己消耗了很多精神能量"
    },
    "dass21-9": {
      "text": "我担心自己会在某些场合惊慌失措、出丑"
    },
    "dass21-10": {
      "text": "我觉得自己没有什么可期待的"
    },
    "dass21-11": {
      "text": "我发现自己变得焦躁不安"
    },
    "dass21-12": {
      "text": "我发现自己很难放松"
    },
    "dass21-13": {
      "text": "我感到情绪低落、忧郁"
    },
    "dass21-14": {
      "text": "我无法容忍任何妨碍我继续做事的事情"
    },
    "dass21-15": {
      "text": "我感到自己快要惊慌失措了"
    },
    "dass21-16": {
      "text": "我对任何事情都提不起热情"
    },
    "dass21-17": {
      "text": "我觉得自己作为一个人没有多大价值"
    },
    "dass21-18": {
      "text": "我觉得自己相当敏感、易被触怒"
    },
    "dass21-19": {
      "text": "在没有体力活动的情况下，我能察觉到自己的心跳（例如感到心率加快或心跳漏跳）"
    },
    "dass21-20": {
      "text": "我无缘无故地感到害怕"
    },
    "dass21-21": {
      "text": "我觉得生活毫无意义"
    }
  },
  "subscales": {
    "depression": {
      "label": "抑郁",
      "bands": {
        "normal": "正常",
        "mild": "轻度",
        "moderate": "中度",
        "severe": "重度",
        "extremely-severe": "极重度"
      }
    },
    "anxiety": {
      "label": "焦虑",
      "bands": {
        "normal": "正常",
        "mild": "轻度",
        "moderate": "中度",
        "severe": "重度",
        "extremely-severe": "极重度"
      }
    },
    "stress": {
      "label": "压力",
      "bands": {
        "normal": "正常",
        "mild": "轻度",
        "moderate": "中度",
        "severe": "重度",
        "extremely-severe": "极重度"
      }
    }
  }
};

export default pack;
