// src/data/articles.ts

export type Article = {
  id: string;
  author: string;
  title: string;
  url: string;
  thumbnail_url?: string;
  publishedAt: string;
};

export const externalArticles: Article[] = [
  {
    id: "01",
    title: "【INIAD10期生へ】1年生向けINIAD取説",
    author: "音㦡とめどれー",
    url: "https://note.com/med0/n/n466efa54b0fe",
    publishedAt: "2026-03-17",
  },
];
