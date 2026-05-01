export default function BuildButton({ onBuild }) {
  return (
    <button 
      onClick={onBuild}
      className="h-16 w-16 bg-amber-600 rounded-2xl shadow-xl 
                 active:scale-90 active:bg-amber-700 
                 flex items-center justify-center text-3xl
                 transition-all touch-manipulation"
    >
      🏗️
    </button>
  );
}
