chrome.runtime.onInstalled.addListener(({ reason, previousVersion }) => {
  const currentVersion = chrome.runtime.getManifest().version
  const isRealUpdate = reason === "update" && previousVersion !== currentVersion
  if (reason === "install" || isRealUpdate) {
    chrome.windows.create({ url: "update.html", type: "popup", width: 500, height: 400 })
  }
})
