import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public numeroChave = '';
  public timer1: any = null;
  public time = 500;
  public btn2: boolean = false;
  public btn3: boolean = false;
  public btn4: boolean = false;
  public btn5: boolean = false;
  public btn6: boolean = false;
  public btn7: boolean = false;
  public btn8: boolean = false;
  public btn9: boolean = false;
  public btn11: boolean = false;
  public butaoDesabilitado: boolean = false;

  @HostListener('window:mousedown', ['$event'])
  onMouseDown(event: any) {
    if (this.timer1 === null) {
      this.timer1 = setInterval(() => {
        switch (event.target.id) {
          case 'botao-2':
            this.butaoDesabilitado = true;
            this.btn2 = true;
            break;
          case 'botao-3':
            this.butaoDesabilitado = true;
            this.btn3 = true;
            break;
          case 'botao-4':
            this.butaoDesabilitado = true;
            this.btn4 = true;
            break;
          case 'botao-5':
            this.butaoDesabilitado = true;
            this.btn5 = true;
            break;
          case 'botao-6':
            this.butaoDesabilitado = true;
            this.btn6 = true;
            break;
          case 'botao-7':
            this.butaoDesabilitado = true;
            this.btn7 = true;
            break;
          case 'botao-8':
            this.butaoDesabilitado = true;
            this.btn8 = true;
            break;
          case 'botao-9':
            this.butaoDesabilitado = true;
            this.btn9 = true;
            break;
          case 'botao-11':
            this.butaoDesabilitado = true;
            this.btn11 = true;
            break;
          default:
            break;
        }
      }, this.time);
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: any) {
    clearInterval(this.timer1);
    this.timer1 = null;
  }

  inserirLetra(event: any) {
    if (event.target.getAttribute('data-btn') == 'btn2') {
      this.btn2 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    } else if (event.target.getAttribute('data-btn') == 'btn3') {
      this.btn3 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    } else if (event.target.getAttribute('data-btn') == 'btn4') {
      this.btn4 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    } else if (event.target.getAttribute('data-btn') == 'btn5') {
      this.btn5 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    } else if (event.target.getAttribute('data-btn') == 'btn6') {
      this.btn6 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    } else if (event.target.getAttribute('data-btn') == 'btn7') {
      this.btn7 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    } else if (event.target.getAttribute('data-btn') == 'btn8') {
      this.btn8 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    } else if (event.target.getAttribute('data-btn') == 'btn9') {
      this.btn9 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    } else if (event.target.getAttribute('data-btn') == 'btn11') {
      this.btn11 = false;
      this.butaoDesabilitado = false;
      this.inserirTecla(event);
    }
  }

  public inserirTecla(tecla: any): void {
    let valor = tecla.target.getAttribute('data-btn-value');
    if (valor != null) {    
      if (valor === '') {
        if (this.numeroChave.length > 0) {
          this.numeroChave = this.numeroChave.slice(
            0,
            this.numeroChave.length - 1
          );
        }
      } else {
        this.numeroChave += valor;
      }
    }
  }
}
