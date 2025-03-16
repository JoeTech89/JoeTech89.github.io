document.addEventListener('DOMContentLoaded', function() {
    //alert("Javascript Running");    
    const div_inject=document.getElementById('div-inject');
    const element_menubar=document.querySelector('.menubar');
    const element_main=document.querySelector('.main');
    const element_sidebar=document.querySelector('.sidebar');
    const element_content=document.querySelector('.content');
    let tempHeight=element_menubar.offsetHeight;
    element_main.setAttribute('style','height:calc(100vh - '+tempHeight+'px)');
    // target_sidemenu.setAttribute('style','height:calc(100vh - '+barheight+'px)');
    if (div_inject){
        div_inject.innerHTML='<p>Injected HTML</p>';
    } else {console.error("Element id:'div-inject' not found");}
    // const target_main = document.querySelectorAll('.main');
    // const target_topmenu = document.querySelector('.topmenu');
    // const target_infobar = document.querySelector('.infobar');
    // const target_content = document.querySelector('.content');
    // const target_sidemenu = document.querySelector('.sidemenu')
    // const barheight = target_topmenu.offsetHeight + target_infobar.offsetHeight;
    
});
