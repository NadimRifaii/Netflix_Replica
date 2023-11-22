import Genre from '../../components/Genre/genre.component.jsx'
import Header1 from '../../components/Header1Components/Header1.jsx'
import Footer2 from '../../components/Footer2Components/Footer2.jsx'
import './genre-page.styles.css'
const GenrePage = () => {
  return (
    <div className="genre-page">
      <Header1 />
      <Genre />
      <Footer2 />
    </div>
  )
}
export default GenrePage