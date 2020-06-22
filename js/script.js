(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new fullpage('#fullpage', {
            //options here
            autoScrolling:true,
            scrollHorizontally: true,
            sectionsColor : ['#111', '#eee', '#2c974b', '#9147ff', '#eee'],
        })
    })
})()
