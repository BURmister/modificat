import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGsap = () => {
   gsap.registerPlugin(ScrollTrigger);
   return gsap;
};
