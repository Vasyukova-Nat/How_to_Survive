import "./CardsAboutUs.css";
// "/phones.png"


const employees = [
  {
    id: 1,
    name: 'Болотов Илья Дмитриевич',
    position: 'Android',
    image: 'Ил.jpg'
  },
  {
    id: 2,
    name: 'Васюкова Наталья Павловна',
    position: 'Frontend',
    image: 'фф.jpg'
  },
  {
    id: 3,
    name: 'Морозова Ольга Андреевна',
    position: 'Frontend',
    image: 'image3m.jpg'
  },
  {
    id: 4,
    name: 'Ситникова Дарья Евгеньевна',
    position: 'UI/UX дизайн',
    image: 'image3m.jpg'
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