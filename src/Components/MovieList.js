import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({data}) => {
  return (
    <div className='main'>
        {
        React.Children.toArray( data.map((movie)=><MovieCard xmovie={movie}/>))
        }
    </div>
  )
}

export default MovieList