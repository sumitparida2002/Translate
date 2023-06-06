
var headerO = document.querySelector(".originalH");
var bodyO = document.querySelector(".originalB");
var dropDownMenuO = document.querySelector(".dropdownMO");
var headerT = document.querySelector(".translationH");
var bodyT = document.querySelector(".translationB");
var dropDownMenuT = document.querySelector(".dropdownMT");
var selectedO = document.querySelector(".selectedO");
var selectedT = document.querySelector(".selectedT");
var translateBtn = document.querySelector(".translate");
var originalB = document.querySelector('.originalB');
var translationB = document.querySelector('.translationB');
var url = 'https://openai80.p.rapidapi.com/chat/completions';
var options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '063b0494f2msh4df81d2bd9972cep175991jsn23c45138f8a8',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    },
    body: {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: 'user',
                content: 'Hello!'
            }
        ]
    }
};
var openMenuO = function (e) {
    dropDownMenuO.classList.toggle("visible");
    bodyO.classList.toggle("hidden");
};
var openMenuT = function (e) {
    dropDownMenuT.classList.toggle("visible");
    bodyT.classList.toggle("hidden");
};
headerO.onclick = openMenuO;
headerT.onclick = openMenuT;
var selectOLang = function (e) {
    var target = e.target;
    if (target.nodeName == "LI") {
        selectedO.textContent = target.textContent;
    }
    dropDownMenuO.classList.toggle("visible");
    bodyO.classList.toggle("hidden");
};
var selectTLang = function (e) {
    var target = e.target;
    if (target.nodeName == "LI") {
        selectedT.textContent = target.textContent;
    }
    dropDownMenuT.classList.toggle("visible");
    bodyT.classList.toggle("hidden");
};
dropDownMenuO.onclick = selectOLang;
dropDownMenuT.onclick = selectTLang;
var translate = async function(){
    console.log('yo')
    const query=`Translate ${originalB.textContent} from ${selectedO} to ${selectedT}`
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '063b0494f2msh4df81d2bd9972cep175991jsn23c45138f8a8',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        body: {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: query
                }
            ]
        }
    };
    
    try {
        console.log('yo');
        const response = await fetch(url, options);
        console.log(response);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    
}
translateBtn.onclick = translate;
