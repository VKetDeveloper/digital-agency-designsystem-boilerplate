'use client';

import React from "react";
import "@fontsource-variable/noto-sans-jp";
import "@fontsource/noto-serif-jp";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen bg-bg-base text-text-primary font-sans">
      {/* Header */}
      <header className="border-b border-border-base bg-surface-primary">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-text-brand">
            デジタル庁デザインシステム サンプル
          </h1>
          <nav className="space-x-6 text-sm">
            <a href="#" className="hover:underline text-text-link">ホーム</a>
            <a href="#" className="hover:underline text-text-link">お知らせ</a>
            <a href="#" className="hover:underline text-text-link">サポート</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-surface-alt py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-text-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            行政サービスを、もっとわかりやすく。
          </motion.h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            このサイトはデジタル庁デザインシステムに基づいて構築されています。
            <br />
            アクセシビリティ・統一感・利便性を重視した UI コンポーネントを提供します。
          </p>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-8 text-text-heading">お知らせ</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "デザインシステム v2.0 公開", date: "2025年10月10日", desc: "新しいアクセシビリティ指針とカラーパレットを追加しました。" },
            { title: "コンポーネント追加: DatePicker", date: "2025年9月28日", desc: "フォームUIの拡充を目的に、日付入力コンポーネントを追加しました。" },
            { title: "デザインガイド文書更新", date: "2025年9月5日", desc: "文書レイアウトおよびガイドラインの記述を刷新しました。" },
          ].map((item) => (
            <article
              key={item.title}
              className="border border-border-base rounded-2xl p-6 bg-surface-primary hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold mb-2 text-text-heading">{item.title}</h4>
              <p className="text-sm text-text-tertiary mb-2">{item.date}</p>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-base py-6 bg-surface-alt text-center text-sm text-text-tertiary">
        © 2025 デジタル庁デザインシステム Sample Boilerplate
      </footer>
    </main>
  );
}
