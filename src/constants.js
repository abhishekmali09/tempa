import { z } from "zod";

export const contactUsSchema =z.object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(3, "Last name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    doctor_name: z.string().optional(),
    treatment_name: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000),
})
export const newsLetterSchema = z.object({
    email:z.string().email("Invalid email address")
})
export const ContactInformation = {
    "contactNumber":"123-456-789",
    "emailAddress":"info@mysite.com",
    "address":"500 Terry Francine St., 6th Floor, San Francisco, CA 94158",
    "socialMediaHandles":{
        "facebook":"link",
        "instagram":"link",
        "x":"link",
        "linkedin":"link",
    }
}
export const businessName = "Pulse Quote"
export const homeServices = [
    {
        "name":"Cardiology Checkup",
        "cost":"$200"
    },
    {
        "name":"Medical Consultation",
        "cost":"$250"
    },
    {
        "name":"Physical Therapy",
        "cost":"$100"
    },
]
export const treatments = [
    { id: 1, img: "https://img.icons8.com/external-others-pike-picture/100/external-Bariatric-Surgery-bariatric-others-pike-picture.png", name: "Bariatric Surgery" },
    { id: 2, img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-cardiac-allergy-flaticons-lineal-color-flat-icons.png", name: "Cardiac Sciences" },
    { id: 3, img: "https://img.icons8.com/external-obivous-color-kerismaker/100/external-anatomy-anatomy-color-obivous-color-kerismaker-32.png", name: "Cardiothoracic & Vascular Surgery" },
    { id: 4, img: "https://img.icons8.com/external-tal-revivo-duo-tal-revivo/50/external-doctor-available-for-the-health-and-blood-type-blood-duo-tal-revivo.png", name: "Clinical Hematology & BMT" },
    { id: 5, img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/128/external-head-anatomy-flaticons-lineal-color-flat-icons-5.png", name: "ENT" },
    { id: 6, img: "https://img.icons8.com/external-justicon-lineal-color-justicon/100/external-stomach-human-organs-justicon-lineal-color-justicon.png", name: "Gastroenterology Surgery" },
    { id: 7, img: "https://img.icons8.com/arcade/64/surgery.png", name: "General Surgery" },
    { id: 8, img: "https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/50/external-medication-for-the-females-prescribed-by-a-gynecology-drugs-fresh-tal-revivo.png", name: "Gynaecology Treatment" },
    { id: 9, img: "https://img.icons8.com/doodle/96/drop-of-blood--v1.png", name: "Haematology & BMT" },
    { id: 10, img: "https://img.icons8.com/external-others-pike-picture/100/external-Liver-Transplant-hepatitis-others-pike-picture.png", name: "Liver Transplant Surgery" },
    { id: 11, img: "https://img.icons8.com/pulsar-color/100/cancer-ribbon.png", name: "Medical Oncology" },
    { id: 12, img: "https://img.icons8.com/doodle/96/kidney--v1.png", name: "Nephrology" },
    { id: 13, img: "https://img.icons8.com/pulsar-color/100/brain-stroke.png", name: "Neuro Sciences" },
    { id: 14, img: "https://img.icons8.com/external-beshi-color-kerismaker/100/external-Neurology-medical-service-beshi-color-kerismaker.png", name: "Neurology" },
    { id: 15, img: "https://img.icons8.com/ios-glyphs/90/periods.png", name: "Obstetrics & Gynecology" },
    { id: 16, img: "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/external-oncology-world-cancer-awareness-flatart-icons-lineal-color-flatarticons.png", name: "Oncology" },
    { id: 17, img: "https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/100/external-bone-disorder-orthopedics-department-in-same-hospital-premises-hospital-fresh-tal-revivo.png", name: "Orthopedics" },
    { id: 18, img: "https://img.icons8.com/ios/100/chromatography.png", name: "Pediatric Cardiac Surgery" },
    { id: 19, img: "https://img.icons8.com/fluency/100/non-ionizing-radiation.png", name: "Radiation Oncology" },
    { id: 20, img: "https://img.icons8.com/ios/100/surgical-scissors.png", name: "Surgical Oncology" },
    { id: 21, img: "https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/external-transplant-cancer-care-inipagistudio-lineal-color-inipagistudio.png", name: "Transplant" },
    { id: 22, img: "https://img.icons8.com/external-beshi-color-kerismaker/100/external-Urology-medical-service-beshi-color-kerismaker.png", name: "Urology Surgery" },
    { id: 23, img: "https://img.icons8.com/color/100/spleen.png", name: "Vascular Surgery" }
];


export const doctors = [
    {
        id: 1,
        image: "/Images/doctor_921059.png",
        name: "Dr. Dharma Chaudhary",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "17 Years",
        department: "Clinical Hematology & BMT",
        desc: "Renowned Haematologist, Sr. Consultant & Director in Bone Marrow Transplant Department.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "17 Years",
            department: "Clinical Hematology & BMT",
            city: "New Delhi"
        }
    },
    {
        id: 2,
        image: "/Images/doctor_921059.png",
        name: "Dr. W V B S Ramalingam",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "34 Years",
        department: "ENT Surgery",
        desc: "Experienced ENT Surgeon, Sr. Consultant & Director in ENT & Cochlear Implant Department.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "34 Years",
            department: "ENT Surgery",
            city: "New Delhi"
        }
    },
    {
        id: 3,
        image: "/Images/doctor_921059.png",
        name: "Dr. Sunil Prakash",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "35 Years",
        department: "Nephrology & Kidney Transplant",
        desc: "Best Nephrologist in India, Sr. Consultant & Director in the Nephrology Department.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "35 Years",
            department: "Nephrology & Kidney Transplant",
            city: "New Delhi"
        }
    },
    {
        id: 4,
        image: "/Images/doctor_921059.png",
        name: "Dr. Kapil Kumar",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "25 Years",
        department: "Surgical Oncology",
        desc: "One of the best oncologist surgeons, Director & HOD - Surgical Oncology.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "25 Years",
            department: "Surgical Oncology",
            city: "New Delhi"
        }
    },
    {
        id: 5,
        image: "/Images/doctor_921059.png",
        name: "Dr. Rajiv Anand",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "38 Years",
        department: "Neurology",
        desc: "Top Neurologist, Director & Sr. Consultant, Department of Neurology.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "38 Years",
            department: "Neurology",
            city: "New Delhi"
        }
    },
    {
        id: 6,
        image: "/Images/doctor_921059.png",
        name: "Dr. Deep Goel",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "25 Years",
        department: "GI & Bariatric Surgery",
        desc: "Expert in Bariatric Surgery, Sr. Consultant & Director in Surgical Gastroenterology.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "25 Years",
            department: "GI & Bariatric Surgery",
            city: "New Delhi"
        }
    },
    {
        id: 7,
        image: "/Images/doctor_921059.png",
        name: "Dr. Subhash Chandra",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "28 Years",
        department: "Cardiology",
        desc: "Chairman & HOD in Cardiology Department, one of India's best cardiologists.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "28 Years",
            department: "Cardiology",
            city: "New Delhi"
        }
    },
    {
        id: 8,
        image: "/Images/doctor_921059.png",
        name: "Dr. Amit Agarwal",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "25 Years",
        department: "Medical Oncology",
        desc: "Experienced Oncologist, Director & HOD in Medical Oncology Department.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "25 Years",
            department: "Medical Oncology",
            city: "New Delhi"
        }
    },
    {
        id: 9,
        image: "/Images/doctor_921059.png",
        name: "Dr. S Hukku",
        hospital: "BLK Super Specialty Hospital, New Delhi",
        experience: "35 Years",
        department: "Radiation Oncology",
        desc: "Renowned Radiation Oncologist, Sr. Consultant & Chairman Radiation Oncology.",
        detail: {
            hospital: "BLK Super Specialty Hospital, New Delhi",
            experience: "35 Years",
            department: "Radiation Oncology",
            city: "New Delhi"
        }
    },
    {
        id: 10,
        image: "/Images/doctor_921059.png",
        name: "Dr. Rajesh Sharma",
        hospital: "Jaypee Hospital, Noida",
        experience: "25 Years",
        department: "Pediatric Cardiac Surgery",
        desc: "Expert Pediatric Cardiothoracic Surgeon, performed over 20,000 surgeries.",
        detail: {
            hospital: "Jaypee Hospital, Noida",
            experience: "25 Years",
            department: "Pediatric Cardiac Surgery",
            city: "Noida"
        }
    },
    {
        id: 11,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr-Sanjay-Gupta21.jpg",
        name: "DR SANJAY GUPTA",
        hospital: "Jaypee Hospital, Noida - India",
        experience: "20 Years of Experience",
        department: "Orthopaedic Surgeon",
        desc: "Dr. Sanjay Gupta is a gold medallist in MS orthopaedics and performed over 5000 successful joint replacement surgeries. He is presently working as an associate director and HOD in the department of joint replacement and orthopaedics at Jaypee hospital, Noida.",
        detail: {
            hospital: "Jaypee Hospital, Noida - India",
            experience: "20 Years of Experience",
            department: "Orthopaedic Surgeon",
            city: "Noida"
        }
    },
    {
        id: 12,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr_-Abhideep-Chaudhary.jpg",
        name: "DR ABHIDEEP CHAUDHARY",
        hospital: "Blk Hospital, New Delhi - India",
        experience: "16 Years of Experience",
        department: "Liver Transplant Surgeon",
        desc: "Dr. Abhideep Chaudhary is a renowned Liver Transplant Surgeon in India and working as a senior consultant and director of Liver Transplant Department at Jaypee Hospital, Noida, India.",
        detail: {
            hospital: "Blk Hospital, New Delhi - India",
            experience: "16 Years of Experience",
            department: "Liver Transplant Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 13,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Harit_Chaturvedi_new_0.jpg",
        name: "DR HARIT CHATURVEDI",
        hospital: "Max Hospital, New Delhi - India",
        experience: "27 Years of Experience",
        department: "Surgical Oncologist",
        desc: "Dr. Harit Chaturvedi is the best name in surgical oncology and presently working as a Chairman - Cancer Care, Director & Chief Consultant - Surgical Oncology at Max Hospitals Groups Hospital, New Delhi, India.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "27 Years of Experience",
            department: "Surgical Oncologist",
            city: "New Delhi"
        }
    },
    {
        id: 14,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Sanjay_gupta-Liver.jpg",
        name: "PROF DR SUBHASH GUPTA",
        hospital: "Max Hospital, New Delhi - India",
        experience: "35 Years of Experience",
        department: "Liver Transplant Surgeon",
        desc: "Prof (Dr) Subhash Gupta is a renowned Liver Transplant surgeon in India and presently working as a Chief of liver transplant/hepato-pancreatic-biliary surgeon and the Chairman of the Max Center.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "35 Years of Experience",
            department: "Liver Transplant Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 15,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr_Anant_Kumar_max1.png",
        name: "DR ANANT KUMAR",
        hospital: "Max Hospital, New Delhi - India",
        experience: "30 Years of Experience",
        department: "Urologist & Kidney Transplant Surgeon",
        desc: "Dr. Anant Kumar is one of the best Kidney transplant surgeons and presently working as a Chairman - Urology, Renal Transplant, Robotics(Max Saket Complex) and Uro-Oncology Max Hospital, Saket, in Delhi, India.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "30 Years of Experience",
            department: "Urologist & Kidney Transplant Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 16,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr_Anurag_Krishna_Max1.jpg",
        name: "DR ANURAG KRISHNA",
        hospital: "Max Hospital, New Delhi - India",
        experience: "35 Years of Experience",
        department: "Pediatric Surgeon & Urologist",
        desc: "Dr. Anurag Krishna is a renowned pediatric and urologist surgeon in India and presently working as Director - Paediatrics & Paediatric Surgery at Max Hospital, Saket, Delhi, India.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "35 Years of Experience",
            department: "Pediatric Surgeon & Urologist",
            city: "New Delhi"
        }
    },
    {
        id: 17,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Pradeep_Chowbey_Max.jpg",
        name: "DR PRADEEP CHOWBEY",
        hospital: "Max Hospital, New Delhi - India",
        experience: "37 Years of Experience",
        department: "GI & Bariatric Surgeon",
        desc: "Dr. Pradeep Chowbey is a world-renowned Bariatric Surgeon in India and presently working as an Executive Vice Chairman at a Max Institute of Minimal Access Centre, Max Healthcare.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "37 Years of Experience",
            department: "GI & Bariatric Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 18,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr_Anil_Arora.JPG",
        name: "PROF DR ANIL ARORA",
        hospital: "Max Hospital, New Delhi - India",
        experience: "32 Years of Experience",
        department: "Orthopaedic Surgeon",
        desc: "Dr. (Prof.) Anil Arora is a well-renowned orthopedic surgeon in India providing the ultimate in state-of-the-art quality orthopedic care and presently working as a Senior Director & Unit Head - Orthopaedic & Joint Replacement Center at Max Hospitals Group.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "32 Years of Experience",
            department: "Orthopaedic Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 19,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr_shishta-nadda-bas.JPG",
        name: "DR SHISHTA NADDA BASU",
        hospital: "Max Hospital, New Delhi - India",
        experience: "40 Years of Experience",
        department: "Gynecologist / Infertility specialist",
        desc: "Dr. Shishta Nadda Basu is the best doctor for Gynaecology and Obstetrics and presently working as a Senior Director & Head of Department at Max Super Speciality Hospital, Shalimar Bagh, New Delhi, India.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "40 Years of Experience",
            department: "Gynecologist / Infertility specialist",
            city: "New Delhi"
        }
    },
    {
        id: 20,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr_ashok_seth.jpg",
        name: "DR ASHOK SETH",
        hospital: "Fortis Escorts Heart Hospital, New Delhi - India",
        experience: "40 Years of Experience",
        department: "Cardiologist",
        desc: "Dr. Ashok Seth is the most renowned cardiologist in India and presently working as a Chairman of Fortis Escorts Heart Institute, New Delhi, and Head, Cardiology Council of Fortis Group of Hospitals.",
        detail: {
            hospital: "Fortis Escorts Heart Hospital, New Delhi - India",
            experience: "40 Years of Experience",
            department: "Cardiologist",
            city: "New Delhi"
        }
    },
    {
        id: 21,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/DR_YUGAL_K_MISHRA.PNG",
        name: "DR YUGAL K MISHRA",
        hospital: "Manipal Hospital, Dwarka - India",
        experience: "32 Years of Experience",
        department: "Cardiothoracic & Vascular Surgeon",
        desc: "Dr. Yugal K Mishra is one of the renowned Robotic & minimally invasive heart surgeons in Asia and presently working as a Director, Department of Cardiovascular Surgery at Fortis Escorts Heart Institute & Research Centre, Okhla Road, New Delhi.",
        detail: {
            hospital: "Manipal Hospital, Dwarka - India",
            experience: "32 Years of Experience",
            department: "Cardiothoracic & Vascular Surgeon",
            city: "Dwarka"
        }
    },
    {
        id: 22,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Vivek_Vij.jpg",
        name: "DR VIVEK VIJ",
        hospital: "Fortis Escorts Heart Hospital, New Delhi - India",
        experience: "18 Years of Experience",
        department: "Liver Transplant Surgeon",
        desc: "Dr. Vivek Vij is one of the best liver transplant surgeons and presently working as Director of Liver Transplant and GI surgery department at Fortis Health Care, New Delhi, India.",
        detail: {
            hospital: "Fortis Escorts Heart Hospital, New Delhi - India",
            experience: "18 Years of Experience",
            department: "Liver Transplant Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 23,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Ashok_Rajgopal.jpg",
        name: "DR ASHOK RAJGOPAL",
        hospital: "Fortis Hospital, Gurugram - India",
        experience: "30 Years of Experience",
        department: "Orthopaedic Surgeon",
        desc: "Dr. Ashok Rajgopal is a renowned orthopaedic surgeon in India and presently working as Director & Chairman of Fortis Bone & Joint Institute Executive at Fortis Hospitals Groups.",
        detail: {
            hospital: "Fortis Hospital, Gurugram - India",
            experience: "30 Years of Experience",
            department: "Orthopaedic Surgeon",
            city: "Gurugram"
        }
    },
    {
        id: 24,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Sheshir_seth.png",
        name: "DR SHISHIR SETH",
        hospital: "Apollo Hospital, New Delhi - India",
        experience: "13 Years of Experience",
        department: "Clinical Hematologist & BMT",
        desc: "Dr. Shishir Seth is one of the best Haematologists in India and presently working as a Senior Consultant in Hemato-Oncology and Bone Marrow Transplant at the Apollo Hospitals, New Delhi.",
        detail: {
            hospital: "Apollo Hospital, New Delhi - India",
            experience: "13 Years of Experience",
            department: "Clinical Hematologist & BMT",
            city: "New Delhi"
        }
    },
    {
        id: 25,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr-s-m-shuaib-zaidi.jpg",
        name: "DR S M SHUAIB ZAIDI",
        hospital: "Apollo Hospital, New Delhi - India",
        experience: "18 Years of Experience",
        department: "Surgical Oncologist",
        desc: "Dr. Shuaib Zaidi is a well-known surgical oncologist in India and presently working as a Senior Consultant at Indraprastha Apollo Hospital in New Delhi.",
        detail: {
            hospital: "Apollo Hospital, New Delhi - India",
            experience: "18 Years of Experience",
            department: "Surgical Oncologist",
            city: "New Delhi"
        }
    },
    {
        id: 26,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr-sandeep-attawar.jpg",
        name: "DR SANDEEP ATTAWAR",
        hospital: "Gleneagles Global Hospital, Tamil Nadu - India",
        experience: "22 Years of Experience",
        department: "Cardiothoracic & Vascular Surgeon",
        desc: "Dr. Sandeep Attawar is one of India’s foremost cardiothoracic surgeons and presently working as Chair & Program Director, Cardiac Surgery and Thoracic organ transplantation at Parkway-Global Hospitals, India.",
        detail: {
            hospital: "Gleneagles Global Hospital, Tamil Nadu - India",
            experience: "22 Years of Experience",
            department: "Cardiothoracic & Vascular Surgeon",
            city: "Chennai" // Assuming Tamil Nadu refers to Chennai, a major city
        }
    }
];
export const hospitals = [
    {
      id: 1,
      name: "APOLLO HOSPITAL IN DELHI",
      address: "India, New Delhi - 110076",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/Apollo-Hospital-Delhi111.jpg",
      desc: "A multi-specialty hospital known for advanced medical care and high-end technology.",
      longDesc: "Apollo Hospital in Delhi is a flagship institution of the Apollo Group, renowned for its cutting-edge medical technology and exceptional patient care. It offers a wide range of specialties including cardiology, neurology, oncology, and orthopedics, supported by state-of-the-art infrastructure.",
      detail: {
        beds: 710,
        established: 1996,
        country: "India",
        city: "New Delhi"
      }
    },
    {
      id: 2,
      name: "ARTEMIS HOSPITAL",
      address: "India, Haryana - 122001",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/artimis_hosp11.jpg",
      desc: "A leading hospital in Gurugram, specializing in tertiary and quaternary care services.",
      longDesc: "Artemis Hospital in Gurugram is a pioneer in providing advanced healthcare services, focusing on tertiary and quaternary care. With a team of highly skilled doctors and modern facilities, it excels in complex surgeries and critical care across various medical disciplines.",
      detail: {
        beds: 400,
        established: 2007,
        country: "India",
        city: "Gurugram"
      }
    },
    {
      id: 3,
      name: "BLK HOSPITAL",
      address: "India, New Delhi - 110005",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/blk_hospital.jpg",
      desc: "Renowned for its comprehensive cancer care and organ transplant programs.",
      longDesc: "BLK Hospital in New Delhi is a trusted name in healthcare, particularly recognized for its exceptional oncology department and successful organ transplant programs, including liver and kidney transplants, supported by a multidisciplinary team of experts.",
      detail: {
        beds: 650,
        established: 1959,
        country: "India",
        city: "New Delhi"
      }
    },
    {
      id: 4,
      name: "FORTIS ESCORTS HEART HOSPITAL",
      address: "India, New Delhi - 110025",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/fortis-escorts11.jpg",
      desc: "One of India’s best heart hospitals with world-class cardiology facilities.",
      longDesc: "Fortis Escorts Heart Hospital is a premier destination for cardiac care in India, equipped with advanced diagnostic and surgical tools. It has a legacy of excellence in treating complex heart conditions, making it a leader in cardiology.",
      detail: {
        beds: 310,
        established: 1988,
        country: "India",
        city: "New Delhi"
      }
    },
    {
      id: 5,
      name: "FORTIS HOSPITAL",
      address: "India, Gurugram - 121001",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/FMRI_HOSP11.jpg",
      desc: "A super-specialty hospital providing top-tier medical care across multiple disciplines.",
      longDesc: "Fortis Hospital in Gurugram is a super-specialty facility known for its comprehensive healthcare services. It offers advanced treatments in neurology, orthopedics, and oncology, backed by cutting-edge technology and a patient-centric approach.",
      detail: {
        beds: 1000,
        established: 2001,
        country: "India",
        city: "Gurugram"
      }
    },
    {
      id: 6,
      name: "JAYPEE HOSPITAL",
      address: "India, Noida - 201304",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/Jaypee_Hospital_in_India.jpg",
      desc: "A state-of-the-art hospital offering world-class infrastructure and medical services.",
      longDesc: "Jaypee Hospital in Noida is designed to deliver world-class healthcare with its modern infrastructure and highly skilled medical professionals. It provides specialized care in areas like cardiology, oncology, and critical care.",
      detail: {
        beds: 525,
        established: 2014,
        country: "India",
        city: "Noida"
      }
    },
    {
      id: 7,
      name: "MAX HOSPITAL",
      address: "India, New Delhi - 110017",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/max_saket.jpg",
      desc: "A leading hospital network in India known for excellence in healthcare services.",
      longDesc: "Max Hospital in New Delhi is part of the Max Healthcare network, celebrated for its superior medical services and patient care. It offers specialties such as oncology, cardiology, and neurology with a focus on innovative treatments.",
      detail: {
        beds: 530,
        established: 2006,
        country: "India",
        city: "New Delhi"
      }
    },
    {
      id: 8,
      name: "SHARP SIGHT CENTRE",
      address: "India, New Delhi - 110092",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/sharp-sight-centre-delhi-enlwg1.jpg",
      desc: "A specialized eye care center known for advanced treatments in ophthalmology.",
      longDesc: "Sharp Sight Centre in New Delhi is a dedicated eye care facility offering advanced treatments for cataracts, glaucoma, and refractive surgeries. It uses cutting-edge technology to ensure the best outcomes in ophthalmology.",
      detail: {
        beds: 50,
        established: 1998,
        country: "India",
        city: "New Delhi"
      }
    },
    {
      id: 9,
      name: "FOCUZ AYURVEDA HOSPITAL",
      address: "India, Kerala - 673634",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/focuz_hospital.jpg",
      desc: "A top Ayurveda hospital offering traditional Indian holistic treatments.",
      longDesc: "Focuz Ayurveda Hospital in Kerala specializes in traditional Ayurvedic treatments, blending ancient Indian healing practices with modern wellness techniques. It is a preferred destination for holistic health and rejuvenation therapies.",
      detail: {
        beds: 100,
        established: 2010,
        country: "India",
        city: "Kerala"
      }
    },
    {
      id: 10,
      name: "MANIPAL HOSPITAL",
      address: "India, Dwarka - 110075",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/Manipal-Hospital-Dwarka-Doctors-List_4.jpg",
      desc: "One of India's leading multi-specialty hospitals, known for quality patient care.",
      longDesc: "Manipal Hospital in Dwarka is a prominent multi-specialty institution offering high-quality healthcare services. It is equipped with advanced facilities and a team of experts in fields like cardiology, orthopedics, and pediatrics.",
      detail: {
        beds: 380,
        established: 2018,
        country: "India",
        city: "Dwarka"
      }
    },
    {
      id: 11,
      name: "PSRI HOSPITAL",
      address: "India, Delhi - 110017",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/psri_hospital_in_delhi.jpg",
      desc: "A hospital specializing in kidney, liver, and digestive disorders.",
      longDesc: "PSRI Hospital in Delhi is a specialized center for kidney, liver, and gastrointestinal diseases. It offers advanced diagnostic and therapeutic services, making it a leader in managing complex digestive and organ-related disorders.",
      detail: {
        beds: 200,
        established: 1996,
        country: "India",
        city: "Delhi"
      }
    },
    {
      id: 12,
      name: "AMRITA HOSPITAL",
      address: "India, Faridabad - 121002",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/amrita.jpg",
      desc: "A premier hospital providing multi-disciplinary healthcare services.",
      longDesc: "Amrita Hospital in Faridabad is a multi-disciplinary healthcare provider known for its compassionate care and advanced medical technology. It serves patients with a wide range of specialties, from oncology to neurosurgery.",
      detail: {
        beds: 2600,
        established: 2022,
        country: "India",
        city: "Faridabad"
      }
    },
    {
      id: 13,
      name: "ART Fertility Clinics",
      address: "India, South Delhi - 110065",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/art-fertility-clinics-in-india.jpg",
      desc: "A leading fertility clinic specializing in advanced reproductive treatments.",
      longDesc: "ART Fertility Clinics in South Delhi is a top-tier facility for reproductive medicine, offering cutting-edge treatments like IVF and ICSI. It is staffed by globally trained fertility experts dedicated to helping couples achieve parenthood.",
      detail: {
        beds: 20,
        established: 2012,
        country: "India",
        city: "South Delhi"
      }
    },
    {
      id: 14,
      name: "MEDANTA HOSPITAL",
      address: "India, Gurugram - 122001",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/medi.jpg",
      desc: "A super-specialty hospital offering high-end medical services and treatments.",
      longDesc: "Medanta Hospital in Gurugram is a super-specialty institution founded by renowned cardiac surgeon Dr. Naresh Trehan. It provides world-class treatments in cardiology, neurology, and oncology with a focus on innovation and excellence.",
      detail: {
        beds: 1250,
        established: 2009,
        country: "India",
        city: "Gurugram"
      }
    },
    {
      id: 15,
      name: "AMRI HOSPITAL",
      address: "India, Kolkata - 700029",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/AMRI_HOSPITAL11.jpg",
      desc: "One of the leading hospitals in Eastern India with specialized care services.",
      longDesc: "AMRI Hospital in Kolkata is a leading healthcare provider in Eastern India, offering specialized services in cardiology, oncology, and critical care. It combines modern technology with a patient-first approach to deliver exceptional outcomes.",
      detail: {
        beds: 350,
        established: 1996,
        country: "India",
        city: "Kolkata"
      }
    },
    {
      id: 16,
      name: "ASIAN HOSPITAL IN FARIDABAD",
      address: "India, Faridabad - 121001",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/asian_90011.jpg",
      desc: "A well-known multi-specialty hospital with modern medical infrastructure.",
      longDesc: "Asian Hospital in Faridabad is a multi-specialty facility equipped with modern infrastructure, providing high-quality care in specialties like cardiology, orthopedics, and gastroenterology, catering to both local and international patients.",
      detail: {
        beds: 425,
        established: 2007,
        country: "India",
        city: "Faridabad"
      }
    },
    {
      id: 17,
      name: "GLENEAGLES GLOBAL HOSPITAL",
      address: "India, Tamil Nadu - 600100",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/GLENEAGLES_GLOBAL_HOSPITAL.jpg",
      desc: "A top-tier hospital offering advanced medical care in various specialties.",
      longDesc: "Gleneagles Global Hospital in Tamil Nadu is a top-tier healthcare institution renowned for its expertise in liver transplants, oncology, and neurosurgery. It combines advanced technology with a compassionate care approach.",
      detail: {
        beds: 1000,
        established: 1999,
        country: "India",
        city: "Chennai"
      }
    },
    {
      id: 18,
      name: "COLUMBIA ASIA HOSPITAL",
      address: "India, Bangalore - 560055",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/colombia_Asia_hospital.jpg",
      desc: "A high-quality hospital known for patient-centered healthcare services.",
      longDesc: "Columbia Asia Hospital in Bangalore is known for its patient-centered care and high-quality medical services. It offers specialties like cardiology, orthopedics, and pediatrics, supported by modern facilities and skilled professionals.",
      detail: {
        beds: 206,
        established: 2005,
        country: "India",
        city: "Bangalore"
      }
    },
    {
      id: 19,
      name: "ASTER CMI HOSPITAL",
      address: "India, Bangalore - 560092",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/Aster_CMI_Hospital.jpg",
      desc: "A leading hospital in Bangalore, offering world-class medical facilities.",
      longDesc: "Aster CMI Hospital in Bangalore is a leading healthcare provider offering world-class facilities in neurology, cardiology, and oncology. It is designed to deliver exceptional care with a focus on patient comfort and advanced treatments.",
      detail: {
        beds: 500,
        established: 2014,
        country: "India",
        city: "Bangalore"
      }
    },
    {
      id: 20,
      name: "HCG CANCER CENTER",
      address: "India, Bangalore - 560002",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/hcg_bangalore.jpg",
      desc: "A dedicated cancer hospital specializing in cutting-edge oncology treatments.",
      longDesc: "HCG Cancer Center in Bangalore is a dedicated oncology hospital known for its innovative cancer treatments, including precision medicine and advanced radiation therapy. It is a leader in providing comprehensive cancer care.",
      detail: {
        beds: 220,
        established: 1989,
        country: "India",
        city: "Bangalore"
      }
    },
    {
      id: 21,
      name: "KOKILABEN DHIRUBHAI AMBANI HOSPITAL",
      address: "India, Mumbai - 400053",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/kokilavan_hosp11.jpg",
      desc: "A renowned multi-specialty hospital with world-class medical expertise.",
      longDesc: "Kokilaben Dhirubhai Ambani Hospital in Mumbai is a renowned multi-specialty facility offering top-tier medical expertise in areas like oncology, neurology, and orthopedics. It is equipped with advanced technology and a dedicated team of specialists.",
      detail: {
        beds: 750,
        established: 2009,
        country: "India",
        city: "Mumbai"
      }
    },
    {
      id: 22,
      name: "YATHARTH HOSPITAL",
      address: "India, Noida",
      image: "https://peacemedicaltourism.com/assets/uploads/hospitals/yh-bd9393d9f1.jpg",
      desc: "A well-equipped hospital providing a range of healthcare services in Noida.",
      longDesc: "Yatharth Hospital in Noida is a well-equipped healthcare facility offering a broad spectrum of medical services, including cardiology, orthopedics, and emergency care. It is committed to providing affordable and high-quality healthcare.",
      detail: {
        beds: 400,
        established: 2008,
        country: "India",
        city: "Noida"
      }
    }
  ];
