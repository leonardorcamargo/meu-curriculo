class Skill{
    
    constructor(nome, percentual){
        this._nome = nome;
        this._percentual = percentual;
    }

    get nome(){

        return this._nome;
    }

    get percentual(){
        
        return this._percentual;
    }
}