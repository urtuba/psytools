import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for cesd. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "cesd",
  "locale": "zh",
  "title": "流行病学研究中心抑郁量表（CES-D）",
  "description": "用于测量普通人群抑郁症状的20个条目自评量表。",
  "instructions": "请仔细阅读每一条陈述，然后指出在过去一周内（包括今天）您有多经常出现这样的感受或行为。",
  "options": [
    "很少或没有（少于1天）",
    "有时或少量时间（1-2天）",
    "经常或相当多的时间（3-4天）",
    "大多数时间或全部时间（5-7天）"
  ],
  "questions": {
    "cesd-1": { "text": "平时不会烦扰我的事情让我感到烦扰" },
    "cesd-2": { "text": "我不想吃东西；胃口不好" },
    "cesd-3": { "text": "即使有家人和朋友的帮助，我也觉得无法摆脱苦闷" },
    "cesd-4": { "text": "我觉得自己和别人一样好" },
    "cesd-5": { "text": "我很难把注意力集中在正在做的事情上" },
    "cesd-6": { "text": "我感到情绪低落" },
    "cesd-7": { "text": "我觉得做任何事情都很费力" },
    "cesd-8": { "text": "我对未来充满希望" },
    "cesd-9": { "text": "我觉得我的生活是失败的" },
    "cesd-10": { "text": "我感到害怕" },
    "cesd-11": { "text": "我睡眠不安稳" },
    "cesd-12": { "text": "我很快乐" },
    "cesd-13": { "text": "我比平时说话少" },
    "cesd-14": { "text": "我感到孤独" },
    "cesd-15": { "text": "人们对我不友好" },
    "cesd-16": { "text": "我享受生活" },
    "cesd-17": { "text": "我有过哭泣的时候" },
    "cesd-18": { "text": "我感到悲伤" },
    "cesd-19": { "text": "我觉得人们不喜欢我" },
    "cesd-20": { "text": "我觉得自己无法振作起来" }
  },
  "bands": {
    "below-cutoff": "低于临床临界值",
    "elevated": "抑郁症状升高（达到或超过临界值16分）"
  }
};

export default pack;
