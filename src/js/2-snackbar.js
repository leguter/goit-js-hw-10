
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import closeIcon from '../img/close-icon.svg'


const refs = {
    formEl: document.querySelector('.form'),
    inputDelay: document.querySelector('.input-delay'),
    inputFulf: document.querySelector('.input-fulf'),
    inputReje: document.querySelector('.input-reje'),
    btnEl: document.querySelector('.btn-ntf'),
    radioChecked: document.querySelectorAll('input:checked[type="radio"]')
};


refs.formEl.addEventListener('submit', createPromise);
let promise;
function createPromise(e) {
    e.preventDefault();
    const delay = e.target.delay.value;
    const form = e.target.state.value;
    
     promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (form === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
     });  
    promise
        .then(delay => {
            iziToast.success({
                message: `✅ Fulfilled promise in ${delay}ms`,
                backgroundColor: '#59a10d',
                messageSize: '16px',
                messageColor: '#fff',
                position: "topRight",
                messageLineHeight: '1.5',
});
        })
        .catch(delay => {
            console.log();
            iziToast.error({
                message: `❌ Rejected promise in ${delay}ms`,
                backgroundColor: '#ef4040',
                messageLineHeight: '1.5',
                messageSize: '16px',
                messageColor: '#fff',
                position: "topRight",
                iconUrl: closeIcon,
});
        });

};

// createPromise(1000, refs.inputFulf)
//   .then(suss => console.log(suss))
//   .catch(error => console.error(error));
    
     
