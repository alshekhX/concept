"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/ui/image-modal";

const ProjectCard = ({ title, subtitle, images, video }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const getVimeoEmbedUrl = (vimeoUrl) => {
    const vimeoId = vimeoUrl?.split('/').pop();
    return `https://player.vimeo.com/video/${vimeoId}`;
  };

  return (
    <motion.div
      className="rounded-xl overflow-hidden mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          {title}
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-600 opacity-80 mb-6">
          {subtitle}
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.slice(0, 4).map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {images.length > 4 && (
        <div className="grid grid-cols-1 p-4">
          <motion.div
            className="overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedImage(images[4])}
          >
            <img
              src={images[4]}
              alt="Full project view"
              className="w-full h-96 object-cover rounded-lg"
            />
          </motion.div>
        </div>
      )}
      {video && (
        <div className="p-4">
          <motion.div
            className="overflow-hidden rounded-lg mx-auto w-full md:w-3/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`${getVimeoEmbedUrl(video)}?autoplay=0&title=0&byline=0&portrait=0`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      )}

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </motion.div>
  );
};

export default ProjectCard;