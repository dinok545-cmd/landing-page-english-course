import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Plane, MapPin, Users, Calendar, CreditCard, Check, Globe, Sparkles, Snowflake, Gift, Star } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: string; animationDuration: string; size: number }>>([]);

  useEffect(() => {
    setIsVisible(true);
    // Generate snowflakes
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      size: Math.random() * 10 + 5
    }));
    setSnowflakes(flakes);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const courses = [
    { title: "1. Аэропорт без стресса", desc: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.", result: "Уверенность уже в первые часы за границей." },
    { title: "2. В отеле: заселение и помощь", desc: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.", result: "Практика вежливых фраз и повседневной лексики." },
    { title: "3. Кафе и рестораны", desc: "Заказ еды, вопросы про аллергены, счёт и чаевые.", result: "Развитие гастрономического словаря и уверенности в общении." },
    { title: "4. На улице: ориентирование и просьбы", desc: "Как спросить дорогу, вызвать такси или найти аптеку.", result: "Понимание устной речи и произношения в реальных ситуациях." },
    { title: "5. Экстренные случаи", desc: "Потеря вещей, болезнь, помощь полиции — всё это на английском.", result: "Важные фразы, которые могут спасти отпуск." },
    { title: "6–8. Туризм и развлечения", desc: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.", result: "Погружение в культурный контекст через язык." },
    { title: "9. Дружба в путешествиях", desc: "Как познакомиться с другими детьми или подростками за границей.", result: "Игровая практика диалогов и неформального общения." },
    { title: "10. Дипломный проект: «Мой идеальный отпуск»", desc: "Ребёнок планирует воображаемое путешествие и представляет его на английском.", result: "Развитие связной речи и творческого самовыражения." }
  ];

  const features = [
    "Акцент на практическую, живую речь, а не на грамматику ради грамматики.",
    "Все ситуации — из реальной жизни путешественника.",
    "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.",
    "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс."
  ];

  const requirements = [
    "Стационарный компьютер или ноутбук с наушниками и микрофоном",
    "Стабильный интернет и Zoom"
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('enrollment');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1a0f] via-[#1a0f0f] to-[#0f0a1a] text-white overflow-x-hidden">
      {/* Snowfall Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {snowflakes.map((flake) => (
          <motion.div
            key={flake.id}
            initial={{ y: -20, x: 0 }}
            animate={{
              y: '100vh',
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: parseFloat(flake.animationDuration),
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ left: flake.left, position: 'absolute' }}
            className="text-white opacity-70"
          >
            <Snowflake size={flake.size} />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647833004944-f9e0a88a86a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RtYXMlMjBsaWdodHMlMjBuaWdodHxlbnwxfHx8fDE3NjY2NTQ4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Christmas lights"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a0f]/90 via-[#1a0f0f]/70 to-[#0a1a0f]"></div>
        </div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#ffd700 1px, transparent 1px), linear-gradient(90deg, #ff4444 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Glowing Orbs - Christmas colors */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Hero Content */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-full border border-amber-400/50 backdrop-blur-sm">
              <Star className="w-5 h-5 text-amber-300 animate-pulse" />
              <span className="text-amber-200">🎄 Новогодний онлайн-курс английского языка 🎄</span>
              <Star className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="mb-8 bg-gradient-to-r from-red-300 via-amber-200 to-green-300 bg-clip-text text-transparent"
          >
            🎅 Английский для путешествий 🎁
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mb-12 max-w-3xl mx-auto text-gray-200"
          >
            Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
          </motion.p>

          <motion.button 
            variants={fadeInUp}
            onClick={scrollToForm}
            className="px-10 py-5 bg-gradient-to-r from-red-600 via-amber-500 to-green-600 rounded-full shadow-lg shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-3">
              <Gift className="w-6 h-6" />
              🎄 Начать праздничное путешествие 🎄
              <Gift className="w-6 h-6" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* For Whom Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-red-400" />
              <h2 className="bg-gradient-to-r from-red-400 via-amber-300 to-green-400 bg-clip-text text-transparent">
                🎁 Для кого курс
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-amber-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-8 bg-gradient-to-br from-[#2a1515] to-[#1a0f0f] rounded-2xl border border-red-500/50 hover:border-amber-400/70 transition-all">
                <div className="text-5xl mb-4">🎅</div>
                <h3 className="mb-3 text-red-300">Первая группа</h3>
                <p className="text-gray-300">4–5 класс</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-amber-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-8 bg-gradient-to-br from-[#152a1a] to-[#0f1a0f] rounded-2xl border border-green-500/50 hover:border-amber-400/70 transition-all">
                <div className="text-5xl mb-4">🎄</div>
                <h3 className="mb-3 text-green-300">Вторая группа</h3>
                <p className="text-gray-300">6–8 класс</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="relative py-20 px-6 bg-[#0a1a0f]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-amber-400" />
              <h2 className="bg-gradient-to-r from-red-400 via-amber-300 to-green-400 bg-clip-text text-transparent">
                🎁 Программа курса
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
                <div className="relative p-6 bg-gradient-to-br from-[#2a1515]/90 to-[#152a1a]/90 rounded-xl border border-amber-500/30 hover:border-amber-400/50 transition-all backdrop-blur-sm">
                  <h3 className="mb-3 text-amber-300">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.desc}</p>
                  <div className="flex items-start gap-2 p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                    <span className="text-amber-300 mt-1">🎁</span>
                    <p className="text-green-200">{course.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-amber-400 animate-pulse" />
              <h2 className="bg-gradient-to-r from-red-400 via-amber-300 to-green-400 bg-clip-text text-transparent">
                ⭐ Почему этот курс особенный?
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#2a1515] to-[#152a1a] rounded-xl border border-amber-500/50 hover:border-amber-400/70 transition-all"
              >
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-200">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="relative py-20 px-6 bg-[#0a1a0f]/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-center mb-8 bg-gradient-to-r from-red-400 via-amber-300 to-green-400 bg-clip-text text-transparent">
              💻 Что потребуется
            </h2>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#2a1515] to-[#152a1a] rounded-xl border border-amber-500/40"
                >
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-200">{req}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule and Pricing */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-amber-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-8 bg-gradient-to-br from-[#2a1515] to-[#1a0f0f] rounded-2xl border border-red-500/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-red-400" />
                  <h2 className="text-red-300">🗓️ Расписание</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-red-500/20 rounded-lg border border-amber-500/40">
                    <p className="text-amber-300 mb-2">Группа 4–5 класс</p>
                    <p className="text-gray-300">Четверг, 15:00 (МСК)</p>
                  </div>
                  <div className="p-4 bg-red-500/20 rounded-lg border border-amber-500/40">
                    <p className="text-amber-300 mb-2">Группа 6–8 класс</p>
                    <p className="text-gray-300">Пятница, 15:30 (МСК)</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-amber-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative p-8 bg-gradient-to-br from-[#152a1a] to-[#0f1a0f] rounded-2xl border border-green-500/50 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-8 h-8 text-green-400" />
                  <h2 className="text-green-300">💰 Стоимость</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-green-500/20 rounded-lg border border-amber-500/40">
                    <p className="text-amber-300 mb-2">Полный курс</p>
                    <p className="text-gray-300">10 уроков — 12 000 руб</p>
                  </div>
                  <div className="p-4 bg-green-500/20 rounded-lg border border-amber-500/40">
                    <p className="text-amber-300 mb-2">Абонемент</p>
                    <p className="text-gray-300">1 300 руб / урок</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="enrollment" className="relative py-20 px-6 bg-gradient-to-b from-[#0a1a0f] to-[#1a0f0f]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500/30 to-green-500/30 rounded-full border border-amber-400/50 backdrop-blur-sm mb-6">
              <Star className="w-5 h-5 text-amber-300 animate-pulse" />
              <span className="text-amber-200">🎄 Новогодний набор открыт! 🎄</span>
              <Star className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
            <h2 className="mb-6 bg-gradient-to-r from-red-300 via-amber-200 to-green-300 bg-clip-text text-transparent">
              🎅 Начните праздничное путешествие в мир английского! 🎁
            </h2>
            <p className="mb-4 text-gray-200 max-w-2xl mx-auto">
              Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
            </p>
            <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
              Места ограничены! Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-gradient-to-r from-red-600 via-amber-500 to-green-600 rounded-full shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 transition-all duration-300"
          >
            <span className="flex items-center gap-4">
              <Gift className="w-7 h-7" />
              <span className="text-xl">🎄 Записаться на курс 🎁</span>
              <Gift className="w-7 h-7" />
            </span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-16 relative"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1741225241678-0c7f8fa07917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjB0cmF2ZWwlMjBzbm93fGVufDF8fHx8MTc2NjY1NDg0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Winter travel"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl shadow-amber-500/30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0f] via-transparent to-transparent rounded-2xl"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-amber-500/30">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-300">🎄 © 2025 Английский для путешествий. Ваш праздничный билет в мир свободного общения. 🎁</p>
        </div>
      </footer>
    </div>
  );
}