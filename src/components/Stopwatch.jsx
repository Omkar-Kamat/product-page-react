import React, { useState, useEffect } from 'react';

const styles = {
    container: `
        flex flex-col items-center justify-center
        min-h-screen
        bg-black text-white
        gap-8
        font-sans
    `,

    timer: `
        text-7xl font-mono font-bold
        bg-zinc-900
        px-10 py-6
        rounded-2xl
        border border-zinc-700
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        tracking-wider
    `,

    buttonGroup: `
        flex gap-4 flex-wrap justify-center
    `,

    button: `
        px-6 py-2
        rounded-lg
        font-semibold
        bg-zinc-800
        border border-zinc-600
        text-white

        hover:bg-zinc-700
        hover:border-zinc-500

        active:bg-zinc-600
        active:scale-95

        transition-all duration-150
    `,

    lapsContainer: `
        bg-zinc-900
        border border-zinc-700
        rounded-xl
        p-4
        w-72
        max-h-64
        overflow-y-auto
        scroll- 

        shadow-[0_0_15px_rgba(255,255,255,0.03)]
    `,

    lapItem: `
        font-mono
        text-zinc-300
        border-b border-zinc-700
        py-2
        last:border-none
    `,

    emptyLap: `
        text-zinc-500 font-mono text-center
    `
};


export default function Stopwatch() {

    const [laps, setLap] = useState([]);
    const [watch, setWatch] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {

        if (isRunning) {
            const id = setInterval(() => {
                setWatch(prev => prev + 1);
            }, 1000);

            (function (){setIntervalId(id)})();
            
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };

    }, [isRunning]);

    function handleStart() {
        if (!isRunning) {
            setIsRunning(true);
        }
    }

    function handlePause() {
        setIsRunning(false);
        clearInterval(intervalId);
    }

    function handleReset() {
        setIsRunning(false);
        clearInterval(intervalId);
        setWatch(0);
        setLap([]);
    }

    function handleLap() {
        if (isRunning) {
            setLap(prev => [...prev, watch]);
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.timer}>
                {watch} sec
            </div>

            <div className={styles.buttonGroup}>

                <button
                    className={`${styles.button} ${styles.start}`}
                    onClick={handleStart}
                >
                    Start
                </button>

                <button
                    className={`${styles.button} ${styles.pause}`}
                    onClick={handlePause}
                >
                    Pause
                </button>

                <button
                    className={`${styles.button} ${styles.lap}`}
                    onClick={handleLap}
                >
                    Lap
                </button>

                <button
                    className={`${styles.button} ${styles.reset}`}
                    onClick={handleReset}
                >
                    Reset
                </button>

            </div>

            <div className={styles.lapsContainer}>
                {laps.length === 0 && <div>No laps yet</div>}

                {laps.map((lap, index) => (
                    <div key={index} className={styles.lapItem}>
                        Lap {index + 1}: {lap} sec
                    </div>
                ))}
            </div>

        </div>
    );
}
