import {
  VElement
} from '../dom/VElement.js'

export class PQ {
  Vprocesses: Array<VElement>;
  constructor() {
    this.Vprocesses = new Array<VElement>();
  }
  
  enqueue (
    Vprocess: VElement
  ) {
    this.Vprocesses.push(Vprocess);
  }
  
  dequeue () {
    return this.Vprocesses.shift();
  }
}