const btn = document.querySelector('div')

btn.addEventListener('click', function () {
    this.classList.add('circle')
    setTimeout(this.classList.remove('circle', 500))
})