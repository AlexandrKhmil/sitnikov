import {Interpolation} from './interpolation'

export class Lagrange extends Interpolation {
  constructor(data) {
    super(data)
  }

  getPoint(x) {
    return this.data.reduce((previousSum, item, index, array) => 
      previousSum 
        + item[1]
        * array.reduce((inPrev, inItem, inIndex) => 
			      (index != inIndex) ? inPrev * (x - inItem[0]) : inPrev 
        , 1) 
        / array.reduce((inPrev, inItem, inIndex) => 
          (index != inIndex) ? inPrev * (item[0] - inItem[0]) : inPrev 
        , 1) 
    , 0)
  }
}