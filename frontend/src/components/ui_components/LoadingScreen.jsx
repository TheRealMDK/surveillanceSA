import { Html, useProgress } from "@react-three/drei";

export default function LoadingScreen() {
  const { progress } = useProgress();

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
      <div className="text-white text-xl font-semibold mb-4 tracking-widest">
        LOADING
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded overflow-hidden">
        <div
          className="bg-gradient-to-r from-cyber_teal_tint to-cyber_teal_shade via-cyber_teal h-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-gray-400 text-sm mt-2">{Math.floor(progress)}%</div>
    </div>
  );
}
