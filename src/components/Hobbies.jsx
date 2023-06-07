import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTrail, animated, useSpring } from "@react-spring/web";
import useMeasure from "react-use-measure";
import Deck from "./Deck";
import NyanCatCanvas from "./canvas/NyanCat";
import "../index.css";
import * as Icons from "./icons";
import { trekking, travel, horse, persik } from "../assets";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo(function Tree({
  children,
  name,
  style,
  defaultOpen = false,
}) {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: {
      height: 0,
      opacity: 0,
      y: 0,
    },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  }); // @ts-ignore

  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <div className="tree-list-frame">
      <Icon
        className="tree-list-toggle"
        style={{ opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <span className="tree-list-title" style={style}>
        {name}
      </span>
      <animated.div
        className="tree-list-content"
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <animated.div ref={ref} style={{ y }} children={children} />
      </animated.div>
    </div>
  );
});

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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What do I do besides work?</p>
        <h2 className={styles.sectionHeadText}>Hobbies.</h2>
      </motion.div>

      <div className={styles.container} onClick={() => set((state) => !state)}>
        {/* <Trail open={open}>
          <span>What I </span>
          <span>do besides</span>
          <span>work?</span>
        </Trail> */}
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Besides coding, I lead a diverse and active lifestyle that keeps me
        engaged and energized. Here are some of the activities I enjoy outside
        of work:
      </motion.p>

      <div className="flex justify-between">
        <div className="tree-list-container">
          <Tree name="click to me to see" defaultOpen>
            <Tree name="I am a trekking lover 🏔️">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  padding: 10,
                }}
              >
                <img
                  src={trekking}
                  className="tree-list-img"
                  alt="trekking-photo"
                />
              </div>
            </Tree>
            <Tree name="I love to travel">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  padding: 10,
                }}
              >
                <img
                  src={travel}
                  className="tree-list-img"
                  alt="travel-photo"
                />
              </div>
            </Tree>
            <Tree name="I adore equestrian sports and horses 🏇🏻">
              <p className="text-white">Horses are love at first sight</p>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  padding: 10,
                }}
              >
                <img src={horse} className="tree-list-img" alt="horse-photo" />
              </div>
            </Tree>
            <Tree name="Love petting my cat - Peach">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  padding: 10,
                }}
              >
                <img src={persik} className="tree-list-img" alt="persik-cat-photo" />
              </div>
            </Tree>
           
            <Tree name={<span>I love to sing 🎵</span>} />
          </Tree>
        </div>

        {/* <div>
            <NyanCatCanvas />
        </div> */}

        {/* <div className="deck-container">
          <Deck />
        </div> */}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");
