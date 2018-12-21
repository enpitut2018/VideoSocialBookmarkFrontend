export default class EmbedController {
  skipNext = () => {
    if (this.playlist === undefined || this.playlist === null) {
      return;
    }
    const currentItem = this.playlist.playlist_items.find(
      item => item.entry.id === this.entry.id
    );
    if (currentItem === undefined) {
      return;
    }
    const nextItem = this.playlist.playlist_items.find(
      item => item.id === currentItem.next_id
    );
    if (nextItem === undefined) {
      return;
    }
    this.routerHistory.push(
      `/entries/${nextItem.entry_id}?list=${this.playlist.id}`
    );
  };
  nicovideoEventListener = e => {
    if (e.origin === "https://embed.nicovideo.jp") {
      const playerStopped =
              e.data.eventName === "playerStatusChange" &&
              e.data.data.playerStatus === 4;
      const playerLoaded = e.data.eventName === "loadComplete";
      if (playerLoaded) {
        // Set autoplay
        const player = document.getElementById("embed");
        const origin = "https://embed.nicovideo.jp";
        const playMessage = {
          sourceConnectorType: 1,
          playerId: this.playerId.toString(), // String. not Integer.
          eventName: "play"
        };
        if (player !== null) {
          player.contentWindow.postMessage(playMessage, origin);
        }
      }
      if (playerStopped) {
        this.skipNext();
      }
    }
  }
  constructor(entry, playlist, routerHistory, playerId) {
    this.entry = entry;
    this.playlist = playlist;
    this.routerHistory = routerHistory;
    this.playerId = playerId;
    switch (entry.provider) {
    case "nicovideo": {
      window.addEventListener("message", this.nicovideoEventListener);
      break;
    }
    default: {
      break;
    }
    }
  }
  release(){
    window.removeEventListener("message", this.nicovideoEventListener);
  }
}
