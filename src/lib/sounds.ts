'use client';

import { Howl } from 'howler';

const sounds = {
    hover: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'], volume: 0.1 }),
    click: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], volume: 0.2 }),
    transition: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2575/2575-preview.mp3'], volume: 0.1 }),
    alert: new Howl({ src: ['https://assets.mixkit.co/active_storage/sfx/2590/2590-preview.mp3'], volume: 0.3 }),
};

export const playSound = (type: keyof typeof sounds) => {
    if (typeof window !== 'undefined') {
        sounds[type].play();
    }
};
