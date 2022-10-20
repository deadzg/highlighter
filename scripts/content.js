document.addEventListener('mouseup', function(){
    var selectedText = getSelectionText()
    if (selectedText.length > 0){
        console.log(selectedText)
        // Sending a message to extention
        setTimeout(() => {

            chrome.runtime.sendMessage({content: selectedText}, function(response) {
                console.log(response);
            });
        }, 100);
    }
}, false)

// chrome.runtime.sendMessage({greeting: "selectedText"}, function(response) {
//     console.log(response);
// });

// setTimeout(() => {
//     chrome.runtime.sendMessage({action: "update UI", results: dataForUI}, 
//         (response)=> {
//           console.log(response.message)
//         }
//     )
// }, 100);


function getSelectionText(){
    var selectedText = ""
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString()
    }
    return selectedText
}