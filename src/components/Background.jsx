import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className='absolute'
      id='tsparticles'
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true
            }
          },
          color: {
            value: '#ff4500'
          },
          shape: {
            type: 'circle'
          },
          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'bubble'
            },
            onClick: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1
              }
            },
            bubble: {
              distance: 500,
              size: 0,
              duration: 2,
              opacity: 0
            },
            repulse: {
              distance: 500,
              duration: 0.5
            },
            push: {
              quantity: 200
            },
            remove: {
              quantity: 5
            }
          }
        }
      }}
    />
  );
}

export default Background;
