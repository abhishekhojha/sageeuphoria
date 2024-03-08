import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    // const [isInView, setIsInView] = useState(false);
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    return (
        <div style={{  }}>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0,y: 75 },
                    visible: { opacity: 1,y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

Reveal.propTypes = {
    children: PropTypes.element.isRequired
};

export default Reveal;
