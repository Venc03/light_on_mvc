class View{
    #index;
    constructor(szuloElem, index){
        this.szuloElem = szuloElem;
        this.#index = index;
        this.#htmlOsszerak();
        this.lampaElem=$("div:last-child");
        this.pElem = szuloElem.children(".felkapcs");;


        this.lampaElem.on("click",()=>{
                this.#sajatEsemeny("felkapcs");
        })
    }  



    getIndex(){
        return this.#index
    }



    #sajatEsemeny(esemenynev){
        console.log(esemenynev)
        const esemenyem = new CustomEvent(esemenynev, { detail: this })
        window.dispatchEvent(esemenyem)
    }


    
    #htmlOsszerak(){
        let txt="<div class='felkapcs'><p></p></div>"
        this.szuloElem.append(txt);
    }



    lampaFel(elem) {
        console.log(elem);
        if (elem == 1) {
            this.lampaElem.css("background-color", "yellow");
        } else if(elem == 0){
            this.lampaElem.css("background-color", "black");
        }
    }
}

export default View;