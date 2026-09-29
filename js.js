/* ====================================================================
   MBE · Lógica JS — datos quemados de ejemplo
   ==================================================================== */

const clases = [
    {
        id: 1,
        fecha: "2024-09-10",
        programa: "Ingeniería de Sistemas",
        materia: "Programación I",
        video: "clase_2024_09_10_prog1.mp4",
        pilar1: {
            m0: { valor: 85, columna: "P1_M0_CPM_Pct_Cumplimiento" },
            m1: { valor: 72, columna: "P1_M1_Pct_Cumplimiento" },
            m2: { valor: 91, columna: "P1_M2_Pct_Cumplimiento" },
            m3: { valor: 88, columna: "P1_M3_Pct_Cumplimiento" },
            m4: { valor: 65, columna: "P1_M4_Pct_Cumplimiento" },
            m5: { valor: 79, columna: "P1_M5_Pct_Cumplimiento" },
            m6: { valor: 83, columna: "P1_M6_Pct_Cumplimiento" },
            m7: { valor: 60, columna: "P1_M7_Pct_Cumplimiento" },
            total: { valor: 78, columna: "P1_Cumplimiento_Total_Pct" }
        },
        pilar2: {
            cep: { valor: 82, columna: "P2_cep" },
            ena: { valor: 74, columna: "P2_ena" },
            dae: { valor: 88, columna: "P2_dae" },
            ccf: { valor: 69, columna: "P2_ccf" }
        },
        pilar3: {
            pedagogico1: { valor: 76, columna: "pedagogico1" },
            pedagogico2: { valor: 84, columna: "pedagogico2" },
            pedagogico3: { valor: 71, columna: "pedagogico3" }
        },
        recomendacionFinal: {
            texto: "Reforzar expresividad vocal, dinamismo y cierre; aumentar interacción con preguntas.",
            columna: "P1_Recomendacion_General"
        },
        preguntas: [
            { num: 1, texto: "¿Cuál es la diferencia entre variable y constante?" },
            { num: 2, texto: "¿Cómo se declara un arreglo?" },
            { num: 3, texto: "¿Qué pasa si accedo a un índice inexistente?" },
            { num: 4, texto: "¿Cuándo usar while en lugar de for?" }
        ]
    },
    {
        id: 2,
        fecha: "2024-09-12",
        programa: "Ingeniería de Sistemas",
        materia: "Bases de Datos",
        video: "clase_2024_09_12_bd.mp4",
        pilar1: {
            m0: { valor: 45, columna: "P1_M0_CPM_Pct_Cumplimiento" },
            m1: { valor: 38, columna: "P1_M1_Pct_Cumplimiento" },
            m2: { valor: 52, columna: "P1_M2_Pct_Cumplimiento" },
            m3: { valor: 90, columna: "P1_M3_Pct_Cumplimiento" },
            m4: { valor: 40, columna: "P1_M4_Pct_Cumplimiento" },
            m5: { valor: 35, columna: "P1_M5_Pct_Cumplimiento" },
            m6: { valor: 48, columna: "P1_M6_Pct_Cumplimiento" },
            m7: { valor: 30, columna: "P1_M7_Pct_Cumplimiento" },
            total: { valor: 47, columna: "P1_Cumplimiento_Total_Pct" }
        },
        pilar2: {
            cep: { valor: 42, columna: "P2_cep" },
            ena: { valor: 38, columna: "P2_ena" },
            dae: { valor: 55, columna: "P2_dae" },
            ccf: { valor: 47, columna: "P2_ccf" }
        },
        pilar3: {
            pedagogico1: { valor: 44, columna: "pedagogico1" },
            pedagogico2: { valor: 50, columna: "pedagogico2" },
            pedagogico3: { valor: 39, columna: "pedagogico3" }
        },
        recomendacionFinal: {
            texto: "Reducir monólogo, mejorar contacto visual, estructura y cierre de la clase.",
            columna: "P1_Recomendacion_General"
        },
        preguntas: [
            { num: 1, texto: "¿Qué es una llave primaria?" },
            { num: 2, texto: "¿Diferencia entre INNER JOIN y LEFT JOIN?" },
            { num: 3, texto: "¿Cómo se normaliza una tabla con datos repetidos?" },
            { num: 4, texto: "¿Qué es un índice y cuándo crearlo?" }
        ]
    },
    {
        id: 3,
        fecha: "2024-09-15",
        programa: "Ingeniería Industrial",
        materia: "Estadística",
        video: "clase_2024_09_15_est.mp4",
        pilar1: {
            m0: { valor: 68, columna: "P1_M0_CPM_Pct_Cumplimiento" },
            m1: { valor: 74, columna: "P1_M1_Pct_Cumplimiento" },
            m2: { valor: 62, columna: "P1_M2_Pct_Cumplimiento" },
            m3: { valor: 85, columna: "P1_M3_Pct_Cumplimiento" },
            m4: { valor: 70, columna: "P1_M4_Pct_Cumplimiento" },
            m5: { valor: 66, columna: "P1_M5_Pct_Cumplimiento" },
            m6: { valor: 72, columna: "P1_M6_Pct_Cumplimiento" },
            m7: { valor: 58, columna: "P1_M7_Pct_Cumplimiento" },
            total: { valor: 69, columna: "P1_Cumplimiento_Total_Pct" }
        },
        pilar2: {
            cep: { valor: 71, columna: "P2_cep" },
            ena: { valor: 78, columna: "P2_ena" },
            dae: { valor: 64, columna: "P2_dae" },
            ccf: { valor: 80, columna: "P2_ccf" }
        },
        pilar3: {
            pedagogico1: { valor: 73, columna: "pedagogico1" },
            pedagogico2: { valor: 68, columna: "pedagogico2" },
            pedagogico3: { valor: 77, columna: "pedagogico3" }
        },
        recomendacionFinal: {
            texto: "Incorporar más cambios de plano y preguntas detonantes durante la exposición.",
            columna: "P1_Recomendacion_General"
        },
        preguntas: [
            { num: 1, texto: "¿Diferencia entre media, mediana y moda?" },
            { num: 2, texto: "¿Cómo se interpreta una desviación estándar alta?" },
            { num: 3, texto: "¿Qué es un intervalo de confianza?" },
            { num: 4, texto: "¿Cuándo usar prueba t en lugar de ANOVA?" }
        ]
    }
];

