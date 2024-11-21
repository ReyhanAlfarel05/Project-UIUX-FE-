/*const contents = [
    "Bagian 1: Lorem ipsum dolor sit amet.",
    "Bagian 2: Consectetur adipiscing elit.",
    "Bagian 3: Sed do eiusmod tempor incididunt.",
    "Bagian 4: Ut labore et dolore magna aliqua."
  ];
  
  // Variabel untuk melacak indeks konten saat ini
  let currentIndex = 0;
  
  // Fungsi untuk menampilkan konten sebelumnya
  function goToPrevious() {
    if (currentIndex > 0) {
      currentIndex--; // Kurangi indeks
      updateContent(); // Perbarui konten
    }
  }
  
  // Fungsi untuk menampilkan konten berikutnya
  function goToNext() {
    if (currentIndex < contents.length - 1) {
      currentIndex++; // Tambahkan indeks
      updateContent(); // Perbarui konten
    }
  }
  
  // Fungsi untuk memperbarui teks konten
  function updateContent() {
    const contentElement = document.getElementById("content-text");
    contentElement.textContent = contents[currentIndex];
  }

  
  // Perbarui gaya tombol Previous
  if (currentIndex === 0) {
    previousButton.style.backgroundColor = "cream";
    previousButton.style.cursor = "not-allowed"; // Tambahkan efek disabled
  } else {
    previousButton.style.backgroundColor = ""; // Kembalikan warna default
    previousButton.style.cursor = "pointer";
  }

  // Perbarui gaya tombol Next (opsional, jika ingin menambahkan logika di akhir)
  if (currentIndex === contents.length - 1) {
    nextButton.style.backgroundColor = "lightgray";
    nextButton.style.cursor = "not-allowed";
  } else {
    nextButton.style.backgroundColor = ""; // Kembalikan warna default
    nextButton.style.cursor = "pointer";
  }


// Inisialisasi pertama kali
document.addEventListener("DOMContentLoaded", () => {
  updateContent();
}); */

// Array berisi teks dari setiap soal
const contents = [
  "Bagian 1",
  "Bagian 2",
  "Bagian 3",
  "Bagian 4"
];

// Variabel untuk melacak indeks soal saat ini
let currentIndex = 0;

// Fungsi untuk menampilkan soal sebelumnya
function goToPrevious() {
  if (currentIndex > 0) {
    currentIndex--; // Kurangi indeks soal
    updateContent(); // Perbarui konten
  }
}

// Fungsi untuk menampilkan soal berikutnya
function goToNext() {
  if (currentIndex < contents.length - 1) {
    currentIndex++; // Tambahkan indeks soal
    updateContent(); // Perbarui konten
  }
}

// Fungsi untuk memperbarui teks soal dan tombol
function updateContent() {
  // Elemen untuk teks konten
  const contentElement = document.getElementById("content-text");

  // Tombol Previous dan Next
  const previousButton = document.querySelector(".btn.previous");
  const nextButton = document.querySelector(".btn.next");

  // Perbarui teks soal berdasarkan indeks saat ini
  contentElement.textContent = contents[currentIndex];

  // Jika berada di soal pertama
  if (currentIndex === 0) {
    previousButton.style.backgroundColor = "#FFF5CD"; // Ubah warna tombol menjadi cream
    previousButton.style.cursor = "not-allowed"; // Ubah kursor menjadi tidak aktif
    previousButton.disabled = true; // Nonaktifkan tombol
  } else {
    previousButton.style.backgroundColor = "#87CEEB"; // Kembalikan warna default (biru muda)
    previousButton.style.cursor = "pointer"; // Kembalikan kursor ke normal
    previousButton.disabled = false; // Aktifkan tombol
  }

  // Jika berada di soal terakhir
  if (currentIndex === contents.length - 1) {
    nextButton.style.backgroundColor = "#d3d3d3"; // Ubah warna tombol menjadi abu-abu
    nextButton.style.cursor = "not-allowed"; // Ubah kursor menjadi tidak aktif
    nextButton.disabled = true; // Nonaktifkan tombol
  } else {
    nextButton.style.backgroundColor = "#87CEEB"; // Kembalikan warna default (biru muda)
    nextButton.style.cursor = "pointer"; // Kembalikan kursor ke normal
    nextButton.disabled = false; // Aktifkan tombol
  }
}

// Inisialisasi: panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  updateContent(); // Menampilkan soal pertama dan menyesuaikan tombol
});
  