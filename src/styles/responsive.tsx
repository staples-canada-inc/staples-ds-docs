import facepaint from 'facepaint'

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
}

export const mq = facepaint([
  `@media(min-width: ${breakpoints.small}px)`,
  `@media(min-width: ${breakpoints.medium}px)`,
  `@media(min-width: ${breakpoints.large}px)`,
  `@media(min-width: ${breakpoints.xLarge}px)`,
])
