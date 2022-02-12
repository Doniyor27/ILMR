import Hero from "../../components/hero2";
import { heroData7 } from "../../components/heroData";
import VacancyImg1 from "../../assets/images/vacancy1.jpg";
import VacancyImg2 from "../../assets/images/vacancy2.jpg";
import VacancyImg3 from "../../assets/images/vacancy3.jpg";
import VacancyImg4 from "../../assets/images/vacancy4.jpg";
import "./style.scss";
import { Link } from "react-router-dom";
const Vacancy = () => {
  const vacancyData = [
    {
      id: 1,
      img: VacancyImg1,
    },
    {
      id: 2,
      img: VacancyImg2,
    },
    {
      id: 3,
      img: VacancyImg3,
    },
    {
      id: 4,
      img: VacancyImg4,
    },
    {
      id: 5,
      img: VacancyImg1,
    },
    {
      id: 6,
      img: VacancyImg2,
    },
    {
      id: 7,
      img: VacancyImg3,
    },
    {
      id: 8,
      img: VacancyImg4,
    },
  ];
  return (
    <div className="vacancy">
      <Hero data={heroData7} index={1} />
      <div className="vacancy__inner container">
        <div className="vacancy-cards">
          {vacancyData.map((item, id) => (
            <Link className="vacancy__img" key={id}>
              <img src={item.img} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
