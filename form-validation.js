const campoDoFormulario = document.querySelectorAll(".form-field");
const form = document.querySelector(".form");

function verificar() {
    let campoIncompleto = false;

    campoDoFormulario.forEach((item) => {
        const input = item.querySelector(".form-field__input");

        if (input.value.trim() === "") {
            item.classList.add("form-field--error");
            item.classList.remove("form-field--filled");
            campoIncompleto = true;
        } else {
            item.classList.remove("form-field--error");
        }
    });

    return campoIncompleto;
}

campoDoFormulario.forEach((item) => {
    const input = item.querySelector(".form-field__input");

    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            item.classList.remove("form-field--error");
            item.classList.add("form-field--filled");
        } else {
            item.classList.remove("form-field--filled");
        }
    });
});

form.addEventListener("submit", (e) => {
    const campoIncompleto = verificar();

    if (campoIncompleto) {
        e.preventDefault();
    }
});
