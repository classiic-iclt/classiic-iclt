import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useState, useEffect } from "react";
import Generating from "./Generating";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState('');
  const [currentWave, setCurrentWave] = useState('');

  // Function to calculate time difference
  const calculateTimeLeft = (endDate) => {
    const now = new Date();
    const difference = new Date(endDate) - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return `${days} Hari : ${hours} Jam : ${minutes} Menit : ${seconds} Detik`;
    } else {
      return 'Waktu Pendaftaran untuk gelombang ini telah berakhir';
    }
  };

  // Function to determine the current wave
  // Function to determine the current wave and handle pre-registration
const updateWaveAndTime = () => {
  const now = new Date();
  
  // Waves with specific times, including start of day and end of day
  const waves = [
    { wave: 'Gelombang 1', start: new Date('2024-10-17T00:00:00'), end: new Date('2024-11-10T23:59:59') },
    { wave: 'Gelombang 2', start: new Date('2024-11-11T00:00:00'), end: new Date('2024-11-25T23:59:59') },
    { wave: 'Gelombang 3', start: new Date('2024-11-26T00:00:00'), end: new Date('2024-12-07T23:59:59') },
  ];

  // Check if the current date is before Gelombang 1
  if (now < waves[0].start) {
    setCurrentWave('Pendaftaran belum dibuka');
    setTimeLeft('');
    return;
  }

  // Iterate through waves to find the current one
  for (let i = 0; i < waves.length; i++) {
    const waveStart = waves[i].start;
    const waveEnd = waves[i].end;

    if (now >= waveStart && now <= waveEnd) {
      setCurrentWave(waves[i].wave);
      setTimeLeft(calculateTimeLeft(waveEnd));
      return;
    }
  }

  // If no waves are active, set to "Pendaftaran selesai"
  setCurrentWave('Pendaftaran telah selesai');
  setTimeLeft('');
};


  useEffect(() => {
    const interval = setInterval(updateWaveAndTime, 1000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Selamat Datang&nbsp;di&nbsp;Classiic Award {` `}
            <span className="inline-block relative">
              Twenty Four{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Pembentukan Jiwa Bermoral di Era Global
          </p>
          <br />
          <h1 className="h1 mb-6">Waktu Pendaftaran:</h1>
          <h2 className="h2 mb-4">{currentWave}</h2>
          <h3 className="h3 mb-6" id="waktu">{timeLeft}</h3>
          <Button href="/#pricing" white>
            Daftar
          </Button>
          <Button href="https://google.com" white>
            Juknis
          </Button>
          <br />
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned></ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
