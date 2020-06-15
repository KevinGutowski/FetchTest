import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  fetch("https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg")
    .then(response => {
      return response.text()
    })
    .then(text => {
      console.log(text)
      // create symbol here from text
      const group = sketch.createLayerFromData(text,'svg')
    })
    .catch(e => console.error(e))
}
