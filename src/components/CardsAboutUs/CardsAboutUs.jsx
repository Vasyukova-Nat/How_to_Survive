import "./CardsAboutUs.css";

const employees = [
  {
    id: 1,
    name: 'Болотов Илья Дмитриевич',
    position: 'Android-разработчик',
    image: 'Ильяm.jpg'
  },
  {
    id: 2,
    name: 'Васюкова Наталья Павловна',
    position: 'Frontend-разработчик',
    image: 'Натальяm.jpg'
  },
  {
    id: 3,
    name: 'Морозова Ольга Андреевна',
    position: 'Frontend-разработчик',
    image: 'Ольгаm.jpg'
  },
  {
    id: 4,
    name: 'Ситникова Дарья Евгеньевна',
    position: 'UI/UX дизайнер',
    image: 'Дарьяm.jpg'
  }
];

const AboutUs = () => {
  return (
    <div className="about-us">
      {employees.map(employee => (
        <div key={employee.id} className="employee-card">
          <img src={employee.image} alt="Employee" />
          <div className="employee-info">
            <h3>{employee.name}</h3>
            <p>{employee.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;