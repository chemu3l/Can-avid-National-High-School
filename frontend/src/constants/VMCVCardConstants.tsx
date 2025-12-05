const VMCVTitle = { 
    vision: "VISION",
    mission: "MISSION",
    coreValue: "CORE VALUES",
}
const VMCVDescription = {
    vision: "We dream of Filipinos who passionately love their country and whose competencies and values enable them to realize their full potential and contribute meaningfully in building the nation as a learner-centered public institution the department of education continuously improves it self to better serves its stakeholders.",
    mission: "To protect and promote the right of every Filipino to quality, equitable, culture-based and complete basic education where: Students learn in a child-friendly, gender-sensitive, safe and motivating environment. \n \nTeachers facility learning and constantly nurture every learner. Family community and other stakeholders are actively engaged. They share responsibility for developing life-long learners. Administrators and staff as steward of the institution, ensure and enabling and supportive environment for effective learning happen.",
    coreValues: [
        "Maka-Diyos",
        "Maka-tao",
        "Makakalikasan",
        "Maka-bansa"
    ]
}
const VMCVList = [
  {
    title: VMCVTitle.vision,
    description: VMCVDescription.vision,
  },
  {
    title: VMCVTitle.mission,
    description: VMCVDescription.mission,
    preLine: true,
  },
  {
    title: VMCVTitle.coreValue,
    description: (
      <ul>
        {VMCVDescription.coreValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    ),
  },
];
export { VMCVTitle, VMCVDescription, VMCVList };