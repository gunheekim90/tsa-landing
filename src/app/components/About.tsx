import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section number */}
          <div className="text-sm text-gray-600 mb-12 tracking-wider">01</div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
                우리는 남들보다
                <br />
                두 수 앞을 봅니다
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed">
                TwoStepsAhead는 GeoRank24와 Relayed 두 가지 핵심 서비스를 통해
                디지털 혁신을 선도합니다.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                우리는 단순히 현재의 문제를 해결하는 것을 넘어, 미래의 기회를 발견하고 
                선제적으로 대응합니다. 데이터 기반 전략과 혁신적인 AI 기술로 클라이언트의 
                비즈니스를 다음 단계로 이끕니다.
              </p>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-light mb-2">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">30+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}