import Projects from './components/projects'
import Opinion from './components/opinion'
import Regions from './components/regions'
import News from './components/news'
import Laboratory from './components/laboratory'
import Questions from './components/questions'

const Home = () => {
  return (
    <div>
        <News />
        <Laboratory name="Laboratory" />
        <Projects/>
        <Opinion/>
        <Regions/>
        <Questions />
    </div>
  )
}

export default Home
