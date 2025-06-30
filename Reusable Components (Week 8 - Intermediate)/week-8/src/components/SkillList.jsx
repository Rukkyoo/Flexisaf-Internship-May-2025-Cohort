function SkillList() {
  const skills = ['React', 'Tailwind CSS', 'Firebase', 'Next.js'];

  return (
    <ul className="skills">
      {skills.map((skill, i) => (
        <li key={i}>✅ {skill}</li>
      ))}
    </ul>
  );
}

export default SkillList;
