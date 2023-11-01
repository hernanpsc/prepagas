import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-default',
	templateUrl: './default.component.html',
	styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
	@HostListener('window:beforeunload', ['$event'])
	unloadNotification($event: any): void {
        'Perdera todos los datos ingresados'
		$event.returnValue = true;
	}



}
