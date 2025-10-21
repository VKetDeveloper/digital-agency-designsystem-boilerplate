'use client';

import React from 'react';
import { loadReadSpeaker } from '@/lib/readSpeaker';

type ReadSpeakerButtonProps = {
  customerId?: string;
  lang?: string;
  readId?: string;
  label?: string;
};

// ReadSpeaker の window 拡張型
interface ReadSpeakerWindow extends Window {
  readpage?: (url: string, targetId: string) => void;
}

export default function ReadSpeakerButton({
  customerId = '8435',
  lang = 'ja_jp',
  readId = 'tmp_read_contents',
  label = '音声読み上げ',
}: ReadSpeakerButtonProps) {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // ReadSpeakerスクリプトをロード
    loadReadSpeaker(customerId);

    const href = `https://app-eas.readspeaker.com/cgi-bin/rsent?customerid=${customerId}&lang=${lang}&readid=${readId}&url=`;

    const callReadPage = () => {
      const win = window as ReadSpeakerWindow;
      if (win.readpage) {
        win.readpage(href, 'tmp_readspeaker');
      } else {
        console.warn('ReadSpeakerがまだロードされていません。リトライします...');
        setTimeout(callReadPage, 300); // 0.3秒ごとに再試行
      }
    };

    callReadPage();
  };

  return (
    <button
      onClick={handleClick}
      rel="nofollow"
      className="rs_href inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
    >
      🔊 {label}
    </button>
  );
}
