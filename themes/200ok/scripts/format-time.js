// format-time.js

// https://stackoverflow.com/a/10073788/1596013
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

hexo.extend.helper.register('format_time', time => {
  if (!time.match(/\d\d:\d\d/)) {
    return time
  }

  let parts = time.split(':')
  let hours = parseInt(parts[0])
  let minutes = parseInt(parts[1])
  let ampm = 'am'

  if (hours >= 12) {
    ampm = 'pm'
  }

  if (hours > 12) {
    hours -= 12
  }

  if (hours <= 0) {
    hours = 12
  }

  return hours + ':' + pad(minutes, 2) + ampm
});
