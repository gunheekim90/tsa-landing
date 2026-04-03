import { motion } from 'motion/react';

const team = [
  {
    name: 'Glenn',
    role: 'CEO',
    achievements: ['4번 창업 / 3번 엑싯 / 2번 투자유치'],
    initials: 'G',
    accent: '#4ade80',
  },
  {
    name: 'Victor',
    role: 'COO',
    achievements: ['시리즈 A,B 투자 유치'],
    initials: 'V',
    accent: '#60a5fa',
  },
  {
    name: 'Lily',
    role: 'Designer',
    achievements: ['업력 12년차 디자이너'],
    initials: 'L',
    accent: '#f472b6',
  },
  {
    name: 'Daniel',
    role: 'CTO',
    achievements: ['대규모 트래픽 백엔드 설계 15년', 'MSA · 클라우드 인프라 아키텍처 전문'],
    initials: 'D',
    accent: '#a78bfa',
  },
  {
    name: 'Sophie',
    role: 'AI Engineer',
    achievements: ['NLP · LLM 파인튜닝 및 서빙 전문', 'ML 파이프라인 설계 · 운영 7년'],
    initials: 'S',
    accent: '#fbbf24',
  },
  {
    name: 'Jason',
    role: 'Full-stack Developer',
    achievements: ['React / Node.js 풀스택 개발 10년', '핀테크 · 커머스 서비스 구축 다수'],
    initials: 'J',
    accent: '#34d399',
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="text-sm text-gray-600 mb-12 tracking-wider">04</div>
          <h2 className="text-4xl md:text-5xl font-light mb-6">Team</h2>
          <p className="text-gray-500 max-w-xl">
            경험과 열정으로 무장한 전문가들
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-14 flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex-shrink-0 w-[75vw] md:w-auto snap-start"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className="relative w-12 h-12 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/25 transition-all duration-500 shrink-0"
                  style={{ boxShadow: `0 0 0px ${member.accent}00, inset 0 0 0px ${member.accent}00` }}
                >
                  <span
                    className="text-lg font-light select-none transition-all duration-500 opacity-50 group-hover:opacity-90"
                    style={{ color: member.accent }}
                  >
                    {member.initials}
                  </span>
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: `0 0 20px ${member.accent}15, inset 0 0 12px ${member.accent}08` }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-light leading-tight">{member.name}</h3>
                  <p className="text-xs text-gray-600">{member.role}</p>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full mb-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, ${member.accent}, transparent)` }}
              />

              {/* Achievements */}
              <div className="space-y-1.5">
                {member.achievements.map((achievement, idx) => (
                  <p key={idx} className="text-xs text-gray-500">
                    {achievement}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}