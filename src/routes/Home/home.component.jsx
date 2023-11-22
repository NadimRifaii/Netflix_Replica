import Header2 from "../../components/Header2Components/Header2"
import InputButton from "../../components/InputButton/input-button.component.jsx"
import MovieInfo from '../../components/MovieInfo/movieInfo.component.jsx'
import QuestionsContainer from '../../components/QuestionsContainer/questions-container.component.jsx'
import DescriptionContainer from "../../components/descriptionContainer/description-container.component.jsx"
import Footer2 from "../../components/Footer2Components/Footer2.jsx"
const Home = () => {
  return (
    <div className="home-page">
      <Header2 />
      <MovieInfo />
      <DescriptionContainer />
      <QuestionsContainer />
      <InputButton />
      <Footer2 />
    </div>
  )
}
export default Home