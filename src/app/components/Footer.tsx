import { motion } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-sm text-gray-600 mb-12 tracking-wider">05</div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                Let's work
                <br />
                together
              </h2>
              <p className="text-gray-500 leading-relaxed">
                프로젝트 문의나 협업 제안이 있으시다면
                <br />
                언제든 연락 주세요.
              </p>
            </div>

            {/* Right column - Contact info */}
            <div className="space-y-8">
              <div>
                <div className="text-sm text-gray-600 mb-3">Email</div>
                <a
                  href="mailto:glenn.kim@twostepsahead.co.kr"
                  className="text-lg hover:text-gray-400 transition-colors"
                  onClick={() => trackEvent('contact_click', { type: 'email' })}
                >
                  glenn.kim@twostepsahead.co.kr
                </a>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-3">Location</div>
                <p className="text-lg">Seoul, South Korea</p>
              </div>

              <div className="pt-4">
                <div className="text-sm text-gray-600 mb-4">Services</div>
                <div className="space-y-2">
                  <a
                    href="https://georank24.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-gray-400 transition-colors"
                    onClick={() => trackEvent('footer_service_click', { service: 'GeoRank24' })}
                  >
                    → georank24.com
                  </a>
                  <a
                    href="https://relayed-front.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:text-gray-400 transition-colors"
                    onClick={() => trackEvent('footer_service_click', { service: 'Relayed' })}
                  >
                    → relayed-front.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="text-2xl font-light mb-2">TwoStepsAhead</div>
              <p className="text-xs text-gray-600">남들보다 두 수 앞을 봅니다</p>
            </div>

            <div className="flex gap-8 text-xs text-gray-600">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <span>© {currentYear}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}