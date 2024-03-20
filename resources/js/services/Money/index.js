export function money(number, places = 2, symbol = '', thousand = ',', decimal = '.') {
  number = moneyUnmask(number || 0)

  places = !isNaN(places = Math.abs(places)) ? places : 2
  symbol = symbol !== undefined ? symbol : ''
  thousand = thousand || ','
  decimal = decimal || '.'
  var
    negative = number < 0 ? '-' : '',
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + '',
    h = i.length,
    j = h > 3 ? h % 3 : 0
  return symbol + negative + (j ? i.substr(0, j) + thousand : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : '')
}

export function moneyUnmask(number, places = 2) {
  return parseFloat(number.toString().replace(/[^0-9-.]/g, '')).toFixed(places)
}

export function getDecimalPlaces(number, max = 2) {
  const arr = number.toString().split('.')
  const decimal = arr[1] || ''
  const places = decimal.split('').length

  return max && places > max ? max : places
}

export class Money {
  constructor(number, places = 2) {
    this.number = number
    this.places = places
  }
  mask() {
    return money(this.number, this.places)
  }
  unmask() {
    return moneyUnmask(this.number, this.places)
  }
  toFloat() {
    return parseFloat(this.unmask()) || 0
  }
}