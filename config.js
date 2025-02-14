const CONFIG = {
    valentineName: "Jaden",
    pageTitle: "Will You Be My Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Jaden, my love, do you like me?", 
            yesBtn: "Yes 💖",
            noBtn: "No 😔",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes! 💞",
            noBtn: "No 💔"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    colors: {
        // Remove the old gradient and use an image in CSS instead
        backgroundStart: "transparent", 
        backgroundEnd: "transparent",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true, // Force autoplay
        musicUrl: "https://res.cloudinary.com/dcz8uvcr9/video/upload/v1739492730/Ichiko_Aoba_-_bouquet_Official_Audio_cax2cp.mp3",
        startText: "🔇 Stop Music",
        stopText: "🎵 Play Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
