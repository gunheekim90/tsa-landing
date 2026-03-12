import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Small intro text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm text-gray-500 uppercase tracking-[0.3em] mb-8"
          >
            Digital Innovation Partner
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6"
          >
            TwoSteps
            <br />
            <span className="text-gray-500">Ahead</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            남들보다 두 수 앞을 보는 혁신
            <br />
            브랜드 최적화와 디지털 전환의 선구자
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="#about"
              className="px-8 py-4 border border-white/20 hover:border-white/40 transition-all duration-300 text-sm tracking-wider"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackEvent('cta_click', { cta_name: 'hero_explore' })}
            >
              EXPLORE
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-600 uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4 text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
