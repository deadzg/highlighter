document.getElementById("download").addEventListener("click", download);
document.getElementById("clearCache").addEventListener("click", clearCache);

function clearCache() {
    chrome.storage.local.clear();
}

function download() {
    chrome.storage.local.get(['url'], function(result) {
        console.log("Updated Value currently is ", result.url);
        var data = new Blob([result.url], {type: 'text/plain'});
        var textFile = window.URL.createObjectURL(data);
        console.log("File path:")
        console.log(textFile);
        downloadFile(textFile, "testdownload.txt");
    });    
}


function downloadFile(url, fileName) {
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };