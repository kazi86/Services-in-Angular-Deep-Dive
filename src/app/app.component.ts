import { Component } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TasksComponent],
})
export class AppComponent {}
