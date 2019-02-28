import {Injectable} from '@angular/core';
import {SwPush} from '@angular/service-worker';
import {from as fromPromise, Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ApiService} from './api.service';

@Injectable()
export class PushNotificationService {
    private pushSubscription: PushSubscription;

    get available(): boolean {
        return this.swPush.isEnabled;
    }

    constructor(private readonly swPush: SwPush, private readonly apiService: ApiService) {
    }

    async register() {
        if (!this.swPush.isEnabled) {
            return;
        }

        // Key generation: https://web-push-codelab.glitch.me
       // TODO
    }

    unregister(): Observable<boolean> {
        if (this.pushSubscription) {
            return fromPromise(this.pushSubscription.unsubscribe());
        }

        return of(true);
    }
}
