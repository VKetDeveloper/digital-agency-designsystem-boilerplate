'use client';

import React from 'react';
import "@fontsource-variable/noto-sans-jp";
import "@fontsource/noto-serif-jp";
import { motion } from "framer-motion";
import "@digital-go-jp/design-tokens";
import "@digital-go-jp/tailwind-theme-plugin";

import {
  EmergencyBanner,
  EmergencyBannerHeading,
  EmergencyBannerBody,
  EmergencyBannerButton,
} from '../../component/lib';

import {
  NotificationBanner,
  NotificationBannerHeader,
  NotificationBannerHeading,
  NotificationBannerBody,
  Button,
} from '../../component/NotificationBanner';

const updateTime = new Date('2024-01-01T06:00:00');

export default function Page() {
  return (
    <main className="min-h-screen bg-bg-base text-text-primary font-sans">
      <header className="border-b border-border-base bg-surface-primary">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold text-text-brand">
           デジタル庁デザインシステム サンプル
          </h1>
          <nav className="space-x-6 text-sm">
            <a href="#" className="hover:underline text-text-link">ホーム</a>
            <a href="/demo/" className="hover:underline text-text-link">デモ</a>
            <a href="#" className="hover:underline text-text-link">お知らせ</a>
            <a href="#" className="hover:underline text-text-link">サポート</a>
          </nav>
        </div>
      </header>

      <section className="bg-surface-alt py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-text-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ユーザーにもっとわかりやすく。
          </motion.h2>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            このサイトはデジタル庁デザインシステムに基づいて設計しています。
          </p>
        </div>
      </section>

      <section id="demo" className="container mx-auto p-4">
        <EmergencyBanner>
          <EmergencyBannerHeading level='h2'>
            〇〇地区に避難準備情報が発令されました
          </EmergencyBannerHeading>
          <EmergencyBannerBody>
            <p className='text-base font-normal'>
              <time dateTime={updateTime.toISOString()}>
                {updateTime.toLocaleDateString('ja-JP')} {updateTime.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })} 更新
              </time>
            </p>
            <p className='text-base desktop:text-lg font-normal'>
              1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
            </p>
            <EmergencyBannerButton className='mt-4 mb-2' href='/demo/vip'>
              指定避難所を確認する
            </EmergencyBannerButton>
          </EmergencyBannerBody>
        </EmergencyBanner>

        <NotificationBanner bannerStyle='color-chip' type='error'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              操作を完了できませんでした
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            <p>ネットワークエラーにより、処理を中断しました。時間をおいて再度お試しください。</p>
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button size='md' type='button' variant='outline'>
                ヘルプを確認
              </Button>
              <Button size='md' type='button' variant='solid-fill'>
                再度実行する
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>

        {/* 🟢 success バナー */}
        <NotificationBanner bannerStyle='color-chip' type='success'>
          <NotificationBannerHeader>
            <NotificationBannerHeading level='h2'>
              送信が完了しました
            </NotificationBannerHeading>
          </NotificationBannerHeader>
          <NotificationBannerBody>
            <p>データが正常に送信されました。控え番号は #123456 です。</p>
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button size='md' type='button' variant='outline'>
                内容を確認
              </Button>
              <Button size='md' type='button' variant='solid-fill'>
                戻る
              </Button>
            </div>
          </NotificationBannerBody>
        </NotificationBanner>
      </section>

      <footer className="border-t border-border-base py-6 bg-surface-alt text-center text-sm text-text-tertiary">
        © 2025 デジタル庁デザインシステム Sample Boilerplate
      </footer>
    </main>
  );
}
