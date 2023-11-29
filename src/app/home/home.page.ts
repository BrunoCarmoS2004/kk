import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {


  resultado: string = "0"
  calculo: string = ""
  conta: string = ""
  raizCheck: boolean = false
  raiz: string = ""
  raizInt: number = 0
  raizInt2: number = 0
  reset: boolean = true
  delNot: boolean = false
  sinalcheck: number = 0
  calculosHist: string [] = []
  resultadosHist: string [] = []
  digite: string = "0"
  resultConversor: string = "0"
  contaConversor:string = "0"
  select1: string = ""
  select2: string = ""
  inteiro: number = 0
  numeroSelect1: string = ""
  numeroSelect2: string = ""
  limphist: number = 0

  constructor(private menu: MenuController) {}


  func_digitos(valor: string){
    this.sinalcheck = 0
    if (this.reset == false){
      this.func_limpar()
    }
    if (this.resultado == "0"){
      this.resultado=""
    }
    if (this.raizCheck == true){
      this.raizInt2 = 0
      this.raiz += valor
      this.raizInt = parseInt(this.raiz)
      this.raizInt2 = Math.sqrt(this.raizInt)
      this.resultado += valor
    }
    if (this.raizCheck != true){
      this.resultado += valor
      this.conta += valor  
    }
  }


  func_soma(){
    if (this.sinalcheck == 1){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizCheck == true){
      this.conta += this.raizInt2
    }
      this.reset = true
      this.resultado = this.resultado.replace('= ','');
      this.resultado += "+"  
      this.conta += '+'
      this.sinalcheck = 1
      this.delNot = false
      this.raizCheck = false
  }


  func_sub(){
    if (this.sinalcheck == 1){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizCheck == true){
      this.conta += this.raizInt2
    }
    this.reset = true
    this.resultado = this.resultado.replace('= ','');
    this.resultado += "-"
    this.conta += '-'
    this.sinalcheck = 1
    this.delNot = false
    this.raizCheck = false
  }


  func_multi(){
    if (this.sinalcheck == 1){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizCheck == true){
      this.conta += this.raizInt2
    }
    this.reset = true
    this.resultado = this.resultado.replace('= ','');
    this.resultado += "x"
    this.conta += '*'
    this.sinalcheck = 1
    this.delNot = false
    this.raizCheck = false
  }


  func_divi(){
    if (this.sinalcheck == 1){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizCheck == true){
      this.conta += this.raizInt2
    }
    this.reset = true
    this.resultado = this.resultado.replace('= ','');
    this.resultado += "÷"
    this.conta += '/'
    this.sinalcheck = 1
    this.delNot = false
    this.raizCheck = false
  }


  func_pi(){
    if (this.reset == false){
      this.func_limpar()
    }
    if (this.resultado == "0"){
      this.resultado=""
    }
    this.resultado += "𝝅"
    this.conta += '3.1415926535'
  }


  func_ponto(){
    if (this.reset == false){
      this.func_limpar()
    }
    this.resultado += ","
    this.conta +='.'
  }


  func_paren1(){
    if (this.reset == false){
      this.func_limpar()
    }
    if (this.resultado == "0"){
      this.resultado=""
    }
    this.resultado += "("
    this.conta += '('
  }


  func_paren2(){
    if (this.reset == false){
      this.func_limpar()
    }
    if (this.resultado == "0"){
      this.resultado=""
    }
    this.resultado += ")"
    this.conta += ')'
  }


  func_porcem(){
    this.reset = true
    this.resultado = this.resultado.replace('= ','');
    this.resultado += "%"
    this.conta += '/100'
  }


  func_elevado(){
    if (this.sinalcheck == 1){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if(this.raizCheck == true){
      this.conta += this.raizInt2
    }
    this.reset = true
    this.resultado = this.resultado.replace('= ','');
    this.resultado += "^"
    this.conta += '**'
    this.sinalcheck = 2
    this.delNot = false
    this.raizCheck = false
  }


  func_raiz(){
    if (this.sinalcheck == 1){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -1)
    }
    if (this.sinalcheck == 2){
      this.resultado = this.resultado.slice(0, -1)
      this.conta = this.conta.slice(0, -2)
    }
    if (this.reset == false){
      this.func_limpar()
    }
    if (this.resultado == "0"){
      this.resultado=""
    }
    if (this.conta == "0"){
      this.conta=""
    }
    this.conta += "*"
    this.resultado += "√"
    this.raizCheck = true
    this.sinalcheck = 1
  }


  func_del(){
    if (this.delNot == false){
      if (this.resultado != ""){
        this.resultado = this.resultado.slice(0, -1)
        this.conta = this.conta.slice(0, -1)
      }
      if (this.resultado == ""){
        this.resultado += 0
      }
    }
  }


  func_resultado(){
    if (this.raizCheck == true){
      this.conta += this.raizInt2
    }
    if(this.resultado == "0"){
      this.conta = "0"
    }
    this.conta = eval(this.conta)
    this.calculo = this.resultado
    this.resultado = "= "+this.conta
    this.calculo = this.calculo.replace("=","")
    this.resultadosHist.unshift(this.resultado)
    this.calculosHist.unshift(this.calculo)
    this.reset = false
    this.delNot = true
    this.raizCheck = false
    this.limphist++
  }


  func_limpar(){
    this.resultado = "0"
    this.calculo = ""
    this.digite = "0"
    this.resultConversor = "0"
    this.conta = ""
    this.raiz = ""
    this.raizInt = 0
    this.raizInt2 = 0
    this.reset = true
    this.delNot = false
    this.raizCheck = false
    this.contaConversor = ""
  }
 
  // Histórico ----


  func_digitosHistorico(valor:string){
    if (this.resultado == "0"){
      this.resultado=""
    }
    if(valor == null){


    }else{
      this.resultado += valor
      this.conta += valor
    }
    this.menu.close();
  }


  func_limparhist(){
    for(var i = 0; i <= this.limphist; i++){
      this.calculosHist.pop()
      this.resultadosHist.pop()
    }
    this.menu.close();
    this.limphist = 0 
  }


  // Conversor ----


  alertButtons = ['CONCORDAR'];


  func_openConversor(){
    this.menu.open('conversor')
  }


  func_digitosConversor(valor: string){
    this.sinalcheck = 0
   
    if (this.reset == false){
      this.func_limpar()
    }
    if (this.digite == "0"){
      this.digite=""
    }
    this.digite += valor
    this.contaConversor = this.digite
  }
 
  var1(ev: any){
    this.select1 = JSON.parse(ev.target.value)
    this.numeroSelect1 = this.select1.toString()
  }


  var2(ev: any){
    this.select2 = JSON.parse(ev.target.value)
    this.numeroSelect2 = this.select2.toString()
  }


  conversor(){
    switch(this.numeroSelect1){
      case '1':
        switch(this.numeroSelect2){
          case '1':
            this.resultConversor = this.digite
          break;
          case '2':
            this.inteiro = parseInt(this.digite) / 10
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '3':
            // resultConversor = digite / 1000
            this.inteiro = parseInt(this.digite) / 1000
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '4':
            // resultConversor = digite / 25,4
            this.inteiro = parseInt(this.digite) / 25,4
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '5':
            // resultConversor = digite / 304,8
            this.inteiro = parseInt(this.digite) / 304,8
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
        }
      break;
      case '2':
        switch(this.numeroSelect2){
          case '1':
            // resultConversor = digite * 10
            this.inteiro = parseInt(this.digite) * 10
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '2':
            this.resultConversor = this.digite
          break;
          case '3':
            // resultConversor = digite / 100
            this.inteiro = parseInt(this.digite) / 100
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '4':
            // resultConversor = digite / 2,54
            this.inteiro = parseInt(this.digite) / 2,54
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '5':
            // resultConversor = digite / 30,48
            this.inteiro = parseInt(this.digite) / 30,48
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
        }
      break;
      case '3':
        switch(this.numeroSelect2){
          case '1':
            // resultConversor = digite * 1000
            this.inteiro = parseInt(this.digite) * 1000
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '2':
            // resultConversor = digite * 100
            this.inteiro = parseInt(this.digite) * 100
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '3':
            this.resultConversor = this.digite
          break;
          case '4':
            // resultConversor = digite * 39,3701
            this.inteiro = parseInt(this.digite) * 39,3701
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '5':
            // resultConversor = digite * 3,281
            this.inteiro = parseInt(this.digite) * 3,281
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
        }
      break;
      case "4":
        switch(this.numeroSelect2){
          case '1':
            // resultConversor = digite * 25,4
            this.inteiro = parseInt(this.digite) * 25,4
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '2':
            // resultConversor = digite * 2,4
            this.inteiro = parseInt(this.digite) * 2,4
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '3':
            // resultConversor = digite / 39,37
            this.inteiro = parseInt(this.digite) / 39,37
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '4':
            this.resultConversor = this.digite
          break;
          case '5':
            // resultConversor = digite / 12
            this.inteiro = parseInt(this.digite) / 12
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
        }
      break;
      case "5":
        switch(this.numeroSelect2){
          case '1':
            // resultConversor = digite * 304,8
            this.inteiro = parseInt(this.digite) * 304,8
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '2':
            // resultConversor = digite * 30,48
            this.inteiro = parseInt(this.digite) * 30,48
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '3':
            // resultConversor = digite / 3,281
            this.inteiro = parseInt(this.digite) / 3,281
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '4':
            // resultConversor = digite * 12
            this.inteiro = parseInt(this.digite) * 12
            this.contaConversor = this.inteiro.toString()
            this.resultConversor = this.contaConversor
          break;
          case '5':
            this.resultConversor = this.digite
          break;
        }
      break;
    }
  }
}
