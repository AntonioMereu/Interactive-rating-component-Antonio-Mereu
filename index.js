const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submit = document.querySelector('button');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {

        for (let i = 1; i <= 5; i++) {
            if (i !== +this.id) {
                const checkedValue = document.getElementById(i);
                checkedValue.checked = false;
            }
        }
        document.querySelector('.rating-value').textContent = `${this.id} `;
    });

    submit.addEventListener('click', () => {
        if (!checkbox.checked) {
            console.log('No rating selected!');
        } else {
            document.querySelector('.rating-card').style.display = 'none';
            document.querySelector('.thanks-card').style.display = 'flex';
        }
    });
});
