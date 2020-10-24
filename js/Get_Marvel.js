function Get_Marvel_01() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-1.jpg"}" width="200px" height="300>

            <h3>${data.marvel['0'].title}</h3>
            
            <p> Writers: ${data.marvel['0'].writers}</p>
            <p> Number: ${data.marvel['0'].number} </p>
            <p> Release: ${data.marvel['0'].release} </p>
            <p> Price: ${data.marvel['0'].price} </p>
              `
        });
}

function Get_Marvel_02() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-2.jpg"}" width="200px" height="300>

            <h3>${data.marvel['1'].title}</h3>
            
            <p> Writers: ${data.marvel['1'].writers}</p>
            <p> Number: ${data.marvel['1'].number} </p>
            <p> Release: ${data.marvel['2'].release} </p>
            <p> Price: ${data.marvel['1'].price} </p>
              `
        });
}

function Get_Marvel_03() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-3.jpg"}" width="200px" height="300>

            <h3>${data.marvel['2'].title}</h3>
            
            <p> Writers: ${data.marvel['2'].writers}</p>
            <p> Number: ${data.marvel['2'].number} </p>
            <p> Release: ${data.marvel['2'].release} </p>
            <p> Price: ${data.marvel['2'].price} </p>
              `
        });
}

function Get_Marvel_04() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-4.jpg"}" width="200px" height="300>

            <h3>${data.marvel['3'].title}</h3>
            
            <p> Writers: ${data.marvel['3'].writers}</p>
            <p> Number: ${data.marvel['3'].number} </p>
            <p> Release: ${data.marvel['3'].release} </p>
            <p> Price: ${data.marvel['3'].price} </p>
              `
        });
}

function Get_Marvel_05() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-5.jpg"}" width="200px" height="300>

            <h3>${data.marvel['4'].title}</h3>
            
            <p> Writers: ${data.marvel['4'].writers}</p>
            <p> Number: ${data.marvel['4'].number} </p>
            <p> Release: ${data.marvel['4'].release} </p>
            <p> Price: ${data.marvel['4'].price} </p>
              `
        });
}

function Get_Marvel_06() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-6.jpg"}" width="200px" height="300>

            <h3>${data.marvel['5'].title}</h3>
            
            <p> Writers: ${data.marvel['5'].writers}</p>
            <p> Number: ${data.marvel['5'].number} </p>
            <p> Release: ${data.marvel['5'].release} </p>
            <p> Price: ${data.marvel['5'].price} </p>
              `
        });
}

function Get_Marvel_07() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-7.jpg"}" width="200px" height="300>

            <h3>${data.marvel['6'].title}</h3>
            
            <p> Writers: ${data.marvel['6'].writers}</p>
            <p> Number: ${data.marvel['6'].number} </p>
            <p> Release: ${data.marvel['6'].release} </p>
            <p> Price: ${data.marvel['6'].price} </p>
              `
        });
}

function Get_Marvel_08() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-8.jpg"}" width="200px" height="300>

            <h3>${data.marvel['7'].title}</h3>
            
            <p> Writers: ${data.marvel['7'].writers}</p>
            <p> Number: ${data.marvel['7'].number} </p>
            <p> Release: ${data.marvel['7'].release} </p>
            <p> Price: ${data.marvel['7'].price} </p>
              `
        });
}

function Get_Marvel_09() {
    fetch("json/marvel.json")
        .then((result) => result.json())
        .then((data) => {
            let content = document.getElementById('box-1');
            content.innerHTML = `
            
            <img src="${"img/comic-9.jpg"}" width="200px" height="300>

            <h3>${data.marvel['8'].title}</h3>
            
            <p> Writers: ${data.marvel['8'].writers}</p>
            <p> Number: ${data.marvel['8'].number} </p>
            <p> Release: ${data.marvel['8'].release} </p>
            <p> Price: ${data.marvel['8'].price} </p>
              `
        });
}

export { Get_Marvel_01, Get_Marvel_02, Get_Marvel_03, Get_Marvel_04, Get_Marvel_05, Get_Marvel_06, Get_Marvel_07, Get_Marvel_08, Get_Marvel_09 };