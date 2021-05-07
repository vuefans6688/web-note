export function dateFormat(paddingZero) {
  return paddingZero < 10 ? `0${paddingZero}` : paddingZero
}