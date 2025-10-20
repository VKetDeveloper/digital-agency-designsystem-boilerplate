export function loadReadSpeaker(): string {
  if (typeof window === "undefined") return "";

  const custmorId = '8435';
  const importFile = `https://cdn-eas.readspeaker.com/script/${custmorId}/webReader/webReader.js?pids=wr&disable=translation,lookup`;

  if (!document.getElementById('rs_req_Init')) {
    const scriptElm = document.createElement("script");
    scriptElm.src = importFile;
    scriptElm.id = 'rs_req_Init';
    document.head.appendChild(scriptElm);
  }

  return importFile;
}
