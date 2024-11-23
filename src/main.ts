import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { InjectionToken } from '@angular/core';
import { LoggingService } from './app/services/logging.service';


export const token = new InjectionToken<LoggingService>('Logging Service Token')


bootstrapApplication(AppComponent,{providers:[{provide:token,useClass:LoggingService}]}).catch((err) => console.error(err));
