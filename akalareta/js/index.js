const messages = [
    "Paranormal",
    "Amigos",
    "Pareja",
    "Rock",
    "Pop",
    "Reggaeton",
    "Mascotas",
    "La Uni",
    "Belinda",
    "Música",
    "Drogas",
    "Michael Jackson",
    "Tu torta favorita",
    "Las ferias",
    "Tus fobias",
    "Bandas Mexas",
    "Bandas internacionales",
    "Héroes de acción"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('akaeltema').innerHTML = message;
};

randomMsg();