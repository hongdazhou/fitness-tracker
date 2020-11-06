import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs'

@Injectable()
export class UIService {
    loadingStateChanged = new Subject<boolean>();

    constructor(private snackBar: MatSnackBar) {

    }
    showSnackbar(message, action, duration) {
        this.snackBar.open(message, action, { duration: duration })
    }
}