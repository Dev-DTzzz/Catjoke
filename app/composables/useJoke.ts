export const useJoke = () => {
    const joke = ref<string>('');
    const isLoading = ref<boolean>(false);
    const error = ref<string | null>(null);

    const fetchJoke = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');

            if (!response.ok) {
                throw new Error('Ошибка при загрузке шутки');
            }

            const data = await response.json();
            joke.value = `${data.setup} - ${data.punchline}`;

        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Произошла ошибка';
            console.error('Ошибка:', err);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        joke,
        isLoading,
        error,
        fetchJoke
    };
};
