import LeaderCard from '../developmentSkills/components'
import Hero from '../../components/hero2'
import {heroData12} from '../../components/heroData'

import './style.scss'

const Projects = () => {

    const leaders = [
        {
            fullname: "Matrasulov Dilmurod Urunovich",
            img: "https://wallpaperaccess.com/full/1109693.jpg",
            position: "Mehnat bozori, aholi bandligi, mehnat migratsiyasi va demografiya tadqiqotlari boʼyicha loyiha loyiha rahbari"
        },
        {
            fullname: "Matrasulov Dilmurod Urunovich",
            img: "https://static01.nyt.com/images/2020/11/09/arts/06depp-item/06depp-item-mediumSquareAt3X-v2.jpg",
            position: "Mehnat bozori, aholi bandligi, mehnat migratsiyasi va demografiya tadqiqotlari boʼyicha loyiha loyiha rahbari"
        },
        {
            fullname: "Matrasulov Dilmurod Urunovich",
            img: "https://hips.hearstapps.com/esq.h-cdn.co/assets/cm/15/07/54daf211e2cdf_-_tom-hardy-lhggxw-1.jpg?resize=480:*",
            position: "Mehnat bozori, aholi bandligi, mehnat migratsiyasi va demografiya tadqiqotlari boʼyicha loyiha loyiha rahbari"
        },
        {
            fullname: "Matrasulov Dilmurod Urunovich",
            img: "https://www.seekpng.com/png/full/442-4420102_will-smith-png-hd-quality-transparent-will-smith.png",
            position: "Mehnat bozori, aholi bandligi, mehnat migratsiyasi va demografiya tadqiqotlari boʼyicha loyiha loyiha rahbari"
        }
    ]

    const goal = {
        title : "Loyiha maqsadi",
        p : "Tarixga nazar tashlasak, Institut dastlab 1977 yilda SSSR Davlat mehnat va ijtimoiy masalalar qoʼmitasi Mehnat ilmiy-tadqiqot institutining Oʼzbekiston filiali sifatida tashkil etilib, mustaqillik yillarida va bugungi kunga qadar Oʼzbekiston Respublikasi Mehnat vazirligi huzuridagi mehnat va ijtimoiy masalalar, aholini ish bilan taʼminlash hamda mehnatni muhofaza qilish yoʼnalishidagi foliyatida salkam 45 yillik yoʼlni bosib oʼtdi.",
        p2 : "Sir emaski, soʼnggi besh yil davomida mamlakatimiz jahon hamjamiyati eʼtirofiga loyiq ulkan islohotlar markazi sifatida namoyon boʼlmoqda. Xususan, mamlakatimizda inson kapitalini toʼlaqonli rivojlantirish, oliy va professional taʼlimning sifatini oshirish, mehnat bozorining rivojlanishi tendentsiyalarini inobatga olgan holda, aholining keng qatlamlarini talab yuqori boʼlgan kasblarga oʼqitish hamda malakali kadrlarni tayyorlashning sifat jihatidan yangi tizimini joriy etish ustuvor vazifa sifatida qaralmoqda.",
        p3 : "Oʼzbekiston Respublikasi Prezidentining 2020 yil 31 dekabrdagi «Malakalarni baholash tizimini tubdan takomillashtirish va mehnat bozorini malakali kadrlar bilan taʼminlash chora-tadbirlari toʼgʼrisida»gi qarorida Bandlik va mehnat munosabatlari vazirligi huzuridagi Respublika bandlik va mehnat muhofazasi ilmiy markazini Bandlik va mehnat munosabatlari vazirligi huzuridagi Mehnat bozori tadqiqotlari instituti etib qayta tashkil etish va unga Kasbiy malaka va bilimlarni rivojlantirish boʼyicha Kengashning ishchi organi vazifasi yuklatilishi belgilandi.",
        p4 : "Tarixga nazar tashlasak, Institut dastlab 1977 yilda SSSR Davlat mehnat va ijtimoiy masalalar qoʼmitasi Mehnat ilmiy-tadqiqot institutining Oʼzbekiston filiali sifatida tashkil etilib, mustaqillik yillarida va bugungi kunga qadar Oʼzbekiston Respublikasi Mehnat vazirligi huzuridagi mehnat va ijtimoiy masalalar, aholini ish bilan taʼminlash hamda mehnatni muhofaza qilish yoʼnalishidagi foliyatida salkam 45 yillik yoʼlni bosib oʼtdi.",
        p5 : "Sir emaski, soʼnggi besh yil davomida mamlakatimiz jahon hamjamiyati eʼtirofiga loyiq ulkan islohotlar markazi sifatida namoyon boʼlmoqda. Xususan, mamlakatimizda inson kapitalini toʼlaqonli rivojlantirish, oliy va professional taʼlimning sifatini oshirish, mehnat bozorining rivojlanishi tendentsiyalarini inobatga olgan holda, aholining keng qatlamlarini talab yuqori boʼlgan kasblarga oʼqitish hamda malakali kadrlarni tayyorlashning sifat jihatidan yangi tizimini joriy etish ustuvor vazifa sifatida qaralmoqda.",
        p6 : "Oʼzbekiston Respublikasi Prezidentining 2020 yil 31 dekabrdagi «Malakalarni baholash tizimini tubdan takomillashtirish va mehnat bozorini malakali kadrlar bilan taʼminlash chora-tadbirlari toʼgʼrisida»gi qarorida Bandlik va mehnat munosabatlari vazirligi huzuridagi Respublika bandlik va mehnat muhofazasi ilmiy markazini Bandlik va mehnat munosabatlari vazirligi huzuridagi Mehnat bozori tadqiqotlari instituti etib qayta tashkil etish va unga Kasbiy malaka va bilimlarni rivojlantirish boʼyicha Kengashning ishchi organi vazifasi yuklatilishi belgilandi."
    }

  return (
    <div className="project-goal">
        <Hero data={heroData12} index={2}/>
        <div className="project-goal__inner container">
            <div className="projects__leaders">
                {
                    leaders.map((item, key) => (
                        <LeaderCard key={key} url={item.img} fullname={item.fullname} position={item.position}/>
                    ))
                }
            </div>

            <div className="project-goal__bottom">
                <div className="goal">
                    <h2 className="goal__title">{goal.title}</h2>
                    <p className="goal__text">{goal.p}</p>
                    <p className="goal__text">{goal.p2}</p>
                    <p className="goal__text">{goal.p3}</p>
                    <p className="goal__text">{goal.p4}</p>
                    <p className="goal__text">{goal.p5}</p>
                    <p className="goal__text">{goal.p6}</p>
                </div>
                <div className="projects__news">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects