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
    { question: "During the last 30 days, about how often did you feel tired out for no good reason?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel nervous?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel so nervous that nothing could calm you down?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel hopeless?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel restless or fidgety?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel so restless you could not sit still?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel depressed?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel that everything was an effort?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel so sad that nothing could cheer you up?", answered: false, selectedAnswer: null },
    { question: "During the last 30 days, about how often did you feel worthless?", answered: false, selectedAnswer: null }
];

// Elemen-elemen HTML
const questionElement = document.getElementById("question");
const progressBarElement = document.getElementById("progress");
const progressTextElement = document.getElementById("progress-text");
const navButtons = document.querySelectorAll(".nav-button");
const submitButton = document.getElementById("submit-button");

// Variabel untuk melacak soal aktif
let currentIndex = 0;

// Fungsi untuk memperbarui tampilan soal
function updateQuestion() {
    const currentQuestion = questions[currentIndex];
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

    // Show Submit button only on the last question
    if (currentIndex === questions.length - 1) {
        submitButton.style.display = "block";
        checkSubmitEligibility(); // Check eligibility dynamically
    } else {
        submitButton.style.display = "none";
    }
}

// Fungsi untuk memperbarui progress bar
function updateProgressBar() {
    const answeredCount = questions.filter((q) => q.answered).length;
    const progressPercentage = (answeredCount / questions.length) * 100;

    // Update progress bar
    progressBarElement.style.width = `${progressPercentage}%`;
    progressTextElement.textContent = `${progressPercentage.toFixed(0)}%`;
}

// Fungsi untuk memeriksa apakah tombol submit bisa diaktifkan
function checkSubmitEligibility() {
    const allAnswered = questions.every((q) => q.answered); // Semua pertanyaan harus dijawab
    const answeredCount = questions.filter((q) => q.answered).length;
    const progressPercentage = (answeredCount / questions.length) * 100;

    // Periksa progres 100% sebelum mengaktifkan tombol
    if (allAnswered && progressPercentage === 100) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
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

        // Check if submit button can be enabled
        checkSubmitEligibility();
    });
});

// Event listener untuk tombol submit
submitButton.addEventListener("click", () => {
    if (!submitButton.disabled) {
        // Alihkan ke halaman terima kasih
        window.location.href = "thanks.html";
    } else {
        alert("Jawab semua pertanyaan sebelum submit!");
    }
});


// Inisialisasi soal pertama
updateQuestion();
updateProgressBar();
