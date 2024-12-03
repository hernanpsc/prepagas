import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css']
})
export class IncrementorComponent {
  @Input() valor = 18;
  @Output() valorTitularCambiado = new EventEmitter<number>();

  private intervalId: any;  // Para almacenar el ID del intervalo

  // Detecta la presion de un boton para incrementar o decrementar
  @HostListener('mousedown', ['$event'])
  onMouseDown(event: Event) {
    if (event.target instanceof HTMLElement) {
      const clickedButtonId = event.target.id;

      // Si es el primer botón específico (solo incremento o decremento una vez)
      if (clickedButtonId === 'incrementButtonHijos') {
        this.incrementar();  // Ejecutar solo una vez
      } else if (clickedButtonId === 'decrementButtonHijos') {
        this.decrementar();  // Ejecutar solo una vez
      } else {
        // Si es el botón de incrementar o decrementar (comportamiento continuo)
        if (clickedButtonId === 'incrementButton') {
          // Solo se ejecuta si no está ya en un intervalo
          if (this.intervalId) return;  // Evitar múltiples intervalos
          this.intervalId = setInterval(() => {
            this.incrementar();
          }, 100);
        } else if (clickedButtonId === 'decrementButton') {
          // Solo se ejecuta si no está ya en un intervalo
          if (this.intervalId) return;  // Evitar múltiples intervalos
          this.intervalId = setInterval(() => {
            this.decrementar();
          }, 100);
        }
      }
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: Event) {
    // Detener el intervalo cuando se suelta el botón
    clearInterval(this.intervalId);
    this.intervalId = null;  // Limpiar el ID del intervalo
  }

  incrementar() {
    this.valor++;
    this.emitirNuevoValor();
  }

  decrementar() {
    if (this.valor > 18) {
      this.valor--;
      this.emitirNuevoValor();
    }
  }

  private emitirNuevoValor() {
    this.valorTitularCambiado.emit(this.valor);
  }
}
