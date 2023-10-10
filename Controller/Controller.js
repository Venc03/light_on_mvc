import Modell from "../Modell/Modell.js";
import JatekterView from "../View/JatekterView.js";

class Controller{
    constructor(){
        this.MODELL = new Modell();
        this.VIEW = new JatekterView($(".palya"));
        $(window).on("felkapcs",(event)=>{
            this.MODELL.setLatszik(event.detail.getIndex());
            event.detail.lampaFel(this.MODELL.getLatszik(event.detail.getIndex()));
        })
    }
}

export default Controller;