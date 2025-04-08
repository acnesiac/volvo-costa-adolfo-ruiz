import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { Vehicle } from '../../types/vehicle';
import { Button } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';

export function VehiclePreview({
  vehicle: {
    id,
    comment
  }
}: {
  vehicle: Vehicle;
}) {
  return (
    <ListItem alignItems="flex-start">

     <Button variant="text">{id}</Button>
 <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
               {comment}
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      <span></span>
      <div><span >{comment}</span></div>
      <div >
        <Link to={`/`}>
          <img src={ undefined} />
        </Link>
        <div>
          <Link to={`/`}>
            {comment}
          </Link>
          <span >{id}</span>
        </div>

      </div>

    </ListItem>
  );
}