const voider = {
  positionToPercent(position, boundary) {
    return Math.round((position / boundary) * 100);
  },
  follow: function followGrumbaum({ clientX, clientY }) {
    const topPercent = this.positionToPercent(clientY, window.innerHeight);
    const leftPercent = this.positionToPercent(clientX, window.innerWidth);

    this.grumbaum.style.backgroundPosition = `${topPercent}% ${leftPercent}%`;
  },
  grumbaum: null,
  start: function startVoider() {
    this.grumbaum = document.getElementById('grumbaum-image');
    document.addEventListener('mousemove', _.throttle(this.follow.bind(this), 100));
  },
};

// window.addEventListener("DOMContentLoaded", () => voider.start());
