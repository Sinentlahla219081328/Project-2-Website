
//Json Data
const tagDATA = ["Agriculture", "Biotechnology ", "Marine Sciences", "Food Technology", "Horticultural Sciences ", "Mathematics and Physics",
    "Applied Law", "Administration ", "Hospitality Management", "Business Management", "Accounting  ", "Human Resources",
    "Auditing ", "Project Management", "Marketing", "Business Management", "Sport  ", "Tourism ",
    "Education", "Teaching", "Chemical Engineering", "Clothing", "Computer Engineering  ", "Maritime Studies",
    "Mechanical Engineering", "Biomedical Sciences", "Dental Sciences", "Nursing", "Ophthalmic Sciences", "Wellness Sciences",
    "Interior Design", "Urban and Regional Planning", "Information Technology", "Applied Design", "Media"
];

const data = [{
        id: "1-Bursary",
        name: "NSFAS",
        description: "The National Financial Aid Scheme is an initiative run by the Department of Higher Education and Training. It was established according to the NSFAS Act (Act 56 of 1999) to provide financial support to disadvantaged students who wish to further their studies at public universities or TVET colleges.",
        brief: "NSFAS is a government run initiative to help South African citizens acquire funds for their tertiary education.",
        covers: "Tuition fees, Accommodation, Transport (R7 500  per annum), Living allowance R15 000  per annum, Book allowances (R5200 per annum), Personal care allowance (R2900 per annum for students in catered residences)",
        qualify: "All South African citizens, All SASSA grant recipients qualifies for funding, Applicants whose combined household income is not more than R350 000 per annum, Person with disability: Combined household income must not be more than R600 000 per annum, Students who started studying before 2018 whose household income is not more than R122 000 per annum",
        photo: "../Resources/NSFAS Image.jpg",
        fields: "NSFAS covers all fields of study at South African Universities or TVET Colleges",
        tags: "Agriculture Biotechnology  Marine Sciences Food Technology Horticultural Sciences  Mathematics and Physics Applied Law Administration  Hospitality Management Business Management Accounting   Human Resources  Auditing  Project Management Marketing Business Management Sport Tourism Education Teaching Chemical Engineering Clothing Computer Engineering   Maritime Studies Mechanical Engineering Biomedical Sciences Dental Sciences Nursing Ophthalmic Sciences Wellness Sciences Interior Design Urban and Regional Planning Information Technology Applied Design Media",
        url: "nsfas.org.za",
    },

    {
        id: "2-Bursary",
        name: "Vodacom Bursary",
        description: "Vodacom is one of South Africa's largest telecommunications companies. They created the Vodacom Bursary Programme to help fund students working in STEM fields (Science, Technology, Engineering and Mathematics) to secure and fund their tertiary education for the entire duration of the degree qualification",
        brief: "Vodacom Bursary Programme is a programme started by Vodacom to help students in STEM fields acquire funding for their studies",
        covers: "Textbook allowances, Registration fess, Tuition fees, Acquisition of a personal laptop, Living allowances, Accommodation",
        qualify: "South African citizen by birth, Matric certificate with 70% overall average, Undergraduate course in one of the STEM fields, Full time student, People who are accepted or currently studying at recognized tertiary institution of South Africa, 65% overall average at tertiary institution",
        photo: "../Resources/Vodacom IMAGE.jpeg",
        fields: "The Vodacom Bursary covers courses in these departments Mathematics and Physics, Chemical Engineering, Computer Engineering,  Mechanical Engineering and  Information Technology",
        tags: "Mathematics and Physics Chemical Engineering Computer Engineering  Mechanical Engineering  Information Technology at CPUT",
        url: "externalbursary.vodacom.co.za",
    },

    {
        id: "3-Bursary",
        name: "ABSA Fellowship Programme",
        description: "ABSA is one of South Africa's largest financial services group.The ABSA Fellowship Programme is designed to help students from select African countries (South Africa included) fund their undergraduate studies. The programme is also designed to help said students who qualify develop capable leadership skills and a progressive thinking mindset. The programme achieves this by exposing the students to many industry experts and leaders within the ABSA organization",
        brief: "ABSA Fellowship Programme is designed to help create individuals that have the leadership skills to thrive in the modern environment",
        covers: "Tuition fees, Textbook fees, Acquisition of personal laptop, Accommodation, Living expenses",
        qualify: "South African citizen and permanent residence within South Africa, Between 18 -25 years of age, Must have Matric certificate (or in process of acquiring one), An average of 65% for matric, Full time student, Provisional acceptance at a recognized university in South Africa",
        photo: "../Resources/ABSA Image.png",
        fields: "The ABSA Fellowship Programme covers nearly all fields of study at CPUT",
        tags: "Agriculture Biotechnology  Marine Sciences Food Technology Horticultural Sciences  Mathematics and Physics Applied Law Administration  Hospitality Management Business Management Accounting   Human Resources  Auditing  Project Management Marketing Business Management Sport Tourism Education Teaching Chemical Engineering Clothing Computer Engineering   Maritime Studies Mechanical Engineering Biomedical Sciences Dental Sciences Nursing Ophthalmic Sciences Wellness Sciences Interior Design Urban and Regional Planning Information Technology Applied Design Media",
        url: "absafellowship.sv.co.za",

    },

    {
        id: "4-Bursary",
        name: "BBD Bursary",
        description: "BBD is a major IT organization that provides many services from application development to mobile app services. The BDD Bursary focuses on helping fund students in computer related fields as well as providing workshops and mentorship related to their fields. After the student receives their qualification they will be placed into BBD's very own graduate programme to help work on projects and provide the student with real world experiences in their respective field",
        brief: "BBD Bursary is a IT related bursary aimed at funding and training students passionate about technology and IT",
        covers: "Tuition fees, Living expenses, Textbook fees",
        qualify: "South African citizen, Must have Matric certificate (or in process of acquiring one), Must be accepted to study or studying in one of the stated fields, Must have 70% average for Matric, Must have 65% average for tertiary education",
        photo: "../Resources/BBD Image.jpg",
        fields: "The BBD Bursary covers courses within the Information Technology and Computer Engineering Departments fields at CPUT",
        tags: "Computer Engineering Information Technology",
        url: "bbdsoftware.com/grad-bursar-programmes",
    },

    {
        id: "5-Bursary",
        name: "JSE Empowerment Fund",
        description: "The JSE is the largest stock exchange in South Africa and is the go to organization for international investors to invest in South Africa. The JSE Empowerment Fund is aimed at helping top achieving students who were previously disadvantaged acquire funding, as they are committed to developing the future leaders of South Africa. The bursary funds those within a host of different fields in Undergraduate and Postgraduate courses.",
        brief: "The JSE Empowerment fund was created to help fund the leaders of tomorrow and help them to acquire their tertiary education",
        covers: "Tuition Fees, Textbook fees",
        qualify: "South African Citizen, Must have matric certificate, Full time student, Undergraduate students must have minimum of 60% average, Postgraduate students must have a minimum of 60% average, Total household income cannot exceed R350 000 per annum, From a previously disadvantaged background",
        photo: "../Resources/JSE Image.png",
        fields: "The JSE Empowerment fund covers the Computer Science and Information Technology fields at CPUT",
        tags: "Mathematics and Physics Computer Engineering Information Technology",
        url: "jse.pnet.co.za/applicant/index.php?controller=Adverts&method=view&advertid=1c4e9527-b43a-41e1-8615-11638413b758",
    },

    {
        id: "6-Bursary",
        name: "Moore Bursary",
        description: "Moore is one of the worlds largest accounting firms with over 225 firms in over 115 countries. They provide a host of different services from auditing to international tax management for organizations. The Moore Bursary is designed to help those who are aiming to become a registered chartered accountant acquire funds for their tertiary education.",
        brief: "The Moore Bursary was created to help prospective chartered accountants acquire funding for their studies.",
        covers: "Tuition Fees",
        qualify: "South Africa resident, Must have matric certificate, Must have achieved a '6' or '7' for accounting and mathematics in matric",
        photo: "../Resources/Moore Image.png",
        fields: "The Moore Bursary covers the Accounting field at CPUT",
        tags: "Accounting",
        url: "moore-southafrica.com",
    },

    {
        id: "7-Bursary",
        name: "TTI Bursary",
        description: "TTI is a bursary management firm that accepts funds from large organizations and companies to help promote skills development. The aim of TTI is to act as an extension for large organizations to give back to the community, in doing so the TTI bursary was founded to help students pursuing degrees in undergraduate and postgraduate courses at public universities.",
        brief: "TTI is a Bursary Management firm with a focus on skills development bursaries on behalf of Large Enterprises",
        covers: "Tuition fees, Textbook fees, Accommodation fees, Living expenses, Transport fees",
        qualify: "South African citizen, Accepted or registered at public university or TVET Collage, You must be of African decent (In accordance with all B-BBEE codes), Must be from previously disadvantaged background",
        photo: "../Resources/TTI Image.jpg",
        fields: "TTI Bursary covers all fields of study at South African Universities or TVET Colleges",
        tags: "Agriculture Biotechnology  Marine Sciences Food Technology Horticultural Sciences  Mathematics and Physics Applied Law Administration  Hospitality Management Business Management Accounting   Human Resources  Auditing  Project Management Marketing Business Management Sport Tourism Education Teaching Chemical Engineering Clothing Computer Engineering   Maritime Studies Mechanical Engineering Biomedical Sciences Dental Sciences Nursing Ophthalmic Sciences Wellness Sciences Interior Design Urban and Regional Planning Information Technology Applied Design Media",
        url: "ttibursaries.co.za/students-apply-for-bursary",
    },

    {
        id: "8-Bursary",
        name: "FASSET Bursary",
        description: "The Finance and Accounting Services Sector Education and Training Authority (FASSET) is an organization that aims to increase the amount of workers entering the accounting and finance sector as well as to improve the skill set of said individuals entering the sector. The FASSET Bursary was created to help current and potential students who wish to acquire a degree in the finance and accounting fields. ",
        brief: "FASSET Bursary is bursary aimed to help individuals who wish to enter the finance and accounting fields of study ",
        covers: "Tuition Fees, Textbook fees, Registration fees",
        qualify: "South African citizen, Must have matric certificate, In the second last or final year of study, Studying at public university or university of technology, Household income is less than R300 000 per annum",
        photo: "../Resources/FASSET Image.jpg",
        fields: "The FASSET Bursary covers courses in the Accounting, Auditing and Business Management fields at CPUT",
        tags: "Accounting Auditing Business Management",
        url: "fasset.org.za/inner.aspx?section=2&page=8",
    },

    {
        id: "9-Bursary",
        name: "Ford Bursary",
        description: "The Ford Motor Company of Southern Africa is one of the leading automotive companies in South Africa. The Ford Bursary is a initiative aimed to help the governments drive for national education and skills development. Thus the Ford Bursary was founded to help students in their final year of tertiary education. After graduation the Ford offers all its bursary holders a chance to partake in the Graduate Trainee Program which allows graduates to gain practical experience in their respective fields of study",
        brief: "The Ford Bursary aims to help the national drive to improve education and skills deployment within South Africa",
        covers: "Tuition fees, Textbook fees, Registration fees",
        qualify: "South African citizen, Must have a matric certificate, Final year student within their course, Studying at a recognized institution of tertiary education in South Africa",
        photo: "../Resources/FORD Image.jpg",
        fields: "The Ford Bursary covers courses in the Business Management, Accounting, Computer Engineering, Mechanical Engineering and Information Technology fields at CPUT",
        tags: "Business Management Accounting Computer Engineering Mechanical Engineering Information Technology",
        url: "ford.co.za/about-ford/careers",
    },

    {
        id: "10-Bursary",
        name: "SAAFost Bursary",
        description: "The South African Association for Food Science and Technology is an organization aimed at helping South Africa's food industries increase their base knowledge of food science and technology. The SAAFost Bursary is aimed at helping students currently in tertiary education or making the transition to tertiary education from matric, acquire funding for the entire length of their studies in the Food Science and Technology fields.",
        brief: "The SAAFost Bursary is aimed at helping students acquire funding in the Food Science and Technology fields of study ",
        covers: "Tuition fees up to R35 000 per annum, Textbook fees, Registration fees",
        qualify: "South African citizen, Studying at a recognized tertiary institution of education in South Africa, Full time students, Pursuing a course in the fields of Food Science or Technology",
        photo: "../Resources/SAAFOST Image.jpg",
        fields: "The SAAFost Bursary covers only the Food Technology field at CPUT",
        tags: "Food Technology",
        url: "saafost.org.za/mysaafost/bursaries/saafost-undergraduate-bursary",
    },

    {
        id: "11-Bursary",
        name: "PSG Bursary",
        description: "The PSG Bursary is hosted by the PSG financial services group which is one of the top financial planning organizations in the South Africa. The PSG Bursary is intended to help fund students in their final year (Including Honours and Masters) of studying in any fields that may relate to the financial services sector. The bursary also provides opportunities for students to enter the PSG Graduate Programme where they can acquire first hand experience in the financial services sector.",
        brief: "The PSG Bursary is aimed at students within their final year of their degree acquire funding and work place experience in the financial sector.",
        covers: "Tuition fees, Textbook fees, Registration fees",
        qualify: "South African citizen, Must have a matric certificate, Students with disability's are inclined to apply, Students currently studying at a recognized tertiary institution of education in South Africa",
        photo: "../Resources/PSG Image.png",
        fields: "The PSG  Bursary covers the Mathematics and Physics, Computer Engineering, Mechanical Engineering and Information Technology fields at CPUT",
        tags: "Mathematics and Physics Computer Engineering Mechanical Engineering Information Technology",
        url: "legacy.psg.co.za/careers/position-detail.php?position=2849",
    },

    {
        id: "12-Bursary",
        name: "Hexagon Trust Bursary",
        description: "The Hexagon Trust is a not-profit organization that strives to provide opportunities to previously disadvantaged groups. The Hexagon Trust was founded to offer students battling to pay their tuition a solution. Their goal is to provide students with a high academic performance and the determination to reach their goals an opportunity to reach their full potential. Upon acceptance of the Hexagon Bursary students must become members of the Hexagon Students Alumni Association and contribute their time and skills towards community service programs before and after their qualification.",
        brief: "The Hexagon Trust is a NGO aimed at helping high achieving students from previously disadvantaged backgrounds acquire funding for their studies",
        covers: "Tuition fees, Registration fees, Textbook Fees",
        qualify: "South African citizens, Must be 18 years or older, Must have a matric certificate, Studying at a recognized tertiary institution of education in South Africa, Applicants whose combined household income is not more than R350 000 per annum",
        photo: "../Resources/Hexagon Image.png",
        fields: "The Hexagon Bursary covers the Marine Sciences, Horticultural Sciences, Mathematics and Physics, Business Management, Chemical Engineering, Computer Engineering and Mechanical Engineering fields at CPUT",
        tags: "Marine Sciences Horticultural Sciences Mathematics and Physics Business Management Chemical Engineering Computer Engineering Mechanical Engineering",
        url: "hexagontrust.org/bursary-application",
    },

    {
        id: "13-Bursary",
        name: "Grandslots Bursary",
        description: "Grandslots is an limited payout machines operator in the Western Cape and operates many uplift and expansion efforts in local communities. The Grandslots Bursary aims at funding students applying for undergraduate studies in the Western Cape in the fields of Business Administration, Finance, Marketing, Electrical Engineering and Mechanical Engineering. Bursaries only cover one year of funding but students are encouraged to reapply for funding each year",
        brief: "The Grandslots Bursary is aimed at  helping students within the  Western Cape area fund their undergraduate studies",
        covers: "Tuition fees, Textbook fees, Registration fees, Accommodation fees, Living expenses, Transport fees",
        qualify: "South African citizens, Between 18-25 years of old, Full time student, Studying at a recognized tertiary institution of education in South Africa, Household income cannot exceed R800 000 per annum, Live within the Western Cape area",
        photo: "../Resources/GRANDSLOTS Image.jpg",
        fields: "The Grandslots Bursary  covers the Administration, Business Management, Marketing and Mechanical Engineering fields at CPUT",
        tags: "Administration Business Management Marketing Mechanical Engineering",
        url: "cput.ac.za/storage/faculties/engineering/bursaries/Grandslots%20Bursary%20poster.png",
    },

    {
        id: "14-Bursary",
        name: "Electrum Bursary",
        description: "Electrum is a large Cape Town based tech company that handles large amounts of online transactions for many other large organizations like Shoprite, Pick-en-Pay and Clicks. The Electrum Organizations offers three types of bursaries but the one that applies to CPUT students is the Electrum Foundation Bursary that covers many fields related to IT and Engineering at CPUT",
        brief: "Electrum is a Cape Town based tech company that offers bursaries to students in the IT realm of study at university's in the Western Cape",
        covers: "Tuition fees, Textbook fees, Registration fees",
        qualify: "South African citizen, Studying at a recognized tertiary institution of education in the Wester Cape, Must be in either their 2nd year of studies or higher to apply",
        photo: "../Resources/ELECTRUM Image.png",
        fields: "The Electrum Bursary covers the Computer Engineering, Mechanical Engineering and Information Technology fields at CPUT",
        tags: "Computer Engineering Mechanical Engineering Information Technology",
        url: "electrum.co.za/careers/electrum-academic-bursaries",
    },

    {
        id: "15-Bursary",
        name: "PPC Bursary",
        description: "The PPC Ltd Organization is one of the largest cement manufacturers in Southern Africa with 11 major factories scattered throughout South Africa, Zimbabwe, Ethiopia, Botswana and Rwanda. The PPC Bursary aims at helping individuals who are pursing a qualification in fields that relate to the mining sector acquire a means of funding. Bursary recipients will be required to work for  PPC for the same amount of time as the bursary was awarded",
        brief: "The PPC Bursary is aimed at funding individuals who are pursuing qualifications in fields that relate to the mining sector",
        covers: "Tuition fees, Textbook fees, Registration fees, Accommodation fees, Living expenses",
        qualify: "South Africa citizens, Must have a matric certificate, Studying at a recognized tertiary institution of education in South Africa ",
        photo: "../Resources/PPC Image.png",
        fields: "The PPC Bursary covers the Chemical Engineering and Mechanical Engineering fields at CPUT",
        tags: "Chemical Engineering Mechanical Engineering",
        url: "careerwise.co.za/bursaries/ppc",
    }

];



