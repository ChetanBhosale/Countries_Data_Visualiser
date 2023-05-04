const countriesAPI = 'https://restcountries.com/v2/all'

let dataFun = async () => {
    try {
        const response = await fetch(countriesAPI)
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log('API Not Fetch!')
    }
}

let newData;

dataFun().then((data) => {
    newData = data;
})




function Population() {

    let pn = document.querySelector('.text_showing')
    pn.textContent = 'Top 10 Most Populated Countries!'
    const ul = document.querySelector('.dataDiv')
    const lists = document.querySelectorAll('.eachDiv')
    for (const list of lists) {
        ul.removeChild(list)
    }
    let arr = []
    newData.forEach(element => {
        let n = {
            name: element.name,
            Population: element.population
        }
        arr.push(n)

    });
    arr.sort((a, b) => b.Population - a.Population);
    let num = 10

    for (let i = 0; i < num; i++) {
        let dataDiv = document.querySelector('.dataDiv')

        let eachDiv = document.createElement('div')
        eachDiv.className = 'eachDiv'

        let span = document.createElement('span')
        span.className = 'name'

        let mainCata = document.createElement('div')
        mainCata.className = 'mainCata'
        let cata = document.createElement('div')
        cata.className = 'cata'

        let num = document.createElement('span')
        num.className = 'num'

        span.textContent = arr[i].name
        num.textContent = arr[i].Population

        let number = 150000000 / arr[i].Population
        let newCal = (80 * number)
        let wid = (100 - newCal);
        let chwid = wid.toString()
        chwid = chwid + "%"
        cata.style.width = chwid
        console.log(chwid)

        eachDiv.appendChild(span)
        mainCata.appendChild(cata)
        eachDiv.appendChild(mainCata)
        eachDiv.appendChild(num)

        dataDiv.appendChild(eachDiv)

    }
}

function Lang(){
    let langData = [{lang:'English',count:0}];
    let pn = document.querySelector('.text_showing')
    pn.textContent = 'Top 10 Most Spoken Language in World!'
    const ul = document.querySelector('.dataDiv')
    const lists = document.querySelectorAll('.eachDiv')
    for (const list of lists) {
        ul.removeChild(list)
    }  

    newData.forEach(element =>{
        
        element.languages.forEach(ele =>{
            let flag = true
            langData.forEach(e =>{
                if(e.lang == ele.name)
                {
                    e.count += 1;
                    flag = false
                }
            })
            if(flag)
            {
                let n = {
                    lang : ele.name,
                    count : 1
                }
                langData.push(n)
            }
            
        })
    })
    langData.sort((a,b) => b.count - a.count)
    console.log(langData)

    let num = 10

    for (let i = 0; i < num; i++) {
        let dataDiv = document.querySelector('.dataDiv')

        let eachDiv = document.createElement('div')
        eachDiv.className = 'eachDiv'

        let span = document.createElement('span')
        span.className = 'name'

        let mainCata = document.createElement('div')
        mainCata.className = 'mainCata'
        let cata = document.createElement('div')
        cata.className = 'cata'

        let num = document.createElement('span')
        num.className = 'num'

        span.textContent = langData[i].lang
        num.textContent = langData[i].count

       
        let wid = langData[i].count;
        let chwid = wid.toString()
        chwid = chwid + "%"
        cata.style.width = chwid
        console.log(chwid)

        eachDiv.appendChild(span)
        mainCata.appendChild(cata)
        eachDiv.appendChild(mainCata)
        eachDiv.appendChild(num)

        dataDiv.appendChild(eachDiv)

    }


}

