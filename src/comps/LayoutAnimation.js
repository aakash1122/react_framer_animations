import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "./ControlledAnimation";

const LayoutAnimation = () => {
  const [dir, setDir] = useState("row");

  const toggleDir = () => {
    if (dir === "row") {
      setDir("column");
    } else {
      setDir("row");
    }
  };

  return (
    <div>
      <Button onClick={toggleDir}>toggle direction</Button>
      <Div layout direction={dir} transition={{ duration: 3 }}>
        <Card layout transition={{ duration: 0.5 }} />
        <Card layout transition={{ duration: 0.5 }} />
        <Card layout transition={{ duration: 0.5 }} />
        <Card layout transition={{ duration: 0.5 }} />
        <Card layout transition={{ duration: 0.5 }} />
        <Card layout transition={{ duration: 0.5 }} />
      </Div>
    </div>
  );
};

export default LayoutAnimation;

const Div = styled(motion.div)`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  height: 200px;
  width: 200px;
  background-color: blue;
  margin: 20px;
`;