//Search bar keyup function that uses jquery
$("#SearchBar").keyup(function() {

    var filter = $(this).val(),
        count = 0;

    $('#cards div').each(function() {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).animate({ "opacity": "hide", top: "100" }, 500);
        } else {
            $(this).animate({ "opacity": "show", top: "100" }, 500);
            count++;
        }
    });
});

//Creation of card divs function
function cardTemplate(card) {

    return `

  <div class="col-sm-4">
    <div class="card" style="background-image: url('${card.photo}');">
      <div class="card-content">
        <h3 class="card-title">${card.name}</h3>
        <p class="card-brief">${card.brief}</p>
        <p class="card-body">${card.tags}</p>
        <a class="button"  onclick="openPage(this.id)" id="${card.id}" >Open</a>
      </div>
    </div>
  </div>


`

}

//Cycles threw all the data and runs cardTemplate to create a card for each of the data objects
document.getElementById("cards").innerHTML = `

${data.map(cardTemplate).join("")}

`


//Counter effect
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
        countNum: countTo
    }, {
        duration: 4000,
        easing: 'linear',
        step: function() {
            $this.text(Math.floor(this.countNum));
        },
        complete: function() {
            $this.text(this.countNum);
        }
    });
});


//Changing words effect for slogan
setInterval(function() {
    const show = document.querySelector('span[data-show]')
    const next = show.nextElementSibling || document.querySelector('span:first-child')
    const up = document.querySelector('span[data-up]')

    if (up) {
        up.removeAttribute('data-up')
    }

    show.removeAttribute('data-show')
    show.setAttribute('data-up', '')

    next.setAttribute('data-show', '')
}, 2000)


