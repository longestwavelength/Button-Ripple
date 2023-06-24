const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const pointX = e.clientX 
        const pointY = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = pointX - buttonLeft
        const yInside = pointY - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })
})