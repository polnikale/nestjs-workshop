import { Injectable } from '@nestjs/common';
import { GoogleSpreadsheet } from 'google-spreadsheet';
// import config from '../key.json';

@Injectable()
export class SpreadsheetService {
  #spreadhsheet: GoogleSpreadsheet;

  constructor(id: string) {
    this.#spreadhsheet = new GoogleSpreadsheet(id);
    this.#spreadhsheet.useServiceAccountAuth({} as any);
  }
}
