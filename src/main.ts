/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';

function loggingInterceptor(request:HttpRequest<unknown> , next:HttpHandlerFn){
  console.log('[Outgoing Request]')
  console.log(request)
   return next(request).pipe(
    tap({
      next:event=>{
        if(event.type === HttpEventType.Response){
          console.log('[Incoming Respose]')
          console.log(event.status);
          console.log(event.body)
        }
      }
    })
   );
}

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(
      withInterceptors([
        loggingInterceptor
      ])
    )
  ]
}).catch((err) => console.error(err));
