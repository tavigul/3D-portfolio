import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { sun, macbook, leaf, love } from "../assets";

const Values = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My personal</p>
        <h2 className={styles.sectionHeadText}>Values.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
      >
        As a software developer, I strive not only to create high-quality
        products but also to adhere to certain values that form the foundation
        of my professional approach. Below are my values that serve as guiding
        principles in my work and define my approach to software development.
      </motion.p>

      {/* <div className="flex flex-wrap"></div> */}

      <div className="grid grid-rows-1 grid-flow-col gap-10">
        <div className="mr-4 mt-10">
          <img className="values-icons" src={macbook} alt="macbook" />
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white text-[15px] max-w-3xl leading-[30px]"
          >
            Serving People Through Technology: I believe that technology should
            serve people and improve their lives. I am committed to using my
            skills and resources to create products and services that positively
            impact our customers and society at large.
          </motion.p>
        </div>
        <div className="mr-4 mt-10">
          <img className="values-icons" src={leaf} alt="leaf" />
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white text-[15px] max-w-3xl leading-[30px]"
          >
            Honesty: I value honesty and strive for honest relationships with
            colleagues, partners and clients. I believe that only through
            honesty can long-term success be achieved.
          </motion.p>
        </div>
        <div className="mr-4 mt-10">
          <img className="values-icons" src={sun} alt="sun" />
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white text-[15px] max-w-3xl leading-[30px]"
          >
            Benefit from all sides: I believe that a successful partnership
            should bring benefits to all parties. I am committed to creating
            products and services that benefit both our company and our
            customers by meeting their needs and exceeding their expectations.
          </motion.p>
        </div>
        <div className="mr-4 mt-10">
          <img className="values-icons" src={love} alt="love" />
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white text-[15px] max-w-3xl leading-[30px]"
          >
            Collaboration and teamwork take precedence over ego in my work. I
            value the collective effort and believe that working together as a
            team is paramount to achieving our goals.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Values, "values");
