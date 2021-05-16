const messages = [
    "Paranormal",
    "Pedas",
    "Amigos",
    "Pareja",
    "Rock",
    "Pop",
    "Reggaeton",
    "Mascotas",
    "La Uni",
    "Belinda",
    "Música",
    "Microsoft",
    "Las caricatutas de los sábados",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('akaeltema').innerHTML = message;
};

randomMsg();