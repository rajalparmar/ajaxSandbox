/* XHR Object Methods and Working with Text */
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
/* XHR Object Methods and Working with JSON */
function loadCustomer() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.responseText);
            const customerData = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID: ${customerData.id}</li>
                    <li>Name: ${customerData.name}</li>
                    <li>Company: ${customerData.company}</li>
                    <li>Phone: ${customerData.phone}</li>
                </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}
function loadCustomers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
            const customersData = JSON.parse(this.responseText);

            let output = '';
            customersData.forEach(function(customer) {
                output += `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                `;
            })
            
            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();
}
function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type === 'success') {
                response.value.forEach(function(value) {
                    output += `<li>${value.joke}</li>`;
                });
            } else {
                output += '<li>Something went wrong!</li>';
            }
            document.querySelector('.jokes').innerHTML = output;
        }
    }
    xhr.send();

    e.preventDefault();
}

// Event Listeners
document.getElementById('button').addEventListener('click', loadData);
document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);
document.querySelector('.get-jokes').addEventListener('click', getJokes);



    