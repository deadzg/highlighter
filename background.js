chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) {
    console.log("In background.js ...");
    console.log(rq.content);
    console.log(sender.tab.url);

    var content = rq.content.toString();

    chrome.storage.local.get(['url'], function(result) {
        console.log(result)
        if(result.url) {
            content = result.url + "\n" + content;
        } else {
            console.log("Result is null");
        }
        console.log('Value currently is  {}', content);

        chrome.storage.local.set({url: content}, function() {
            console.log('Value is set to {}', content);
        });
    });


    

    chrome.storage.local.get(['url'], function(result) {
        console.log("Updated Value currently is ", result.url);
    });
    setTimeout(function() {
        sendResponse({status: true});
    }, 1);
    return true;  // Return true to fix the error
});



// chrome.storage.local.set({key1: articleTitle}, function() {
//     console.log('Value is set to ' + articleTitle);
//   });

  // chrome.storage.local.get(['key'], function(result) {
  //   console.log('Value currently is ' + result.key);
  // });

  

//   chrome.storage.local.get(null, function(items) {
//     var allKeys = Object.keys(items);
//     console.log(allKeys);
//   });