document.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    const sectionsScrolled = scrollValue / window.innerHeight;
    console.log(sectionsScrolled);
    if (sectionsScrolled > 0 && sectionsScrolled < 1) {
        var conocenos = document.getElementById("conocenos");
        var transformandoElMundo = document.getElementById(
            "transformandoElMundo"
        );
        var nuestrosParther = document.getElementById("nuestrosParther");
        var liderEnTi = document.getElementById("liderEnTi");
        var avisoDePrivacidad = document.getElementById("avisoDePrivacidad");
        conocenos.style.width = "0";
        transformandoElMundo.style.width = "0";
        nuestrosParther.style.width = "0";
        liderEnTi.style.width = "0";
        avisoDePrivacidad.style.width = "0";
        const porcentajeAncho = sectionsScrolled * 100;
        const verticales = document.getElementById("verticales");
        verticales.style.width = porcentajeAncho + "%";
    }

    if (sectionsScrolled > 1 && sectionsScrolled < 2) {
        var verticales = document.getElementById("verticales");
        var transformandoElMundo = document.getElementById(
            "transformandoElMundo"
        );
        var nuestrosParther = document.getElementById("nuestrosParther");
        var liderEnTi = document.getElementById("liderEnTi");
        var avisoDePrivacidad = document.getElementById("avisoDePrivacidad");
        verticales.style.width = "0";
        transformandoElMundo.style.width = "0";
        nuestrosParther.style.width = "0";
        liderEnTi.style.width = "0";
        avisoDePrivacidad.style.width = "0";
        const porcentajeAncho = (sectionsScrolled - 1) * 100;
        const conocenos = document.getElementById("conocenos");
        conocenos.style.width = porcentajeAncho + "%";
    }

    if (sectionsScrolled > 2 && sectionsScrolled < 3) {
        var verticales = document.getElementById("verticales");
        var conocenos = document.getElementById("conocenos");
        var nuestrosParther = document.getElementById("nuestrosParther");
        var liderEnTi = document.getElementById("liderEnTi");
        var avisoDePrivacidad = document.getElementById("avisoDePrivacidad");
        verticales.style.width = "0";
        conocenos.style.width = "0";
        nuestrosParther.style.width = "0";
        liderEnTi.style.width = "0";
        avisoDePrivacidad.style.width = "0";
        const porcentajeAncho = (sectionsScrolled - 2) * 100;
        const transformandoElMundo = document.getElementById(
            "transformandoElMundo"
        );
        transformandoElMundo.style.width = porcentajeAncho + "%";
    }

    if (sectionsScrolled > 3 && sectionsScrolled < 4) {
        var verticales = document.getElementById("verticales");
        var conocenos = document.getElementById("conocenos");
        var transformandoElMundo = document.getElementById(
            "transformandoElMundo"
        );
        var liderEnTi = document.getElementById("liderEnTi");
        var avisoDePrivacidad = document.getElementById("avisoDePrivacidad");
        verticales.style.width = "0";
        conocenos.style.width = "0";
        transformandoElMundo.style.width = "0";
        liderEnTi.style.width = "0";
        avisoDePrivacidad.style.width = "0";
        const porcentajeAncho = (sectionsScrolled - 3) * 100;
        const nuestrosParther = document.getElementById("nuestrosParther");
        nuestrosParther.style.width = porcentajeAncho + "%";
    }

    if (sectionsScrolled > 4 && sectionsScrolled < 5) {
        var verticales = document.getElementById("verticales");
        var conocenos = document.getElementById("conocenos");
        var transformandoElMundo = document.getElementById(
            "transformandoElMundo"
        );
        var nuestrosParther = document.getElementById("nuestrosParther");
        var avisoDePrivacidad = document.getElementById("avisoDePrivacidad");
        verticales.style.width = "0";
        conocenos.style.width = "0";
        transformandoElMundo.style.width = "0";
        nuestrosParther.style.width = "0";
        avisoDePrivacidad.style.width = "0";
        const porcentajeAncho = (sectionsScrolled - 4) * 100;
        const liderEnTi = document.getElementById("liderEnTi");
        liderEnTi.style.width = porcentajeAncho + "%";
    }
    if (sectionsScrolled > 5 && sectionsScrolled < 6) {
        var verticales = document.getElementById("verticales");
        var conocenos = document.getElementById("conocenos");
        var transformandoElMundo = document.getElementById(
            "transformandoElMundo"
        );
        var nuestrosParther = document.getElementById("nuestrosParther");
        var liderEnTi = document.getElementById("liderEnTi");
        verticales.style.width = "0";
        conocenos.style.width = "0";
        transformandoElMundo.style.width = "0";
        nuestrosParther.style.width = "0";
        liderEnTi.style.width = "0";
        const porcentajeAncho = (sectionsScrolled - 5) * 100;
        const avisoDePrivacidad =
            document.getElementById("avisoDePrivacidad");
        avisoDePrivacidad.style.width = porcentajeAncho + "%";
    }
});