//Card Popup
const model_container = document.getElementById('model-container');
const close = document.getElementById('close');

function openPage(id) {

    var Title = "empty";
    var Description = "empty";
    var Covers = "empty";
    var Qualify = "empty";
    var Website = "empty";
    var Field = "empty";


    data.forEach(function(element, index) {
        if (element['id'] === id) {
            Title = element.name;
            Description = element.description;
            Covers = element.covers;
            Qualify = element.qualify;
            Website = element.url;
            Field = element.fields;
        }
    })

    const coversData = Covers.split(',');
    var arrayLength1 = coversData.length;

    for (var i = 0; i < arrayLength1; i++) {

        var node = document.createElement('li');
        node.appendChild(document.createTextNode(coversData[i]));
        document.querySelector(".covers").appendChild(node);
    }

    const qualifyData = Qualify.split(',');
    var arrayLength2 = qualifyData.length;


    for (var i = 0; i < arrayLength2; i++) {

        var node = document.createElement('li');
        node.appendChild(document.createTextNode(qualifyData[i]));
        document.querySelector(".qualify").appendChild(node);
    }


    headerInfo.innerText = Title;
    description.innerText = Description;
    website.innerText = Website;
    field.innerText = Field;
    model_container.classList.add('show');
}

close.addEventListener('click', () => {
    model_container.classList.remove('show');
    $(covers).empty();
    $(qualify).empty();
});

