import { Injectable } from '@nestjs/common';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { UserDTO } from './user/user.interface';
const config = require('../key.json');

@Injectable()
export class SpreadsheetService {
  #spreadhsheet: GoogleSpreadsheet;

  constructor(id: string) {
    this.#spreadhsheet = new GoogleSpreadsheet(id);
    this.#spreadhsheet
      .useServiceAccountAuth(config)
      .catch(console.error)
      .then(() => this.#spreadhsheet.loadInfo());
  }

  public findMany = (sheetName: string) => async (): Promise<UserDTO[]> => {
    const sheet = this.#spreadhsheet.sheetsByTitle[sheetName];
    await sheet.loadCells();
    const rows = await sheet.getRows();

    return rows.map(({ rowIndex }) => ({
      id: String(sheet.getCell(rowIndex - 1, 1).value),
      firstName: String(sheet.getCell(rowIndex - 1, 2).value),
      lastName: String(sheet.getCell(rowIndex - 1, 3).value),
      age: Number(sheet.getCell(rowIndex - 1, 4).value),
      createdAt: new Date(String(sheet.getCell(rowIndex - 1, 5).value)),
    }));
  };

  public user = {
    findMany: this.findMany('user'),
  };
}
