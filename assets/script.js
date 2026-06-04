$(document).ready(function () {
    let contador = 0;

    let btnActive = $("#btn-activar");
    let count = $("#contador");
    let card = $(".carta");
    let rare = $(".rareza");

    btnActive.click(function () {
        contador++;
        count.text(contador);
        alert("¡Pixel Perfect activado! Todo se alinea milimétricamente ✨");
        card.addClass("activa");
        setTimeout(function () {
            card.removeClass("activa");
        }, 500);
    });

    card.hover(
        function () {
            rare.text("🔥 LEGENDARIA EN POTENCIA 🔥");
        },
        function () {
            rare.text("Rara");
        }
    );
});