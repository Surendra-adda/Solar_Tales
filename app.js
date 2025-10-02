//Main Application Controller
class SolarTalesApp {
    constructor() {
        this.currentScene = 1;
        this.totalScenes = 11;
        this.currentQuestion = 0;
        this.score = 0;
        this.totalQuestions = 10;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.createAnimatedBackground();
    }

    bindEvents() {
        //Landing page events
        document.getElementById('start-journey').addEventListener('click', () => {
            this.showScreen('story');
            this.loadScene(1);
        });

        document.getElementById('about-btn').addEventListener('click', () => {
            document.getElementById('about-content').classList.toggle('hidden');
        });

        document.getElementById('close-about').addEventListener('click', () => {
            document.getElementById('about-content').classList.add('hidden');
        });

        //Story navigation
        document.getElementById('next-scene').addEventListener('click', () => {
            this.nextScene();
        });

        //Quiz events
        document.getElementById('next-question').addEventListener('click', () => {
            this.nextQuestion();
        });

        //Scoreboard events
        document.getElementById('see-credits').addEventListener('click', () => {
            this.showScreen('credits');
        });

        document.getElementById('restart-journey').addEventListener('click', () => {
            this.resetApp();
        });

        document.getElementById('show-data').addEventListener('click', () => {
            this.showDataModal();
        });

        //Credits events
        document.getElementById('back-to-start').addEventListener('click', () => {
            this.showScreen('landing');
        });

        //Data modal events
        document.getElementById('close-data').addEventListener('click', () => {
            this.hideDataModal();
        });

        //Close modal on backdrop click
        document.getElementById('data-modal').addEventListener('click', (e) => {
            if (e.target.id === 'data-modal') {
                this.hideDataModal();
            }
        });
    }

    createAnimatedBackground() {
        const starfield = document.querySelector('.starfield-bg');

        //Create animated stars
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            starfield.appendChild(star);
        }
    }

    showScreen(screenId) {
        //Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        //Show target screen
        document.getElementById(screenId).classList.add('active');
        
        //Update body class for screen-specific styling
        document.body.className = `screen-${screenId}`;
    }

    loadScene(sceneNumber) {
        if (sceneNumber > this.totalScenes) return;
        
        const scene = scenes[sceneNumber - 1];
        
        //Update scene content
        document.getElementById('scene-title').textContent = scene.title;
        document.getElementById('scene-description').innerHTML = scene.description;
        
        //Update NASA fact if present
        const nasaFactElement = document.getElementById('nasa-fact');
        if (scene.nasaFact) {
            nasaFactElement.querySelector('.fact-content').innerHTML = scene.nasaFact;
            nasaFactElement.classList.remove('hidden');
        } else {
            nasaFactElement.classList.add('hidden');
        }
        
        //Update scene image
        this.updateSceneImage(scene);
        
        //Update progress
        document.getElementById('scene-progress').textContent = `Scene ${sceneNumber} of ${this.totalScenes}`;
        const progressPercent = (sceneNumber / this.totalScenes) * 100;
        document.getElementById('progress-fill').style.width = progressPercent + '%';
        
        //Handle final scene
        if (sceneNumber === this.totalScenes) {
            document.getElementById('next-scene').style.display = 'none';
            setTimeout(() => {
                this.startQuiz();
            }, 2000); //Give time to read final scene
        }
        
        this.currentScene = sceneNumber;
    }

    updateSceneImage(scene) {
        const svgContainer = document.getElementById('scene-svg');
        svgContainer.innerHTML = scene.svg;
        svgContainer.className = `svg-container ${scene.sceneClass || ''}`;
    }

    nextScene() {
        if (this.currentScene < this.totalScenes) {
            this.loadScene(this.currentScene + 1);
        }
    }

    startQuiz() {
        this.showScreen('quiz');
        this.currentQuestion = 0;
        this.score = 0;
        this.loadQuestion(0);
        this.updateQuizProgress();
    }

    loadQuestion(questionIndex) {
        if (questionIndex >= quizData.length) {
            this.showScoreboard();
            return;
        }

        const question = quizData[questionIndex];
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => this.selectAnswer(index, question.correct));
            optionsContainer.appendChild(button);
        });

        //Hide feedback and next question button
        document.getElementById('feedback').classList.add('hidden');
        document.getElementById('next-question').classList.add('hidden');
    }

    selectAnswer(selectedIndex, correctIndex) {
        const options = document.querySelectorAll('.option-btn');
        const feedback = document.getElementById('feedback');
        
        //Disable all options
        options.forEach(option => option.disabled = true);
        
        //Show correct/incorrect styling
        options[selectedIndex].classList.add(selectedIndex === correctIndex ? 'correct' : 'incorrect');
        if (selectedIndex !== correctIndex) {
            options[correctIndex].classList.add('correct');
        }
        
        //Show feedback
        const isCorrect = selectedIndex === correctIndex;
        if (isCorrect) {
            this.score++;
            feedback.innerHTML = '<span class="correct-feedback">✅ Correct!</span> ' + quizData[this.currentQuestion].explanation;
        } else {
            feedback.innerHTML = '<span class="incorrect-feedback">❌ Incorrect.</span> ' + quizData[this.currentQuestion].explanation;
        }
        
        feedback.classList.remove('hidden');
        document.getElementById('next-question').classList.remove('hidden');
        
        //Update current score display
        document.getElementById('current-score').textContent = this.score;
    }

    nextQuestion() {
        this.currentQuestion++;
        this.updateQuizProgress();
        
        if (this.currentQuestion < this.totalQuestions) {
            this.loadQuestion(this.currentQuestion);
        } else {
            this.showScoreboard();
        }
    }

    updateQuizProgress() {
        document.getElementById('quiz-progress').textContent = 
            `Question ${this.currentQuestion + 1} of ${this.totalQuestions}`;
    }

    showScoreboard() {
        this.showScreen('scoreboard');
        
        const finalScoreText = document.getElementById('final-score-text');
        finalScoreText.textContent = `${this.score}/${this.totalQuestions}`;
        
        //Determine badge based on score
        const badgeIcon = document.getElementById('badge-icon');
        const badgeTitle = document.getElementById('badge-title');
        
        if (this.score === 5) {
            badgeIcon.textContent = '🏆';
            badgeTitle.textContent = 'Space Weather Master';
        } else if (this.score >= 3) {
            badgeIcon.textContent = '🌟';
            badgeTitle.textContent = 'Aurora Explorer';
        } else {
            badgeIcon.textContent = '🔭';
            badgeTitle.textContent = 'Star Gazer';
        }
        
        //Animate score circle
        setTimeout(() => {
            document.querySelector('.score-circle').classList.add('animate');
        }, 500);
    }

    showDataModal() {
        document.getElementById('data-modal').classList.remove('hidden');
    }

    hideDataModal() {
        document.getElementById('data-modal').classList.add('hidden');
    }

    resetApp() {
        this.currentScene = 1;
        this.currentQuestion = 0;
        this.score = 0;
        document.getElementById('current-score').textContent = '0';
        document.getElementById('next-scene').style.display = 'inline-block';
        document.querySelector('.score-circle').classList.remove('animate');
        this.showScreen('landing');
    }
}

//Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SolarTalesApp();
});