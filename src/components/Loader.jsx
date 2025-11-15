const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white/50 backdrop-blur-sm">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Inner Glow Ring */}
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-pink-500 border-b-transparent rounded-full animate-spin [animation-duration:1.3s]"></div>

        {/* Pulse Dot */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-4 h-4 bg-green-600 rounded-full animate-ping"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
