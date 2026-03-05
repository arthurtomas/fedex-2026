// Animal definitions and their characteristics
const animals = {
    eagle: {
        emoji: '🦅',
        name: 'Eagle',
        traits: ['visionary', 'leader', 'strategic', 'independent', 'ambitious'],
        description: 'you possess exceptional strategic vision and see opportunities where others see obstacles. Like the eagle that flies high, you have a broad perspective of situations and natural leadership ability. Your ambition and determination lead you to reach great heights.'
    },
    lion: {
        emoji: '🦁',
        name: 'Lion',
        traits: ['leader', 'courageous', 'confident', 'protective', 'decisive'],
        description: 'you demonstrate courage and confidence in your decisions. Like the lion, you are a natural leader who inspires and protects your team. Your commanding presence and ability to make difficult decisions make you someone people trust.'
    },
    wolf: {
        emoji: '🐺',
        name: 'Wolf',
        traits: ['loyal', 'teamwork', 'strategic', 'protective', 'communicative'],
        description: 'you deeply value teamwork and loyalty. Like the wolf that hunts in packs, you understand the power of collaboration and are a reliable team member. Your ability to communicate and work together brings strength to the group.'
    },
    bee: {
        emoji: '🐝',
        name: 'Bee',
        traits: ['hardworking', 'organized', 'collaborative', 'dedicated', 'productive'],
        description: 'you are extremely dedicated and productive in what you do. Like the bee that works tirelessly for the hive, you consistently contribute to collective success. Your organization and focus on results are admirable and inspiring.'
    },
    rabbit: {
        emoji: '🐰',
        name: 'Rabbit',
        traits: ['agile', 'creative', 'adaptable', 'energetic', 'fast'],
        description: 'you are agile and adapt quickly to new situations. Like the rabbit, you have contagious energy and creativity to find innovative solutions. Your ability to think fast and act with ease sets you apart in dynamic environments.'
    },
    dog: {
        emoji: '🐕',
        name: 'Dog',
        traits: ['loyal', 'friendly', 'teamwork', 'dedicated', 'protective'],
        description: 'you are extremely loyal and reliable. Like the dog, you are the team\'s best friend, always present and dedicated. Your friendly nature and willingness to help create a positive environment around you.'
    },
    cat: {
        emoji: '🐱',
        name: 'Cat',
        traits: ['independent', 'curious', 'observant', 'strategic', 'adaptable'],
        description: 'you possess admirable independence and natural curiosity. Like the cat, you are observant and strategic, analyzing situations before acting. Your ability to work autonomously and adapt to different contexts is impressive.'
    },
    dolphin: {
        emoji: '🐬',
        name: 'Dolphin',
        traits: ['intelligent', 'communicative', 'friendly', 'creative', 'teamwork'],
        description: 'you combine intelligence with exceptional social skills. Like the dolphin, you are communicative, creative and love working in teams. Your ability to create connections and solve problems innovatively makes you unique.'
    },
    owl: {
        emoji: '🦉',
        name: 'Owl',
        traits: ['wise', 'observant', 'intelligent', 'strategic', 'patient'],
        description: 'you possess remarkable wisdom and exceptional analytical ability. Like the owl, you observe carefully before acting and see details others miss. Your intelligence and patience in analyzing complex situations make you a valuable advisor to the team.'
    },
    bear: {
        emoji: '🐻',
        name: 'Bear',
        traits: ['protective', 'courageous', 'reliable', 'leader', 'determined'],
        description: 'you possess admirable inner strength and commanding presence. Like the bear, you are protective, courageous and reliable. Your unwavering determination and ability to face challenges head-on inspire security in the team. You are resilient and handle pressure exemplarily.'
    },
    horse: {
        emoji: '🐴',
        name: 'Horse',
        traits: ['fast', 'energetic', 'determined', 'hardworking', 'reliable'],
        description: 'you possess impressive energy and unwavering determination. Like the horse, you are fast, strong and reliable. Your ability to maintain a consistent pace and overcome long journeys demonstrates your endurance and commitment to goals.'
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
            { text: 'Doing a job well done and organized', traits: ['hardworking', 'dedicated', 'organized'] }
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

    Object.entries(animals).forEach(([key, animal]) => {
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

    animalEmoji.textContent = bestMatch.emoji;
    resultTitle.textContent = `Your inner animal is ${bestMatch.name}!`;
    resultDescription.textContent = `${userName}, ${bestMatch.description}`;
}

function resetQuiz() {
    currentQuestion = 0;
    userTraits = {};
    userName = '';
    userNameInput.value = '';

    resultScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
    progressFill.style.width = '0%';
}
