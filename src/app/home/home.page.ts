import { Component, numberAttribute } from '@angular/core';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tudo: string = "ㅤ0"
  resul: string = "ㅤ"
  reset: number = 1
  conta: string = ""
  raizq: string = ""
  raizqint: number = 0
  raizcheck: number = 0
  delnot: number = 0

  constructor() {}

  digitos(valor: string){
    if (this.reset == 0){
      this.limpar()
    }
    if (this.tudo == "ㅤ0"){
      this.tudo="ㅤ"
    }
    if (this.raizcheck == 1){
      this.raizq += valor
      this.raizqint = parseInt(this.raizq)
      this.tudo += valor
    }
    this.tudo += valor
    this.conta += valor  
  }
  
  soma(){
    this.delnot = 0
    this.raizcheck = 0
    this.reset = 1
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "+"  
    this.conta += '+'
  }

  sub(){
    this.delnot = 0
    this.raizcheck = 0
    this.reset = 1
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "-"
    this.conta += '-'
  }

  multi(){
    this.delnot = 0
    this.raizcheck = 0
    this.reset = 1
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "x"
    this.conta += '*'
  }

  divi(){
    this.delnot = 0
    this.raizcheck = 0
    this.reset = 1
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "÷"
    this.conta += '/'
  }

  pi(){
    if (this.reset == 0){
      this.limpar()
    }
    if (this.tudo == "ㅤ0"){
      this.tudo="ㅤ"
    }
    this.tudo += "𝝿"
    this.conta += '3.1415926535'
  }

  ponto(){
    if (this.reset == 0){
      this.limpar()
    }
    this.tudo += ","
    this.conta +='.'
  }

  paren1(){
    if (this.reset == 0){
      this.limpar()
    }
    if (this.tudo == "ㅤ0"){
      this.tudo="ㅤ"
    }
    this.tudo += "("
    this.conta += '('
  }

  paren2(){
    if (this.reset == 0){
      this.limpar()
    }
    if (this.tudo == "ㅤ0"){
      this.tudo="ㅤ"
    }
    this.tudo += ")"
    this.conta += ')'
  }

  porcem(){
    this.reset = 1
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "%"
    this.conta += '/100'
  }

  elevado(){
    this.reset = 1
    this.tudo = this.tudo.replace('= ','');
    this.tudo += "^"
    this.conta += '**'
  }

  raiz(){

    if (this.reset == 0){
      this.limpar()
    }
    if (this.tudo == "ㅤ0"){
      this.tudo="ㅤ"
    }
    this.tudo += "√"
    this.raizcheck = 1
    this.conta += this.raizq
  }

  del(){
    if (this.delnot == 0){
      if (this.tudo != "ㅤ"){
        this.tudo = this.tudo.slice(0, -1)
        this.conta = this.conta.slice(0, -1)
      }
    }
  }

  resultado(){
    this.raizqint = Math.sqrt(this.raizqint)
    this.raizq = (this.raizqint).toString()
    this.conta = eval(this.conta)
    this.resul = this.tudo
    this.tudo = this.conta
    this.tudo = "= "+this.tudo
    this.reset = 0
    this.delnot = 1
    this.raizcheck = 0
  }

  limpar(){
    this.tudo = "ㅤ0"
    this.resul = "ㅤ"
    this.reset = 1
    this.conta = ""
    this.raizq = ""
    this.raizcheck = 0
    this.raizqint = 0
  }
}
