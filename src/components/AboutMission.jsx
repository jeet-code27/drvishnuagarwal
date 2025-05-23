'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutMission = () => {
  // Set up intersection observers for different sections
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [purposeRef, purposeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 max-w-7xl mx-auto">
          {/* Text Content - Left side with proper spacing */}
          <div className="lg:w-1/2 w-full lg:pl-4">
            <motion.p 
              ref={titleRef}
              initial={{ opacity: 0, y: 10 }}
              animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="text-blue-500 uppercase font-bold tracking-wider mb-4"
            >
              OUR APPROACH
            </motion.p>
            
            <motion.h2 
              ref={headingRef}
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-12"
            >
              <span className="block mb-1">Advanced care.</span>
              <span className="block">Compassionate healing.</span>
            </motion.h2>
            
            <motion.div 
              ref={purposeRef}
              initial={{ opacity: 0, y: 30 }}
              animate={purposeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-10 text-justify"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Philosophy</h2>
              <p className="text-gray-700 mb-5">
                At Dr. Vishnu Agrawal's urology practice, we're committed to transforming urological care through cutting-edge technology and personalized treatment. Our mission is to provide the highest standard of urological services, making advanced treatments accessible to all patients in Ajmer and surrounding areas.
              </p>
              <p className="text-gray-700">
                We combine medical excellence with compassionate care, ensuring each patient receives tailored solutions for their urological needs in a comfortable and confidential environment.
              </p>
            </motion.div>
            
            <motion.div 
              ref={visionRef}
              initial={{ opacity: 0, y: 30 }}
              animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className='text-justify'
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To establish a center of excellence in urological care that sets new benchmarks in patient outcomes, minimally invasive techniques, and comprehensive treatment of urological conditions for adults of all ages.
              </p>
            </motion.div>
          </div>
          
          {/* Image - Right side with rounded corners */}
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full md:mt-10"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/urology-care.webp" 
                alt="Dr. Vishnu Agrawal providing urology consultation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;