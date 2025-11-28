import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const slides = [
  {
    id: 1,
    title: 'Введение в робототехнику',
    subtitle: 'Что такое робототехника и зачем она нужна',
    content: [
      {
        icon: 'Cpu',
        title: 'Определение',
        description: 'Робототехника — это междисциплинарная наука, объединяющая механику, электронику, программирование и искусственный интеллект для создания автономных машин.'
      },
      {
        icon: 'TrendingUp',
        title: 'История развития',
        description: 'От первых механических автоматов до современных интеллектуальных систем с машинным обучением и компьютерным зрением.'
      },
      {
        icon: 'Target',
        title: 'Цели и задачи',
        description: 'Автоматизация сложных задач, повышение точности операций, работа в опасных условиях и расширение возможностей человека.'
      }
    ],
    image: 'https://cdn.poehali.dev/projects/2d42b674-7747-4865-af1e-2abc8e406298/files/9d010d50-7f41-45b4-9b48-740921f2ae6c.jpg'
  },
  {
    id: 2,
    title: 'Типы роботов',
    subtitle: 'Классификация роботов по назначению и конструкции',
    content: [
      {
        icon: 'Factory',
        title: 'Промышленные роботы',
        description: 'Манипуляторы, сварочные роботы, системы сборки. Используются на производствах для повторяющихся операций с высокой точностью.'
      },
      {
        icon: 'Home',
        title: 'Сервисные роботы',
        description: 'Роботы-пылесосы, газонокосилки, помощники для дома. Автоматизируют бытовые задачи и упрощают повседневную жизнь.'
      },
      {
        icon: 'Users',
        title: 'Гуманоидные роботы',
        description: 'Человекоподобные роботы для взаимодействия с людьми, обучения и исследований в области искусственного интеллекта.'
      },
      {
        icon: 'Zap',
        title: 'Автономные системы',
        description: 'Беспилотные автомобили, дроны, роботы-исследователи. Работают без постоянного управления человеком.'
      }
    ],
    image: 'https://cdn.poehali.dev/projects/2d42b674-7747-4865-af1e-2abc8e406298/files/f926c51b-f3b4-4af1-a3c4-63acca7fb1cf.jpg'
  },
  {
    id: 3,
    title: 'Области применения',
    subtitle: 'Где используются роботы в современном мире',
    content: [
      {
        icon: 'Heart',
        title: 'Медицина',
        description: 'Хирургические роботы Da Vinci обеспечивают точность до миллиметра, роботы-ассистенты помогают в реабилитации пациентов.'
      },
      {
        icon: 'Building2',
        title: 'Производство',
        description: 'Автоматизированные линии сборки автомобилей, электроники. Роботы работают 24/7, снижая затраты и повышая качество.'
      },
      {
        icon: 'Rocket',
        title: 'Космос и исследования',
        description: 'Марсоходы Curiosity и Perseverance, спутники, космические манипуляторы для ремонта и строительства на орбите.'
      },
      {
        icon: 'GraduationCap',
        title: 'Образование',
        description: 'Обучающие роботы для детей, конструкторы LEGO Mindstorms, платформы для изучения программирования и инженерии.'
      },
      {
        icon: 'ShieldCheck',
        title: 'Безопасность',
        description: 'Роботы для разминирования, пожаротушения, спасательных операций в зонах катастроф и недоступных для человека местах.'
      }
    ],
    image: 'https://cdn.poehali.dev/projects/2d42b674-7747-4865-af1e-2abc8e406298/files/a72122bf-e35b-44b2-920b-f4bb7762a0c5.jpg'
  },
  {
    id: 4,
    title: 'Заключение',
    subtitle: 'Будущее робототехники и её влияние на общество',
    content: [
      {
        icon: 'TrendingUp',
        title: 'Перспективы развития',
        description: 'Интеграция ИИ, машинное обучение, коллаборативные роботы (коботы), работающие рядом с людьми. Рынок робототехники растет на 15% ежегодно.'
      },
      {
        icon: 'Lightbulb',
        title: 'Вызовы и возможности',
        description: 'Этические вопросы, необходимость переквалификации специалистов, безопасность систем ИИ, стандартизация технологий.'
      },
      {
        icon: 'Sparkles',
        title: 'Роль в будущем',
        description: 'Роботы станут неотъемлемой частью жизни: от умных городов до персональных ассистентов, освоения космоса и решения глобальных проблем.'
      }
    ],
    image: null
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;
  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Robotics
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon name="Presentation" size={20} />
              <span className="text-sm font-medium">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="mb-8 animate-fade-in" key={currentSlide}>
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm shadow-2xl shadow-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="inline-block">
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                      Слайд {currentSlide + 1}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light">
                    {slide.subtitle}
                  </p>
                </div>

                {slide.image && (
                  <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {slide.content.map((item, index) => (
                    <Card
                      key={index}
                      className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-muted/30 border-muted"
                    >
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:animate-glow">
                            <Icon
                              name={item.icon}
                              size={24}
                              className="text-primary-foreground"
                            />
                          </div>
                          <div className="flex-1 space-y-2">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
              className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>
            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
