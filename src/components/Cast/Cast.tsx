import React, { useEffect, useState } from 'react';
import { getCast } from '../../services/moviesApi';
import { useParams } from 'react-router';

const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

interface ICastMember {
    id: string
    name: string
    profile_path: string
}


export const Cast = () => {
    const [cast, setCast] = useState<ICastMember[]>([]);
    const {id} = useParams();

    useEffect(() => {
        getCast(id).then(setCast)
    }, [id])
    console.log(cast)

  return <div>
        <h1>Cast</h1>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
        }}>
            {
                cast.slice(0, 12).map((item) => (
                    <li key={item.id} >
                        <p>{item.name}</p>
                        <img src={BASE_IMG + item.profile_path} alt="Actor's Photo" />
                    </li>
            ))}
        </ul>
    </div>
}
