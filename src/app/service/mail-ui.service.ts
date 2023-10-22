import { copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Injectable } from '@angular/core';
import { MJMLBlock, MJMLBlocks, mjmlBlocks } from '../utils/mjmlBlocks';

@Injectable({
  providedIn: 'root'
})
export class MailUiService {

  private _mjmlBlocks: MJMLBlocks = mjmlBlocks;
  public get mjmlBlocks(): MJMLBlocks {
    return this._mjmlBlocks;
  }

  constructor() { }

  drop(event: any) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (event.previousContainer.data) {
      this._mjmlBlocks = this._mjmlBlocks.filter(mjmlBlock => !mjmlBlock.temp);
    }
  }

  exited(event: any) {
    const currentIdx = event.container.data.findIndex(
      (mjmlBlock: MJMLBlock) => mjmlBlock.name === event.item.data.name
    );
    this._mjmlBlocks.splice(currentIdx + 1, 0, {
      ...event.item.data,
      temp: true,
    });
  }
  entered() {
    this._mjmlBlocks = this._mjmlBlocks.filter((mjmlBlock) => !mjmlBlock.temp);
  }
}
