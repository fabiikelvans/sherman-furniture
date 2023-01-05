import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

function Magnetic() {
    const x = useSpring(200, { stiffness: 100, damping: 10 });
    const y = useSpring(200, { stiffness: 100, damping: 10 });

    const rotateX = useTransform(x, [0, 400], [-45, 45]);
    const rotateY = useTransform(y, [0, 400], [-45, 45]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    function resetToInital() {
        x.set(200, true);
        y.set(200, true);
    }

    return (
        <motion.div
            style={{
                width: 400,
                height: 400,
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                borderRadius: 30,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                perspective: 400
            }}
            onMouseMove={handleMouse}
            onMouseLeave={resetToInital}
        >
            <motion.div
                style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    x: rotateX,
                    y: rotateY
                }}
            >Hello</motion.div>

        </motion.div>
    );
}

export default Magnetic