/* ====================================================================
   DICCIONARIO DE MODELOS
   ==================================================================== */

const MODELOS_P1 = {
    m0: {
        codigo: "M0",
        nombre: "Ritmo de edición visual",
        desc: "Cortes de plano por minuto. Mide el ritmo de edición visual."
    },
    m1: {
        codigo: "M1",
        nombre: "Control del monólogo",
        desc: "Duración media de tramos de habla sin pausa. Detecta monólogos."
    },
    m2: {
        codigo: "M2",
        nombre: "Nivel de interacción",
        desc: "Ratio de voz del docente sobre el tiempo total. Busca equilibrio."
    },
    m3: {
        codigo: "M3",
        nombre: "Estabilidad técnica",
        desc: "Fluidez de la señal. Detecta congelamientos o saltos de transmisión."
    },
    m4: {
        codigo: "M4",
        nombre: "Expresividad vocal",
        desc: "Variación del tono de voz. Mide si habla monótono o modula."
    },
    m5: {
        codigo: "M5",
        nombre: "Presencia corporal",
        desc: "Movimiento corporal del docente en cámara. Mide presencia física."
    },
    m6: {
        codigo: "M6",
        nombre: "Energía y proyección",
        desc: "Volumen real de la voz (RMS). Indica energía y proyección."
    },
    m7: {
        codigo: "M7",
        nombre: "Dinamismo y ritmo",
        desc: "Varianza del movimiento. Mide alternancia entre pausa y gesto."
    },
    total: {
        codigo: "P1",
        nombre: "Cumplimiento total del pilar",
        desc: "Promedio consolidado de M0 a M7. Desempeño general del pilar."
    }
};

const MODELOS_P2 = {
    cep: {
        codigo: "CEP",
        nombre: "Conexión y presencia",
        desc: "Mirada, gestos y postura del docente. Mide conexión no verbal."
    },
    ena: {
        codigo: "ENA",
        nombre: "Estructura narrativa",
        desc: "Coherencia del discurso. Evalúa idea fuerza, gancho y cierre."
    },
    dae: {
        codigo: "DAE",
        nombre: "Dinamismo y engagement",
        desc: "Cortes, estímulos visuales y participación del chat."
    },
    ccf: {
        codigo: "CCF",
        nombre: "Claridad y feedback",
        desc: "Precisión al explicar, uso de ejemplos y respuesta a dudas."
    }
};

const MODELOS_P3 = {
    pedagogico1: {
        codigo: "P3-1",
        nombre: "Planificación pedagógica",
        desc: "Claridad de objetivos y coherencia de la secuencia didáctica."
    },
    pedagogico2: {
        codigo: "P3-2",
        nombre: "Desarrollo pedagógico",
        desc: "Progresión lógica, ejemplos y ritmo adaptado al grupo."
    },
    pedagogico3: {
        codigo: "P3-3",
        nombre: "Cierre pedagógico",
        desc: "Síntesis final y verificación de la comprensión alcanzada."
    }
};

