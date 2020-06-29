const fs = require('fs');


function getNav(path) {
    path = 'D:/PersonalProject/vue_press/docs/pages/' + path + '/';
    let file_list = fs.readdirSync(path);
    let nav_list = [];
    for (let i = 0; i < file_list.length; i++) {
        let name = file_list[i].split(/[.]|-/);
        nav_list[i] = "{ text: 'Python-" + name[name.length - 2] + "', link: '" + path + file_list[i] + "'},";
    }
    console.log(nav_list);
}

getNav('Python')
