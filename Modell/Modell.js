class Modell{
    #latszik;
    #list = [];
    constructor(){
        this.#latszik = 0;
        this.#list = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    setLatszik(index){
        if(this.#list[index] == 1){
            this.#list[index] = 0;
        }else{
            this.#list[index] = 1;
        }
        console.log(this.#list);
    }

    getLatszik(index){
        return this.#list[index];
    }

}

export default Modell;