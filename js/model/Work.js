class Work{
    constructor(empresa, periodo, detalhes){

        this._empresa = empresa;
        this._periodo = periodo;
        this._detalhes = detalhes;
    }

    get empresa(){
        
        return this._empresa;
    }

    get periodo (){

        return this._periodo;
    }

    get detalhes(){

        return this._detalhes;
    }
}