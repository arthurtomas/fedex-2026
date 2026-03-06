// Animal definitions and their characteristics
const animals = {
    eagle: {
        image: 'animal-images/Bald Eagle.jpg',
        name: 'Eagle',
        traits: ['visionary', 'leader', 'strategic', 'independent', 'ambitious'],
        description: 'you possess exceptional strategic vision and see opportunities where others see obstacles. Like the eagle that flies high, you have a broad perspective of situations and natural leadership ability. Your ambition and determination lead you to reach great heights.',
        percentage: 8,
        celebrities: ['Oprah Winfrey', 'Steve Irwin', 'Walt Disney', 'Robin Williams']
    },
    lion: {
        image: 'animal-images/Lion.jpg',
        name: 'Lion',
        traits: ['leader', 'courageous', 'confident', 'protective', 'decisive'],
        description: 'you demonstrate courage and confidence in your decisions. Like the lion, you are a natural leader who inspires and protects your team. Your commanding presence and ability to make difficult decisions make you someone people trust.',
        percentage: 12,
        celebrities: ['Dwayne Johnson', 'Serena Williams', 'Lionel Messi', 'Hugh Jackman']
    },
    wolf: {
        image: 'animal-images/Wolf.jpg',
        name: 'Wolf',
        traits: ['loyal', 'teamwork', 'strategic', 'protective', 'communicative'],
        description: 'you deeply value teamwork and loyalty. Like the wolf that hunts in packs, you understand the power of collaboration and are a reliable team member. Your ability to communicate and work together brings strength to the group.',
        percentage: 11,
        celebrities: ['Tom Hanks', 'Keanu Reeves', 'Paul Rudd', 'Sandra Bullock']
    },
    bee: {
        image: 'animal-images/Bee.jpg',
        name: 'Bee',
        traits: ['hardworking', 'organized', 'collaborative', 'dedicated', 'productive'],
        description: 'you are extremely dedicated and productive in what you do. Like the bee that works tirelessly for the hive, you consistently contribute to collective success. Your organization and focus on results are admirable and inspiring.',
        percentage: 15,
        celebrities: ['Marie Curie', 'Simone Biles', 'Lin-Manuel Miranda', 'Serena Williams']
    },
    rabbit: {
        image: 'animal-images/rabbit.jpg',
        name: 'Rabbit',
        traits: ['agile', 'creative', 'adaptable', 'energetic', 'fast'],
        description: 'you are agile and adapt quickly to new situations. Like the rabbit, you have contagious energy and creativity to find innovative solutions. Your ability to think fast and act with ease sets you apart in dynamic environments.',
        percentage: 7,
        celebrities: ['Lady Gaga', 'Ryan Reynolds', 'Jim Carrey', 'Eddie Murphy']
    },
    dog: {
        image: 'animal-images/Dog.jpg',
        name: 'Dog',
        traits: ['loyal', 'friendly', 'teamwork', 'dedicated', 'protective'],
        description: 'you are extremely loyal and reliable. Like the dog, you are the team\'s best friend, always present and dedicated. Your friendly nature and willingness to help create a positive environment around you.',
        percentage: 14,
        celebrities: ['Fred Rogers', 'Dolly Parton', 'Chris Pratt', 'Jennifer Aniston']
    },
    cat: {
        image: 'animal-images/Cat.jpg',
        name: 'Cat',
        traits: ['independent', 'curious', 'observant', 'strategic', 'adaptable'],
        description: 'you possess admirable independence and natural curiosity. Like the cat, you are observant and strategic, analyzing situations before acting. Your ability to work autonomously and adapt to different contexts is impressive.',
        percentage: 9,
        celebrities: ['Albert Einstein', 'Taylor Swift', 'David Bowie', 'Nikola Tesla']
    },
    dolphin: {
        image: 'animal-images/Dolphin.jpg',
        name: 'Dolphin',
        traits: ['intelligent', 'communicative', 'friendly', 'creative', 'teamwork'],
        description: 'you combine intelligence with exceptional social skills. Like the dolphin, you are communicative, creative and love working in teams. Your ability to create connections and solve problems innovatively makes you unique.',
        percentage: 10,
        celebrities: ['Emma Watson', 'Neil deGrasse Tyson', 'Ariana Grande', 'Jimmy Fallon']
    },
    owl: {
        image: 'animal-images/Owl.jpg',
        name: 'Owl',
        traits: ['wise', 'observant', 'intelligent', 'strategic', 'patient'],
        description: 'you possess remarkable wisdom and exceptional analytical ability. Like the owl, you observe carefully before acting and see details others miss. Your intelligence and patience in analyzing complex situations make you a valuable advisor to the team.',
        percentage: 6,
        celebrities: ['Stephen Hawking', 'Meryl Streep', 'Morgan Freeman', 'Carl Sagan']
    },
    bear: {
        image: 'animal-images/Bear.jpg',
        name: 'Bear',
        traits: ['protective', 'courageous', 'reliable', 'leader', 'determined'],
        description: 'you possess admirable inner strength and commanding presence. Like the bear, you are protective, courageous and reliable. Your unwavering determination and ability to face challenges head-on inspire security in the team. You are resilient and handle pressure exemplarily.',
        percentage: 10,
        celebrities: ['Denzel Washington', 'Jack Black', 'Terry Crews', 'Jason Momoa']
    },
    horse: {
        image: 'animal-images/Horse.jpg',
        name: 'Horse',
        traits: ['fast', 'energetic', 'determined', 'hardworking', 'reliable'],
        description: 'you possess impressive energy and unwavering determination. Like the horse, you are fast, strong and reliable. Your ability to maintain a consistent pace and overcome long journeys demonstrates your endurance and commitment to goals.',
        percentage: 8,
        celebrities: ['Usain Bolt', 'Michael Phelps', 'Cristiano Ronaldo', 'Beyoncé']
    }
};

