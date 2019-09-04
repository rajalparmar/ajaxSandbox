/* XHR Object Methods and Working with Text */

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR object 
    const xmlHttpRequest = new XMLHttpRequest();

    // OPEN
    xmlHttpRequest.open('GET', 'data.txt', true);

    // Used for spinners/loaders or fetching data
    xmlHttpRequest.onprogress = function() {
        // ready state 3 - processing requst
    }

    xmlHttpRequest.onload = function() {
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    xmlHttpRequest.onerror = function() {
        console.log('Request errored!!!');
    }
    // SEND
    xmlHttpRequest.send();
}
