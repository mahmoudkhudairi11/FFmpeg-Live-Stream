var player = new Clappr.Player({
  source: "/hls/master.m3u8",
  parentId: "#player",
  plugins: [LevelSelector],
  levelSelectorConfig: {
    title: "Quality",
    labelCallback: function(playbackLevel, customLabel) {
        return playbackLevel.level.height+"p";
    }
  },
});