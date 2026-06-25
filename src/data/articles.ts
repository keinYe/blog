export type Article = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  words: string;
  category: string;
  summary: string;
  featuredExcerpt?: string;
  featured?: boolean;
  sections: {
    id: string;
    title: string;
  }[];
};

export const articles: Article[] = [
  {
    slug: "2026-06-07-65-lines-karpathy",
    title: "65 行，治好了 AI 写代码的三个臭毛病",
    date: "2026-06-07",
    readTime: "6 min",
    words: "2600 字",
    category: "AI Coding",
    summary:
      "Karpathy 的 65 行规则没有新技术和新模型，只是把 AI 写代码时最容易乱来的地方堵住。",
    featuredExcerpt:
      "AI 不是不够聪明，是管不住自己的手。当前 AI 编程的最大杠杆，不是追更强的模型，是让现有模型每一行都写对。",
    featured: true,
    sections: [
      { id: "section-1", title: "AI 写代码的三个顽疾" },
      { id: "section-2", title: "这 65 行写了什么" },
      { id: "section-3", title: "约束比模型更值钱" }
    ]
  }
];

export const featuredArticle = articles.find((article) => article.featured) ?? articles[0];
