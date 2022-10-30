import {useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import "./particles.css";


function ParticlesAnimation() {

    const particlesInit = useCallback(async (engine: Engine) => {


        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);
    return (
        <div >
            <Particles
                className={"particles"}
                id={"tsparticles"}
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#000000",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {

                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.2,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#f2a900",
                        },
                        links: {
                            color: "#f2a900",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 3},
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
}

export default ParticlesAnimation;