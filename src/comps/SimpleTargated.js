import { motion } from "framer-motion";
import styled from "styled-components";

const SimpleTargated = ({ delay, bg = "green" }) => {
  const list = {
    visible: (i) => ({
      scaleX: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      scaleX: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };
  const item2 = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 100, opacity: 0 },
  };
  const button = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Div initial="hidden" animate="visible" variants={list}>
      <motion.h1 variants={item}>Hello Framer Motion</motion.h1>
      <motion.p variants={item2}>THis is a wonderful description</motion.p>
      <Button variants={button}>Cool Button</Button>
    </Div>
  );
};

export default SimpleTargated;

const Div = styled(motion.div)`
  background: ${(props) => props.bg ?? "dodgerblue"};
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  color: #fff;
`;

const Button = styled(motion.button)`
  background: #d41400;
  padding: 5px 20px;
  border: none;
  color: #fff;
`;
