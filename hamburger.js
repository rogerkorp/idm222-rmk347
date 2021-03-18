function openMenu (){
    const menu = document.getElementById('burgerMenu');
    const img = document.getElementById('popoutButton');
    if (menu.style.display === 'none'){
        menu.style.display = 'block';
        img.src = "../content/buttonx-2x.png";
    } else {
        menu.style.display = 'none';
        img.src="../content/buttonE-2x.png"
    }
}
