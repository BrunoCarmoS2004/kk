import { Component, numberAttribute } from '@angular/core';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';
import { timer } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  tudo: string = "0"
  resul: string = ""
  conta: string = ""
  raizq: string = ""
  raizqint: number = 0
  raizqint2: number = 0
  reset: boolean = true
  raizcheck: boolean = false
  delnot: boolean = false
  sinalcheck: number = 0
  resultados: string [] = []
  contas: string [] = []


  constructor() {}


  limparhist(){
    for(var i = 0; i <= this.resultados.length; i++){
      this.resultados.pop()
      this.contas.pop()
    }
  }


  digitos(valor: string){
    this.sinalcheck = 0
    if (this.reset == false){
      this.limpar()
    }
    if (this.tudo == "0"){
      this.tudo=""
    }
    if (this.raizcheck == true){
      this.raizqint2 = 0
      this.raizq += valor
      this.raizqint = parseInt(this.raizq)
      this.raizqint2 = Math.sqrt(this.raizqint)
      this.tudo += valor
    }
    if (this.raizcheck != true){
      this.tudo += valor
      this.conta += valor  
    }
  }

  digitosHistorico(valor:string){
    if(valor == null){
    }else{
      this.tudo += valor
      this.conta += valor  
    }
  }
 
  soma(){
    if (this.sinalcheck == 1){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizcheck == true){
      this.conta += this.raizqint2
    }
      this.reset = true
      this.tudo = this.tudo.replace('= ','');
      this.tudo += "+"  
      this.conta += '+'
      this.sinalcheck = 1
      this.delnot = false
      this.raizcheck = false
  }




  sub(){
    if (this.sinalcheck == 1){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizcheck == true){
      this.conta += this.raizqint2
    }
    this.reset = true
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "-"
    this.conta += '-'
    this.sinalcheck = 1
    this.delnot = false
    this.raizcheck = false
  }




  multi(){
    if (this.sinalcheck == 1){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizcheck == true){
      this.conta += this.raizqint2
    }
    this.reset = true
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "x"
    this.conta += '*'
    this.sinalcheck = 1
    this.delnot = false
    this.raizcheck = false
  }




  divi(){
    if (this.sinalcheck == 1){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizcheck == true){
      this.conta += this.raizqint2
    }
    this.reset = true
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "÷"
    this.conta += '/'
    this.sinalcheck = 1
    this.delnot = false
    this.raizcheck = false
  }




  pi(){
    if (this.reset == false){
      this.limpar()
    }
    if (this.tudo == "0"){
      this.tudo=""
    }
    this.tudo += "𝝅"
    this.conta += '3.1415926535'
  }




  ponto(){
    if (this.reset == false){
      this.limpar()
    }
    this.tudo += ","
    this.conta +='.'
  }




  paren1(){
    if (this.reset == false){
      this.limpar()
    }
    if (this.tudo == "0"){
      this.tudo=""
    }
    this.tudo += "("
    this.conta += '('
  }




  paren2(){
    if (this.reset == false){
      this.limpar()
    }
    if (this.tudo == "0"){
      this.tudo=""
    }
    this.tudo += ")"
    this.conta += ')'
  }




  porcem(){
    this.reset = true
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "%"
    this.conta += '/100'
  }




  elevado(){
    if (this.sinalcheck == 1){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.tudo = this.tudo.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizcheck == true){
      this.conta += this.raizqint2
    }
    this.reset = true
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "^"
    this.conta += '**'
    this.sinalcheck = 2
    this.delnot = false
    this.raizcheck = false
  }




  raiz(){
    if (this.reset == false){
      this.limpar()
    }
    if (this.tudo == "0"){
      this.tudo=""
    }
    this.tudo += "√"
    this.raizcheck = true
  }




  del(){
    if (this.delnot == false){
      if (this.tudo != ""){
        this.tudo = this.tudo.slice(0, -1)
        this.conta = this.conta.slice(0, -1)
      }
      if (this.tudo == ""){
        this.tudo += 0
      }
    }
  }




  resultado(){
    if (this.raizcheck == true){
      this.conta += this.raizqint2
    }
    if (this.tudo == "0"){
      this.conta = "0"
    }
    this.conta = eval(this.conta)
    this.resul = this.tudo
    this.tudo = this.conta
    this.tudo = "= "+this.tudo
    this.contas.unshift(this.tudo)
    this.resultados.unshift(this.resul)
    this.reset = false
    this.delnot = true
    this.raizcheck = false
    
  }




  limpar(){
    this.tudo = "0"
    this.resul = ""
    this.conta = ""
    this.raizq = ""
    this.raizqint = 0
    this.raizqint2 = 0
    this.reset = true
    this.delnot = false
    this.raizcheck = false
  }
}




