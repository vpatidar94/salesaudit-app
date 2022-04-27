import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {DbKey} from '../../@core-web/enums/db-key';


@Injectable()
export class KeyValueStorageService {

  /* ************************************ Constructors ************************************ */
  constructor(private storage: LocalStorageService) {
  }

  /* ************************************ Public Methods ************************************ */
  public saveJwtToken(entity: string): void {
    this._insertOrUpdate(DbKey.TOKEN_JWT, entity);
  }

  /* ************************************ GET Methods ************************************ */
  public getJwtToken(): string {
    return this._get(DbKey.TOKEN_JWT, '');
  }

  public removeToken() {
    this.clear(DbKey[DbKey.TOKEN_JWT]);
  }

  
  public clear(key: string): void {
    this.storage.clear(key);
  }

  public clearAll() {
    this.storage.clear();
  }

  /* ************************************ Private Methods ************************************ */
  private _get<T>(dbKey: DbKey, defaultValue: T): T {
    return this._getVal(DbKey[dbKey], defaultValue);
  }

  private _insertOrUpdate(key: DbKey, value: any): void {
    this.storage.store(DbKey[key], value);
  }

  private _value(key: string): any {
    return this.storage.retrieve(key);
  }

  private _getVal<T>(key: string, defaultValue: T): T {
    const jsonVal = this._value(key);
    if (jsonVal) {
      return <T>jsonVal;
    }
    return null;
  }

}
