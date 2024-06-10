window.addEventListener('load', () => {
    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function onSuccess() {
        alert("Welcome to the team!")
    }

    function onError() {
        alert("Email is invalid")
    }

    const applicantForm = document.querySelector('#form-join')
    const formInput = applicantForm.querySelector('input')

    let valid = false

    formInput.addEventListener('input', ({ target }) => {
        target.setCustomValidity('')
        if (target.checkValidity() && emailIsValid(target.value)) {
            valid = true
        }
    });

    formInput.addEventListener('invalid', ({ target }) => {
        if (target.value === '') {
            target.setCustomValidity('Поле обязательно для заполнения')
            return;
        }
    });

    function handleFormSubmit(event) {
        event.preventDefault()

        if (valid) {
            onSuccess()
        } else {
            onError()
        }
    }

    applicantForm.addEventListener('submit', handleFormSubmit)
})