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
        title: "My Love Letter to You 💌",
        message: `
            My dearest Jaden,  
            I just want you to know how much you mean to me.  
            You are the most beautiful, kind, and loving person I have ever known.  
            Every moment with you feels magical, and I am so grateful to have you in my life.  

            I LOVE YOU MWAH! 💖  

            You are my happiness, my love, and my forever.  
            No matter what, I will always cherish you.  

            Forever yours,  
            Ajeer ^_^
        `,
        videoUrl: "https://res.cloudinary.com/dcz8uvcr9/video/upload/v1739496237/Untitled_video_-_Made_with_Clipchamp_1_fxrafm.mp4",  // Change this to your actual video link
    },

    colors: {
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
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dcz8uvcr9/video/upload/v1739492730/Ichiko_Aoba_-_bouquet_Official_Audio_cax2cp.mp3",
        startText: "🔇 Stop Music",
        stopText: "🎵 Play Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
