import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, delay, finalize, map, retryWhen, take, tap, timeout } from "rxjs/operators";
import { LoaderService } from './loader.service';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class RequestHeaderInterceptorService implements HttpInterceptor {
  faExclamationCircle = faExclamationCircle;

  constructor(private loader: LoaderService, private alertController: AlertController) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = new HttpHeaders();//.set('Authorization', this.session);
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Access-Control-Allow-Origin', '*');
    const cloneReq = req.clone({ headers });
    this.loader.present();
    return next.handle(cloneReq).pipe(
      timeout(30000),
      // retryWhen(err => {
      //   let retries = 1;
      //   return err.pipe(
      //     delay(1000),
      //     map(error => {
      //       if(retries++ === 3) {
      //         throw error
      //       }
      //       return error
      //     })
      //   )
      // }),
      catchError(err => {
        console.log('error ', err);
        this.presentFailedAlert();
        return EMPTY
      }),
      finalize(() => {
        this.loader.dismiss();
      })
    )
  }

  async presentFailedAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Not able to load data. Plese try again later',
      buttons: ['OK']
    });
    await alert.present();
  }
}
