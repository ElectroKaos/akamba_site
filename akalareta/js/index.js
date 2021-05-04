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

let counter = 0;
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    if(counter <= 3) {
        document.getElementById('akaeltema').innerHTML = message;
        counter++;
    } else {
        document.getElementById('akaeltema').disabled=true;
    }
};

randomMsg();