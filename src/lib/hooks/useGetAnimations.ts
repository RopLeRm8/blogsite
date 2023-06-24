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
  return { fadeIn, fadeOut };
}
