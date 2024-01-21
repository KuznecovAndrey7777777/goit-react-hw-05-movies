import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../api';
import img from '../../img/error.jpeg';
import { List, Poster } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [infoCast, setInfoCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getMovieCast(id);
        setInfoCast(castData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div>
      <List>
        {infoCast.map(({ profile_path, name, character, cast_id }) => (
          <li key={cast_id}>
            <Poster
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : img
              }
              alt={name}
            />
            <p>{name}</p>
            {character && (
              <p>
                <span>Character:</span>
                {character}
              </p>
            )}
          </li>
        ))}
      </List>
    </div>
  );
};

export default Cast;
