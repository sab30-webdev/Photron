import React from "react";
import useFirestore from "./../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, userCollection }) => {
  const { docs } = useFirestore(userCollection);

  return (
    <div className="img-grid">
      {docs.length > 0 ? (
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={doc.url}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="uploaded pic" />
          </motion.div>
        ))
      ) : (
        <p>Add some photos to see them here</p>
      )}
    </div>
  );
};

export default ImageGrid;
