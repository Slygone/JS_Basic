function createTable(colum, rows) {
    //create the table element
    let table = document.createElement(`table`);

    //create the table row's and cells
    for(let i = 0; i < rows; i++){
        let tr = document.createElement(`tr`);
        for(let j = 0; j < colum; j++){
            let td = document.createElement(`td`);
            td.innerHTML = `Row-` +(i+1) + ` Column-` +(j+1);
            tr.appendChild(td);
            td.style.border = `2px solid black`;
            td.style.color = `black`;
            td.style.background = `yellow`
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}


createTable(6,8)