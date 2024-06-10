


const refs = {
    formEl: document.querySelector('.form'),
    inputDelay: document.querySelector('.input-delay'),
    inputFulf: document.querySelector('.input-fulf'),
    inputReje: document.querySelector('.input-reje'),
    btnEl: document.querySelector('.btn-ntf'),
};
refs.formEl.addEventListener('submit', (e) => {
    setTimeout(() => {
        createPromise(refs.inputDelay.value, refs.inputFulf.value || refs.inputReje.value)
            .then(suss => console.log(suss))
            .catch(error => console.error(error));
    }, refs.inputDelay.value);
     e.preventDefault();
});
function createPromise(delay, input) {
    if (input === refs.inputFulf.value) {
        return Promise.resolve(`✅ Fulfilled promise in ${ delay }ms`);
    } else if (input === refs.inputReje.value) {
        return Promise.reject(`❌ Rejected promise in ${delay}ms`);
    }
}
// createPromise(1000, refs.inputFulf)
//   .then(suss => console.log(suss))
//   .catch(error => console.error(error));
    
     
