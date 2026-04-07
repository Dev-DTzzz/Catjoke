<template>
    <header class="fixed top-0 left-0 w-full z-50">
        <!-- Этот div отвечает за фон, отступы и закругление -->
        <div class="bg-white/95 backdrop-blur-sm shadow-sm rounded-b-[60px] mx-4 md:mx-auto">
            <nav class="flex justify-center items-center max-w-6xl mx-auto px-4 py-4">

                <!-- Центрированный блок с ссылками -->
                <div class="flex items-center gap-6">
                    <NuxtLink to="/about" 
                        class="text-purple-700 hover:text-purple-800 transition-colors"
                        active-class="text-purple-600 font-medium">
                        О проэкте
                    </NuxtLink>

                    <NuxtLink to="/"
                        class="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                        CatJoke
                    </NuxtLink>

                    <NuxtLink to="/cats" 
                        class="text-purple-700 hover:text-purple-800 transition-colors"
                        active-class="text-purple-600 font-medium">
                        Котики
                    </NuxtLink>
                </div>

            </nav>
        </div>
    </header>
</template>