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
    },
    {
        heading: "Bagian 1",
        question: "Apakah kamu suka belajar?",
        answered: false,
    },
    {
        heading: "Bagian 1",
        question: "Apakah kamu merasa bahagia hari ini?",
        answered: false,
    },
    {
        heading: "Bagian 1",
        question: "Apakah kamu percaya pada takdir?",
        answered: false,
    },
    {
        heading: "Bagian 1",
        question: "Apakah teknologi membantu kehidupanmu?",
        answered: false,
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

    // Atur tombol navigasi
    navButtons[0].disabled = currentIndex === 0; // Tombol sebelumnya
    navButtons[1].disabled = currentIndex === questions.length - 1; // Tombol berikutnya
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
scaleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!questions[currentIndex].answered) {
            questions[currentIndex].answered = true;
            updateProgressBar();
        }
    });
});

// Inisialisasi soal pertama
updateQuestion();
updateProgressBar();
