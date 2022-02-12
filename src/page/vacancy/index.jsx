import Hero from '../../components/hero2'
import {heroData7} from '../../components/heroData'
import VacancyImg1 from '../../assets/images/vacancy1.jpg'
import VacancyImg2 from '../../assets/images/vacancy2.jpg'
import VacancyImg3 from '../../assets/images/vacancy3.jpg'
import VacancyImg4 from '../../assets/images/vacancy4.jpg'
import './style.scss'

const Vacancy = () => {
  return (
    <div className="vacancy">
        <Hero data={heroData7} index={1}/>
        <div className="vacancy__inner container">
            <div className="vacancy-cards">
                <a href="#" className="vacancy-card">
                    <img src={VacancyImg1} alt="vacancy-image" className="vacancy-card__img" />
                </a>
                <a href="#" className="vacancy-card">
                    <img src={VacancyImg2} alt="vacancy-image" className="vacancy-card__img" />
                </a>
                <a href="#" className="vacancy-card">
                    <img src={VacancyImg3} alt="vacancy-image" className="vacancy-card__img" />
                </a>
                <a href="#" className="vacancy-card">
                    <img src={VacancyImg4} alt="vacancy-image" className="vacancy-card__img" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Vacancy