'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function NotFoundPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // サーバーでは何も描画せず、クライアントでのみ描画
  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-surface-alt text-text-primary px-6 py-12">
      <div className="max-w-xl text-center">
        <p className="text-6xl font-bold text-text-brand mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          お探しのページは見つかりませんでした
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          お手数ですが、入力された URL が正しいかご確認ください。  
          または下のリンクからトップページへお戻りいただくか、サイト内検索をご利用ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link href="/" className="inline-block bg-brand-500 text-white px-6 py-3 rounded-md hover:bg-brand-600 focus:outline-focus-ring">
            ホームへ戻る
          </Link>
          <Link href="/contact" className="inline-block border border-brand-500 text-brand-500 px-6 py-3 rounded-md hover:bg-brand-50 focus:outline-focus-ring">
            お問い合わせ
          </Link>
        </div>
        <p className="text-sm text-text-secondary mb-4">
          サイトマップ・検索はこちら→ <Link href="/sitemap" className="text-text-link hover:underline">サイトマップ</Link>
        </p>
        <p className="text-xs text-text-tertiary">（エラーコード 404）</p>
      </div>
    </main>
  );
}
