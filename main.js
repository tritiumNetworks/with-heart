const preview = document.getElementsByClassName('preview')[0]
const form = document.getElementById('control')

form.addEventListener('input', () => {
  const [verb, color, name, location, dofor] = form.elements
  preview.innerHTML =
    (verb.value.replace(verb.value.charAt(0), verb.value.charAt(0).toUpperCase()) || 'Made') +
    ' with <span style="color: ' + (color.value || 'red') + ';">&hearts;</span>' +
    (name.value ? ' by ' + name.value : '') +
    (location.value ? ' in ' + location.value : '') +
    (dofor.value ? ' for ' + dofor.value : '')
})
