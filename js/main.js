
import Rating from './Rating';

const clipPathRatings = document.querySelectorAll('.rating');

for(let i = 0; i < clipPathRatings.length; i++) {
  let ratingNode = clipPathRatings[i];
  new Rating(ratingNode);
}



const SVGRatings = document.querySelectorAll('.rating-svg');

for(let i = 0; i < SVGRatings.length; i++) {
  let ratingNode = SVGRatings[i];
  new Rating(ratingNode, {childSelector: '.svg-star'});
}

