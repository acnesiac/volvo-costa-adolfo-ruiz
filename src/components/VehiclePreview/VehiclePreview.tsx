import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Vehicle } from '../../types/vehicle';

export function VehiclePreview({
  article: {
    id,
    comment
  }
}: {
  article: Vehicle;
}) {
  return (
    <div className='article-preview'>
      <span className='id'>{id}</span>
      <div><span className='comment'>{comment}</span></div>
      <div className='article-meta'>
        <Link to={`/`} className='author'>
          <img src={ undefined} />
        </Link>
        <div className='info'>
          <Link to={`/`} className='author'>
            {comment}
          </Link>
          <span className='date'>{id}</span>
        </div>

      </div>

    </div>
  );
}