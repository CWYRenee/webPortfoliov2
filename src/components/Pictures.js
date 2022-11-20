import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import evening from '../assets/pics/evening_sky.jpg';
import fall from '../assets/pics/fall.jpg';
import fishing from '../assets/pics/fishing.jpg';
import roadtrip from '../assets/pics/roadtrip.jpg';
import skiSelfie from '../assets/pics/ski_selfie.jpg';
import skiSlope from '../assets/pics/ski_slopes.jpg';
import summer from '../assets/pics/summer.jpg';

  
function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  export default function Pictures() {
    return (
      <ImageList
        sx={{ width: 'auto', height: 'auto' }}
        variant="quilted"
        cols={4}
        rowHeight={200}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
const itemData = [
  {
    img: evening,
    rows: 2,
    cols: 2,
  },
  {
    img: fall,
    rows: 4,
    cols: 2,
  },
  {
    img: fishing,
    rows: 2,
    cols: 2,
  },
  {
    img: roadtrip,
    rows: 2,
    cols: 4,
  },
  {
    img: skiSelfie,
    rows: 2,
    cols: 2,
  },
  {
    img: summer,
    rows: 2,
    cols: 2,
  },
  {
    img: skiSlope,
    rows: 2,
    cols: 4,
  },
  
];