export default function randomPicker(list: string[], quantity: number): string[] {
  if (quantity >= list.length) {
    return [...list];
  }

  // Cortesía de R. McCrossan y A. Toumi: https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
  // Shuffle array
  const shuffled = list.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, quantity);

  return selected;
}
