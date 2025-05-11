import LocomotiveScroll from "locomotive-scroll";

let scrollInstance: LocomotiveScroll | null = null;

export function setScrollInstance(instance: LocomotiveScroll) {
  scrollInstance = instance;
}

export function getScrollInstance() {
  return scrollInstance;
}
