export const SECTION_MAX_WIDTH = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px'
} as const;

export const SECTION_SPACING = {
  sm: '3rem',
  md: '5rem',
  lg: '7rem'
} as const;

export const ANIMATION_DURATION = {
  fast: '200ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms'
} as const;

export const ANIMATION_EASING = {
  default: 'cubic-bezier(0.4, 0, 0.2, 1)',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
} as const;
