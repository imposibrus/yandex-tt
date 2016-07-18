
export class Rating {
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

export class RatingSVG {
  ratingStars = [];
  options = {};

  constructor(element, options = {}) {
    if(element instanceof HTMLElement !== true) {
      throw new Error('`element` should be `HTMLElement`');
    }

    let defaultOptions = {
      childSelector: 'span',
      defaultBgGradient: '#starGrayGradient',
      activeBgGradient: '#starYellowGradient'
    };

    this.options = Object.assign({}, defaultOptions, options);

    this.ratingStars = [].slice.call(element.querySelectorAll(this.options.childSelector));

    let that = this,
        active = this.ratingStars.filter((e) => e.classList.contains('active') );

    for(let i = 0; i < this.ratingStars.length; i++) {
      let star = this.ratingStars[i];

      star.setAttribute('fill', `url(${this.options.defaultBgGradient})`);

      star.addEventListener('click', function() {
        for(let i = 0; i < that.ratingStars.length; i++) {
          let star = that.ratingStars[i];
          this !== star && star.classList.remove('active');
        }

        if(this.classList.contains('active')) {
          this.classList.remove('active');
          that.setAllDefault();
          return;
        }

        this.classList.add('active');

        this.setAttribute('fill', `url(${that.options.activeBgGradient})`);

        let prev = this, next = this;
        while ((prev = prev.previousSibling).nodeType === 1) {
          prev.setAttribute('fill', `url(${that.options.activeBgGradient})`);
        }
        while ((next = next.nextSibling).nodeType === 1) {
          next.setAttribute('fill', `url(${that.options.defaultBgGradient})`);
        }
      }, false);

      star.addEventListener('mouseover', function() {
        this.setAttribute('fill', `url(${that.options.activeBgGradient})`);
        let prev = this;
        while ((prev = prev.previousSibling).nodeType === 1) {
          prev.setAttribute('fill', `url(${that.options.activeBgGradient})`);
        }
      }, false);

      star.addEventListener('mouseout', function() {
        let active = that.ratingStars.filter((e) => e.classList.contains('active') );

        if(active.length) {
          if(active[0] !== this) {
            this.setAttribute('fill', `url(${that.options.defaultBgGradient})`);
          }

          let prev = active[0];
          while ((prev = prev.previousSibling).nodeType === 1) {
            prev.setAttribute('fill', `url(${that.options.activeBgGradient})`);
          }

          let next = active[0];
          while ((next = next.nextSibling).nodeType === 1) {
            next.setAttribute('fill', `url(${that.options.defaultBgGradient})`);
          }
        } else {
          that.setAllDefault();
        }
      }, false);
    }

    if(active.length) {
      let prev = active[0];
      active[0].setAttribute('fill', `url(${this.options.activeBgGradient})`);
      while (prev = prev.previousSibling) {
        if(prev.nodeType !== 1) {
          continue;
        }
        prev.setAttribute('fill', `url(${this.options.activeBgGradient})`);
      }
    }

    element.addEventListener('mouseout', function() {
      this.classList.remove('removed');
    }, false);
  }

  setAllDefault() {
    for(let i = 0; i < this.ratingStars.length; i++) {
      let star = this.ratingStars[i];
      star.setAttribute('fill', `url(${this.options.defaultBgGradient})`);
    }
  }
}

