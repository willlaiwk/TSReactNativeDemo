import { lightenColor, darkenColor } from '../../helpers'

const baseColorInterval = 0.08

const appColorInterval = 0.08

const baseColor = {
  red: '#dc3545',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  blue: '#0d6efd',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#d63384',
  teal: '#20c997',
  cyan: '#17a2b8'
}

const appColor = {
  primary: '#eb001b',
  secondary: '#ff5f00'
}

export const white = '#fff'

export const black = '#000'

export const gray = {
  100: '#f8f9fa',
  200: '#e9ecef',
  300: '#dee2e6',
  400: '#ced4da',
  500: '#adb5bd',
  600: '#6c757d',
  700: '#495057',
  800: '#343a40',
  900: '#212529'
}

export const blue = {
  100: lightenColor(baseColor.blue, baseColorInterval * 8),
  200: lightenColor(baseColor.blue, baseColorInterval * 6),
  300: lightenColor(baseColor.blue, baseColorInterval * 4),
  400: lightenColor(baseColor.blue, baseColorInterval * 2),
  500: baseColor.blue,
  600: darkenColor(baseColor.blue, baseColorInterval * 2),
  700: darkenColor(baseColor.blue, baseColorInterval * 4),
  800: darkenColor(baseColor.blue, baseColorInterval * 6),
  900: darkenColor(baseColor.blue, baseColorInterval * 8)
}

export const indigo = {
  100: lightenColor(baseColor.indigo, baseColorInterval * 8),
  200: lightenColor(baseColor.indigo, baseColorInterval * 6),
  300: lightenColor(baseColor.indigo, baseColorInterval * 4),
  400: lightenColor(baseColor.indigo, baseColorInterval * 2),
  500: baseColor.indigo,
  600: darkenColor(baseColor.indigo, baseColorInterval * 2),
  700: darkenColor(baseColor.indigo, baseColorInterval * 4),
  800: darkenColor(baseColor.indigo, baseColorInterval * 6),
  900: darkenColor(baseColor.indigo, baseColorInterval * 8)
}

export const purple = {
  100: lightenColor(baseColor.purple, baseColorInterval * 8),
  200: lightenColor(baseColor.purple, baseColorInterval * 6),
  300: lightenColor(baseColor.purple, baseColorInterval * 4),
  400: lightenColor(baseColor.purple, baseColorInterval * 2),
  500: baseColor.purple,
  600: darkenColor(baseColor.purple, baseColorInterval * 2),
  700: darkenColor(baseColor.purple, baseColorInterval * 4),
  800: darkenColor(baseColor.purple, baseColorInterval * 6),
  900: darkenColor(baseColor.purple, baseColorInterval * 8)
}

export const pink = {
  100: lightenColor(baseColor.pink, baseColorInterval * 8),
  200: lightenColor(baseColor.pink, baseColorInterval * 6),
  300: lightenColor(baseColor.pink, baseColorInterval * 4),
  400: lightenColor(baseColor.pink, baseColorInterval * 2),
  500: baseColor.pink,
  600: darkenColor(baseColor.pink, baseColorInterval * 2),
  700: darkenColor(baseColor.pink, baseColorInterval * 4),
  800: darkenColor(baseColor.pink, baseColorInterval * 6),
  900: darkenColor(baseColor.pink, baseColorInterval * 8)
}

export const red = {
  100: lightenColor(baseColor.red, baseColorInterval * 8),
  200: lightenColor(baseColor.red, baseColorInterval * 6),
  300: lightenColor(baseColor.red, baseColorInterval * 4),
  400: lightenColor(baseColor.red, baseColorInterval * 2),
  500: baseColor.red,
  600: darkenColor(baseColor.red, baseColorInterval * 2),
  700: darkenColor(baseColor.red, baseColorInterval * 4),
  800: darkenColor(baseColor.red, baseColorInterval * 6),
  900: darkenColor(baseColor.red, baseColorInterval * 8)
}

