import { EventEmitter, Injectable } from '@angular/core';

/**
 * GlobalEmitterService
 */
@Injectable()
export class GlobalEmitterService {

    /* ************************************ Instance Fields ************************************ */
    private messageEmitter: EventEmitter<any> = new EventEmitter<any>();
    private setupEmitter: EventEmitter<any> = new EventEmitter<any>();
    private apiProgressEmitter: EventEmitter<any> = new EventEmitter<any>();

    /* ************************************ Constructors ************************************ */
    constructor() {
    }

    /* ************************************ Public Methods ************************************ */
    public addMsg(msg: string) {
        this._addMsg(msg);
    }

    public getMessageEmitter() {
        return this.messageEmitter;
    }

    public setupDone() {
        this.setupEmitter.emit("DONE");
    }

    public getSetupEmitter() {
        return this.setupEmitter;
    }

    public startSpinner(): void {
        this.apiProgressEmitter.emit(true);
        setTimeout(() => {
            this.stopSpinner();
        }, 30000);
    }

    public stopSpinner(): void {
        this.apiProgressEmitter.emit(false);
    }

    public getApiProgressEmitter() {
        return this.apiProgressEmitter;
    }

    /* ************************************ get ************************************ */
    /* ************************************ Private Methods ************************************ */
    private _addMsg(msg: string) {
        // process message if needed
        this._emitMessage(msg);
        setTimeout(() => {
            this._emitMessage(undefined);
        }, 6000);
    }

    private _emitMessage(_message: string) {
        this.messageEmitter.emit(_message);
    }
}