// Quiz questions
const questions = [
    {
        question: 'How do you prefer to make important decisions at work?',
        options: [
            { text: 'I analyze all the data and plan strategically', traits: ['strategic', 'visionary', 'observant'] },
            { text: 'I trust my intuition and experience', traits: ['confident', 'wise', 'independent'] },
            { text: 'I consult the team and decide together', traits: ['teamwork', 'communicative', 'collaborative'] },
            { text: 'I act quickly and adjust as needed', traits: ['agile', 'fast', 'adaptable'] }
        ]
    },
    {
        question: 'What work environment do you prefer?',
        options: [
            { text: 'Working in a team, constantly collaborating', traits: ['teamwork', 'collaborative', 'friendly'] },
            { text: 'Independently, with autonomy to decide', traits: ['independent', 'confident', 'strategic'] },
            { text: 'Leading projects and guiding others', traits: ['leader', 'protective', 'inspiring'] },
            { text: 'Dynamic environments with lots of variety', traits: ['adaptable', 'creative', 'agile'] }
        ]
    },
    {
        question: 'How do you handle unexpected challenges?',
        options: [
            { text: 'I face them head-on with courage and determination', traits: ['courageous', 'decisive', 'confident'] },
            { text: 'I analyze carefully before acting', traits: ['observant', 'wise', 'strategic'] },
            { text: 'I seek creative and innovative solutions', traits: ['creative', 'transformative', 'intelligent'] },
            { text: 'I adapt quickly to the new situation', traits: ['adaptable', 'agile', 'fast'] }
        ]
    },
    {
        question: 'What is your main contribution to the team?',
        options: [
            { text: 'Strategic vision and direction', traits: ['visionary', 'leader', 'strategic'] },
            { text: 'Loyalty and reliability', traits: ['loyal', 'reliable', 'dedicated'] },
            { text: 'Constant energy and productivity', traits: ['energetic', 'productive', 'hardworking'] },
            { text: 'Creativity and innovative ideas', traits: ['creative', 'intelligent', 'inspiring'] }
        ]
    },
    {
        question: 'How do you approach a new project?',
        options: [
            { text: 'I create a detailed and organized plan', traits: ['organized', 'strategic', 'wise'] },
            { text: 'I dive in headfirst and learn by doing', traits: ['courageous', 'agile', 'energetic'] },
            { text: 'I gather the team for brainstorming', traits: ['communicative', 'teamwork', 'collaborative'] },
            { text: 'I observe examples and adapt to the context', traits: ['observant', 'adaptable', 'curious'] }
        ]
    },
    {
        question: 'What motivates you in your daily professional life?',
        options: [
            { text: 'Achieving ambitious goals and results', traits: ['ambitious', 'visionary', 'decisive'] },
            { text: 'Helping and protecting my team', traits: ['protective', 'loyal', 'friendly'] },
            { text: 'Learning and constantly evolving', traits: ['curious', 'transformative', 'intelligent'] },
            { text: 'Getting the job done well', traits: ['hardworking', 'dedicated', 'organized'] }
        ]
    },
    {
        question: 'How would you describe yourself in one word?',
        options: [
            { text: 'Determined and focused', traits: ['dedicated', 'confident', 'ambitious'] },
            { text: 'Collaborative and sociable', traits: ['communicative', 'friendly', 'teamwork'] },
            { text: 'Creative and innovative', traits: ['creative', 'transformative', 'inspiring'] },
            { text: 'Strategic and observant', traits: ['strategic', 'visionary', 'observant'] }
        ]
    }
];