/* ====================================================================
   HELPERS
   ==================================================================== */

function nivelDesdeValor(valor) {
    if (valor < 35) return { clase: "nivel-deficiente", etiqueta: "Deficiente", corto: "deficiente" };
    if (valor < 45) return { clase: "nivel-bajo", etiqueta: "Bajo", corto: "bajo" };
    if (valor < 55) return { clase: "nivel-promedio", etiqueta: "Promedio", corto: "promedio" };
    if (valor < 65) return { clase: "nivel-alto", etiqueta: "Alto", corto: "alto" };
    return { clase: "nivel-sobresaliente", etiqueta: "Sobresaliente", corto: "sobresaliente" };
}

/* ====================================================================
   RADAR SVG
   ==================================================================== */
function generarRadar(datos, colorPrimario) {
    const n = datos.length;
    const size = 320;
    const cx = size / 2;
    const cy = size / 2;
    const radioMax = 105;
    const angulos = datos.map((_, i) => (-Math.PI / 2) + (i * 2 * Math.PI / n));

    function punto(ang, r) {
        return [cx + r * Math.cos(ang), cy + r * Math.sin(ang)];
    }

    let circulos = "";
    [0.2, 0.4, 0.6, 0.8, 1.0].forEach(p => {
        const pts = angulos.map(a => punto(a, radioMax * p).join(",")).join(" ");
        circulos += `<polygon points="${pts}" fill="none" stroke="#e5e7eb" stroke-width="1"/>`;
    });

    let ejes = "";
    angulos.forEach(a => {
        const [x, y] = punto(a, radioMax);
        ejes += `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#d1d5db" stroke-width="1"/>`;
    });

    const puntosData = datos.map((d, i) => {
        const r = radioMax * Math.min(d.valor, 100) / 100;
        return punto(angulos[i], r).join(",");
    }).join(" ");

    let vertices = "";
    datos.forEach((d, i) => {
        const r = radioMax * Math.min(d.valor, 100) / 100;
        const [x, y] = punto(angulos[i], r);
        vertices += `<circle cx="${x}" cy="${y}" r="4" fill="${colorPrimario}" stroke="#ffffff" stroke-width="2"/>`;
    });

    let etiquetas = "";
    datos.forEach((d, i) => {
        const [x, y] = punto(angulos[i], radioMax + 26);
        const anclaje = Math.abs(x - cx) < 5 ? "middle" : (x > cx ? "start" : "end");
        etiquetas += `
            <text x="${x}" y="${y - 2}" text-anchor="${anclaje}" font-family="Montserrat" font-size="10" font-weight="700" fill="#374151">${d.etiqueta}</text>
            <text x="${x}" y="${y + 10}" text-anchor="${anclaje}" font-family="Courier New" font-size="10" font-weight="700" fill="#1a7a3a">${d.valor}%</text>
        `;
    });

    return `
        <svg viewBox="0 0 ${size} ${size}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
            ${circulos}
            ${ejes}
            <polygon points="${puntosData}" fill="${colorPrimario}" fill-opacity="0.28" stroke="${colorPrimario}" stroke-width="2.2"/>
            ${vertices}
            ${etiquetas}
        </svg>
    `;
}

/* ====================================================================
   TABLA DE MODELOS
   ==================================================================== */

function tablaModelosHTML(claves, diccionario, datos) {
    return `
        <table class="tabla-modelos">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${claves.map((k, i) => {
                    const meta = diccionario[k];
                    const valor = datos[i].valor;
                    const nivel = nivelDesdeValor(valor);
                    return `<tr>
                        <td class="col-cod">${meta.codigo}</td>
                        <td class="col-nom">${meta.nombre}</td>
                        <td class="col-desc">${meta.desc}</td>
                        <td class="col-val ${nivel.corto}">${valor}%</td>
                    </tr>`;
                }).join("")}
            </tbody>
        </table>
    `;
}

/* ====================================================================
   RENDER PRINCIPAL
   ==================================================================== */

