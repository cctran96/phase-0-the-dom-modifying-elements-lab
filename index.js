const main = document.querySelector('main')
main.remove()

const header = document.createElement('h1')
document.body.appendChild(header)
header.id = 'victory'
const newHeader = document.getElementById('victory')
newHeader.innerHTML = 'YOUR-NAME is the champion'