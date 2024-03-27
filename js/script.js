function areaApps(){
    let areaApps = document.querySelector('.area-apps');
    if(areaApps.classList.contains('activeApps')){
        areaApps.classList.remove('activeApps');
    }else{
        areaApps.classList.add('activeApps');
    }
}

