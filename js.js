window.addEventListener("DOMContentLoaded", () =>{

    skeletonLoading();
    costruisciPagina();
    
})

function skeletonLoading(){
    const items = document.querySelectorAll(".grid-item");

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.remove("is-loading");
        }, 1500 + (index * 30));
    })
        
}

function costruisciPagina(){
    fetch('mgx_icon_library.xml')
    .then(response => response.text())
    .then(xmlString =>{
        document.body.insertAdjacentHTML('afterbegin', xmlString);
        const container = document.querySelector(".grid");
        container.innerHTML = ''

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const icone = xmlDoc.getElementsByTagName("symbol");

        Array.from(icone).forEach(icona=>{
            const nomeIcona = icona.getAttribute("id");
            const label = nomeIcona.replace("mgx-icon__", "");

            const div = document.createElement('div');
            div.classList.add('grid-item', 'is-loading');
            div.dataset.name = label;

            div.innerHTML = `
                <svg width="24" height="24">
                    <use href="#${nomeIcona}"></use>
                </svg>
                <p>${label}</p>
            `;
            container.appendChild(div);
        });
        const searchInput = document.getElementById('iconSearch');

        searchInput.addEventListener('input', (e) => {
            filterIcons(e.target.value);
        });

        skeletonLoading();
    })
    
    function filterIcons(searchTerm){
        const term = searchTerm.toLowerCase();
        const items = document.querySelectorAll('.grid-item');

        items.forEach(item =>{
            const name = item.dataset.name.toLowerCase();

            if(name.includes(term)){
                item.style.display = "";
            }else{
                item.style.display = "none";
            }
        })
    }
}