document.addEventListener("scroll", function () {
    // Obtén el valor de desplazamiento
    const scrollValue = window.scrollY;
    const sectionsScrolled = scrollValue / window.innerHeight;

    // Obtén el elemento de la imagen por su ID
    var miImagen = document.getElementById("miImagen");

    // Cambia la imagen según el valor de desplazamiento
    if (sectionsScrolled > 1) {
        miImagen.src = "assets/flecha-hacia-arriba.png"; // Reemplaza "nueva-imagen.jpg" con la ruta de tu nueva imagen
    } else {
        miImagen.src = "assets/flecha-derecha.png"; // Vuelve a la imagen original si el scroll está por debajo del umbral
    }
});

var miElemento = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    const sectionsScrolled = scrollValue / window.innerHeight;

    if (
        sectionsScrolled > 1 &&
        !miElemento.classList.contains("fixed-top")
    ) {
        miElemento.classList.add("fixed-top");
    } else if (
        sectionsScrolled <= 1 &&
        miElemento.classList.contains("fixed-top")
    ) {
        miElemento.classList.remove("fixed-top");
    }
});

let isZoomed = false;

window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    const scaleValue = 75;
    const sectionsScrolled = scrollValue / window.innerHeight; // Número de secciones desplazadas

    console.log(sectionsScrolled);
    if (sectionsScrolled > 4.7 && !isZoomed) {
        document.querySelector(".image2").style.transition =
            "transform 3s ease-in"; /* Ajusta la duración de la transición aquí */
        document.querySelector(
            ".image2"
        ).style.transform = `scale(${scaleValue})`;
        isZoomed = true;
    } else if (sectionsScrolled <= 4.7 && isZoomed) {
        document.querySelector(".image2").style.transition =
            "transform 0.5s ease-out"; /* Vuelve a la duración original de la transición */
        document.querySelector(".image2").style.transform = "scale(1)";
        isZoomed = false;
    }
});

window.addEventListener("scroll", function () {

    const scrollValue = window.scrollY;
    const sectionsScrolled = scrollValue / window.innerHeight;
    console.log(sectionsScrolled, "componente de conocenos");

    var conocenos1 = document.querySelector(".conocenos_1");
    var conocenos2 = document.querySelector(".conocenos_2");
    var conocenos3 = document.querySelector(".conocenos_3");
    if (sectionsScrolled < 1) {
        conocenos1.style.top = 0 + "%";
        conocenos2.style.top = 0 + "%";
        conocenos3.style.top = 0 + "%";

    }
    if (sectionsScrolled > 1 && sectionsScrolled <= 2) {
        conocenos1.style.top = (sectionsScrolled * 28) + "%";
        conocenos1.style.opacity = sectionsScrolled - 1;
    }

    if (sectionsScrolled > 1.5 && sectionsScrolled <= 2) {
        conocenos2.style.top = (sectionsScrolled * 28) + "%";
        conocenos2.style.opacity = sectionsScrolled - 1;
    }
    if (sectionsScrolled > 1.8 && sectionsScrolled <= 2) {
        conocenos3.style.top = (sectionsScrolled * 28) + "%";
        conocenos3.style.opacity = sectionsScrolled - 1;
    }
});
if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
} else {
    var years = ["1990", "1995", "2000"];
    var container = document.getElementById("container");
    var globe = new DAT.Globe(container);

    var i,
        tweens = [];

    var settime = function (globe, t) {
        return function () {
            new TWEEN.Tween(globe)
                .to({ time: t / years.length }, 500)
                .easing(TWEEN.Easing.Cubic.EaseOut)
                .start();
            var y = document.getElementById("year" + years[t]);
            if (y.getAttribute("class") === "year active") {
                return;
            }
            var yy = document.getElementsByClassName("year");
            for (i = 0; i < yy.length; i++) {
                yy[i].setAttribute("class", "year");
            }
            y.setAttribute("class", "year active");
        };
    };

    for (var i = 0; i < years.length; i++) {
        var y = document.getElementById("year" + years[i]);
        y.addEventListener("mouseover", settime(globe, i), false);
    }

    var xhr;
    TWEEN.start();

    xhr = new XMLHttpRequest();
    xhr.open("GET", "population909500.json", true);
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                window.data = data;
                for (i = 0; i < data.length; i++) {
                    globe.addData(data[i][1], {
                        format: "magnitude",
                        name: data[i][0],
                        animated: true,
                    });
                }
                globe.createPoints();
                settime(globe, 0)();
                globe.animate();
                document.body.style.backgroundImage = "none"; // remove loading
            }
        }
    };
    xhr.send(null);
}