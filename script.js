let rownumber = 100
let columnnumber = 100

const colors = ['#F44336','#E57373','#EF5350',  '#7B1FA2','#6A1B9A','#9575CD','#283593','#1A237E','#8C9EFF','#536DFE','#3D5AFE','#304FFE','#B3E5FC','#03A9F4','#26A69A','#9688','#00897B','#00796B','#00695C','#B9F6CA','#64DD17','#F9FBE7','#F9A825','#F57F17','#FFA000','#FF8F00','#FF6F00','#EF6C00','#E65100','#CFD8DC','#263238'];


function addRow(i) {
    const container =  document.getElementById('container')
    const el = document.createElement('div');
    el.classList.add('row')
    container.appendChild(el);
}

function expandRow () {
    for (let i=0; i<=rownumber;i++) {
        addRow()
    } 
}


function addColumn() { 
	expandRow();
    const container = document.getElementsByClassName('row');
    Array.from(container).forEach((row) => {

        for (let i=0; i<=columnnumber; i++) {

            const col = document.createElement('div');
            col.classList.add('column')
            col.id='column'
            col.addEventListener("mouseover",() => {
                col.style.backgroundColor=randomColorSelector()
                })
            row.appendChild(col);
        }
    })
}

function randomColorSelector() {
    
    var selectedColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(selectedColor)
    
return selectedColor
    
}


addColumn()