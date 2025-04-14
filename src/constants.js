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
    "contactNumber":"9990776607",
    "emailAddress":"info@mysite.com",
    "address":"306, Aggarwal Plaza, Plot 11, Sector 10, Dwarka,New Delhi, Delhi 110075",
    "socialMediaHandles":{
        "facebook":"link",
        "instagram":"link",
        "x":"link",
        "linkedin":"link",
    }
}

export const businessName = "Cure It Aboard"

export const treatments = [
  {
    id: 1,
    name: "Bariatric Surgery",
    img: "https://img.icons8.com/external-others-pike-picture/100/external-Bariatric-Surgery-bariatric-others-pike-picture.png",
    shortDesc: "Surgical procedures to aid weight loss.",
    desc: "Bariatric surgery includes procedures like gastric bypass and sleeve gastrectomy to help with weight loss.",
    longDesc: "It is recommended for individuals with severe obesity who have not responded to other weight loss methods, improving overall health and quality of life."
  },
  {
    id: 2,
    name: "Cardiac Sciences",
    img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-cardiac-allergy-flaticons-lineal-color-flat-icons.png",
    shortDesc: "Advanced treatments for heart-related conditions.",
    desc: "Cardiac Sciences involve diagnosing and treating heart diseases, including surgeries and minimally invasive procedures.",
    longDesc: "Specialists in this field manage conditions like coronary artery disease, heart failure, and arrhythmias using cutting-edge technology."
  },
  {
    id: 3,
    name: "ENT",
    img: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/128/external-head-anatomy-flaticons-lineal-color-flat-icons-5.png",
    shortDesc: "Treatment for ear, nose, and throat conditions.",
    desc: "ENT (Ear, Nose, and Throat) specialists, also known as otolaryngologists, diagnose and treat conditions related to the ear, nose, throat, and related structures of the head and neck.",
    longDesc: "They manage a wide range of issues including sinusitis, hearing loss, ear infections, voice disorders, and sleep apnea. Treatments can involve medication, surgical procedures, and lifestyle changes to alleviate symptoms and improve overall quality of life."
  },
  {
    id: 4,
    name: "General & Laparoscopic",
    img: "https://img.icons8.com/ios-filled/100/surgery.png",
    shortDesc: "Minimally invasive surgical procedures.",
    desc: "General and laparoscopic surgery involves minimally invasive techniques for various conditions.",
    longDesc: "These procedures reduce recovery time and complications, addressing issues like gallstones, hernias, and appendicitis."
  },
  {
    id: 5,
    name: "Haematology & BMT",
    img: "https://img.icons8.com/doodle/96/drop-of-blood--v1.png",
    shortDesc: "Blood disorder and bone marrow transplant treatments.",
    desc: "Haematology and Bone Marrow Transplant (BMT) focus on blood-related diseases and marrow replacement.",
    longDesc: "Treats conditions like leukemia, anemia, and lymphoma with advanced therapies and transplants."
  },

  {
    id: 30,
    name: "Infertility",
    img: "https://img.icons8.com/external-others-pike-picture/50/external-Infertility-adoption-others-pike-picture.png",
    shortDesc: "Treatments to assist with conception.",
    desc: "Infertility treatments help individuals and couples conceive through various medical techniques.",
    longDesc: "Includes options like IVF, hormonal therapy, and surgical corrections for reproductive issues."
  },
  {
    id: 6,
    name: "Nephrology & Urology",
    img: "https://img.icons8.com/color/96/kidney.png",
    shortDesc: "Kidney and urinary tract treatments.",
    desc: "Nephrology and Urology manage kidney and urinary system disorders.",
    longDesc: "Treats kidney stones, urinary infections, and chronic kidney disease with dialysis or surgery."
  },
  {
    id: 7,
    name: "Neuro Sciences",
    img: "https://img.icons8.com/fluency/96/brain.png",
    shortDesc: "Brain and nervous system treatments.",
    desc: "Neuro Sciences cover brain, spine, and nerve-related conditions.",
    longDesc: "Manages epilepsy, tumors, and spinal disorders with advanced neurosurgery and therapies."
  },
  {
    id: 8,
    name: "Obstetrics & Gynecology",
    img: "https://img.icons8.com/color/96/pregnant.png",
    shortDesc: "Women’s reproductive health and pregnancy care.",
    desc: "Obstetrics and Gynecology address pregnancy, childbirth, and female reproductive health.",
    longDesc: "Includes prenatal care, gynecological surgeries, and treatment for menstrual disorders."
  },
  {
    id: 9,
    name: "Cardiothoracic & Vascular Surgery" ,
    img: "https://img.icons8.com/external-obivous-color-kerismaker/100/external-anatomy-anatomy-color-obivous-color-kerismaker-32.png",
    shortDesc: "Surgery of the heart, lungs, and blood vessels.",
    desc: "Cardiothoracic & Vascular Surgery treats conditions of the heart, lungs, and vascular system through advanced surgical procedures.",
    longDesc: "Focuses on surgical treatment of diseases affecting the heart, lungs, esophagus, and major blood vessels, including bypass surgery, valve repair, aortic aneurysm repair, and minimally invasive thoracic procedures."

  },
  {
    id: 10,
    name: "Clinical Hematology & BMT",
    img: "https://img.icons8.com/external-tal-revivo-duo-tal-revivo/50/external-doctor-available-for-the-health-and-blood-type-blood-duo-tal-revivo.png",
    shortDesc: "Blood disorders and bone marrow transplant.",
    desc: "Clinical Hematology & BMT manages blood diseases and offers bone marrow transplantation for various hematological conditions.",
    longDesc: "Specializes in diagnosing and treating blood disorders such as leukemia, lymphoma, anemia, and clotting disorders. Offers advanced care including chemotherapy, immunotherapy, and bone marrow or stem cell transplantation."

  },
  {
   id: 11,
    img: "https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/50/external-medication-for-the-females-prescribed-by-a-gynecology-drugs-fresh-tal-revivo.png",
    name: "Gynaecology Treatment",
    shortDesc: "Women's reproductive health care.",
    desc: "Gynaecology Treatment focuses on the diagnosis and management of female reproductive system disorders.",
    longDesc: "Provides comprehensive care for conditions affecting the uterus, ovaries, fallopian tubes, and vagina, including menstrual disorders, infertility, fibroids, endometriosis, and menopause-related issues. Treatments include medical management, minimally invasive surgery, and preventive care."

  },
  {
     id: 12,
     img: "https://img.icons8.com/external-justicon-lineal-color-justicon/100/external-stomach-human-organs-justicon-lineal-color-justicon.png",
     name: "Gastroenterology Surgery",
     shortDesc: "Surgical care for digestive system disorders.",
     desc: "Gastroenterology Surgery addresses diseases of the digestive tract through specialized surgical procedures.",
     longDesc: "Focuses on the surgical treatment of conditions affecting the esophagus, stomach, liver, pancreas, intestines, and gallbladder. Common procedures include laparoscopic surgeries for gallstones, hernias, colorectal cancer, and inflammatory bowel disease, aimed at improving digestive health and quality of life."

  },

  { id: 13,
    img: "https://img.icons8.com/arcade/64/surgery.png",
     name: "General Surgery",
     shortDesc: "Broad surgical care for various conditions.",
    desc: "General Surgery involves surgical treatment of a wide range of common conditions affecting multiple body systems.",
    longDesc: "Covers surgical procedures for conditions involving the abdomen, skin, breast, soft tissues, and endocrine system. Includes surgeries for hernias, appendicitis, gallbladder disease, tumors, and trauma. Often utilizes minimally invasive techniques to promote faster recovery and reduced complications."

    },
    { id: 14,
     img: "https://img.icons8.com/external-others-pike-picture/100/external-Liver-Transplant-hepatitis-others-pike-picture.png",
     name: "Liver Transplant Surgery",
     shortDesc: "Surgical replacement of a diseased liver.",
      desc: "Liver Transplant Surgery involves replacing a damaged or failing liver with a healthy donor liver.",
      longDesc: "Performed for patients with end-stage liver disease, liver cancer, or acute liver failure. This complex procedure involves removing the diseased liver and implanting a healthy liver from a deceased or living donor. Post-transplant care includes immunosuppressive therapy and long-term monitoring to ensure graft success and patient recovery."
  },
  {
   id: 15,
      img: "https://img.icons8.com/pulsar-color/100/cancer-ribbon.png",
      name: "Medical Oncology",
      shortDesc: "Cancer treatment using medication.",
     desc: "Medical Oncology focuses on diagnosing and treating cancer through chemotherapy, immunotherapy, and targeted therapy.",
     longDesc: "Specializes in the medical management of cancer using advanced drug therapies such as chemotherapy, immunotherapy, hormonal therapy, and targeted treatments. Medical oncologists work closely with surgical and radiation teams to provide personalized, comprehensive cancer care across all stages of the disease."
  },
  {
    id: 16,
       img: "https://img.icons8.com/doodle/96/kidney--v1.png",
        name: "Nephrology",
        shortDesc: "Care for kidney-related diseases.",
       desc: "Nephrology deals with the diagnosis and treatment of kidney disorders and related conditions.",
       longDesc: "Focuses on managing conditions such as chronic kidney disease, acute kidney injury, glomerulonephritis, and electrolyte imbalances. Nephrologists also oversee dialysis treatment and prepare patients for kidney transplantation, aiming to preserve kidney function and improve overall health."
  },
  { id: 17,
     img: "https://img.icons8.com/external-beshi-color-kerismaker/100/external-Neurology-medical-service-beshi-color-kerismaker.png",
      name: "Neurology" ,
      shortDesc: "Diagnosis and care of brain and nerve disorders.",
     desc: "Neurology focuses on the diagnosis and treatment of diseases affecting the brain, spinal cord, and nervous system.",
     longDesc: "Specializes in managing conditions such as stroke, epilepsy, Parkinson’s disease, multiple sclerosis, migraines, and neuropathies. Neurologists use advanced diagnostic tools and medical therapies to treat both acute and chronic neurological disorders, aiming to improve patient function and quality of life."
    },

  {
     id: 18,
       img: "https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/100/external-bone-disorder-orthopedics-department-in-same-hospital-premises-hospital-fresh-tal-revivo.png",
       name: "Orthopedics",
       shortDesc: "Bone, joint, and muscle care.",
      desc: "Orthopedics focuses on the diagnosis and treatment of the musculoskeletal system, including bones, joints, muscles, and ligaments.",
      longDesc: "Provides medical and surgical care for conditions such as fractures, arthritis, sports injuries, spine disorders, and joint degeneration. Treatments range from physical therapy and medication to minimally invasive procedures and joint replacement surgeries, aimed at restoring mobility and reducing pain."
  },
  { id: 19,
     img: "https://img.icons8.com/ios/100/chromatography.png",
      name: "Pediatric Cardiac Surgery",
      shortDesc: "Heart surgery for infants and children.",
      desc: "Pediatric Cardiac Surgery treats congenital and acquired heart conditions in newborns, infants, and children through specialized surgical procedures.",
      longDesc: "Focuses on correcting structural heart defects such as holes in the heart, valve disorders, and complex congenital anomalies. Performed by highly trained surgeons using advanced techniques, often in collaboration with pediatric cardiologists. The goal is to improve heart function, enhance growth and development, and ensure long-term health in young patients."
     },
  {
     id: 20,
     img: "https://img.icons8.com/fluency/100/non-ionizing-radiation.png",
     name: "Radiation Oncology",
     shortDesc: "Cancer treatment using targeted radiation.",
    desc: "Radiation Oncology uses high-energy radiation to treat and manage various types of cancer.",
    longDesc: "Specializes in the precise delivery of radiation therapy to destroy cancer cells while minimizing damage to surrounding healthy tissue. Used alone or alongside surgery and chemotherapy, it treats cancers such as brain, breast, prostate, and head & neck cancers. Techniques include IMRT, IGRT, stereotactic radiosurgery, and brachytherapy for optimal outcomes."
  },
  {
   id:21 ,
   img: "https://img.icons8.com/ios/100/surgical-scissors.png",
    name: "Surgical Oncology",
    shortDesc: "Surgical treatment of cancer.",
    desc: "Surgical Oncology focuses on the removal of tumors and cancerous tissues through advanced surgical techniques.",
    longDesc: "Specializes in diagnosing, staging, and surgically treating various types of cancer, including breast, gastrointestinal, head and neck, and soft tissue tumors. Surgical oncologists work closely with medical and radiation oncology teams to deliver comprehensive cancer care. Procedures may include minimally invasive and organ-preserving surgeries to enhance recovery and outcomes."
  },
{
      id: 22,
     img: "https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/external-transplant-cancer-care-inipagistudio-lineal-color-inipagistudio.png",
     name: "Transplant",
     shortDesc: "Organ and tissue transplantation services.",
    desc: "Transplant services involve replacing damaged organs or tissues with healthy donor organs to restore function and save lives.",
    longDesc: "Specializes in organ transplantation including kidney, liver, heart, and bone marrow transplants. The transplant team manages the entire process—from donor evaluation and surgery to post-transplant care and immunosuppressive therapy. The goal is to improve survival and quality of life for patients with end-stage organ failure or severe blood disorders."
},
{
      id: 23,
     img: "https://img.icons8.com/external-beshi-color-kerismaker/100/external-Urology-medical-service-beshi-color-kerismaker.png",
      name: "Urology Surgery",
      shortDesc: "Surgical care for urinary and male reproductive systems.",
      desc: "Urology Surgery treats disorders of the urinary tract and male reproductive organs through advanced surgical methods.",
      longDesc: "Focuses on the surgical management of conditions such as kidney stones, prostate enlargement, bladder tumors, urinary incontinence, and male infertility. Urologists perform procedures ranging from minimally invasive endoscopy to complex reconstructive and laparoscopic surgeries, aiming to restore urinary function and improve patient quality of life."
},
{
   id: 24,
    img: "https://img.icons8.com/color/100/spleen.png",
     name: "Vascular Surgery",
     shortDesc: "Surgical treatment of blood vessel disorders.",
     desc: "Vascular Surgery focuses on diseases of the arteries, veins, and lymphatic system requiring surgical intervention.",
     longDesc: "Specializes in treating conditions such as peripheral artery disease, varicose veins, aneurysms, and carotid artery disease. Procedures include both open and minimally invasive techniques like angioplasty, stenting, and bypass surgery to restore healthy blood flow and prevent complications such as stroke or limb loss."
},
];
export const aboutUsData = [
    {
      heading: "Trust",
      desc: "We build confidence through honesty, transparency, and a no-hidden-cost guarantee—your peace of mind is our priority.",
      image: "../../public/Images/Integrity.png",
    },
    {
      heading: "Excellence",
      desc: "We pursue the highest standards, partnering with top-tier medical professionals and facilities to ensure you receive the best care available.",
      image: "../../public/Images/Excellence.png",
    },
    {
      heading: "Empathy",
      desc: "We value compassion and understanding, reflecting the human side of medicine through quotes that connect with the emotions and experiences of our users.",
      image: "../../public/Images/Empathy.png",
    },
    {
      heading: "Innovation",
      desc: "We embrace cutting-edge solutions to simplify medical travel, making it accessible, efficient, and tailored to your needs.",
      image: "../../public/Images/innovation.png",
    },
  ];
  export const whyChooseUsData = [
    {
      heading: "24x7 Dedicated Support",
      desc: "A caring team is always by your side, ready to assist anytime, day or night, throughout your journey right from the start of planning.",
      image:"../../public/Images/24-7bg.png"
    },
    {
      heading: "No Hidden Cost Guarantee",
      desc: "Know exactly what you're paying for with clear, upfront pricing—no surprises, just honest answers.",
       image:"../../public/Images/money.png"
    },
    {
      heading: "Opinions Until You're Satisfied",
      desc: "We help you get the expert medical opinions and options until you feel confident in your treatment choices, NO COMPROMISES on your health!",
       image:"../../public/Images/feedback.png"
    },
    {
      heading: "Personalized Travel Planning",
      desc: "Every detail of your trip is tailored to your needs, ensuring comfort and peace of mind from start to finish. As many alterations you want or as much involvement you want in planning",
       image:"../../public/Images/calendar.png"
    },
  ];

