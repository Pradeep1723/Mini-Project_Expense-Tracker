document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const descriptionInput = document.getElementById('description');
    const typeSelect = document.getElementById('type');
    const amountInput = document.getElementById('amount');
    const totalAmountSpan = document.querySelector('.amount');

    let totalAmount = 0;

    function register(input) {
        return input;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const description = descriptionInput.value;
        const type = typeSelect.value;
        const amount = parseFloat(amountInput.value);

        if (description && type && !isNaN(amount)) {
            totalAmount += amount;
            totalAmountSpan.textContent = `₹${totalAmount}`;

            const transaction = {
                name: description,
                type: type,
                amount: amount
            };

            console.log(transaction);

            reset();
        } else {
            console.error('Invalid input');
        }
    }

    function reset() {
        descriptionInput.value = '';
        typeSelect.value = 'Investment';
        amountInput.value = '';
    }

    form.addEventListener('submit', handleSubmit);

    register(descriptionInput);
    register(typeSelect);
    register(amountInput);
});