import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Vehicle } from '../../types/vehicle';

export function VehiclePreview({
  article: {
  label,
  latency,
    createdAt,
    favorited,
    favoritesCount,
    slug,
    title,
    description,
    tagList,
  }
}: {
  article: Vehicle;
}) {
  return (
    <div className='article-preview'>
      <span className='date'>{label}</span>

      <div className='article-meta'>
        <Link to={`/`} className='author'>
          <img src={ undefined} />
        </Link>
        <div className='info'>
          <Link to={`/`} className='author'>
            {title}
          </Link>
          <span className='date'>{format(createdAt, 'PP')}</span>
        </div>

      </div>

    </div>
  );
}