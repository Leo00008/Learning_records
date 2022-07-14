const toggle = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const fast = document.querySelector('#fast')
const cheap = document.querySelector('#cheap')

for (i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function (e) {
        doTheTrick(e.target)
        console.log(e.target);
    })
}

function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) {
            fast.checked = false
        }

        if (cheap === theClickedOne) {
            good.checked = false
        }

        if (fast === theClickedOne) {
            cheap.checked = false
        }
    }
}