export const orange = {
  100: lightenColor(baseColor.orange, baseColorInterval * 8),
  200: lightenColor(baseColor.orange, baseColorInterval * 6),
  300: lightenColor(baseColor.orange, baseColorInterval * 4),
  400: lightenColor(baseColor.orange, baseColorInterval * 2),
  500: baseColor.orange,
  600: darkenColor(baseColor.orange, baseColorInterval * 2),
  700: darkenColor(baseColor.orange, baseColorInterval * 4),
  800: darkenColor(baseColor.orange, baseColorInterval * 6),
  900: darkenColor(baseColor.orange, baseColorInterval * 8)
}

export const yellow = {
  100: lightenColor(baseColor.yellow, baseColorInterval * 8),
  200: lightenColor(baseColor.yellow, baseColorInterval * 6),
  300: lightenColor(baseColor.yellow, baseColorInterval * 4),
  400: lightenColor(baseColor.yellow, baseColorInterval * 2),
  500: baseColor.yellow,
  600: darkenColor(baseColor.yellow, baseColorInterval * 2),
  700: darkenColor(baseColor.yellow, baseColorInterval * 4),
  800: darkenColor(baseColor.yellow, baseColorInterval * 6),
  900: darkenColor(baseColor.yellow, baseColorInterval * 8)
}

export const green = {
  100: lightenColor(baseColor.green, baseColorInterval * 8),
  200: lightenColor(baseColor.green, baseColorInterval * 6),
  300: lightenColor(baseColor.green, baseColorInterval * 4),
  400: lightenColor(baseColor.green, baseColorInterval * 2),
  500: baseColor.green,
  600: darkenColor(baseColor.green, baseColorInterval * 2),
  700: darkenColor(baseColor.green, baseColorInterval * 4),
  800: darkenColor(baseColor.green, baseColorInterval * 6),
  900: darkenColor(baseColor.green, baseColorInterval * 8)
}

export const teal = {
  100: lightenColor(baseColor.teal, baseColorInterval * 8),
  200: lightenColor(baseColor.teal, baseColorInterval * 6),
  300: lightenColor(baseColor.teal, baseColorInterval * 4),
  400: lightenColor(baseColor.teal, baseColorInterval * 2),
  500: baseColor.teal,
  600: darkenColor(baseColor.teal, baseColorInterval * 2),
  700: darkenColor(baseColor.teal, baseColorInterval * 4),
  800: darkenColor(baseColor.teal, baseColorInterval * 6),
  900: darkenColor(baseColor.teal, baseColorInterval * 8)
}

export const cyan = {
  100: lightenColor(baseColor.cyan, baseColorInterval * 8),
  200: lightenColor(baseColor.cyan, baseColorInterval * 6),
  300: lightenColor(baseColor.cyan, baseColorInterval * 4),
  400: lightenColor(baseColor.cyan, baseColorInterval * 2),
  500: baseColor.cyan,
  600: darkenColor(baseColor.cyan, baseColorInterval * 2),
  700: darkenColor(baseColor.cyan, baseColorInterval * 4),
  800: darkenColor(baseColor.cyan, baseColorInterval * 6),
  900: darkenColor(baseColor.cyan, baseColorInterval * 8)
}

// primary color for your app, usually your brand color.
export const primary = {
  100: lightenColor(appColor.primary, appColorInterval * 8),
  200: lightenColor(appColor.primary, appColorInterval * 6),
  300: lightenColor(appColor.primary, appColorInterval * 4),
  400: lightenColor(appColor.primary, appColorInterval * 2),
  500: appColor.primary,
  600: darkenColor(appColor.primary, appColorInterval * 2),
  700: darkenColor(appColor.primary, appColorInterval * 4),
  800: darkenColor(appColor.primary, appColorInterval * 6),
  900: darkenColor(appColor.primary, appColorInterval * 8)
}

// secondary color for your app which complements the primary color.
export const secondary = {
  100: lightenColor(appColor.secondary, appColorInterval * 8),
  200: lightenColor(appColor.secondary, appColorInterval * 6),
  300: lightenColor(appColor.secondary, appColorInterval * 4),
  400: lightenColor(appColor.secondary, appColorInterval * 2),
  500: appColor.secondary,
  600: darkenColor(appColor.secondary, appColorInterval * 2),
  700: darkenColor(appColor.secondary, appColorInterval * 4),
  800: darkenColor(appColor.secondary, appColorInterval * 6),
  900: darkenColor(appColor.secondary, appColorInterval * 8)
}
