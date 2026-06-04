$(document).ready(function () {
    let contador = 0;

    let btnActive = $("#btn-activar");
    let count = $("#contador");
    let card = $(".carta");
    let rare = $(".rareza");

    let hobbies = [
        { nombre: "🎸 Bajo", desc: "Toco covers de rock y funk", horas: 4 },
        { nombre: "🎮 Videojuegos", desc: "RPGs y estrategia", horas: 10 },
        { nombre: "✍️ Escribir", desc: "Relatos cortos de terror", horas: 3 },
        { nombre: "📺 Anime", desc: "Shonen y suspenso psicológico", horas: 6 },
        { nombre: "🎬 Terror", desc: "Maratón los fines de semana", horas: 5 }
    ]

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


    let actualHobby = null;
    let hobbyName = $('#hobbyName');
    let hobbyDesc = $('#hobbyDesc');
    let hobbyContainer = $('#hobbyContainer');

    const showHobbyRandom = () => {
        let newHobby;
        do {
            newHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
        } while (newHobby === actualHobby && hobbies.length > 1);

        actualHobby = newHobby;
        hobbyName.text(newHobby.nombre);
        hobbyDesc.text(newHobby.desc);

        hobbyContainer.off('dblclick').dblclick(() => {
            alert(`📅 Le dedico ${newHobby.horas} horas semanales`);
        });
    }
    showHobbyRandom();

    let btnHobby = $('#btnHobby');

    btnHobby.click(() => {
        hobbyContainer.fadeOut(200, () => {
            showHobbyRandom();
            hobbyContainer.fadeIn(200);
        });
    });

     let btnModo = $("#btn-modo");
    let modoActivo = false;

    btnModo.click(function () {
        $("body").toggleClass("modo-noche");
        modoActivo = !modoActivo;

        if (modoActivo) {
            btnModo.text("☀️");
        } else {
            btnModo.text("🌙");
        }
    });

        // Reverso de la carta
    let btnReverso = $("#btn-reverso");
    let reverso = $("#reverso");
    let reversoVisible = false;

    btnReverso.click(function () {
        reverso.slideToggle(300);
        reversoVisible = !reversoVisible;

        if (reversoVisible) {
            btnReverso.text("📜 Ocultar reverso");
        } else {
            btnReverso.text("📜 Ver reverso");
        }
    });

        // Ruleta de poderes secretos
    let poderes = [
        "🔥 Inmunidad al lunes",
        "☕ Doble café gratis",
        "🐛 Visión de bug instantánea",
        "⚡ Refactor rápido",
        "📦 No más merge conflicts",
        "🎨 Centrado perfecto con CSS",
        "🚀 Despliegue sin errores"
    ];
    
    let poderAnterior = null;
    let btnPoder = $("#btn-poder");
    let poderNombre = $("#poder-nombre");
    let poderContainer = $("#poder-container");
    
    btnPoder.click(function () {
        let nuevoPoder;
        do {
            nuevoPoder = poderes[Math.floor(Math.random() * poderes.length)];
        } while (nuevoPoder === poderAnterior && poderes.length > 1);
        
        poderAnterior = nuevoPoder;
        
        poderContainer.fadeOut(200, function () {
            poderNombre.text(nuevoPoder);
            $(this).fadeIn(200);
        });
        
        $(".carta").addClass("brillo");
        setTimeout(function () {
            $(".carta").removeClass("brillo");
        }, 500);
    });
});