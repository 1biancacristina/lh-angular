export class Vaga{
    
        id: number = 0;
        nome: string = "";
        foto: string = "";
        descricao: string = "";
        salario: number = 0;

        requisitosObrigatorios: string = "";
        requisitosDesejaveis:string = "";
        beneficios: string = "";
        localDeTrabalho: string = "";
        status: number = 0;


        constructor(id:number, nome:string, foto:string, descricao: string, salario: number, requisitosObrigatorios: string,requisitosDesejaveis: string,
            beneficios:string, localDeTrabalho:string, status: number ){
            this.id  = id;
            this.nome  = nome;
            this.foto = foto;
            this.descricao  = descricao;
            this.salario = salario;
            this.requisitosObrigatorios = requisitosObrigatorios,
            this.requisitosDesejaveis = requisitosDesejaveis,
            this.beneficios = beneficios,
            this.localDeTrabalho = localDeTrabalho,
            this.status = status

        }
    }