let currentQuestion = 0;
let userName = '';
let userTraits = {};
let isLeader = false;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const userNameInput = document.getElementById('user-name');
const progressFill = document.getElementById('progress');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const animalEmoji = document.getElementById('animal-emoji');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    userName = userNameInput.value.trim();
    if (!userName) {
        alert('Please enter your name to start!');
        return;
    }

    // Get leadership position value
    const leadershipRadio = document.querySelector('input[name="leadership"]:checked');
    isLeader = leadershipRadio.value === 'yes';

    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';

    // Create option buttons
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(option.traits));
        optionsContainer.appendChild(button);
    });
}

function selectOption(traits) {
    // Register answer traits
    traits.forEach(trait => {
        userTraits[trait] = (userTraits[trait] || 0) + 1;
    });

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    // Calculate which animal best represents the user
    let bestMatch = null;
    let highestScore = 0;

    // Define leadership animals
    const leadershipAnimals = ['eagle', 'lion', 'wolf', 'dog', 'owl'];

    Object.entries(animals).forEach(([key, animal]) => {
        // If user is a leader, only consider leadership animals
        if (isLeader && !leadershipAnimals.includes(key)) {
            return;
        }

        let score = 0;
        animal.traits.forEach(trait => {
            score += userTraits[trait] || 0;
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = animal;
        }
    });

    // Show result
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    animalEmoji.innerHTML = `<img src="${bestMatch.image}" alt="${bestMatch.name}">`;
    resultTitle.textContent = `Your inner animal is ${bestMatch.name}!`;
    resultDescription.textContent = `${userName}, ${bestMatch.description}`;

    // Add statistics
    const statsElement = document.getElementById('stats-info');
    statsElement.innerHTML = `
        <div class="stat-badge">
            <span class="stat-number">${bestMatch.percentage}%</span>
            <span class="stat-label">of people share your animal</span>
        </div>
    `;

    // Add celebrities
    const celebsElement = document.getElementById('celebrities-list');
    celebsElement.innerHTML = `
        <h3>Famous ${bestMatch.name}s</h3>
        <div class="celebs-grid">
            ${bestMatch.celebrities.map(celeb => `<div class="celeb-card">${celeb}</div>`).join('')}
        </div>
    `;

    // Trigger confetti animation
    setTimeout(() => {
        createConfetti();
    }, 300);
}

function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    userTraits = {};
    userName = '';
    isLeader = false;
    userNameInput.value = '';

    // Reset leadership radio button
    const noRadio = document.querySelector('input[name="leadership"][value="no"]');
    if (noRadio) noRadio.checked = true;

    resultScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    progressFill.style.width = '0%';
}
