import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTrail, animated } from "@react-spring/web";
import Deck from "./Deck";
import Tree from "./TreeList"
import "../index.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} className="trailsText" style={style}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

const Hobbies = () => {
  const [open, set] = useState(true);

  return (
    <>
      {/* <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What do I do besides work?</p>
        <h2 className={styles.sectionHeadText}>Hobbies.</h2>
      </motion.div> */}

      <div className={styles.container} onClick={() => set((state) => !state)}>
        <Trail open={open}>
          <span>What I </span>
          <span>do besides</span>
          <span>work?</span>
          {/* <span>?</span> */}
        </Trail>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Besides coding, I lead a diverse and active lifestyle that keeps me
        engaged and energized. Here are some of the activities I enjoy outside
        of work:
      </motion.p>

      <div className="deck-container">
        <Deck />
      </div>

      <div className="tree-list-container">
      <Tree name="main" defaultOpen>
        <Tree name="hello" />
        <Tree name="subtree with children">
          <Tree name="hello" />
          <Tree name="sub-subtree with children">
            <Tree name="child 1" style={{ color: '#37ceff' }} />
            <Tree name="child 2" style={{ color: '#37ceff' }} />
            <Tree name="child 3" style={{ color: '#37ceff' }} />
            <Tree name="custom content">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  padding: 10,
                }}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'black',
                    borderRadius: 5,
                  }}
                />
              </div>
            </Tree>
          </Tree>
          <Tree name="hello" />
        </Tree>
        <Tree name="world" />
        <Tree name={<span>🙀 something something</span>} />
      </Tree>
    </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");
