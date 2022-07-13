//获取按钮
const LAB = document.querySelectorAll('label')
const ball = document.querySelectorAll('ball')

for (i = 0; i < LAB.length; i++) {
    LAB[i].addEventListener('click', function () {
        this.classList.add('select')
        this.children[0].style.left = '40px'
        this.children[0].style.animation = '0.5s ease-in-out 1s 1 normal none running none;'
    })
}
