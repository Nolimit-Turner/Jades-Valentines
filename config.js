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
        title: "YAYYYYY MY FIRST VALENTINE EVER💌",
        message: `
        My dearest Jaden,  

        From the moment I met you, I knew you were someone special.  
        You have the kindest heart, the most beautiful soul, and a smile that lights up my entire world.  
        Every single day, you amaze me with your loving personality, your warmth, and the way you care so deeply for the people around you.  
        You don’t just make my days better—you make my life better.  

        I love the way you laugh, the way your eyes sparkle when you’re happy,  
        and the way you always know how to make everything feel right, no matter what.  
        You are the most beautiful person inside and out, and I feel so incredibly lucky to have you in my life.  

        I want you to be my **one and only Valentine—forever.** 💖  
        No one else could ever take your place in my heart, because you are my heart.  
        No matter where life takes us, I promise to always cherish, adore, and love you more than words can ever express.  

        **I LOVE YOU MWAH! 💋💞**  

        Forever and always,  
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
