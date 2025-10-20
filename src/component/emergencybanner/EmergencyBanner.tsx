import React from 'react';

/**
 * 緊急情報を表示するバナー全体を囲むコンポーネント
 */
export const EmergencyBanner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 〇〇地区に避難準備情報が発令されました
  // という見出しを含んでいるため、アクセシビリティを考慮し、
  // aria-live="polite" や role="alert" なども検討できますが、
  // 提供された構造に沿ってシンプルに実装します。
  return (
    <div className='bg-red-600 text-white p-4 desktop:p-6 rounded-lg shadow-xl flex flex-col gap-8'>
      {children}
    </div>
  );
};

// ... 以下、子コンポーネントの定義 ...