
import Rating from './Rating';

const clipPathRatings = document.querySelectorAll('.rating');

for(let i = 0; i < clipPathRatings.length; i++) {
  let ratingNode = clipPathRatings[i];
  new Rating(ratingNode);
}

new Rating(document.querySelector('.rating-svg.simple-js'), {childSelector: '.svg-star'});
