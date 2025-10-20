export const loadReadSpeaker = (readId: string = 'tmp_read_contents') => {
  (window as any).rsConf = { general: { usePost: true } };

  const customerId = '8435';
  const lang = 'ja_jp';
  const baseUrl = `https://app-eas.readspeaker.com/cgi-bin/rsent`;
  const fullUrl = `${baseUrl}?customerid=${customerId}&lang=${lang}&readid=${readId}&url=`;

  const importFile = `https://cdn-eas.readspeaker.com/script/${customerId}/webReader/webReader.js?pids=wr&disable=translation,lookup`;

  const scriptElm = document.createElement('script');
  scriptElm.src = importFile;
  scriptElm.id = 'rs_req_Init';
  document.head.appendChild(scriptElm);

  return fullUrl;
};
