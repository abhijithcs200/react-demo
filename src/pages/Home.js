import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScorllCard from '../components/HorizontalScorllCard'
import useFetch from '../hooks/useFetch'

const Home = () => {

  const { data : trendingData} = useFetch("/trending/all/week")
  const { data : nowPlayingData} = useFetch("/movie/now_playing")
  const { data : topRatedData} = useFetch("/movie/top_rated")
  const { data : popularTvShowsData} = useFetch("/tv/popular")
  const { data : onTheAirTvShowsData} = useFetch("/tv/on_the_air")
  

  return (
    <div>
      <BannerHome/>

      <HorizontalScorllCard data={trendingData} heading={"Trending Shows"} trending={true}/>
      <HorizontalScorllCard data={nowPlayingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalScorllCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
      <HorizontalScorllCard data={popularTvShowsData} heading={"Popular TV Shows"} media_type={"tv"}/>
      <HorizontalScorllCard data={onTheAirTvShowsData} heading={"On Air TV Shows"} media_type={"tv"}/>
    </div>

  )
}

export default Home