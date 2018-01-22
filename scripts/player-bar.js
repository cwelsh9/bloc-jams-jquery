
{
  $('button#play-pause').on('click', function() {
    player.playPause();
  $(this).attr('playState', player.playState);

});

  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    if (nextSongIndex > album.songs.length) { return; }

    player.playPause(nextSong);
  });

  $('button#previous').on('click', function () {
    if (player.playState == 'playing') {
      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex - 1;
      const previousSong = album.songs[previousSongIndex];
      if (previousSongIndex < album.songs[0]) { return; }

      player.playPause(previousSong);
    };
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control input').val(percent);
  }, 1000);
}
