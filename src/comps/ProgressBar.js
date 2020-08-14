import React, { useEffect } from "react";
import useStorage from "./../hooks/useStorage";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";

const ProgressBar = ({ file, setFile }) => {
  const { user } = useAuth0();
  const userCollection = user.nickname;
  const { progress, url } = useStorage(file, userCollection);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
