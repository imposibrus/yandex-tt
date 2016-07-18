
import {Rating, RatingSVG} from './Rating';

const clipPathRatings = document.querySelectorAll('.rating');

for(let i = 0; i < clipPathRatings.length; i++) {
  let ratingNode = clipPathRatings[i];
  new Rating(ratingNode);
}



new RatingSVG(document.querySelector('.rating-svg'), {childSelector: '.svg-star'});
new RatingSVG(document.querySelector('.rating-svg.blue'), {childSelector: '.svg-star', activeBgGradient: '#starBlueGradient'});
