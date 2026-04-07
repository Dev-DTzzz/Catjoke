<template>
    <div class="min-h-screen bg-linear-to-br from-purple-100 to-blue-100 py-8 px-4">
        <div class="max-w-4xl mx-auto">
            <!-- Заголовок -->
            <div class="text-center mb-8">
                <h1 class="text-3xl md:text-4xl font-bold text-purple-800 mb-2">
                    🐱 О проекте CatJoke
                </h1>
                <div class="w-24 h-1 bg-linear-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <!-- Основная карточка -->
            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <!-- Блок с котиком -->
                <div class="relative h-48 bg-linear-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <span class="text-8xl opacity-20">😺</span>
                    <span class="text-8xl absolute">😺</span>
                </div>

                <!-- Контент -->
                <div class="p-6 md:p-8 space-y-6">
                    <!-- О проекте -->
                    <div class="prose max-w-none">
                        <h2 class="text-xl font-semibold text-purple-800 flex items-center gap-2">
                            <span class="w-1 h-6 bg-purple-600 rounded-full"></span>
                            О проекте
                        </h2>
                        <p class="text-gray-700 leading-relaxed">
                            CatJoke — это генератор случайных шуток с милыми котиками.
                            Проект создавался как учебный для изучения Nuxt 3, TypeScript и Tailwind CSS.
                        </p>
                    </div>

                    <!-- Технологии -->
                    <div>
                        <h2 class="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-3">
                            <span class="w-1 h-6 bg-purple-600 rounded-full"></span>
                            Технологии
                        </h2>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tech in technologies" :key="tech"
                                class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200">
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <!-- История разработки -->
                    <div>
                        <h2 class="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-3">
                            <span class="w-1 h-6 bg-purple-600 rounded-full"></span>
                            История создания
                        </h2>

                        <div class="space-y-4">
                            <!-- Статистика ошибок -->
                            <div
                                class="bg-linear-to-r from-red-50 to-purple-50 rounded-xl p-4 border border-purple-100">
                                <div class="flex items-center gap-4 flex-wrap">
                                    <div class="flex items-center gap-2">
                                        <span class="text-3xl">🐛</span>
                                        <div>
                                            <div class="text-2xl font-bold text-purple-800">{{ errorCount }}+</div>
                                            <div class="text-xs text-gray-600">ошибок исправлено</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-3xl">😺</span>
                                        <div>
                                            <div class="text-2xl font-bold text-purple-800">{{ catCount }}</div>
                                            <div class="text-xs text-gray-600">котиков в проекте</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-3xl">⚡</span>
                                        <div>
                                            <div class="text-2xl font-bold text-purple-800">3</div>
                                            <div class="text-xs text-gray-600">стратегии рендеринга</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Хронология -->
                            <div class="relative pl-6 border-l-2 border-purple-200 space-y-4">
                                <div v-for="(item, index) in timeline" :key="index" class="relative">
                                    <div
                                        class="absolute -left-6.25 w-4 h-4 rounded-full bg-white border-2 border-purple-600">
                                    </div>
                                    <div class="mb-1 text-sm text-purple-600 font-medium">{{ item.date }}</div>
                                    <h3 class="font-semibold text-gray-800">{{ item.title }}</h3>
                                    <p class="text-sm text-gray-600">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Проблемы и решения -->
                    <div>
                        <h2 class="text-xl font-semibold text-purple-800 flex items-center gap-2 mb-3">
                            <span class="w-1 h-6 bg-purple-600 rounded-full"></span>
                            Главные победы
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div v-for="win in wins" :key="win"
                                class="bg-purple-50 rounded-lg p-3 text-sm text-gray-700 border border-purple-100">
                                ✅ {{ win }}
                            </div>
                        </div>
                    </div>

                    <!-- Автор -->
                    <div class="bg-linear-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-12 h-12 rounded-full bg-linear-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl">
                                🐱
                            </div>
                            <div>
                                <div class="font-semibold text-purple-800">Κενός</div>
                                <div class="text-sm text-gray-600">Создано с ❤️(я заебался) и множеством ошибок</div>
                                <div class="text-xs text-gray-500 mt-1">Сделано учеником, буквально только начал изучать
                                    nuxt и заебался исправлять баги с гидратацией и зависимостью.Нейросеть чисто
                                    мультитул но не как не замена рук</div>
                            </div>
                        </div>
                    </div>

                    <!-- Финишная черта -->
                    <div class="text-center pt-4">
                        <div class="text-4xl animate-bounce">😺</div>
                        <p class="text-sm text-gray-500 mt-2">Теперь код идеально работает в VS Code!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCatImage } from '~/composables/useCatImage'

const { getAllCatImages } = useCatImage()
const catCount = getAllCatImages().length

// Количество исправленных ошибок (драматизируем немного 😄)
const errorCount = 999999

// Технологии
const technologies: string[] = [
    'Nuxt 3',
    'Vue 3',
    'TypeScript',
    'Tailwind CSS',
    '@nuxt/image',
    '@nuxt/ui',
    'Vite',
    'Server-Side Rendering',
    'Static Generation',
    'Composables',
    'useState',
    'Route Rules'
]

// Хронология разработки
const timeline = [
    {
        date: 'Начало',
        title: 'Создание базового макета',
        description: 'Вёрстка главной страницы с фиолетовым градиентом и карточкой для котика'
    },
    {
        date: 'Проблема #1',
        title: 'Изображения не грузились (404)',
        description: 'Долго искали правильные пути к файлам в public, перепробовали все варианты'
    },
    {
        date: 'Проблема #2',
        title: 'TypeScript ругался на всё',
        description: 'any, never, undefined - прошли через все типы ошибок'
    },
    {
        date: 'Проблема #3',
        title: 'Гидратация и рендеринг',
        description: 'SSR vs CSR vs SSG - выбрали гибридный подход'
    },
    {
        date: 'Проблема #4',
        title: 'import.meta.glob',
        description: 'Модуль не видел изображения, пришлось делать запасной ручной список'
    },
    {
        date: 'Финал',
        title: 'Работает!',
        description: 'Все страницы загружаются, котики показываются, шутки генерируются'
    }
]

// Главные победы
const wins: string[] = [
    'Починили пути к изображениям',
    'Укротили TypeScript',
    'Настроили @nuxt/image',
    'Добавили SSG для главной',
    'Сделали пагинацию на /cats',
    'Фиолетовый градиент везде',
    'Исправили гидратацию',
    'Победили 404 ошибки'
]

// Мета-теги для SEO
useHead({
    title: 'О проекте | CatJoke',
    meta: [
        { name: 'description', content: 'История создания проекта CatJoke. Как мы прошли через миллион ошибок и сделали идеальный код.' }
    ]
})
</script>

<style scoped>
/* Анимация для блока с котиком */
@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.absolute {
    animation: float 3s ease-in-out infinite;
}

/* Анимация для появления элементов */
.bg-white {
    animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>