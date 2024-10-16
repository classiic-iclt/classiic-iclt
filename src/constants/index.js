import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Classic Merupakan Singkatan dari Competions  Language, Art, Science, Sport, Isalamic of Insan Cendekia.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "asdf",
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "SMP/MTs",
    description: "Silahkan mendaftarkan diri anda, dengan cara menekan tombol daftar",
    cp:"082236624522",

    price: "0",
    href:"https://google.com",
    features: [
      "Story Telling",
      "Olimpiade Matematika",
      "Olimpiade IPA",
      "Olimpiade IPS",
      "Tahfidz Al-Qur'an",
      "Tilawatil Qur'an",
    ],
  },
  {
    id: "1",
    title: "SMA/MA/SMK Perseorangan",
    description: "Silahkan mendaftarkan diri anda, dengan cara menekan tombol daftar",

    cp:"082236624522",

    price: "9.99",
    href:"https://google.com",

    features: [
      "Khitobah",
      "Esai",
      "Puisi",
      "Kaligrafi Kotemporal",
      "Tilawatil Qur'an",
    ],
  },
  {
    id: "2",
    title: "SMA/MA/SMK Tim",
    description: "Silahkan mendaftarkan diri anda, dengan cara menekan tombol daftar.",
    cp:"082236624522",
    price: null,
    href:"https://google.com",

    features: [
      "Akuistik",
      "Tournament MLBB",
      "Futsal",
      "Badminton",
      "Cerdas Cermat Islami",
      "Hadroh",
      "Tari Kreasi",
      "LKBB Kreasi",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Story Telling",
    text: "Lomba ini menantang peserta untuk menyusun dan menceritakan sebuah cerita dengan alur yang menarik dalam bahasa inggris yang baik dan benar.",
    jenjang: "SMP/MTs",
    biayaPendaftaran: "Rp.40.000",
    slot: "32",
    type: "Language",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Khitobah",
    text: "Lomba ini menguji kemampuan peserta dalam berpidato bahasa arab dengan menyampaikan pesan yang kuat dan penuh makna.",
    slot: "32",
    type: "Language",
    jenjang: "SMA/MA/SMK",
    biayaPendaftaran: "Rp.50.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Esai",
    text: "Peserta akan menulis sebuah esai yang mendalam tentang topik tertentu dengan analisis yang tajam dan argumentasi yang kuat.",
    slot: "32",
    type: "Language",
    jenjang: "SMA/MA/SMK",
    biayaPendaftaran: "Rp. 40.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Puisi",
    text: "Peserta akan menyusun puisi yang mengungkapkan perasaan dan pemikiran dengan bahasa yang indah dan penuh makna.",
    slot: "32",
    type: "Art",
    jenjang: "SMA/MA/SMK",
    biayaPendaftaran: "Rp. 40.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Kaligrafi Kontemporer",
    text: "Peserta akan menunjukkan kemampuan dalam membuat karya seni kaligrafi dengan gaya kontemporer yang unik dan kreatif.",
    slot: "32",
    type: "Art",
    jenjang: "SMA/MA/SMK",
    biayaPendaftaran: "Rp. 40.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Akustik",
    text: "Lomba ini menguji keterampilan tim dalam memainkan musik akustik dengan komposisi yang harmonis dan menarik.",
    slot: "14",
    jenjang: "SMA/MA/SMK",
    type: "Art",
    biayaPendaftaran: "Rp. 100.000",
    jenis: "Tim",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "Olimpiade Matematika",
    text: "Peserta akan diuji kemampuan matematikanya melalui soal-soal yang menantang.",
    slot: "MAKS",
    jenjang: "SMP/MTs",
    type: "Science",
    biayaPendaftaran: "Rp. 50.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Olimpiade IPA",
    text: "Lomba ini menguji pemahaman peserta terhadap konsep-konsep ilmu pengetahuan alam melalui soal-soal",
    slot: "MAKS",
    jenjang: "SMP/MTs",
    type: "Science",
    biayaPendaftaran: "Rp. 50.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "8",
    title: "Olimpiade IPS",
    text: "Peserta akan diuji pengetahuannya dalam bidang ilmu pengetahuan sosial melalui berbagai soal yang menantang.",
    slot: "MAKS",
    jenjang: "SMP/MTs",
    type: "Science",
    biayaPendaftaran: "Rp. 50.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "9",
    title: "Tournament MLBB",
    text: "Kompetisi ini mengadu keterampilan tim dalam bermain Mobile Legends: Bang Bang untuk menjadi yang terbaik.",
    slot: "32",
    jenjang: "SMA/MA/SMK",
    type: "Sport",
    biayaPendaftaran: "Rp. 50.000",
    jenis: "Tim",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "10",
    title: "Futsal",
    text: "Lomba futsal ini menguji kekompakan dan keterampilan tim dalam pertandingan olahraga futsal.",
    slot: "16",
    jenjang: "SMA/MA/SMK",
    type: "Sport",
    biayaPendaftaran: "Rp. 500.000",
    jenis: "Tim",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "11",
    title: "Badminton",
    text: "Lomba badminton ini menguji keterampilan tim dalam bermain bulutangkis dengan teknik yang baik.",
    slot: "32",
    jenjang: "SMA/MA/SMK",
    type: "Sport",
    biayaPendaftaran: "Rp. 80.000",
    jenis: "Tim",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "12",
    title: "Tahfizh Al-Qur’an",
    text: "Lomba ini menguji kemampuan peserta dalam menghafal Al-Qur'an dengan tajwid dan kelancaran yang baik.",
    slot: "32",
    jenjang: "SMP/MTs",
    type: "Islamic",
    biayaPendaftaran: "Rp. 40.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "13",
    title: "Tilawatil Qur’an",
    text: "Lomba ini menguji kemampuan peserta dalam membaca Al-Qur'an dengan tajwid yang benar dan suara yang merdu.",
    slot: "32",
    jenjang: "SMP/MTs",
    type: "Islamic",
    biayaPendaftaran: "Rp. 40.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "14",
    title: "Tilawatil Qur’an",
    text: "Lomba ini menguji kemampuan peserta dalam membaca Al-Qur'an dengan tajwid yang benar dan suara yang merdu.",
    slot: "32",
    jenjang: "SMA/MA/SMK",
    type: "Islamic",
    biayaPendaftaran: "Rp. 40.000",
    jenis: "Perseorangan",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "15",
    title: "Cerdas Cermat Islami",
    text: "Kompetisi ini menguji pengetahuan tim mengenai agama Islam dalam bentuk cerdas cermat.",
    slot: "14",
    jenjang: "SMA/MA/SMK",
    type: "Islamic",
    biayaPendaftaran: "Rp. 85.000",
    jenis: "Tim",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "16",
    title: "Hadroh",
    text: "Lomba hadroh ini menguji keterampilan tim dalam memainkan alat musik hadroh dan melantunkan sholawat.",
    slot: "14",
    jenjang: "SMA/MA/SMK",
    type: "Islamic",
    biayaPendaftaran: "Rp. 100.000",
    jenis: "Tim",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "17",
    title: "Tari Kreasi",
    text: "Lomba ini menantang kreativitas tim dalam menyusun dan menampilkan tari kreasi yang unik dan penuh ekspresi.",
    slot: "14",
    jenjang: "SMA/MA/SMK",
    type: "Special Competition",
    biayaPendaftaran: "Rp. 130.000",
    jenis: "Tim",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "18",
    title: "LKBB Kreasi",
    text: "Lomba ini menguji keterampilan tim dalam berbaris dan menyusun formasi dengan kreativitas yang tinggi.",
    slot: "14",
    jenjang: "SMA/MA/SMK",
    type: "Special Competition",
    biayaPendaftaran: "Rp. 350.000",
    jenis: "Tim",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
export async function getSpreadsheetData() {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTvzT3MOeTX5To8BKentJdIkjHWjp0l8oT9ebkFLITxusHtAl4jjOHrWdP7nqq8Ivg0Njb2quTej-jH/pubhtml";
  
  const response = await fetch(url);
  const html = await response.text();
  
  // Buat elemen sementara untuk parsing HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Ambil tabel pertama dari HTML (Anda bisa memodifikasi sesuai dengan struktur spreadsheet)
  const rows = [...doc.querySelectorAll('table tbody tr')];

  const data = rows.map(row => {
    const columns = row.querySelectorAll('td');
    return {
      title: columns[0].textContent, // Nama lomba (kolom pertama)
      slot: columns[1].textContent,  // Sisa slot (kolom kedua)
      id: columns[2].textContent     // ID lomba (kolom ketiga)
    };
  });

  return data;
}

// Fungsi untuk memperbarui array `benefits` sesuai dengan ID lomba
async function updateBenefits() {
  const spreadsheetData = await getSpreadsheetData();
  
  let updatedBenefits = [...benefits]; // Salin array benefits
  
  spreadsheetData.forEach((entry) => {
    const benefitIndex = updatedBenefits.findIndex(b => b.id === entry.id);
    if (benefitIndex !== -1) {
      console.log(entry.slot);
      
      updatedBenefits[benefitIndex].title = entry.title;
      updatedBenefits[benefitIndex].slot = entry.slot;
    }
  });

  return updatedBenefits;
}

// Contoh penggunaan
updateBenefits().then(updated => console.log(updated));