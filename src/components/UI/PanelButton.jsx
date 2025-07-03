import React from 'react'
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const PanelButton = ({ text, functionHandler, url }) => {
    const MotionDiv = motion.div;

    if (url) {
        return (
            <Link to={url}>
                <MotionDiv
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="font-bold bg-black/70 p-4 rounded-full text-white cursor-pointer text-center mt-5"
                >
                    {text}
                </MotionDiv>
            </Link>
        );
    }

    return (
        <MotionDiv
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            onClick={() => functionHandler()}
            className="font-bold bg-black/70 p-4 rounded-full text-white cursor-pointer text-center mt-5"
        >
            {text}
        </MotionDiv>
    );
};

export default PanelButton
