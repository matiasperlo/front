import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { RouterOutlet } from '@angular/router';
import { MatPaginatorIntlEs } from './intl/mat-paginator.intl-es';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [{
    provide: MatPaginatorIntl,
    useClass: MatPaginatorIntlEs
  }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
}
