<template>
    <div class="min-h-screen bg-linear-to-br from-purple-100 to-blue-100 flex items-center justify-center p-4">
        <!-- Основная карточка -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden" style="width: 650px;">
            <!-- Контейнер для изображения 650x650 -->
            <div class="bg-gray-100 relative" style="width: 650px; height: 650px;">
                <div class="w-full h-full flex items-center justify-center overflow-hidden">
                    <ClientOnly>
                        <!-- Показываем изображение только когда оно есть -->
                        <NuxtImg 
                            v-if="currentCatImage" 
                            :src="currentCatImage" 
                            alt="Random cat"
                            class="w-full h-full object-cover"
                            loading="lazy"
                            fetch-priority="low"
                            decoding="async"
                            format="webp"
                            quality="70"
                            @error="handleImageError" 
                        />
                        <!-- Изначально показываем просто плейсхолдер -->
                        <span v-else class="text-gray-400 text-base">
                            🐱 Нажми кнопку для котика!
                        </span>
                        <template #fallback>
                            <span class="text-gray-400 text-base">
                                🐱 Загружаем...
                            </span>
                        </template>
                    </ClientOnly>
                </div>

                <!-- Плейсхолдер -->
                <div class="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <span class="text-7xl">😺</span>
                </div>
            </div>

            <!-- Блок с шуткой - пустой изначально -->
            <div class="bg-black">
                <div class="p-4 min-h-25">
                    <ClientOnly>
                        <p v-if="jokeLoading" class="text-white text-sm leading-relaxed">
                            Загружаем шутку... 😊
                        </p>
                        <p v-else-if="jokeError" class="text-red-400 text-sm leading-relaxed">
                            Ошибка: {{ jokeError }}
                        </p>
                        <p v-else class="text-white text-sm leading-relaxed">
                            {{ joke || 'Нажми кнопку, чтобы увидеть шутку!' }}
                        </p>
                        <template #fallback>
                            <p class="text-white text-sm leading-relaxed">
                                Загружаем...
                            </p>
                        </template>
                    </ClientOnly>
                </div>
            </div>

            <!-- Кнопка - единственный способ загрузить контент -->
            <div class="bg-white">
                <div class="p-4">
                    <button @click="generateRandom" :disabled="jokeLoading"
                        class="w-full bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                        {{ jokeLoading ? 'Загрузка...' : 'Сгенерировать кота и шутку! 🐱' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAsset } from '~/composables/useAsset'

const getImageUrl = (path: string) => {
  if (!path) return ''
  return useAsset(path)
}

const currentCatImage = useState<string | null>('cat-image', () => null)
const { getRandomCatImage } = useCatImage()
const { joke, isLoading: jokeLoading, error: jokeError, fetchJoke } = useJoke()

//  Загружаем ТОЛЬКО по кнопке
const generateRandom = async () => {
    // Грузим картинку
    const imagePath = getRandomCatImage()
    if (imagePath) {
        currentCatImage.value = imagePath
    }
    
    // Грузим шутку
    await fetchJoke()
}

const handleImageError = (event: any) => {
    const newImagePath = getRandomCatImage()
    if (newImagePath && newImagePath !== currentCatImage.value) {
        currentCatImage.value = newImagePath
    } else {
        currentCatImage.value = null
    }
}

// Ничего не грузим при монтировании!
// onMounted(() => {
//     generateRandom()    === я так делал и производительность была хуитенью
// })
</script>
