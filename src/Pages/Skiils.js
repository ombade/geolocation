import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import breathingSound from "./audio/study.mp3"; // Add a suitable background sound

const BoxBreathing = () => {
  const [phase, setPhase] = useState("Inhale");
  const [time, setTime] = useState(4); // Default 4 seconds per phase
  const [playing, setPlaying] = useState(false);
  const sound = new Howl({ src: [breathingSound], loop: true });

  useEffect(() => {
    if (playing) sound.play();
    else sound.pause();
    return () => sound.stop();
  }, [playing]);

  useEffect(() => {
    if (!playing) return;
    const phases = ["Inhale", "Hold", "Exhale", "Hold"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % phases.length;
      setPhase(phases[index]);
    }, time * 1000);

    return () => clearInterval(interval);
  }, [playing, time]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-700 text-white">
      <motion.div
        className="w-40 h-40 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-2xl"
        animate={{ scale: phase === "Inhale" ? 1.3 : 1 }}
        transition={{ duration: time }}
      >
        {phase}
      </motion.div>
      <div className="mt-5 flex gap-4">
        <button onClick={() => setPlaying(!playing)} className="bg-white text-blue-600 px-4 py-2 rounded-lg">
          {playing ? "Pause" : "Start"}
        </button>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Math.max(1, parseInt(e.target.value)))}
          className="px-2 py-1 rounded-lg text-black"
        />
      </div>
    </div>
  );
};

export default BoxBreathing;