function renderizar() {
    const materiaSel = document.getElementById("filtro-materia").value;
    const fechaSel = document.getElementById("filtro-fecha").value;
    const contenedor = document.getElementById("contenido");
    const contador = document.getElementById("contador");

    contenedor.innerHTML = "";

    const clasesFiltradas = clases.filter(c =>
        (materiaSel === "" || c.materia === materiaSel) &&
        (fechaSel === "" || c.fecha === fechaSel)
    );

    if (clasesFiltradas.length === 0) {
        contador.textContent = "Sin resultados";
        contenedor.innerHTML = `<div class="sin-datos">No hay clases que coincidan con los filtros seleccionados.</div>`;
        return;
    }

    const clase = clasesFiltradas[0];

    if (materiaSel === "" && fechaSel === "") {
        contador.textContent = `Mostrando la clase más reciente por defecto: ${clase.materia} — ${clase.fecha}. Usa los filtros para cambiar.`;
    } else {
        contador.textContent = `Mostrando: ${clase.materia} — ${clase.fecha}`;
    }

    const enc = document.createElement("div");
    enc.className = "encabezado-clase";
    enc.innerHTML = `
        <h2>${clase.materia} — ${clase.fecha}</h2>
        <p>${clase.programa} · Video: ${clase.video}</p>
    `;
    contenedor.appendChild(enc);

    const keysP1 = Object.keys(MODELOS_P1);
    const datosP1 = keysP1.map(k => ({ valor: clase.pilar1[k].valor }));

    const keysP2 = Object.keys(MODELOS_P2);
    const datosP2 = keysP2.map(k => ({ valor: clase.pilar2[k].valor }));

    const keysP3 = Object.keys(MODELOS_P3);
    const datosP3 = keysP3.map(k => ({ valor: clase.pilar3[k].valor }));

    const grid = document.createElement("div");
    grid.className = "grid-pilares";

    // --- Tarjeta 1: Pilar 1 ---
    const card1 = document.createElement("div");
    card1.className = "tarjeta-pilar";
    card1.innerHTML = `
        <div class="tarjeta-header">
            <div>
                <div class="tarjeta-titulo">Pilar 1 · General
                    <small>(DME_s · Modelos M0 a M7 + Total)</small>
                </div>
                <div class="tarjeta-sub">Análisis técnico y expresivo del bloque de 15 min.</div>
            </div>
            <span class="badge ${nivelDesdeValor(clase.pilar1.total.valor).clase}">${nivelDesdeValor(clase.pilar1.total.valor).etiqueta}</span>
        </div>
        <div class="radar-wrap">${generarRadar(datosP1.map((d, i) => ({ etiqueta: MODELOS_P1[keysP1[i]].codigo, valor: d.valor })), "#1a7a3a")}</div>
        ${tablaModelosHTML(keysP1, MODELOS_P1, datosP1)}
    `;
    grid.appendChild(card1);

    // --- Tarjeta 2: Pilar 2 ---
    const promP2 = Math.round(datosP2.reduce((s, d) => s + d.valor, 0) / datosP2.length);
    const card2 = document.createElement("div");
    card2.className = "tarjeta-pilar";
    card2.innerHTML = `
        <div class="tarjeta-header">
            <div>
                <div class="tarjeta-titulo">Pilar 2 · Alineación
                    <small>(P-VES · CEP · ENA · DAE · CCF)</small>
                </div>
                <div class="tarjeta-sub">Conexión, estructura narrativa, dinamismo y claridad.</div>
            </div>
            <span class="badge ${nivelDesdeValor(promP2).clase}">${nivelDesdeValor(promP2).etiqueta}</span>
        </div>
        <div class="radar-wrap">${generarRadar(datosP2.map((d, i) => ({ etiqueta: MODELOS_P2[keysP2[i]].codigo, valor: d.valor })), "#1e40af")}</div>
        ${tablaModelosHTML(keysP2, MODELOS_P2, datosP2)}
    `;
    grid.appendChild(card2);

    // --- Tarjeta 3: Pilar 3 ---
    const promP3 = Math.round(datosP3.reduce((s, d) => s + d.valor, 0) / datosP3.length);
    const card3 = document.createElement("div");
    card3.className = "tarjeta-pilar";
    card3.innerHTML = `
        <div class="tarjeta-header">
            <div>
                <div class="tarjeta-titulo">Pilar 3 · Pedagógico
                    <small>(Modelos pedagógico1 · pedagogico2 · pedagogico3)</small>
                </div>
                <div class="tarjeta-sub">Planificación, desarrollo y cierre de la clase.</div>
            </div>
            <span class="badge ${nivelDesdeValor(promP3).clase}">${nivelDesdeValor(promP3).etiqueta}</span>
        </div>
        <div class="radar-wrap">${generarRadar(datosP3.map((d, i) => ({ etiqueta: MODELOS_P3[keysP3[i]].codigo, valor: d.valor })), "#92400e")}</div>
        ${tablaModelosHTML(keysP3, MODELOS_P3, datosP3)}
    `;
    grid.appendChild(card3);

    // --- Tarjeta 4: Preguntas ---
    const card4 = document.createElement("div");
    card4.className = "tarjeta-pilar";
    card4.innerHTML = `
        <div class="tarjeta-header">
            <div>
                <div class="tarjeta-titulo">Preguntas de estudiantes
                    <small>(Tabla y columna por definir)</small>
                </div>
                <div class="tarjeta-sub">Preguntas 1 a 4 registradas durante la clase.</div>
            </div>
            <span class="badge badge-gris">4 preguntas</span>
        </div>
        <div class="preguntas-lista">
            ${clase.preguntas.map(p => `
                <div class="pregunta-item">
                    <span class="num">Pregunta ${p.num}</span>
                    ${p.texto}
                </div>
            `).join("")}
        </div>
        <div class="referencia" style="margin-top:12px;">Origen: tabla [por definir] → columna [por definir]</div>
    `;
    grid.appendChild(card4);

    contenedor.appendChild(grid);

    // --- RESUMEN FINAL ---
    const promP1 = clase.pilar1.total.valor;
    const promedioGlobal = Math.round((promP1 + promP2 + promP3) / 3);
    const nivelGlobal = nivelDesdeValor(promedioGlobal);

    const resumen = document.createElement("div");
    resumen.className = "resumen";
    resumen.innerHTML = `
        <h2>📊 Resumen de la clase</h2>
        <div class="resumen-grid">
            <div class="resumen-celda">
                <div class="etq">Pilar 1 · General</div>
                <div class="val-g">${promP1}%</div>
                <div class="sub">${nivelDesdeValor(promP1).etiqueta}</div>
            </div>
            <div class="resumen-celda">
                <div class="etq">Pilar 2 · Alineación</div>
                <div class="val-g">${promP2}%</div>
                <div class="sub">${nivelDesdeValor(promP2).etiqueta}</div>
            </div>
            <div class="resumen-celda">
                <div class="etq">Pilar 3 · Pedagógico</div>
                <div class="val-g">${promP3}%</div>
                <div class="sub">${nivelDesdeValor(promP3).etiqueta}</div>
            </div>
            <div class="resumen-celda" style="grid-column: span 3; background: rgba(255,255,255,0.22);">
                <div class="etq">Promedio global de la clase</div>
                <div class="val-g" style="font-size:2.4rem;">${promedioGlobal}% — ${nivelGlobal.etiqueta}</div>
                <div class="sub">Promedio simple de los 3 pilares (Pilar 1 usa Cumplimiento Total).</div>
            </div>
        </div>
        <div class="reco-final">
            <div class="titulo-reco">Recomendación consolidada por clase</div>
            <p style="margin:0;">${clase.recomendacionFinal.texto}</p>
            <div class="referencia">Origen: tabla [SAED_CS_v2] → columna [${clase.recomendacionFinal.columna}]</div>
        </div>
    `;
    contenedor.appendChild(resumen);
}

