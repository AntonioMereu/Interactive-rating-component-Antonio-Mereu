const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            handleCheckboxChange(+this.id);
        }
    });
});

function handleCheckboxChange(checkboxId) {
    for (let i = 1; i <= 5; i++) {
        if (i !== checkboxId) {
            document.getElementById(i).checked = false;
        }
    }
}