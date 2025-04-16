type="text/javascript">
        (function(){
            emailjs.init({
                publicKey: "W-nSteGhfZxOwArEH",
            });
        })();
        
document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
        alert("Compila tutti i campi prima di inviare.");
        return;
    }

    const sendBtn = document.querySelector("button[type='submit']");
    sendBtn.disabled = true;
    sendBtn.textContent = "Invio in corso...";

    const templateParams = { name, email, message };

    emailjs
        .send("service_en6u5xs", "template_11tzsbi", templateParams)
        .then(() => {
            alert("Email inviata con successo!");
            this.reset();
        })
        .catch((error) => {
            console.error("Errore invio email:", error);
            alert("C'è stato un problema. Riprova.");
        })
        .finally(() => {
            sendBtn.disabled = false;
            sendBtn.textContent = "Invia";
        });
});
