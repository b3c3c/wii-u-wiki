function SetDarkMode() {
    document.body.className = "dark-body"
    const classes = document.getRootNode().all
    for (x of classes){
        if (x.className === ''){
            continue
        }
        //TODO: if Classes need to change color
       // x.className += " dark"
    }
}

function SetLightMode() {
    document.body.className = ""
    const classes = document.getRootNode().all
    for (x of classes){
        if (x.className === ''){
            continue
        }
       // x.className += " dark"
    }
}

//Check when page loads
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    SetDarkMode()
}

//Dynamic Updator
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const isDark = event.matches ? true : false;
    if (!isDark){
        SetLightMode()
        return
    }
    SetDarkMode()
});