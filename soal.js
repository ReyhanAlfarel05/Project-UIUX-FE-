// Get all scale buttons
const scaleButtons = document.querySelectorAll('.scale-item');

// Add click event to each button
scaleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove the 'selected' class from all buttons
        scaleButtons.forEach((btn) => {
            const circle = btn.querySelector('.circle');
            circle.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked button
        const circle = button.querySelector('.circle');
        circle.classList.add('selected');
    });
});

// Daftar soal
const questions = [
    {
        heading: "Bagian 1",
        question: "Apakah aku adalah manusia?",
        answered: false, // Status apakah sudah dijawab
        selectedAnswer: null
    },
    {
        heading: "Bagian 1",
        question: "Apakah kamu suka belajar?",
        answered: false,
        selectedAnswer: null
    },
    {
        heading: "Bagian 1",
        question: "Apakah kamu merasa bahagia hari ini?",
        answered: false,
        selectedAnswer: null
    },
    {
        heading: "Bagian 1",
        question: "Apakah kamu percaya pada takdir?",
        answered: false,
        selectedAnswer: null
    },
    {
        heading: "Bagian 1",
        question: "Apakah teknologi membantu kehidupanmu?",
        answered: false,
        selectedAnswer: null
    },
];

// Elemen-elemen HTML
const headingElement = document.querySelector(".heading");
const questionElement = document.getElementById("question");
const progressBarElement = document.getElementById("progress");
const progressTextElement = document.getElementById("progress-text");
const navButtons = document.querySelectorAll(".nav-button");

// Variabel untuk melacak soal aktif
let currentIndex = 0;

// Fungsi untuk memperbarui tampilan soal
function updateQuestion() {
    const currentQuestion = questions[currentIndex];
    headingElement.textContent = currentQuestion.heading;
    questionElement.textContent = currentQuestion.question;

    // Clear the "selected" state for all buttons
    scaleButtons.forEach((btn) => {
        const circle = btn.querySelector(".circle");
        circle.classList.remove("selected");
    });

    // Restore the previously selected answer
    if (currentQuestion.selectedAnswer !== null) {
        const selectedButton = scaleButtons[currentQuestion.selectedAnswer];
        const circle = selectedButton.querySelector(".circle");
        circle.classList.add("selected");
    }

    // Re-enable all buttons
    scaleButtons.forEach((btn) => btn.disabled = false);

    // Update navigation button states
    navButtons[0].disabled = currentIndex === 0;
    navButtons[1].disabled = currentIndex === questions.length - 1;
}

// Fungsi untuk memperbarui progress bar
function updateProgressBar() {
    const answeredCount = questions.filter((q) => q.answered).length;
    const progressPercentage = (answeredCount / questions.length) * 100;

    // Update progress bar
    progressBarElement.style.width = `${progressPercentage}%`;
    progressTextElement.textContent = `${progressPercentage.toFixed(0)}%`;
}

// Event listener untuk tombol navigasi
navButtons[0].addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateQuestion();
    }
});

navButtons[1].addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        updateQuestion();
    }
});

// Event listener untuk tombol skala
scaleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Save the selected answer for the current question
        questions[currentIndex].answered = true;
        questions[currentIndex].selectedAnswer = index; // Save the index of the selected button

        // Highlight the selected button
        scaleButtons.forEach((btn) => {
            const circle = btn.querySelector(".circle");
            circle.classList.remove("selected");
        });

        const circle = button.querySelector(".circle");
        circle.classList.add("selected");

        // Update the progress bar
        updateProgressBar();
    });
});

// Inisialisasi soal pertama
updateQuestion();
updateProgressBar();
