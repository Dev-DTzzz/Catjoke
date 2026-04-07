export const useCatImage = () => {
    const imageFiles: string[] = [
        '19010c37509cd3c2a2c4c2bb850a5c28.jpg',
        '3db8366ea68d564be8f04d0e3377a28b.jpg',
        '50e92f2e34640b4aff5c2565193053df.jpg',
        '5bbbb40141f702b9e1935e1fda79596a.jpg',
        '7fbf0a8f83feb412405ca8c8792a7452.jpg',
        '9f76c1e8b772949a6b4329e7dcb67251.jpg',
        'channels4_profile (1).jpg',
        'channels4_profile (2).jpg',
        'channels4_profile (3).jpg',
        'channels4_profile.jpg',
        'ec98e7f78e354595fbf1f172c5f814e2.jpg',
        'i (1).webp',
        'i (2).webp',
        'i.webp',
        'maxresdefault.jpg',
        'unnamed.jpg'
    ];

    const getRandomCatImage = (): string => {
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        return `/images/${imageFiles[randomIndex]}`;
    };

    const getAllCatImages = (): string[] => {
        return imageFiles.map(file => `/images/${file}`);
    };

    return {
        getRandomCatImage,
        getAllCatImages
    };
};