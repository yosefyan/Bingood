const loopCreator = (
  arr,
  ele,
  container,
  classes,
  shouldDuplicate,
  itemToDuplicate
) => {
  arr.forEach((ar, i) => {
    const iconHTML = itemToDuplicate.repeat(i + 1);
    return (container.innerHTML += `<${ele} class="${classes}">${
      shouldDuplicate ? iconHTML : ""
    } ${ar}</${ele}>`);
  });
};
export default loopCreator;
