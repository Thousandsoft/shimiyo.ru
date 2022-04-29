export function readJson() {
    const baseUrl = "https://raw.githubusercontent.com/Thousandsoft/assets/main/shimiyo.json";

    fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            setNavLinks(data);
        });

    function setNavLinks(data) {
        let navBlock = document.querySelectorAll('.topnav');
        navBlock.forEach(block => {
            if (block) {
                Object.entries(data).forEach(item => {
                    if (item[1].status == true) {
                        let navElenet = `<a class="topnav-item" href="#${item[1].anchor}">${item[1].name}</a>`;
                        block.innerHTML += navElenet;
                    }
                })
            }
        })
    }
}