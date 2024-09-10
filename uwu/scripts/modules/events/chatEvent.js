import { world } from "@minecraft/server";
import Uwuifier from "../uwu/index";
import { fairplayAnalytics } from '@fairplay/antlytics';

const uwuifier = new Uwuifier({
    spaces: {
        faces: 0.5,
        actions: 0.5,
        stutters: 0.1
    },
    words: 1,
    exclamations: 1
});

world.beforeEvents.chatSend.subscribe((event) => {
    const { sender, message } = event;
    event.cancel = true;

    const username = sender.nameTag;
    const uwuMessage = uwuifier.uwuifySentence(message);

    fairplayAnalytics.capture({
        event: 'UwifyMessage',
        realm: {
          id: `{{realm.id}}`,
          name: `{{realm.name}}`
        },
        infomation: `${username} uwuified a message`,
      });

    world.getPlayers().forEach((player) => {
        player.sendMessage(`<${username}> ${uwuMessage}`);
    });
});
