const headerO: HTMLElement | null = document.querySelector(".originalH");
const bodyO: HTMLElement | null = document.querySelector(".originalB")
const dropDownMenuO:HTMLElement | null = document.querySelector(".dropdownMO")


const headerT: HTMLElement | null = document.querySelector(".translationH");
const bodyT: HTMLElement | null = document.querySelector(".translationB")
const dropDownMenuT:HTMLElement | null = document.querySelector(".dropdownMT")

const selectedO: HTMLElement | null = document.querySelector(".selectedO");
const selectedT: HTMLElement | null = document.querySelector(".selectedT");


const translateBtn: HTMLElement | null = document.querySelector(".translate");

const originalB:HTMLElement | null = document.querySelector('.originalB');
const translationB:HTMLElement | null = document.querySelector('.translationB');

const url = 'https://openai80.p.rapidapi.com/chat/completions';


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
				content: 'Hello!'
			}
		]
	}
};




const openMenuO = (e: Event) => {
    dropDownMenuO.classList.toggle("visible")
    bodyO.classList.toggle("hidden")   
};


const openMenuT = (e: Event) => {
    dropDownMenuT.classList.toggle("visible")
    bodyT.classList.toggle("hidden")    
};

headerO.onclick =  openMenuO;


headerT.onclick =  openMenuT;


const selectOLang = (e: Event ) => {
    const { target } = e;
    if((target as HTMLButtonElement).nodeName=="LI"){
        selectedO.textContent=(target as HTMLButtonElement).textContent;
    }
    dropDownMenuO.classList.toggle("visible")
    bodyO.classList.toggle("hidden")  
    

    
};


const selectTLang = (e: Event ) => {
    const { target } = e;

    if((target as HTMLButtonElement).nodeName=="LI"){
        selectedT.textContent=(target as HTMLButtonElement).textContent;
    }

    dropDownMenuT.classList.toggle("visible")
    bodyT.classList.toggle("hidden")  
};


dropDownMenuO.onclick=selectOLang;

dropDownMenuT.onclick=selectTLang;


const translate= async ()=>{
    // async prob ts
    // const query:string=`Translate ${originalB.textContent} from ${selectedO} to ${selectedT}`
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': '063b0494f2msh4df81d2bd9972cep175991jsn23c45138f8a8',
    //         'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    //     },
    //     body: JSON.stringify({
    //         model: 'gpt-3.5-turbo',
    //         messages: [
    //             {
    //                 role: 'user',
    //                 content: query
    //             }
    //         ]
    //     })
    // };
    
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }
    

}


translateBtn.onclick=translate;






export { };

