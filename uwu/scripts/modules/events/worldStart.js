import { world } from "@minecraft/server";

import { fairplayLoader } from '@fairplay/loader';

world.beforeEvents.worldStart.subscribe((event) => {
    fairplayLoader.load({
        name: 'chatUwuify',
        version: '1.0.0',
        description: 'Uwuifies chat messages',
        scriptID: '0', 
        dependencies: {
            '@fairplay/antlytics': '^1.0.0',
            '@fairplay/loader': '^1.0.0',
        },
        events: {
            'player.chat': 'chatEvent.js'
        }
    });
});