export const doctors = [
    {
        id: 1,
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        image: "/Images/Doctors_design-removebg.png",
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
        experience: "20 Years ",
        department: "Orthopaedic Surgeon",
        desc: "Dr. Sanjay Gupta is a gold medallist in MS orthopaedics and performed over 5000 successful joint replacement surgeries. He is presently working as an associate director and HOD in the department of joint replacement and orthopaedics at Jaypee hospital, Noida.",
        detail: {
            hospital: "Jaypee Hospital, Noida - India",
            experience: "20 Years ",
            department: "Orthopaedic Surgeon",
            city: "Noida"
        }
    },
    {
        id: 12,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr_-Abhideep-Chaudhary.jpg",
        name: "DR ABHIDEEP CHAUDHARY",
        hospital: "Blk Hospital, New Delhi - India",
        experience: "16 Years ",
        department: "Liver Transplant Surgeon",
        desc: "Dr. Abhideep Chaudhary is a renowned Liver Transplant Surgeon in India and working as a senior consultant and director of Liver Transplant Department at Jaypee Hospital, Noida, India.",
        detail: {
            hospital: "Blk Hospital, New Delhi - India",
            experience: "16 Years ",
            department: "Liver Transplant Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 13,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Harit_Chaturvedi_new_0.jpg",
        name: "DR HARIT CHATURVEDI",
        hospital: "Max Hospital, New Delhi - India",
        experience: "27 Years ",
        department: "Surgical Oncologist",
        desc: "Dr. Harit Chaturvedi is the best name in surgical oncology and presently working as a Chairman - Cancer Care, Director & Chief Consultant - Surgical Oncology at Max Hospitals Groups Hospital, New Delhi, India.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "27 Years ",
            department: "Surgical Oncologist",
            city: "New Delhi"
        }
    },
    {
        id: 14,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Sanjay_gupta-Liver.jpg",
        name: "PROF DR SUBHASH GUPTA",
        hospital: "Max Hospital, New Delhi - India",
        experience: "35 Years ",
        department: "Liver Transplant Surgeon",
        desc: "Prof (Dr) Subhash Gupta is a renowned Liver Transplant surgeon in India and presently working as a Chief of liver transplant/hepato-pancreatic-biliary surgeon and the Chairman of the Max Center.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "35 Years ",
            department: "Liver Transplant Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 15,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr_Anant_Kumar_max1.png",
        name: "DR ANANT KUMAR",
        hospital: "Max Hospital, New Delhi - India",
        experience: "30 Years ",
        department: "Urologist & Kidney Transplant Surgeon",
        desc: "Dr. Anant Kumar is one of the best Kidney transplant surgeons and presently working as a Chairman - Urology, Renal Transplant, Robotics(Max Saket Complex) and Uro-Oncology Max Hospital, Saket, in Delhi, India.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "30 Years ",
            department: "Urologist & Kidney Transplant Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 16,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr_Anurag_Krishna_Max1.jpg",
        name: "DR ANURAG KRISHNA",
        hospital: "Max Hospital, New Delhi - India",
        experience: "35 Years ",
        department: "Pediatric Surgeon & Urologist",
        desc: "Dr. Anurag Krishna is a renowned pediatric and urologist surgeon in India and presently working as Director - Paediatrics & Paediatric Surgery at Max Hospital, Saket, Delhi, India.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "35 Years ",
            department: "Pediatric Surgeon & Urologist",
            city: "New Delhi"
        }
    },
    {
        id: 17,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Pradeep_Chowbey_Max.jpg",
        name: "DR PRADEEP CHOWBEY",
        hospital: "Max Hospital, New Delhi - India",
        experience: "37 Years ",
        department: "GI & Bariatric Surgeon",
        desc: "Dr. Pradeep Chowbey is a world-renowned Bariatric Surgeon in India and presently working as an Executive Vice Chairman at a Max Institute of Minimal Access Centre, Max Healthcare.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "37 Years ",
            department: "GI & Bariatric Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 18,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr_Anil_Arora.JPG",
        name: "PROF DR ANIL ARORA",
        hospital: "Max Hospital, New Delhi - India",
        experience: "32 Years ",
        department: "Orthopaedic Surgeon",
        desc: "Dr. (Prof.) Anil Arora is a well-renowned orthopedic surgeon in India providing the ultimate in state-of-the-art quality orthopedic care and presently working as a Senior Director & Unit Head - Orthopaedic & Joint Replacement Center at Max Hospitals Group.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "32 Years ",
            department: "Orthopaedic Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 19,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr_shishta-nadda-bas.JPG",
        name: "DR SHISHTA NADDA BASU",
        hospital: "Max Hospital, New Delhi - India",
        experience: "40 Years ",
        department: "Gynecologist / Infertility specialist",
        desc: "Dr. Shishta Nadda Basu is the best doctor for Gynaecology and Obstetrics and presently working as a Senior Director & Head of Department at Max Super Speciality Hospital, Shalimar Bagh, New Delhi, India.",
        detail: {
            hospital: "Max Hospital, New Delhi - India",
            experience: "40 Years ",
            department: "Gynecologist / Infertility specialist",
            city: "New Delhi"
        }
    },
    {
        id: 20,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr_ashok_seth.jpg",
        name: "DR ASHOK SETH",
        hospital: "Fortis Escorts Heart Hospital, New Delhi - India",
        experience: "40 Years ",
        department: "Cardiologist",
        desc: "Dr. Ashok Seth is the most renowned cardiologist in India and presently working as a Chairman of Fortis Escorts Heart Institute, New Delhi, and Head, Cardiology Council of Fortis Group of Hospitals.",
        detail: {
            hospital: "Fortis Escorts Heart Hospital, New Delhi - India",
            experience: "40 Years ",
            department: "Cardiologist",
            city: "New Delhi"
        }
    },
    {
        id: 21,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/DR_YUGAL_K_MISHRA.PNG",
        name: "DR YUGAL K MISHRA",
        hospital: "Manipal Hospital, Dwarka - India",
        experience: "32 Years ",
        department: "Cardiothoracic & Vascular Surgeon",
        desc: "Dr. Yugal K Mishra is one of the renowned Robotic & minimally invasive heart surgeons in Asia and presently working as a Director, Department of Cardiovascular Surgery at Fortis Escorts Heart Institute & Research Centre, Okhla Road, New Delhi.",
        detail: {
            hospital: "Manipal Hospital, Dwarka - India",
            experience: "32 Years ",
            department: "Cardiothoracic & Vascular Surgeon",
            city: "Dwarka"
        }
    },
    {
        id: 22,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Vivek_Vij.jpg",
        name: "DR VIVEK VIJ",
        hospital: "Fortis Escorts Heart Hospital, New Delhi - India",
        experience: "18 Years ",
        department: "Liver Transplant Surgeon",
        desc: "Dr. Vivek Vij is one of the best liver transplant surgeons and presently working as Director of Liver Transplant and GI surgery department at Fortis Health Care, New Delhi, India.",
        detail: {
            hospital: "Fortis Escorts Heart Hospital, New Delhi - India",
            experience: "18 Years ",
            department: "Liver Transplant Surgeon",
            city: "New Delhi"
        }
    },
    {
        id: 23,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Ashok_Rajgopal.jpg",
        name: "DR ASHOK RAJGOPAL",
        hospital: "Fortis Hospital, Gurugram - India",
        experience: "30 Years ",
        department: "Orthopaedic Surgeon",
        desc: "Dr. Ashok Rajgopal is a renowned orthopaedic surgeon in India and presently working as Director & Chairman of Fortis Bone & Joint Institute Executive at Fortis Hospitals Groups.",
        detail: {
            hospital: "Fortis Hospital, Gurugram - India",
            experience: "30 Years ",
            department: "Orthopaedic Surgeon",
            city: "Gurugram"
        }
    },
    {
        id: 24,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/Dr__Sheshir_seth.png",
        name: "DR SHISHIR SETH",
        hospital: "Apollo Hospital, New Delhi - India",
        experience: "13 Years ",
        department: "Clinical Hematologist & BMT",
        desc: "Dr. Shishir Seth is one of the best Haematologists in India and presently working as a Senior Consultant in Hemato-Oncology and Bone Marrow Transplant at the Apollo Hospitals, New Delhi.",
        detail: {
            hospital: "Apollo Hospital, New Delhi - India",
            experience: "13 Years ",
            department: "Clinical Hematologist & BMT",
            city: "New Delhi"
        }
    },
    {
        id: 25,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr-s-m-shuaib-zaidi.jpg",
        name: "DR S M SHUAIB ZAIDI",
        hospital: "Apollo Hospital, New Delhi - India",
        experience: "18 Years ",
        department: "Surgical Oncologist",
        desc: "Dr. Shuaib Zaidi is a well-known surgical oncologist in India and presently working as a Senior Consultant at Indraprastha Apollo Hospital in New Delhi.",
        detail: {
            hospital: "Apollo Hospital, New Delhi - India",
            experience: "18 Years ",
            department: "Surgical Oncologist",
            city: "New Delhi"
        }
    },
    {
        id: 26,
        image: "https://peacemedicaltourism.com/assets/uploads/doctors/dr-sandeep-attawar.jpg",
        name: "DR SANDEEP ATTAWAR",
        hospital: "Gleneagles Global Hospital, Tamil Nadu - India",
        experience: "22 Years ",
        department: "Cardiothoracic & Vascular Surgeon",
        desc: "Dr. Sandeep Attawar is one of India’s foremost cardiothoracic surgeons and presently working as Chair & Program Director, Cardiac Surgery and Thoracic organ transplantation at Parkway-Global Hospitals, India.",
        detail: {
            hospital: "Gleneagles Global Hospital, Tamil Nadu - India",
            experience: "22 Years ",
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
      },
      shortName: "APOLLO HOSPITAL IN DEL..."
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
      },
      shortName: "ARTEMIS HOSPITAL"
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
      },
      shortName: "BLK HOSPITAL"
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
      },
      shortName: "FORTIS ESCORTS HEART..."
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
      },
      shortName: "FORTIS HOSPITAL"
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
      },
      shortName: "JAYPEE HOSPITAL"
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
      },
      shortName: "MAX HOSPITAL"
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
      },
      shortName: "SHARP SIGHT CENTRE"
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
      },
      shortName: "FOCUZ AYURVEDA HOS..."
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
      },
      shortName: "MANIPAL HOSPITAL"
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
      },
      shortName: "PSRI HOSPITAL"
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
      },
      shortName: "AMRITA HOSPITAL"
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
      },
      shortName: "ART Fertility Clinic..."
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
      },
      shortName: "MEDANTA HOSPITAL"
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
      },
      shortName: "AMRI HOSPITAL"
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
      },
      shortName: "ASIAN HOSPITAL IN FAR..."
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
      },
      shortName: "GLENEAGLES GLOBAL HO..."
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
      },
      shortName: "COLUMBIA ASIA HOS..."
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
      },
      shortName: "ASTER CMI HOSPITAL"
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
      },
      shortName: "HCG CANCER CENTER"
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
      },
      shortName: "KOKILABEN DHIRUBH..."
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
      },
      shortName: "YATHARTH HOSPITAL"
    },
    {
      id: 23,
      name: "Amrita Hospital Faridabad",
      address: "India, Faridabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F2lBWoNvJfg3Qw89TkaZsB4p31735371067564.jpg&w=640&q=75",
      desc: "A renowned hospital in Faridabad.",
      longDesc: "This hospital in Faridabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Faridabad"
      },
      shortName: "Amrita Hospital Faridabad"
    },
    {
      id: 24,
      name: "Yashoda Hospitals Hitec City",
      address: "India, Hyderabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FY5dWnrYdKkkUwjiZYq3aMM0h1740634828484.jpg&w=640&q=75",
      desc: "A renowned hospital in Hyderabad.",
      longDesc: "This hospital in Hyderabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Hyderabad"
      },
      shortName: "Yashoda Hospitals Hitec City"
    },
    {
      id: 25,
      name: "D.Y Patil Hospital",
      address: "India, Pune",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F65717051282261627576.jpg&w=640&q=75",
      desc: "A renowned hospital in Pune.",
      longDesc: "This hospital in Pune is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Pune"
      },
      shortName: "D.Y Patil Hospital"
    },
    {
      id: 26,
      name: "Ayu Health Hospitals",
      address: "India, Bengaluru",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1672289053437.png&w=640&q=75",
      desc: "A renowned hospital in Bengaluru.",
      longDesc: "This hospital in Bengaluru is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Bengaluru"
      },
      shortName: "Ayu Health Hospitals"
    },
    {
      id: 27,
      name: "SevenHills Hospital",
      address: "India, Mumbai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FUHiArdl39p5M8nMPz3O1xOlN1732873962567.jpg&w=640&q=75",
      desc: "A renowned hospital in Mumbai.",
      longDesc: "This hospital in Mumbai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Mumbai"
      },
      shortName: "SevenHills Hospital"
    },
    {
      id: 28,
      name: "Medanta - The Medicity",
      address: "India, Gurgaon",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2Fy7asH2e2BWTDTrJYrwk8Lk0o1732171241320.jpg&w=640&q=75",
      desc: "A renowned hospital in Gurgaon.",
      longDesc: "This hospital in Gurgaon is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Gurgaon"
      },
      shortName: "Medanta - The Medicity"
    },
    {
      id: 29,
      name: "AMRI Hospitals",
      address: "India, Kolkata",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F97717054924003122394.jpg&w=640&q=75",
      desc: "A renowned hospital in Kolkata.",
      longDesc: "This hospital in Kolkata is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Kolkata"
      },
      shortName: "AMRI Hospitals"
    },
    {
      id: 30,
      name: "Moolchand Hospital, Delhi",
      address: "India, New Delhi",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FDs5yrHiHhjHxcZmydZTXhmkB1733203942565.jpg&w=640&q=75",
      desc: "A renowned hospital in New Delhi.",
      longDesc: "This hospital in New Delhi is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "New Delhi"
      },
      shortName: "Moolchand Hospital, Delhi"
    },
    {
      id: 31,
      name: "MIOT International Hospital, Chennai",
      address: "India, Chennai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1665209336523.jpg&w=640&q=75",
      desc: "A renowned hospital in Chennai.",
      longDesc: "This hospital in Chennai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Chennai"
      },
      shortName: "MIOT International Hospital, Chennai"
    },
    {
      id: 32,
      name: "KIMS, Secunderabad",
      address: "India, Secunderabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2Fw9J55IOIX5lOvs9wHIvwfDOq1732603250564.jpg&w=640&q=75",
      desc: "A renowned hospital in Secunderabad.",
      longDesc: "This hospital in Secunderabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Secunderabad"
      },
      shortName: "KIMS, Secunderabad"
    },
    {
      id: 33,
      name: "Apollo Spectra",
      address: "India, Hyderabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F341726061393.jpg&w=640&q=75",
      desc: "A renowned hospital in Hyderabad.",
      longDesc: "This hospital in Hyderabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Hyderabad"
      },
      shortName: "Apollo Spectra"
    },
    {
      id: 34,
      name: "Gleneagles Global Health City, Chennai",
      address: "India, Chennai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F291726061391.jpg&w=640&q=75",
      desc: "A renowned hospital in Chennai.",
      longDesc: "This hospital in Chennai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Chennai"
      },
      shortName: "Gleneagles Global Health City, Chennai"
    },
    {
      id: 35,
      name: "Fortis Memorial Research Institute, Gurgaon",
      address: "India, Gurgaon",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F075kQDQTPiwRO4TgYU1WrQuX1735036004637.jpg&w=640&q=75",
      desc: "A renowned hospital in Gurgaon.",
      longDesc: "This hospital in Gurgaon is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Gurgaon"
      },
      shortName: "Fortis Memorial Research Institute, Gurgaon"
    },
    {
      id: 36,
      name: "Wockhardt Hospitals",
      address: "India, Mumbai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2Fs8mFrTs208aOxHKxhidDY6gP1740648763734.jpg&w=640&q=75",
      desc: "A renowned hospital in Mumbai.",
      longDesc: "This hospital in Mumbai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Mumbai"
      },
      shortName: "Wockhardt Hospitals"
    },
    {
      id: 37,
      name: "Kokilaben Dhirubhai Ambani Hospital",
      address: "India, Mumbai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FbuLLE0icMSKjuScsXuPgXjlZ1734770128655.jpg&w=640&q=75",
      desc: "A renowned hospital in Mumbai.",
      longDesc: "This hospital in Mumbai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Mumbai"
      },
      shortName: "Kokilaben Dhirubhai Ambani Hospital"
    },
    {
      id: 38,
      name: "Yashoda Hospitals – Secunderabad",
      address: "India, Hyderabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FPCFbnLxc856mCuwIvdmyhA071740564100099.jpg&w=640&q=75",
      desc: "A renowned hospital in Hyderabad.",
      longDesc: "This hospital in Hyderabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Hyderabad"
      },
      shortName: "Yashoda Hospitals – Secunderabad"
    },
    {
      id: 39,
      name: "Indraprastha Apollo Hospital",
      address: "India, New Delhi",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FL1zjxkKrENMommPDNowCUCmJ1732001845397.jpg&w=640&q=75",
      desc: "A renowned hospital in New Delhi.",
      longDesc: "This hospital in New Delhi is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "New Delhi"
      },
      shortName: "Indraprastha Apollo Hospital"
    },
    {
      id: 40,
      name: "Apollo Gleneagles Hospitals, Kolkata",
      address: "India, Kolkata",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1608296539172.jpg&w=640&q=75",
      desc: "A renowned hospital in Kolkata.",
      longDesc: "This hospital in Kolkata is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Kolkata"
      },
      shortName: "Apollo Gleneagles Hospitals, Kolkata"
    },
    {
      id: 41,
      name: "Aster Medcity, Kochi",
      address: "India, Ernakulam",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F168059214716.png&w=640&q=75",
      desc: "A renowned hospital in Ernakulam.",
      longDesc: "This hospital in Ernakulam is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Ernakulam"
      },
      shortName: "Aster Medcity, Kochi"
    },
    {
      id: 42,
      name: "Manipal Hospital, Bangalore",
      address: "India, Bangalore",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F3iTlrktPxZ5CYpK21j3A144C1732514755614.jpg&w=640&q=75",
      desc: "A renowned hospital in Bangalore.",
      longDesc: "This hospital in Bangalore is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Bangalore"
      },
      shortName: "Manipal Hospital, Bangalore"
    },
    {
      id: 43,
      name: "BLK-Max Super Speciality Hospital, New Delhi",
      address: "India, New Delhi",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FsGyDUdJgGEOO7IkjlZdEpgg51734672772073.jpg&w=640&q=75",
      desc: "A renowned hospital in New Delhi.",
      longDesc: "This hospital in New Delhi is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "New Delhi"
      },
      shortName: "BLK-Max Super Speciality Hospital, New Delhi"
    },
    {
      id: 44,
      name: "Billroth Hospitals",
      address: "India, Chennai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F93117054923606654806.jpg&w=640&q=75",
      desc: "A renowned hospital in Chennai.",
      longDesc: "This hospital in Chennai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Chennai"
      },
      shortName: "Billroth Hospitals"
    },
    {
      id: 45,
      name: "St Stephens Hospital",
      address: "India, New Delhi",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F4SlDlpH7CfiwT6gihcQqU56p1733292425901.jpg&w=640&q=75",
      desc: "A renowned hospital in New Delhi.",
      longDesc: "This hospital in New Delhi is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "New Delhi"
      },
      shortName: "St Stephens Hospital"
    },
    {
      id: 46,
      name: "Zydus Hospital",
      address: "India, Ahmedabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F91317054923413727696.jpg&w=640&q=75",
      desc: "A renowned hospital in Ahmedabad.",
      longDesc: "This hospital in Ahmedabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Ahmedabad"
      },
      shortName: "Zydus Hospital"
    },
    {
      id: 47,
      name: "Marengo Asia Hospital, Faridabad",
      address: "India, Faridabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FskMgIFapr3m2yhUBYgYSOuog1735378691983.jpg&w=640&q=75",
      desc: "A renowned hospital in Faridabad.",
      longDesc: "This hospital in Faridabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Faridabad"
      },
      shortName: "Marengo Asia Hospital, Faridabad"
    },
    {
      id: 48,
      name: "Apollo Hospital, Hyderabad",
      address: "India, Hyderabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1602742773673.jpg&w=640&q=75",
      desc: "A renowned hospital in Hyderabad.",
      longDesc: "This hospital in Hyderabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Hyderabad"
      },
      shortName: "Apollo Hospital, Hyderabad"
    },
    {
      id: 49,
      name: "Max Healthcare Saket",
      address: "India, New Delhi",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F161622037398.jpg&w=640&q=75",
      desc: "A renowned hospital in New Delhi.",
      longDesc: "This hospital in New Delhi is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "New Delhi"
      },
      shortName: "Max Healthcare Saket"
    },
    {
      id: 50,
      name: "Max Super Speciality Hospital, Noida",
      address: "India, Noida",
      image: "https://www.maxhealthcare.in/hospital-network/max-super-speciality-hospital-noida",
      desc: "A renowned hospital in Noida.",
      longDesc: "This hospital in Noida is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Noida"
      },
      shortName: "Max Super Speciality Hospital, Noida"
    },
    {
      id: 51,
      name: "Yashoda Hospitals – Malakpet, Hyderabad",
      address: "India, Kalwakurthy",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FsWr0cBW2AQNxPoqI3KgWZlZk1740563067938.jpg&w=640&q=75",
      desc: "A renowned hospital in Kalwakurthy.",
      longDesc: "This hospital in Kalwakurthy is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Kalwakurthy"
      },
      shortName: "Yashoda Hospitals – Malakpet, Hyderabad"
    },
    {
      id: 52,
      name: "Yatharth Hospital, Sector 110, Noida",
      address: "India, Greater Noida",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1713268257527.jpeg&w=640&q=75",
      desc: "A renowned hospital in Greater Noida.",
      longDesc: "This hospital in Greater Noida is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Greater Noida"
      },
      shortName: "Yatharth Hospital, Sector 110, Noida"
    },
    {
      id: 53,
      name: "Apollo Cancer Centres Chennai",
      address: "India, Chennai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F83217053814828784971.jpg&w=640&q=75",
      desc: "A renowned hospital in Chennai.",
      longDesc: "This hospital in Chennai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Chennai"
      },
      shortName: "Apollo Cancer Centres Chennai"
    },
    {
      id: 54,
      name: "Sunshine Hospitals",
      address: "India, Hyderabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F74917052199760331194.jpg&w=640&q=75",
      desc: "A renowned hospital in Hyderabad.",
      longDesc: "This hospital in Hyderabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Hyderabad"
      },
      shortName: "Sunshine Hospitals"
    },
    {
      id: 55,
      name: "Aster CMI hospital, Bangalore",
      address: "India, Bengaluru",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1695977889570.png&w=640&q=75",
      desc: "A renowned hospital in Bengaluru.",
      longDesc: "This hospital in Bengaluru is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Bengaluru"
      },
      shortName: "Aster CMI hospital, Bangalore"
    },
    {
      id: 56,
      name: "Naruvi Hospitals, Vellore",
      address: "India, Chennai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1687946534609.png&w=640&q=75",
      desc: "A renowned hospital in Chennai.",
      longDesc: "This hospital in Chennai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Chennai"
      },
      shortName: "Naruvi Hospitals, Vellore"
    },
    {
      id: 57,
      name: "Health Care Global- The Speciaist in Cancer Care",
      address: "India, Almatti Sitimani",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1655444128367.jpg&w=640&q=75",
      desc: "A renowned hospital in Almatti Sitimani.",
      longDesc: "This hospital in Almatti Sitimani is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Almatti Sitimani"
      },
      shortName: "Health Care Global- The Speciaist in Cancer Care"
    },
    {
      id: 58,
      name: "Apollo Hospital, Mumbai",
      address: "India, Mumbai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1602748075362.jpg&w=640&q=75",
      desc: "A renowned hospital in Mumbai.",
      longDesc: "This hospital in Mumbai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Mumbai"
      },
      shortName: "Apollo Hospital, Mumbai"
    },
    {
      id: 59,
      name: "VPS Lakeshore Hospital, Kerala",
      address: "India, Kochi",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FTPwk9qs8qEIu12U4N3VXeOnm1735800750751.jpg&w=640&q=75",
      desc: "A renowned hospital in Kochi.",
      longDesc: "This hospital in Kochi is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Kochi"
      },
      shortName: "VPS Lakeshore Hospital, Kerala"
    },
    {
      id: 60,
      name: "Yatharth Super Speciality Hospitals, Greater Noida West",
      address: "India, Greater Noida",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FgFA1qQhwgwZ395A9owTZExiX1719901092308.jpeg&w=640&q=75",
      desc: "A renowned hospital in Greater Noida.",
      longDesc: "This hospital in Greater Noida is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Greater Noida"
      },
      shortName: "Yatharth Super Speciality Hospitals, Greater Noida West"
    },
    {
      id: 61,
      name: "BGS Gleneagles Global Hospital",
      address: "India, Bengaluru",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F94617054923743929758.jpg&w=640&q=75",
      desc: "A renowned hospital in Bengaluru.",
      longDesc: "This hospital in Bengaluru is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Bengaluru"
      },
      shortName: "BGS Gleneagles Global Hospital"
    },
    {
      id: 62,
      name: "Dr. Rela Institute and Medical Centre",
      address: "India, Chennai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1616763221174.jpg&w=640&q=75",
      desc: "A renowned hospital in Chennai.",
      longDesc: "This hospital in Chennai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Chennai"
      },
      shortName: "Dr. Rela Institute and Medical Centre"
    },
    {
      id: 63,
      name: "CARE Hospitals, Banjara Hills, Hyderabad",
      address: "India, Hyderabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FdxvoWRm2X8tic1rcbKR2Sjm21734764109021.jpg&w=640&q=75",
      desc: "A renowned hospital in Hyderabad.",
      longDesc: "This hospital in Hyderabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Hyderabad"
      },
      shortName: "CARE Hospitals, Banjara Hills, Hyderabad"
    },
    {
      id: 64,
      name: "Yashoda Hospitals Somajiguda",
      address: "India, Hyderabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FSJYEuZ1oD4FiDUt4SA4jQn0K1740634349393.jpg&w=640&q=75",
      desc: "A renowned hospital in Hyderabad.",
      longDesc: "This hospital in Hyderabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Hyderabad"
      },
      shortName: "Yashoda Hospitals Somajiguda"
    },
    {
      id: 65,
      name: "MGM Healthcare, Adyar",
      address: "India, Adyar",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2Fp7AWmLLn5HSqUTv8Sb0DCap51719386890390.jpg&w=640&q=75",
      desc: "A renowned hospital in Adyar.",
      longDesc: "This hospital in Adyar is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Adyar"
      },
      shortName: "MGM Healthcare, Adyar"
    },
    {
      id: 66,
      name: "SS Sparsh Hospital",
      address: "India, Bengaluru",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F104417054924875734353.jpg&w=640&q=75",
      desc: "A renowned hospital in Bengaluru.",
      longDesc: "This hospital in Bengaluru is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Bengaluru"
      },
      shortName: "SS Sparsh Hospital"
    },
    {
      id: 67,
      name: "Apollo Hospital, Ahmedabad",
      address: "India, Ahmedabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F89917053815269941483.jpg&w=640&q=75",
      desc: "A renowned hospital in Ahmedabad.",
      longDesc: "This hospital in Ahmedabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Ahmedabad"
      },
      shortName: "Apollo Hospital, Ahmedabad"
    },
    {
      id: 68,
      name: "MGM Healthcare",
      address: "India, Chennai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F87217053815069595878.jpg&w=640&q=75",
      desc: "A renowned hospital in Chennai.",
      longDesc: "This hospital in Chennai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Chennai"
      },
      shortName: "MGM Healthcare"
    },
    {
      id: 69,
      name: "Metro Hospital, Faridabad",
      address: "India, Faridabad",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1675332780618.png&w=640&q=75",
      desc: "A renowned hospital in Faridabad.",
      longDesc: "This hospital in Faridabad is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Faridabad"
      },
      shortName: "Metro Hospital, Faridabad"
    },
    {
      id: 70,
      name: "Yatharth Super Speciality Hospital, Greater Noida",
      address: "India, Greater Noida",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F1642073335372.jpg&w=640&q=75",
      desc: "A renowned hospital in Greater Noida.",
      longDesc: "This hospital in Greater Noida is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Greater Noida"
      },
      shortName: "Yatharth Super Speciality Hospital, Greater Noida"
    },
    {
      id: 71,
      name: "MGM Hospital, Chennai",
      address: "India, Chennai",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F161284725767.jpg&w=640&q=75",
      desc: "A renowned hospital in Chennai.",
      longDesc: "This hospital in Chennai is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Chennai"
      },
      shortName: "MGM Hospital, Chennai"
    },
    {
      id: 72,
      name: "Max Super Speciality Hospital, Patparganj",
      address: "India, New Delhi",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2F171726061388.jpg&w=640&q=75",
      desc: "A renowned hospital in New Delhi.",
      longDesc: "This hospital in New Delhi is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "New Delhi"
      },
      shortName: "Max Super Speciality Hospital, Patparganj"
    },
    {
      id: 73,
      name: "Artemis Hospital",
      address: "India, Delhi / NCR",
      image: "https://www.healthtrip.com/_next/image?url=https%3A%2F%2Fd3fzwscyjtgllx.cloudfront.net%2Fhospitals%2Fimages%2FsBR3AelAaokog7Y9S4C0qT7A1734759182843.jpg&w=640&q=75",
      desc: "A renowned hospital in Delhi / NCR.",
      longDesc: "This hospital in Delhi / NCR is known for providing quality healthcare services.",
      detail: {
        beds: null,
        established: null,
        country: "India",
        city: "Delhi / NCR"
      },
      shortName: "Artemis Hospital"
    },
  ];
