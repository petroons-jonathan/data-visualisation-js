/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :     Petroons Jonathan
Date :  19 novembre 2019
Contact information : 
What does this script do ? 


...
*/

// Your scripting goes here...
window.onload = function (){
    // declaring all the variables i need
    const stats1 = [] // for the ajax graph
    const stats2 = [] // for the table 1
    const stats3 = [] // for the table 2

    // const tableContent = document.getElementsByTagName("tbody");
    // console.log(tableContent);
    // const tbodyContent1 = tableContent[0].getElementsByTagName("tr");
    // console.log(tbodyContent1);
    // const tbodyContent2 = tableContent[1].getElementsByTagName("tr");
    // console.log(tbodyContent2);

        // function who create a new div in the html
        const constructionDiv = function bow (createDiv,target){
        const div = document.createElement("div");
        div.id = createDiv;
        target.insertAdjacentElement("beforebegin", div);
    }

        
    const functionTable = function bow2 (id, statsContent){
        let tableBody = id.getElementsByTagName("tbody");
        let tr = tableBody[0].getElementsByTagName("tr");
        for(i =1; i< tr.length; i++){
            let country = [];
            let th = tr[i].getElementsByTagName("th");
            let div = th[0].getElementsByTagName("div");
            let number = div[0].innerHTML;
            country.push(number);
            let td = tr[i].getElementsByTagName("td");
            for(j = 0; j < td.length; j++){
                let content = td[j].innerHTML;
                country.push(content);
            }
            statsContent.push(country);
            // console.log(statsContent);
        }
    }
    constructionDiv ("graph1", bodyContent);

    const svg = dimple.newSvg("#graph1", 500, 500);
    let chart = new dimple.chart(svg, stats1);
    chart.addCategoryAxis("x", "X");
    chart.addMeasureAxis("y","Y");
    chart.addSeries(null, dimple.plot.bubble);

    let firstGraph = () => {
        let request = new XMLHttpRequest;
        request.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
        request.onload = function (){
            if (this.status === 200) {
                source = JSON.parse(this.responseText);
                
                for (i = 0; i < source.length; i++){
                    let content = {"X":source[i][0], "Y":source[i][1]};
                    stats1.push(content);
                    // console.log(stats1);
                }
                chart.draw();
                setInterval(firstGraph, 1000);
            }
        }
        request.send();
    }
    firstGraph();


    constructionDiv("graph2", table1);
    functionTable(table1, stats2);
    console.log(stats2)

    const svg2 = dimple.newSvg("#graph2", 500, 500);
    let myChart = new dimple.chart(svg2, stats2);
    myChart.addCategoryAxis("x", "X");
    myChart.addMeasureAxis("y","Y");
    myChart.addSeries(null, dimple.plot.bubble);


    constructionDiv("graph3", table2);
    functionTable(table2, stats3);
    console.log(stats3)
    
}

