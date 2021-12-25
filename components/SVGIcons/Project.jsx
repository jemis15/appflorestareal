const Project = ({ className, size = 20 }) => {
  return (
    <div
      className={`bg-gray-500 rounded-full ${className}`}
      style={{ width: size, height: size }}
    ></div>
  );
};

export default Project;
