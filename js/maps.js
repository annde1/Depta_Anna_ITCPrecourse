const cities = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163404.43961401717!2d18.867109438950923!3d50.2135881910516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2336a1ccd1%3A0xb9af2a350559fabb!2sKatowice%2C%20Poland!5e0!3m2!1sen!2sil!4v1637243519339!5m2!1sen!2sil",

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.91309723657!2d34.7272056119322!3d32.08791223263544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1637243418496!5m2!1sen!2sil",

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202404.95892463814!2d126.84946481283758!3d37.565017242171365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28b61c565cd%3A0x858aedb4e4ea83eb!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sil!4v1637243837438!5m2!1sen!2sil" ,

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481936.29043217935!2d-99.43281090939806!3d19.320282937972713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0036b1352927%3A0xdefd9e4ee8d18a5b!2sMexico%20City%2C%20Mexico!5e0!3m2!1sen!2sil!4v1637243867865!5m2!1sen!2sil" 
]

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const mapsEmbed = document.getElementById("map");

let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    currentlySelected--;

    const currentSrc = cities[currentlySelected];
    mapsEmbed.src = currentSrc;

    nextBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function() {
    currentlySelected++;

    const currentSrc = cities[currentlySelected];
    mapsEmbed.src = currentSrc;

    prevBtn.disabled = false;

    if (cities.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    };
});