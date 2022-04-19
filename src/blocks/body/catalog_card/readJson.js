export function readJson() {
    const baseUrl = "https://raw.githubusercontent.com/centerwebpro/sunweb_projects_1/main/accepts/data.json";

    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            setNavLinks(data);
        });

    function setNavLinks(data) {
        let navBlock = document.querySelector('.topnav');
        if (navBlock) {
            Object.entries(data).forEach(item => {
                if (item[1].status == true) {
                    let navElenet = `<a href="#" class="topnav-item">${item[1].name}</a>`;
                    navBlock.innerHTML += navElenet;
                }
            })
        }
    }
}