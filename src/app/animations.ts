import {
  trigger,
  state,
  transition,
  animate,
  style,
  animation,
} from '@angular/animations';

export let fadeInAnimation = animation([
  style({ opacity: 0, transform: 'translateX(-50px)' }),
  animate(300),
]);

export let fadeOutLeft = trigger('fadeOutLeft', [
  state('void', style({ opacity: 0, transform: 'translateX(-50px)' })),
  transition('*=>void', [animate(300)]),
]);
