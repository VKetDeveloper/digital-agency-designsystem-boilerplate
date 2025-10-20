// src/app/ReadSpeakerLoader.tsx
'use client';

import { useEffect } from 'react';
import { loadReadSpeaker } from '../lib/readSpeaker';

export default function ReadSpeakerLoader() {
  useEffect(() => {
    loadReadSpeaker();
  }, []);

  return null;
}
