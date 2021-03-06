import '../less/style.scss'


const baseUrl = "https://raw.githubusercontent.com/centerwebpro/sunweb_projects_1/main/accepts/data.json";
            
            let categoryList = fetch(baseUrl)
                .then(response => response.json())
                .then(data => {
                    setNavLinks(data);
                });
                
                function setNavLinks(data) {
                    let navBlock = document.getElementsByClassName('topnav');
                    if(navBlock) {
                        Object.entries(data).forEach(item => {
                            if (item[1].status == true) {
                                let navElemet =  `<a href='#'> ${item[1].name} </a>`;
                                navBlock.innerHTML += navElemet;
                            }
                        })
                    }
                }