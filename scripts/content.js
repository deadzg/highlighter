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
}, false);


function getSelectionText(){
    var selectedText = ""
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString()
    }
    return selectedText
}