/* ====================================================================
   FILTROS
   ==================================================================== */

function cargarFiltros() {
    const materias = [...new Set(clases.map(c => c.materia))].sort();
    const fechas = [...new Set(clases.map(c => c.fecha))].sort();
    const selMateria = document.getElementById("filtro-materia");
    const selFecha = document.getElementById("filtro-fecha");

    selMateria.innerHTML = `<option value="">Todas las materias</option>` +
        materias.map(m => `<option value="${m}">${m}</option>`).join("");
    selFecha.innerHTML = `<option value="">Todas las fechas</option>` +
        fechas.map(f => `<option value="${f}">${f}</option>`).join("");
}

function actualizarFechasPorMateria() {
    const materiaSel = document.getElementById("filtro-materia").value;
    const selFecha = document.getElementById("filtro-fecha");
    const fechaActual = selFecha.value;

    const fechasDisponibles = [...new Set(
        clases.filter(c => materiaSel === "" || c.materia === materiaSel).map(c => c.fecha)
    )].sort();

    selFecha.innerHTML = `<option value="">Todas las fechas</option>` +
        fechasDisponibles.map(f => `<option value="${f}">${f}</option>`).join("");

    if (fechasDisponibles.includes(fechaActual)) selFecha.value = fechaActual;
}

document.addEventListener("DOMContentLoaded", () => {
    cargarFiltros();
    document.getElementById("filtro-materia").addEventListener("change", () => {
        actualizarFechasPorMateria();
        renderizar();
    });
    document.getElementById("filtro-fecha").addEventListener("change", renderizar);
    document.getElementById("btn-limpiar").addEventListener("click", () => {
        document.getElementById("filtro-materia").value = "";
        cargarFiltros();
        renderizar();
    });
    renderizar();
});