import * as path from 'path';

export class YakbakConfig {
  private path: string;

  // tslint:disable-next-line: variable-name
  private _tapeName: string;
  get tape() {
    return this._tapeName;
  }
  set tape(name: string) {
    this._tapeName = name;
    this._setPath();
  }

  // tslint:disable-next-line: variable-name
  private _baseDir = '';
  get baseDir() {
    return this._baseDir;
  }
  set baseDir(value: string) {
    this._baseDir = value;
    this._setPath();
  }

  getPath() {
    return this.path;
  }

  private _setPath() {
    this.path = path.resolve(this._baseDir, this._tapeName);
  }
}
