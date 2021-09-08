import { Injectable } from '@nestjs/common';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { IUser } from './user/user.interface';
import { ProviderInterface } from './user/user.service';
const config = require('../key.json');

@Injectable()
export class SpreadsheetService implements ProviderInterface {
  #spreadsheet: GoogleSpreadsheet;

  constructor(private readonly id: string) {
    this.#spreadsheet = new GoogleSpreadsheet(id);

    this.#spreadsheet
      .useServiceAccountAuth(config)
      .then(() => this.#spreadsheet.loadInfo());
  }

  public findMany = (sheetTitle: string) => async (): Promise<IUser[]> => {
    console.log(`Finding sheet ${sheetTitle}`);
    const sheet = this.#spreadsheet.sheetsByTitle[sheetTitle];
    await sheet.loadCells();
    const rows = await sheet.getRows();

    return rows.map(({ rowIndex }) => ({
      id: String(sheet.getCell(rowIndex - 1, 1).value),
      firstName: String(sheet.getCell(rowIndex - 1, 2).value),
      lastName: String(sheet.getCell(rowIndex - 1, 3).value),
      age: Number(sheet.getCell(rowIndex - 1, 4).value),
      createdAt: String(sheet.getCell(rowIndex - 1, 5).value),
    }));
  };

  public user = {
    findMany: this.findMany('user'),
    create: () => Promise.resolve(undefined),
  };
}
