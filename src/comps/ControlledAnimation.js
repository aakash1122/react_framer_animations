import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const ControlledAnimation = () => {
  const controls = useAnimation();

  const makeCircle = () => {
    controls.start({
      backgroundColor: "hotpink",
      borderRadius: "50%",
      x: 400,
      transition: { duration: 0.5, bounce: true },
    });
  };
  const makeSquare = () => {
    controls.start({
      backgroundColor: "blue",
      borderRadius: "0%",
      x: 0,
      transition: { duration: 0.5, easings: "anticipate" },
    });
  };

  return (
    <div>
      <Button onClick={makeCircle}>make circle</Button>
      <Button onClick={makeSquare}>make square</Button>
      <Div animate={controls} />
    </div>
  );
};

export default ControlledAnimation;

const Div = styled(motion.div)`
  height: 300px;
  width: 300px;
  background: blue;
`;

export const Button = styled.button`
  background: hotpink;
  border: none;
  padding: 10px 30px;
  color: white;
  margin: 20px;
  text-transform: uppercase;
`;
