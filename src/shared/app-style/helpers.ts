import Color from 'color'

/**
 * lighten color
 * @param color color string, string type is one of hex | rgb | hsl
 * @param ratio lighten ratio
 * @returns lighten hex string
 */
export function lightenColor(color: string, ratio: number): string {
  return Color(color)
    .lighten(ratio)
    .hex()
}

/**
 * darken color
 * @param color color string, string type is one of hex | rgb | hsl
 * @param ratio darken ratio
 * @returns lighten hex string
 */
export function darkenColor(color: string, ratio: number): string {
  return Color(color)
    .darken(ratio)
    .hex()
}
