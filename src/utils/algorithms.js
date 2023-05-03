export function bubbleSort(bars) {
  const pairs = [];
  let num = bars.length;
  const prevBar = bars.slice();
  for (let i = 0; i < num - 1; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      if (prevBar[j].height > prevBar[j + 1].height) {
        const bari = { ...prevBar[j] };
        const barj = { ...prevBar[j + 1] };
        prevBar[j + 1] = bari;
        prevBar[j] = barj;
        pairs.push({
          x: j,
          y: j + 1,
          changed: true,
        });
      } else {
        pairs.push({
          x: j,
          y: j + 1,
          changed: false,
        });
      }
      if (j === num - i - 2) {
        pairs.push({
          x: num - i - 1,
          y: num - i - 1,
          changed: false,
        });
      }
    }
  }
  pairs.push({
    x: 0,
    y: 0,
    changed: false,
  });
  return pairs;
}

export function selectionSort(bars) {
  const pairs = [];
  let num = bars.length;
  const prevbar = bars.slice();
  for (let i = 0; i < num - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < num; j++) {
      pairs.push({
        x: minIndex,
        y: j,
        changed: false,
      });
      if (prevbar[j].height < prevbar[minIndex].height) {
        minIndex = j;
      }
    }
    const bari = { ...prevbar[i] };
    const barj = { ...prevbar[minIndex] };
    prevbar[minIndex] = bari;
    prevbar[i] = barj;
    pairs.push({
      x: minIndex,
      y: i,
      changed: true,
    });
    pairs.push({
      x: i,
      y: i,
      changed: false,
    });
  }
  pairs.push({
    x: num - 1,
    y: num - 1,
    changed: false,
  });
  return pairs;
}

export function insertionSort(bars) {
  const pairs = [];
  let num = bars.length;
  const prevBar = bars.slice();
  for (let i = 1; i < num; ++i) {
    let key = prevBar[i].height;
    let j = i - 1;

    while (j >= 0 && prevBar[j].height > key) {
      const bari = { ...prevBar[j] };
      const barj = { ...prevBar[j + 1] };
      prevBar[j + 1] = bari;
      prevBar[j] = barj;
      pairs.push({
        x: j,
        y: j + 1,
        changed: true,
      });
      j = j - 1;
    }
  }
  for (let i = 0; i < num; i++) {
    pairs.push({
      x: i,
      y: i,
      changed: true,
    });
  }
  return pairs;
}
