export default (first, second) => {
    const [a1, b1, c1] = first.split('.');
    const [a2, b2, c2] = second.split('.');
    const major = Math.sign(a1 - a2);
    const minor = Math.sign(b1 - b2);
    const patch = Math.sign(c1 - c2);

    return major === 0 ? minor === 0 ? patch : minor : major;
  };