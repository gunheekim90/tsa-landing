import { motion } from 'motion/react';
import { SketchAvatar } from './SketchAvatar';

const team = [
  {
    name: 'Glenn',
    role: 'CEO',
    achievements: ['4번 창업 / 3번 엑싯 / 2번 투자유치'],
    avatar: 'glenn' as const,
  },
  {
    name: 'Victor',
    role: 'COO',
    achievements: ['시리즈 A,B 투자 유치'],
    avatar: 'victor' as const,
  },
  {
    name: 'Lily',
    role: 'Designer',
    achievements: ['업력 12년차 디자이너'],
    avatar: 'lily' as const,
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
        <div className="md:grid md:grid-cols-3 md:gap-12 flex overflow-x-auto gap-6 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex-shrink-0 w-[75vw] md:w-auto snap-start"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-white/5 flex items-center justify-center">
                <SketchAvatar
                  variant={member.avatar}
                  className="w-3/4 h-3/4 opacity-60 group-hover:opacity-80 transition-all duration-700"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl font-light mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.role}</p>

                {/* Achievements */}
                <div className="space-y-1">
                  {member.achievements.map((achievement, idx) => (
                    <p key={idx} className="text-xs text-gray-600">
                      — {achievement}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}