// src/data/articles.ts

export type Article = {
  id: string;
  author: string
  title: string;
  url: string;
  thumbnail_url?: string;
  publishedAt: string;
};

export const externalArticles: Article[] = [
  {
    id: "01",
    title: "デモ記事",
    author: "テレスコ",
    url: "https://note.com/loyal_flea7173/n/n354a7be35605",
    publishedAt: "2026-03-15"
  },
];