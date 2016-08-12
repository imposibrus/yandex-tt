
export default class Rating {
  ratingStars = [];

  constructor(element, options = {childSelector: 'span'}) {
    if(element instanceof HTMLElement !== true) {
      throw new Error('`element` should be `HTMLElement`');
    }

    this.ratingStars = element.querySelectorAll(options.childSelector);

    let that = this;

    for(let i = 0; i < this.ratingStars.length; i++) {
      let star = this.ratingStars[i];

      star.addEventListener('click', function() {
        for(let i = 0; i < that.ratingStars.length; i++) {
          let star = that.ratingStars[i];
          this !== star && star.classList.remove('active');
        }

        if(!this.classList.toggle('active')) {
          element.classList.add('removed');
        }
      }, false);
    }

    element.addEventListener('mouseout', function() {
      this.classList.remove('removed');
    }, false);
  }
}
