import React from "react";
import "./Story.css";

interface StoryProps {
  image: string;
  onNext: () => void;
  onPrevious: () => void;
  onClose: () => void;
}

/**
 * Story Component
 * @param {Object} props - Component props
 * @param {string} props.image - The image URL for the story
 * @param {Function} props.onNext - Function to call when the next button is clicked
 * @param {Function} props.onPrevious - Function to call when the previous button is clicked
 * @param {Function} props.onClose - Function to call when the close button is clicked
 * @returns {JSX.Element} Story component
 */
const Story: React.FC<StoryProps> = ({
  image,
  onNext,
  onPrevious,
  onClose,
}) => {
  return (
    <div className="story-container">
      <button className="story-close" onClick={onClose}>
        X
      </button>
      <img src={image} alt="Story" className="story-image" />
      <div className="story-nav left" onClick={onPrevious}></div>
      <div className="story-nav right" onClick={onNext}></div>
    </div>
  );
};

export default Story;
