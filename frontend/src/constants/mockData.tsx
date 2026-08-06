import { mockData1, credentitials } from "@/assets/images/index";
import type { ContentItem } from "@/types/contentItem.interface";

const accreditationData = [
  {
    id: 1,
    image: credentitials,
    title: "Academic Excellence",
    description: "LEVEL III REACCREDITED STATUS - 2017",
  },
  {
    id: 2,
    image: credentitials,
    title: "Quality Education",
    description: "LEVEL III REACCREDITED STATUS - 2018",
  },
  {
    id: 3,
    image: credentitials,
    title: "Innovative Curriculum",
    description: "LEVEL III REACCREDITED STATUS - 2019",
  },
  {
    id: 4,
    image: credentitials,
    title: "Global Recognition",
    description: "LEVEL III REACCREDITED STATUS - 2020",
  },
  {
    id: 5,
    image: credentitials,
    title: "Sports Achievements",
    description: "LEVEL III REACCREDITED STATUS - 2021",
  },
  {
    id: 6,
    image: credentitials,
    title: "STEM Focus",
    description: "LEVEL III REACCREDITED STATUS - 2022",
  },
  {
    id: 7,
    image: credentitials,
    title: "Community Service",
    description: "LEVEL III REACCREDITED STATUS - 2023",
  },
  {
    id: 8,
    image: credentitials,
    title: "Arts & Culture",
    description: "LEVEL III REACCREDITED STATUS - 2024",
  },
];

const homepageSubtitle =
  "Empowering students of Can-avid National High School to achieve excellence through quality education, innovation, and character development, guided by a commitment to holistic growth, strong values, and the pursuit of academic and personal success.";
const aboutuspageSubtitle =
  "Can-avid National High School began in 2002 and has grown from overcoming early challenges to becoming a strong, community-centered institution. Through improved teaching, active stakeholder support, and a nurturing environment, CNHS expanded its programs, strengthened its facilities, and earned recognitions like SBM Level III and Outstanding Senior High School Implementer—showing its continued commitment to quality education and student growth.";

const department = [
  {
    title: "DepEd Secretary",
    name: "Sarah Duterte"
  },
  {
    title: "Regional Director",
    name: "Dr. Evelyn R. Fetalvero"
  },
  {
    title: "Schools Division Superintendent",
    name: "Dr. Maria Luz A. Bermudez"
  },
  {
    title: "Assistant Schools Division Superintendent",
    name: "Dr. Jose R. Santos"
  },
  {
    title: "Education Program Supervisor",
    name: "Ms. Ana Marie L. Cruz"
  },
  {
    title: "Public Schools District Supervisor",
    name: "Mr. Roberto C. Garcia"
  },
  {
    title: "Secondary School Principal IV",
    name: "Dr. Elena M. Reyes"
  },
  {
    title: "Assistant School Principal",
    name: "Mr. Michael D. Tan"
  },
  {
    title: "Head Teacher III - Mathematics Department",
    name: "Ms. Liza S. Mendoza"
  },
  {
    title: "Head Teacher III - Science Department",
    name: "Dr. Carlo P. Lim"
  },
  {
    title: "Head Teacher III - English Department",
    name: "Ms. Rachel Anne V. Torres"
  },
  {
    title: "Head Teacher III - Filipino Department",
    name: "Ms. Jennifer R. Aquino"
  },
  {
    title: "Head Teacher III - Social Studies Department",
    name: "Mr. Mark Anthony B. Rivera"
  },
  {
    title: "Head Teacher I - Master Teacher Math",
    name: "Ms. Patricia B. Gomez"
  },
  {
    title: "Head Teacher I - Master Teacher Science",
    name: "Mr. James L. Fernandez"
  },
  {
    title: "Teacher III - Senior High Math",
    name: "Ms. Catherine T. Dela Cruz"
  },
  {
    title: "Teacher III - Senior High Science",
    name: "Mr. Ryan M. Salazar"
  },
  {
    title: "Teacher III - Senior High English",
    name: "Ms. Karen A. Morales"
  },
  {
    title: "Elementary School Principal",
    name: "Dr. Theresa V. Castillo"
  },
  {
    title: "Teacher III - Grade 6 Adviser",
    name: "Ms. Mary Grace O. Pineda"
  },
  {
    title: "Teacher III - Grade 5 Adviser",
    name: "Mr. John Paul R. Villanueva"
  },
  {
    title: "Teacher III - Grade 4 Adviser",
    name: "Ms. Sharon L. Ramos"
  },
  {
    title: "Administrative Officer V",
    name: "Ms. Elizabeth S. Navarro"
  },
  {
    title: "Undersecretary for Administration",
    name: "Hon. Atty. Revsee A. Escobedo"
  },
  {
    title: "Director IV - Bureau Director",
    name: "Dr. Filipina G. Duag"
  }
];


/* 
==================================
56 characters maximum
31 characters minimum
Title
============================
*/
const news: ContentItem[] = [
  {
    id: 1,
    title: "DepEd Launches New Digital Program for Schools DepEd 202",
    image: mockData1,
    date: "12/25/2025",
    description:
      "Can-Avid National High School proudly celebrated its Recognition Day honoring the outstanding achievements of its Senior High School students. Families, teachers, and guests gathered to recognize excellence in academics, leadership, and extracurricular activities.",
  },
  {
    id: 2,
    title: "DepEd Launches New Digital Program for Schools DepEd 202",
    image: mockData1,
    date: "12/20/2026",
    description:
      "Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar.",
  },
  {
    id: 3,
    title: "Nutrition Month Celebration 3",
    image: mockData1,
    date: "12/26/2025",
    description:
      "Students participated in various activities promoting healthy lifestyles, including poster-making, cooking demonstrations, and fitness challenges and fitness fitness fitness ttness.",
  },
    {
    id: 4,
    title: "Senior High School Recognition Day 4",
    image: mockData1,
    date: "12/28/2025",
    description:
      "Can-Avid National High School proudly celebrated its Recognition Day honoring the outstanding achievements of its Senior High School students. Families, teachers, and guests gathered to recognize excellence in academics, leadership, and extracurricular activities.",
  },
  {
    id: 5,
    title: "Enrollment Schedule Released 5",
    image: mockData1,
    date: "12/25/2023",
    description:
      "Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar.",
  },
    {
    id: 6,
    title: "Enrollment Schedule Released 6",
    image: mockData1,
    date: "12/25/2025",
    description:
      "Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar.",
  },
  {
    id: 7,
    title: "Enrollment Schedule Released 7",
    image: mockData1,
    date: "12/25/2022",
    description:
      "Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar.",
  },
    {
    id: 8,
    title: "Enrollment Schedule Released 8",
    image: mockData1,
    date: "12/25/2021",
    description:
      "Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar.",
  },
    {
    id: 9,
    title: "Enrollment Schedule Released 9",
    image: mockData1,
    date: "12/25/2023",
    description:
      "Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar.",
  },
    {
    id: 10,
    title: "Enrollment Schedule Released 10",
    image: mockData1,
    date: "12/25/2024",
    description:
      "Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar.",
  },
    {
    id: 11,
    title: "Enrollment Enrollment Releaseds",
    image: mockData1,
    date: "12/25/2026",
    description:
      "Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar. Lorem  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum. Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar. Lorem  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum. Enrollment for the upcoming school year officially begins next week. Students are encouraged to prepare all required documents before visiting the registrar. Lorem  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
  },

];

export { homepageSubtitle, aboutuspageSubtitle, accreditationData, department, news };
