'use client';

import React from 'react';
import Link from "next/link";
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
  ErrorText
} from '../../component/lib';

import {
  Button,
} from '../../component/NotificationBanner';

import {
  EmergencyBanner_v2,
  EmergencyBannerBody_v2,
  EmergencyBannerButton_v2,
  EmergencyBannerHeading_v2,
} from '../../component/Emergency';

import {
  NotificationBanner_v2,
  NotificationBannerBody_v2,
  NotificationBannerClose_v2,
  NotificationBannerHeading_v2,
  NotificationBannerHeader_v2,
} from '../../component/Notification';


import ReadSpeakerButton from '../../component/readSpeaker/parts';


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
            <Link href="/" className="hover:underline text-text-link">ホーム</Link>
            <Link href="/demo/" className="hover:underline text-text-link">デモ</Link>
            <Link href="https://design.vrugd.jp/" className="hover:underline text-text-link">Document</Link>
            <Link href="https://github.com/digital-go-jp/design-system-example-components-react/blob/main/README.md" className="hover:underline text-text-link">サポート</Link>
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
        <h1 className='text-3xl md:text-4xl font-bold mb-6 text-text-heading'>緊急バナー</h1>
        <div className='flex flex-col gap-8'>
        <EmergencyBanner_v2>
          <EmergencyBannerHeading_v2 level='h2'>
            〇〇地区に避難準備情報が発令されました
          </EmergencyBannerHeading_v2>
          <EmergencyBannerBody_v2>
            <div className='flex flex-col gap-2 desktop:gap-4'>
              <p className='text-std-16N-170'>
                <time dateTime='2024-01-01T06:00'>2024年1月1日 06:00更新</time>
              </p>
              <p className='text-std-16N-170 desktop:text-std-20N-150'>
                1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
              </p>
            </div>
          </EmergencyBannerBody_v2>
        </EmergencyBanner_v2>
      </div>
      <div className="mb-4 px-12 bg-gray-100"></div>

        <div className='flex flex-col gap-8'>
          <EmergencyBanner_v2>
              <EmergencyBannerHeading_v2 level='h2'>
                〇〇地区に避難準備情報が発令されました
              </EmergencyBannerHeading_v2>
              <EmergencyBannerBody_v2>
                <div className='flex flex-col gap-2 desktop:gap-4'>
                  <p className='text-std-16N-170'>
                    <time dateTime='2024-01-01T06:00'>2024年1月1日 06:00更新</time>
                  </p>
                  <p className='text-std-16N-170 desktop:text-std-20N-150'>
                    1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
                  </p>
                  <EmergencyBannerButton_v2 className='mt-4 mb-2' href='#' target='_blank'>
                    指定避難所を確認する
                  </EmergencyBannerButton_v2>
                </div>
              </EmergencyBannerBody_v2>
            </EmergencyBanner_v2>
        </div>


      <div className="mb-4 px-12 bg-gray-100"></div>
        <div className='flex flex-col gap-8'>
        <EmergencyBanner>
          <EmergencyBannerHeading level='h2'>
            〇〇地区に避難準備情報が発令されました
          </EmergencyBannerHeading>
          <EmergencyBannerBody_v2>
            <div className='flex flex-col gap-2 desktop:gap-4'>
              <p className='text-std-16N-170'>
                <time dateTime='2024-01-01T06:00'>2024年1月1日 06:00更新</time>
              </p>
              <p className='text-std-16N-170 desktop:text-std-20N-150'>
                1時23分に○○地区に対して避難準備情報が発令されました。お年寄りの方等避難に時間がかかる方は、直ちに指定避難所へ避難してください。
              </p>
              <EmergencyBannerButton_v2 className='mt-4 mb-2' href='#' target='_blank'>
                指定避難所を確認する
              </EmergencyBannerButton_v2>
            </div>
          </EmergencyBannerBody_v2>
        </EmergencyBanner>
      </div>

      {/**marginを作成 */}
      <div className="mb-4 px-12 bg-gray-100"></div>

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
        
        </section>
      <section id="demo" className="container mx-auto p-4">
      <h1 className='text-3xl md:text-4xl font-bold mb-6 text-text-heading'>通知バナー</h1>
       <div className='flex flex-col gap-8'>
        <NotificationBanner_v2 bannerStyle='color-chip' type='info1'>
          <NotificationBannerHeader_v2>
            <NotificationBannerHeading_v2 level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading_v2>
          </NotificationBannerHeader_v2>
          <NotificationBannerBody_v2>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 desktop:!px-4' type='button' size='md' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody_v2>
        </NotificationBanner_v2>
        <NotificationBanner_v2 bannerStyle='color-chip' type='info2'>
          <NotificationBannerHeader_v2>
            <NotificationBannerHeading_v2 level='h2'>
              登録期間が延長されました
            </NotificationBannerHeading_v2>
          </NotificationBannerHeader_v2>
          <NotificationBannerBody_v2>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 text-solid-gray-800 hover:text-solid-gray-900 hover:bg-solid-gray-200 active:text-black active:bg-solid-gray-300 desktop:!px-4' size='md' type='button' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 bg-solid-gray-800 hover:bg-solid-gray-900 active:bg-black desktop:!px-4' size='md' type='button' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody_v2>
        </NotificationBanner_v2>
        <NotificationBanner_v2 bannerStyle='color-chip' type='warning'>
          <NotificationBannerHeader_v2>
            <NotificationBannerHeading_v2 level='h2'>
              偽SNSアカウントにご注意ください
            </NotificationBannerHeading_v2>
          </NotificationBannerHeader_v2>
          <NotificationBannerBody_v2>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 text-warning-yellow-2 hover:text-yellow-1000 hover:bg-yellow-200 active:text-yellow-1200 active:bg-yellow-300 desktop:!px-4' size='md' type='button' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 bg-warning-yellow-2 hover:bg-yellow-1100 active:bg-yellow-1200 desktop:!px-4' size='md' type='button' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody_v2>
        </NotificationBanner_v2>
        <NotificationBanner_v2 bannerStyle='color-chip' type='error'>
          <NotificationBannerHeader_v2>
            <NotificationBannerHeading_v2 level='h2'>
              操作を完了できませんでした
            </NotificationBannerHeading_v2>
          </NotificationBannerHeader_v2>
          <NotificationBannerBody_v2>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 text-error-1 hover:text-red-1000 hover:bg-red-200 active:text-red-1200 active:bg-red-300 desktop:!px-4' size='md' type='button' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 bg-error-1 hover:bg-red-1000 active:bg-red-1200 desktop:!px-4' size='md' type='button' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody_v2>
        </NotificationBanner_v2>
        <NotificationBanner_v2 bannerStyle='color-chip' type='success'>
          <NotificationBannerHeader_v2>
            <NotificationBannerHeading_v2 level='h2'>
              登録手続きは全て完了しました
            </NotificationBannerHeading_v2>
          </NotificationBannerHeader_v2>
          <NotificationBannerBody_v2>
            ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。ダミーテキストは、デザインの作成時に使用される仮の文章です。
            <div className='grid mt-4 gap-2 grid-flow-col grid-cols-2 desktop:grid-cols-none desktop:gap-4 desktop:justify-end'>
              <Button className='!px-3 text-success-2 hover:text-green-1000 hover:bg-green-200 active:text-green-1200 active:bg-green-300 desktop:!px-4' size='md' type='button' variant='outline'>
                アクションボタン
              </Button>
              <Button className='!px-3 bg-success-2 hover:bg-green-1000 active:bg-green-1200 desktop:!px-4' size='md' type='button' variant='solid-fill'>
                アクションボタン
              </Button>
            </div>
          </NotificationBannerBody_v2>
        </NotificationBanner_v2>
      </div>
      </section>

      <section className="container mx-auto p-4">
        <ErrorText>
          ＊順次追加予定
        </ErrorText>
    <ul className="space-y-2">
      <li className="setting_speaker">
        <ReadSpeakerButton />
      </li>
    </ul>
      </section>
      

      <footer className="border-t border-border-base py-6 bg-surface-alt text-center text-sm text-text-tertiary">
        © 2025 デジタル庁デザインシステム Sample Boilerplate
      </footer>
    </main>
  );
}
