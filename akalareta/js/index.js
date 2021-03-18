const messages = [
    "Paranormal",
    "Escuela",
    "Amigos",
    "Trabajo",
    "Familia",
    "Pareja",
    "Mascotas",
    "Vocación",
    "Matrix",
    "La Uni",
    "La Playa",
    "Microsoft",
    "Freeconomics",
    "Las caricatutas de los sábados",
    "Batman"
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