// import { Message } from './message';
// import { MessageType } from "../enums";
// import { MessageService } from "../service/message.service";
import { ResponseStatus } from '../enum/response-status';

/**
 * ApiResponse
 */
export class ApiResponse<T> {

    /* ************************************ Instance Fields ************************************ */
    code: number;
    status: string;
    body: T | null;
    data: any; // Map<String, Object>
    msg: string | null; // List<Message>
    errorMessage: string | null;

    /* ************************************ Constructors ************************************ */
    constructor() {
        this.code = 200;
        this.status = ResponseStatus[ResponseStatus.SUCCESS];
        this.body = null;
        this.data = null;
        this.msg = null;
        this.errorMessage = null;
    }


    /* ************************************ Public Methods ************************************ */
    // public addMessage(type: string, text: string, title?: string | undefined, param?: Array<string> | undefined) {
    //     this._mergeMessage(type, text, title, param);
    // }

    // public addSuccessMessage(text: string, title?: string, param?: Array<string>) {
    //     this._mergeMessage(MessageType[MessageType.SUCCESS], text, title, param);
    // }

    // public addErrorMessage(text: string, title?: string, param?: Array<string>) {
    //     this._mergeMessage(MessageType[MessageType.ERROR], text, title, param);
    // }

    // public addInfoMessage(text: string, title?: string, param?: Array<string>) {
    //     this._mergeMessage(MessageType[MessageType.INFO], text, title, param);
    // }

    // public addWarningMessage(text: string, title?: string, param?: Array<string>) {
    //     this._mergeMessage(MessageType[MessageType.WARNING], text, title, param);
    // }

    /* ************************************ Private Methods ************************************ */
    /**
     'msg': [
     {
     'type': 'info',
     'value': [
       {
       'title': 'Info Title',
       'text': 'body for info msg param {foo} value',
       'param': {'foo': 'bar'}
       }
     ]
     },
     */

    /*
    private _addMessage(type: string, text: string, title?: string, param?: Array<string>) {
      const message = <Message>{};
      message.type = type;
      message.value = [];
      const messageVal = <MessageValue>{};
      messageVal.text = text;
      messageVal.title = title;
      messageVal.param = param;
      message.value.push(messageVal);
  
      if (!this.msg) {
        this.msg = [];
      }
      this.msg.push(message);
    }
  */
    // private _mergeMessage(type: string, text: string, title?: string | undefined, param?: Array<string> | undefined) {
    //     if (!this.msg) {
    //         this.msg = [];
    //     }
    //     new MessageService().mergeMessage(this.msg, type, text, title, param);
    // }

    /*
    private _mergeMessage(type: string, text: string, title?: string | undefined, param?: Array<string> | undefined) {
      const messageVal = <MessageValue>{};
      messageVal.text = text;
      messageVal.title = title;
      messageVal.param = param;
  
      if (!this.msg) {
        this.msg = [];
      }
  
      let matchIndex = -1;
      let index = 0;
      this.msg.forEach(indMsg => {
        if (indMsg.type == type) {
          //message = indMsg;
          matchIndex = index;
        }
        index++;
      });
      console.log('here in matchIndex ', matchIndex);
      let message: Message = <Message>{};
      if(matchIndex > -1) {
        message = this.msg[matchIndex];
      } else {
        this.msg.push(message);
      }
  
      if (!message.type || !message.value) {
        message.type = type;
        message.value = [];
      }
  
      message.value.push(messageVal);
    }
    */
}
