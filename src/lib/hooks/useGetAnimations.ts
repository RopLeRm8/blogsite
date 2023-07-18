import { keyframes } from "@mui/system";
export default function useGetAnimations() {
  const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

  const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
  const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  25% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  50% {
    transform: scale(0.95);
    opacity: 0.9;
  }
  75% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
}
`;
  return { fadeIn, fadeOut, pulse };
}
