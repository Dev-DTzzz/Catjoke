<template>
    <div class="min-h-screen bg-linear-to-br from-purple-100 to-blue-100 py-8 px-4">
        <div class="max-w-7xl mx-auto">
            <!-- Заголовок с счетчиком -->
            <div class="text-center mb-8">
                <h1 class="text-3xl md:text-4xl font-bold text-purple-800 mb-2">
                    🐱 Наши прекрасные котики
                </h1>
                <p class="text-purple-600">
                    Всего котиков: {{ cats.length }}
                </p>
            </div>

            <!-- Индикатор загрузки -->
            <div v-if="loading" class="text-center py-12">
                <div class="inline-block animate-spin text-4xl mb-4">😺</div>
                <p class="text-purple-600">Загружаем котиков...</p>
            </div>

            <!-- Сетка с котиками -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div v-for="(cat, index) in displayedCats" :key="index"
                    class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    <!-- Градиент при наведении -->
                    <div
                        class="absolute inset-0 bg-linear-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    </div>

                    <!-- Изображение котика с NuxtImg - ТОЛЬКО ленивая загрузка -->
                    <div class="relative aspect-square p-4">
                        <div
                            class="w-full h-full rounded-xl overflow-hidden bg-linear-to-br from-purple-100 to-blue-100">
                            <NuxtImg :src="cat.image" :alt="cat.name"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy" format="webp" quality="70" @error="(e) => handleImageError(e, index)" />
                        </div>
                    </div>

                    <!-- Информация -->
                    <div class="p-4 text-center border-t border-purple-100">
                        <h3 class="font-semibold text-purple-800 mb-1">{{ cat.name }}</h3>
                        <p class="text-sm text-gray-600 mb-2">{{ cat.breed }}</p>

                        <!-- Декоративные точки -->
                        <div class="flex justify-center space-x-2">
                            <span class="inline-block w-2 h-2 rounded-full bg-purple-400"></span>
                            <span class="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                            <span class="inline-block w-2 h-2 rounded-full bg-purple-600"></span>
                        </div>
                    </div>

                    <!-- Фиолетовая полоска снизу -->
                    <div class="h-1 bg-linear-to-r from-purple-600 to-blue-600"></div>
                </div>
            </div>

            <!-- Кнопка "Загрузить еще" -->
            <div v-if="hasMore" class="text-center mt-8">
                <button @click="loadMore"
                    class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
                    Загрузить еще котиков 🐱 ({{ cats.length - displayedCats.length }} осталось)
                </button>
            </div>

            <!-- Если котиков нет -->
            <div v-if="!loading && cats.length === 0" class="text-center py-12">
                <div class="text-6xl mb-4">😿</div>
                <p class="text-gray-600">Котики временно разбежались</p>
                <button @click="loadCats"
                    class="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Загрузить котиков
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Cat {
    image: string
    name: string
    breed: string
}

const { getAllCatImages } = useCatImage()

const loading = ref(true)
const cats = ref<Cat[]>([])
const displayedCats = ref<Cat[]>([])
const itemsPerPage = 12
const currentPage = ref(1)

const breeds: string[] = [
    'Британский', 'Шотландский', 'Сиамский', 'Мейн-кун',
    'Сфинкс', 'Персидский', 'Бенгальский', 'Абиссинский',
    'Русский голубой', 'Сибирский', 'Бомбейский', 'Рэгдолл'
]

const names: string[] = [
    'Мурзик', 'Барсик', 'Снежок', 'Рыжик', 'Пушок', 'Васька',
    'Кузя', 'Тимоша', 'Марсик', 'Леопольд', 'Матроскин', 'Кокос'
]

const hasMore = computed(() => {
    return displayedCats.value.length < cats.value.length
})

const loadCats = (): void => {
    const images: string[] = getAllCatImages()

    if (images.length === 0) {
        cats.value = []
        displayedCats.value = []
        loading.value = false
        return
    }

    cats.value = images.map((image: string, index: number): Cat => {
        const nameIndex = index % names.length
        const breedIndex = index % breeds.length
        return {
            image,
            name: names[nameIndex] || 'Котик',
            breed: breeds[breedIndex] || 'Домашний'
        }
    })

    displayedCats.value = cats.value.slice(0, itemsPerPage)
    loading.value = false

    useHead({
        title: 'Все котики | CatJoke',
        meta: [
            { name: 'description', content: `У нас ${cats.value.length} прекрасных котиков!` }
        ]
    })
}

const loadMore = (): void => {
    const nextPage = currentPage.value + 1
    const start = currentPage.value * itemsPerPage
    const end = nextPage * itemsPerPage
    const moreCats = cats.value.slice(start, end)
    displayedCats.value = [...displayedCats.value, ...moreCats]
    currentPage.value = nextPage
}

const handleImageError = (event: any, index: number): void => {
    // Тишина... никаких console.log
}

onMounted(() => {
    loadCats()
})
</script>

<style scoped>
.group {
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Автоматические задержки для анимации */
.group:nth-child(n) {
    animation-delay: calc(0.05s * n);
}
</style>