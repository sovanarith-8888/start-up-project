import { lineSpinner,lineWobble } from "ldrs";

lineSpinner.register();
lineWobble.register();

const LineSpinnerLoading = ({size="30"}) => {
  return <l-line-spinner 
    size={size}
    stroke={"1.7"}
    speed={"1.2"}
    color={"black"}
  />
}

const LineWobbleLoading = ({size="100"}) => {
  return <l-line-wobble
    size={size}
    stroke="5"
    bg-opacity="0.1"
    speed="2" 
    color="black">
  </l-line-wobble>
}
export const uiBall = {LineSpinnerLoading, LineWobbleLoading}




