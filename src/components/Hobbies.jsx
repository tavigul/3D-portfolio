import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Hobbies = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What do I do besides work?</p>
        <h2 className={styles.sectionHeadText}>Hobbies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        Besides coding, I lead a diverse and active lifestyle that keeps me
        engaged and energized. Here are some of the activities I enjoy outside
        of work:
      </motion.p>
    </>
  );
};

export default SectionWrapper(Hobbies, "hobbies");
