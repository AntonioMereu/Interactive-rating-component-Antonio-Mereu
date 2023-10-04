const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const submit = document.querySelector('button');
const refresh = document.querySelector('.return-btn');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        for (let i = 1; i <= 5; i++) {
            if (i !== +this.id) {
                const checkedValue = document.getElementById(i);
                checkedValue.checked = false;
            }
        }
        document.querySelector('.rating-value').textContent = `${this.id} `;
        document.querySelector('.warning').style.display = 'none';
        document.querySelectorAll('.rating span').forEach(span => {
            span.style.border = 'none';
        });
    });

    submit.addEventListener('click', () => {
        if (!checkbox.checked) {
            document.querySelector('.warning').style.display = 'block';
            document.querySelectorAll('.rating span').forEach(span => {
                span.style.border = 'solid 1px var(--warning)';
            });
        } else {
            document.querySelector('.rating-card').style.display = 'none';
            document.querySelector('.thanks-card').style.display = 'flex';
        }
    });
});

refresh.addEventListener('click', () => {
    location.reload();
})