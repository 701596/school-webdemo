/**
 * Custom smooth scroll utility with cubic easing and vertical offset.
 * @param targetId The selector ID (e.g. '#programs')
 * @param duration The duration of the scroll animation in milliseconds
 * @param offset The vertical offset to subtract (e.g. for fixed headers)
 */
export const smoothScrollTo = (targetId: string, duration = 1000, offset = 80) => {
  const target = document.querySelector(targetId);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Cubic Ease In-Out
  const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      // Ensure exact final position
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animation);
};
