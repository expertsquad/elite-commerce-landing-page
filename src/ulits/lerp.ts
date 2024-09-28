function lerp(start: any, end: any, t: any) {
  return start * (1 - t) + end * t;
}

export { lerp };
