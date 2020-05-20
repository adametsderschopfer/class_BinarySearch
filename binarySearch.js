class BinarySearch {
  constructor(list) {
    if (!list) {
      throw new Error("You did not put the array in the constructor");
    } else {
      this.list = list.sort();
      this.last = list.length - 1;
    }

    this.first = 0;
    this.found = false;
    this.position;
    this.middle;
  }

  search(value) {
    while (this.found === false && this.first <= this.last) {
      this.middle = Math.floor((this.first + this.last) / 2);
      if (this.list[this.middle] === value) {
        this.found = true;
        this.position = this.middle;
      } else if (this.list[this.middle] > value) {
        this.last = this.middle - 1;
      } else {
        this.first = this.middle + 1;
      }
    }

    if (!this.position) {
      this.position = String("Selected value not found");
    }

    return {
      inLog: () => {
        console.log(this.position);
      },
      value: () => {
        return this.position;
      },
    };
  }
}
