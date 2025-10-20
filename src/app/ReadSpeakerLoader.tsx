'use client';

import { useEffect } from 'react';
import { loadReadSpeaker } from '../lib/readSpeaker';

export default function ReadSpeakerLoader() {
  useEffect(() => {
    const url = loadReadSpeaker();
    console.log('ReadSpeaker loaded:', url);
  }, []);

  return null;
}
