const form = document.getElementById('form');
const mail = document.getElementById('mail');
const frequency = document.getElementById('frequency');
const howMany = document.getElementById('how-many');
const display = document.getElementById('display');

const sendMail = e => {
    e.preventDefault();
    fetch('/send', {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json' 
        },
        body : JSON.stringify({
            mailAddress : mail.value,
            frequency : frequency.value,
            howMany : howMany.value
        })
    })
    .then(res => res.json())
    .then(data => {
        display.innerHTML = data.msg;
    })
    .catch(err => console.log('oops :' , err));
}

form.addEventListener('submit', sendMail);