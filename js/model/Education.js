class Education{

    constructor(instituicao, periodo, formacao){

        this._instituicao = instituicao;
        this._periodo = periodo;
        this._formacao = formacao;
    }

    get instituicao() {

        return this._instituicao;
    }

    get periodo(){

        return this._periodo;
    }

    get formacao(){

        return this._formacao;
    }
}