import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
// import { Container, Title, Frame, Content, toggle } from './styles'
import * as Icons from "./icons";
import { SectionWrapper } from "../hoc";

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
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  // @ts-ignore
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

export default SectionWrapper(Tree, "tree");
