import type { InventoryLocalePack } from "../../types.ts";

/** Simplified Chinese locale pack for mini-ipip. AI translation (Anthropic Claude, claude-fable-5), unverified — see SOURCES.md. */
const pack: InventoryLocalePack = {
  "id": "mini-ipip",
  "locale": "zh",
  "title": "Mini-IPIP 大五人格量表",
  "description": "一个源自国际人格条目库（IPIP）的20项公共领域量表，用于测量大五人格特质（外向性、宜人性、尽责性、神经质、开放性）。",
  "instructions": "请按照您现在通常的样子来描述自己，而不是您希望将来成为的样子。请指出每个陈述对您的描述有多准确。",
  "options": [
    "非常不符合",
    "比较不符合",
    "既非符合也非不符合",
    "比较符合",
    "非常符合"
  ],
  "questions": {
    "mini-ipip-1": {
      "text": "我是聚会中的活跃人物"
    },
    "mini-ipip-2": {
      "text": "我能体会别人的感受"
    },
    "mini-ipip-3": {
      "text": "我会立刻把日常事务做完"
    },
    "mini-ipip-4": {
      "text": "我的情绪经常波动"
    },
    "mini-ipip-5": {
      "text": "我有丰富的想象力"
    },
    "mini-ipip-6": {
      "text": "我话不多"
    },
    "mini-ipip-7": {
      "text": "我对别人的问题不感兴趣"
    },
    "mini-ipip-8": {
      "text": "我经常忘记把东西放回原处"
    },
    "mini-ipip-9": {
      "text": "我大部分时间都很放松"
    },
    "mini-ipip-10": {
      "text": "我对抽象的观念不感兴趣"
    },
    "mini-ipip-11": {
      "text": "在聚会上我会和很多不同的人交谈"
    },
    "mini-ipip-12": {
      "text": "我能感受到别人的情绪"
    },
    "mini-ipip-13": {
      "text": "我喜欢井井有条"
    },
    "mini-ipip-14": {
      "text": "我容易心烦意乱"
    },
    "mini-ipip-15": {
      "text": "我难以理解抽象的观念"
    },
    "mini-ipip-16": {
      "text": "我习惯待在幕后"
    },
    "mini-ipip-17": {
      "text": "我对别人并不真正感兴趣"
    },
    "mini-ipip-18": {
      "text": "我常把事情弄得一团糟"
    },
    "mini-ipip-19": {
      "text": "我很少感到忧郁"
    },
    "mini-ipip-20": {
      "text": "我的想象力不佳"
    }
  },
  "subscales": {
    "extraversion": {
      "label": "外向性"
    },
    "agreeableness": {
      "label": "宜人性"
    },
    "conscientiousness": {
      "label": "尽责性"
    },
    "neuroticism": {
      "label": "神经质"
    },
    "openness": {
      "label": "开放性（智力/想象力）"
    }
  }
};

export default pack;
