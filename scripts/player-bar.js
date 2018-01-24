// Previous track and next track buttons only respond when a song is
// playing.
// Previous track button plays the previous song on the album
// Previous track button doesn't respond if there is no previous track

{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function () {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    if (nextSongIndex >= album.songs.length) { return; }

    player.playPause(nextSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .total-time').text( duration );
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
  }, 1000);

  $('button#previous').on('click', function () {
    if (player.playState == 'playing') {
      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex - 1;
      const previousSong = album.songs[previousSongIndex];
      if (previousSongIndex < album.songs[0]) { return; }

    };
  });

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });

}
