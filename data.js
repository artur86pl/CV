const technologies = [
"HTML5",
"CSS3",
"Java Script",
"Git",
"React",
"Boodstrap",];

const skills = [
"Praca zespołowa",
"Język angielski B1/B2",
"Prawo jazdy kat. B",
];


const hobby = 
[
    {
        action: 'Podcasty popularnonaukowe',
        icon: 'icon-mic',
    },
    {
        action: 'Podróże miedzynarodowe',
        icon: 'icon-globe',
    },
    {
        action: 'Nowoczesne technologie',
        icon: 'icon-beaker',
    },
    {
        action: 'Gry komputerowe i planszowe',
        icon: 'icon-gamepad',
    },
    {
        action: 'Formuła 1',
        icon: 'icon-flag-checkered',
    },
];



const works =
[
    {    
    company: 'RTV Euro AGD',
    explanation: 'sieć sklepów z elektroniką',
    period: '2013-obecnie',
    employment: 'Kierownik Zmiany',
    responsibilities: 'Nadzór nad sprzedażą oraz terminową realizacją zadań. Zarządzanie zespołem sprzedawców. Zarządzanie asortymentem. Zapewnienie jak najwyższych standardów obsługi klienta. Dbanie o wystrój sklepu zgodnie z założeniami firmy.',
    },
    {    
    company: 'RTV Euro AGD',
    explanation: 'sieć sklepów z elektroniką',
    period: '2012-2013',
    employment: 'Doradca klienta',
    responsibilities: 'Profesjonalna obsługa klienta, zgodna ze Standardami Obsługi Klienta. Realizacja indywidualnych planów sprzedażowych. Sprzedaż produktów finansowych kredyty ratalne. Przyjmowanie dostaw i przygotowanie towarów do sprzedaży. ',
    },
    {    
    company: 'BBCM',
    explanation: 'agencja badań marketingowych',
    period: '2012',
    employment: 'Ankieter telefoniczny',
    responsibilities: 'Prowadzenie wywiadów telefonicznych z respondentami prywatnymi, firmami i instytucjami.',
    },
    {    
    company: 'Niezależny Operator Międzystrefowy',
    explanation: 'operator telefonii stacjonarnej',
    period: '2012',
    employment: 'Przedstawiciel handlowy',
    responsibilities: 'Prowadzenie wywiadów telefonicznych z respondentami prywatnymi, firmami i instytucjami.',
    },
    {    
    company: 'Urząd Statystyczny',
    explanation: 'instytucja państwowa',
    period: '2011',
    employment: 'Rachmistrz',
    responsibilities: 'Ankietowanie respondentów metodą wywiadu bezpośredniego. Umawianie spotkań. Weryfikacja danych.',
    },
    {
    company: 'DROMA Zbigniew Włosek',
    explanation: 'producent rolet i osłon okiennych',
    period: '2010',
    employment: 'Pracownik działu eksportu',
    responsibilities: 'Przyjmowanie zamówień klienta zagranicznego. Projektowanie zaciemnień okiennych typu screen. Nadzór nad załadunkiem.',
    },
    {
    company: 'PIEKARY.NET',
    explanation: 'dostawca usług telekomunikacyjnych',
    period: '2007',
    employment: 'Praktykant',
    responsibilities: 'Pomoc w diagnostyce i serwisowaniu sprzętu komputerowego. Prowadzenie kawiarenki internetowej.',
    },
];

const technologiesList = technologies.map(item => `<li>${item}</li>`).join('');

const skillsList = skills.map(item => `<li>${item}</li>`).join('');

const hobbyList = hobby.map(item => `<li><i class="${item.icon}  icon"></i> ${item.action}</li>`).join('');

const worksList =  works.map(item =>
    `<article>
        <header>
            <h3>${item.company}</h3>
            <h6 class="explanation">${item.explanation}</h6>
            <h4 class="period">${item.period}</h4>
        </header>
        <section class="job">
        <strong>${item.employment}:</strong> ${item.responsibilities}
        </section>
    </article>`
).join('');


const getTechnologies = () => document.getElementById('technologies_list').innerHTML = technologiesList;
const getSkills = () => document.getElementById('skills_list').innerHTML = skillsList;
const getWorks = () => document.getElementById('works').innerHTML = worksList;
const getHobby = () => document.getElementById('hobby_list').innerHTML = hobbyList;

const functionPackage = () => {
    getTechnologies();
    getSkills();
    getWorks();
    getHobby();
};