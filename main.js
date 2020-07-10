let mainElement = document.querySelector('main')
let imgElement = document.createElement('img')
imgElement.src ='https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/04/12185602/Lagotto-Romangolo-Tongue-Out.jpg'
mainElement.append(imgElement)
let buttonElement = document.createElement('button')
buttonElement.append('click')
document.body.append(buttonElement)
let linkElement = document.createElement('link')
linkElement.append('Google')
linkElement.href = 'https://www.google.com'
mainElement.append(linkElement)
buttonElement.addEventListener('click',function(){
    mainElement.remove()
})