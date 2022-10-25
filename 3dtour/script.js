(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "height": "100%",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Player",
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "downloadEnabled": false,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DE960C71_D352_A891_41E4_9CB429946ACB_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C386A001_D356_9871_41E7_807F9E060344_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48EEDE88_01B0_8045_4176_BDF33C216045",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF838DB3_D332_6B91_41E4_949233E13792",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF838DB3_D332_6B91_41E4_949233E13792_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DE3E131A_D335_B893_41E4_23FD090FF02E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C386A001_D356_9871_41E7_807F9E060344",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C386A001_D356_9871_41E7_807F9E060344_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DCC81032_D352_9893_41E4_8442309AE672",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DCC81032_D352_9893_41E4_8442309AE672_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF54017A_D7E0_B669_41E1_EA8150949096",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF54017A_D7E0_B669_41E1_EA8150949096_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CA0608E7_D7E3_D667_41D7_485497252B19",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CA0608E7_D7E3_D667_41D7_485497252B19_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4",
   "camera": "this.panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 125.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_46E33C11_01B0_8046_4150_1691F24CE1F3",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang 2 IT",
 "id": "panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC",
 "thumbnailUrl": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CA4BC12C_D7E0_D7E8_41E8_5F82322032DF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -96.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48CF0E62_01B0_80C5_416B_898789E3F12D",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_466B9CAB_01B0_805B_4172_29C296C07FDC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -70.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48FECE9B_01B0_807B_4166_98E513D1EDD0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -87.24,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4AD3B109_01B0_8046_4171_C562958331B9",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -89.08,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48DE9E75_01B0_80CF_4171_41B960330F59",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 7 B",
 "id": "panorama_C386A001_D356_9871_41E7_807F9E060344",
 "thumbnailUrl": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DC1B2DB8_D3D5_EB9F_41E4_317A5BC82032",
  "this.overlay_C3358388_D3D5_B87F_41E0_C3C55A3A8CBF",
  "this.overlay_C2A729E3_D3D6_ABB1_41E4_8AF37FF93625",
  "this.overlay_C02B2D8C_D3D7_E877_41CD_2F0DCE8F76EB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 77.64,
   "backwardYaw": -149.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lab 4 IT",
 "id": "panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD",
 "thumbnailUrl": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CD1F53D2_D7FF_BAB9_41E7_57B836B5AAF8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 7.35
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_46DFFBE9_01B0_87C6_4172_104B55832010",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -96.01,
   "backwardYaw": 82.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 3 A",
 "id": "panorama_DE960C71_D352_A891_41E4_9CB429946ACB",
 "thumbnailUrl": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DBED8DE0_D52B_DC5F_41D0_4A1F84394356",
  "this.overlay_D8E2C030_D52B_443F_41C2_AAFFA0D6F8BC",
  "this.overlay_DB1F92EE_D52B_4423_41BA_799004B49E51",
  "this.overlay_D8F8E267_D527_4421_41C2_5175BE4F827B",
  "this.overlay_DB5400F0_D527_443F_419F_45E9CAAF7DF5"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -86.33,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4845AF14_01B0_804D_4162_10A17ABE0609",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -84.49,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4AB040E4_01B0_81CD_4114_5974EDB3D880",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 125.99,
   "backwardYaw": -90.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang 1 SI",
 "id": "panorama_CF54017A_D7E0_B669_41E1_EA8150949096",
 "thumbnailUrl": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CDE82E69_D7E1_4A6B_41D4_5B677E7C750D"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 130.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48F07EAE_01B0_805D_4169_A385C2EDA666",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C386A001_D356_9871_41E7_807F9E060344"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang 1 IT",
 "id": "panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E",
 "thumbnailUrl": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CE2DB70C_D7E1_5BA9_41E6_1F838A54DFB4"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A"
  },
  {
   "yaw": 109.65,
   "backwardYaw": -54.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA"
  },
  {
   "yaw": -113.72,
   "backwardYaw": 83.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lobby SI",
 "id": "panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256",
 "thumbnailUrl": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C315BA50_D357_A8EF_41CB_C944D6587623",
  "this.overlay_DC878ADB_D355_A991_41CC_F7DE2ECF1420",
  "this.overlay_C24444C9_D355_B9FE_41D7_F922AAE229A7",
  "this.overlay_C348BDBF_D352_6B91_41A2_F84AC227AFB7",
  "this.overlay_C31679AE_D353_ABB3_41D6_73D6580806FC"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -117.31,
   "backwardYaw": -156.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang ADM TI",
 "id": "panorama_CA0608E7_D7E3_D667_41D7_485497252B19",
 "thumbnailUrl": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CAB48F13_D7E1_4BB8_41DB_B82B4C392B95"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -111.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4864DF3B_01B0_80BB_4141_8EEE0D891898",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4A47F18F_01B0_805B_4139_F54457814506",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -158.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_488A1E15_01B0_804F_4155_A5DF3B69CAB3",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -135.92,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4936ADB7_01B0_804B_4172_763B52E08837",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 83.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B1B9014_01B0_804D_4176_5B23ADAD6594",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 101.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4A053142_01B0_80C5_4154_EC733090D9A5",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 83.73,
   "backwardYaw": -113.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256"
  },
  {
   "yaw": -3.91,
   "backwardYaw": -113.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Tangga SI Kanan",
 "id": "panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A",
 "thumbnailUrl": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CDF0B836_D7E1_F5F9_41D0_80F5B42EB0F1",
  "this.overlay_CD5DE843_D7E1_B59F_41C8_A5C7D7A8B50B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 152.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B4C604E_01B0_80DD_4160_6088F4176971",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4BFA2FE9_01B0_9FC7_4123_10249B43A8F4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 28.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4A24D169_01B0_80C7_4159_54B7B6ED30D8",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CA0608E7_D7E3_D667_41D7_485497252B19_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 66.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49B1DD1E_01B0_807D_4163_1A48AF119872",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 2 A",
 "id": "panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340",
 "thumbnailUrl": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_t.jpg",
 "class": "Panorama",
 "pitch": -23.74,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 132.19,
 "overlays": [
  "this.overlay_DBEE22A1_D52F_C421_41E4_7B9E80AA21A0",
  "this.overlay_D8D6099A_D52F_44E3_41E1_959F153E75E8",
  "this.overlay_D8B47FDF_D529_7C61_41D5_68543A7E60C5",
  "this.overlay_D89E4C7A_D52A_BC23_41D6_9AE27F23E386"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -112.6,
   "backwardYaw": -114.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang ADM SI",
 "id": "panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7",
 "thumbnailUrl": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C831CC7D_D7E1_CE68_41AB_F91A378B1FC1"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang 3 IT",
 "id": "panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E",
 "thumbnailUrl": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CE39410F_D7E3_D7A7_41DB_300913975E6D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 88.96,
   "backwardYaw": -93.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF"
  },
  {
   "yaw": -1.14,
   "backwardYaw": 68.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang Dosen TI 2",
 "id": "panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7",
 "thumbnailUrl": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CA0DEF75_D7E0_CA78_41E9_5FD6747E8A27",
  "this.overlay_CA5240CF_D7E0_D6A8_41EA_8CFA0236FE89"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B2D5028_01B0_8045_4174_395E49111086",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DF838DB3_D332_6B91_41E4_949233E13792",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DF838DB3_D332_6B91_41E4_949233E13792_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DE3E131A_D335_B893_41E4_23FD090FF02E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C386A001_D356_9871_41E7_807F9E060344",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C386A001_D356_9871_41E7_807F9E060344_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_DCC81032_D352_9893_41E4_8442309AE672",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_DCC81032_D352_9893_41E4_8442309AE672_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF54017A_D7E0_B669_41E1_EA8150949096",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF54017A_D7E0_B669_41E1_EA8150949096_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CA0608E7_D7E3_D667_41D7_485497252B19",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CA0608E7_D7E3_D667_41D7_485497252B19_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 43, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_camera",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4BEB1FD6_01B0_9FCD_4174_AF31E0BC7D86",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -93.7,
   "backwardYaw": 88.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7"
  },
  {
   "yaw": 0.09,
   "backwardYaw": -52.34,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang Dosen TI 3",
 "id": "panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF",
 "thumbnailUrl": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CAC3A016_D7E7_75B9_41E4_F0DD00FB2F70",
  "this.overlay_F7BC93FA_D7E7_5A69_41A6_F8196D92E821"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": 1.67,
   "backwardYaw": 0.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC"
  },
  {
   "yaw": -49.42,
   "backwardYaw": 21.09,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA"
  },
  {
   "yaw": -113.69,
   "backwardYaw": -3.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A"
  },
  {
   "yaw": 83.38,
   "backwardYaw": 44.04,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 4 A",
 "id": "panorama_C3A23466_D355_98B2_41D0_86D0739C7329",
 "thumbnailUrl": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8F92E6D_D539_DC21_41AC_17AD4F6F77AB",
  "this.overlay_DB2FFE2F_D53B_5C22_41C4_6A96D2F683EA",
  "this.overlay_D85D3535_D53B_4C21_41CB_E0E667B3F152",
  "this.overlay_DB07DAEC_D53F_C427_41E3_503A3C8274DA",
  "this.overlay_DB07D3CE_D53F_4463_41E1_711AF8F7F941"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4A8F909A_01B0_8045_4169_50F217BE02B4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -22.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4926BDA3_01B0_804B_4163_F9A2AB89F1FC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.92,
  "class": "PanoramaCameraPosition",
  "pitch": -1.84
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B5C6061_01B0_80C7_4133_E73376C7D6F8",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 68.07,
   "backwardYaw": -1.14,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7"
  },
  {
   "yaw": -52.34,
   "backwardYaw": 0.09,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang Dosen TI",
 "id": "panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051",
 "thumbnailUrl": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CAE12504_D7E0_DF98_41CB_848CC6CEF1DC",
  "this.overlay_CB72F624_D7E7_DD98_41D9_D0D1E2A9F72D",
  "this.overlay_CB36C498_D7E7_BEA8_41BC_220C24F0A0DA"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Depan Lorong Gedung SI 2",
 "id": "panorama_DF838DB3_D332_6B91_41E4_949233E13792",
 "thumbnailUrl": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DC653B50_D34E_68EE_41DD_8F59BB02A22A",
  "this.overlay_DDC9BE98_D34D_A99F_41DC_EA3FCB056BAF"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D"
  },
  {
   "yaw": -88.23,
   "backwardYaw": -111.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54"
  },
  {
   "yaw": 0.16,
   "backwardYaw": 1.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 5 A",
 "id": "panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC",
 "thumbnailUrl": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8F11767_D539_CC22_41E5_501E6208F857",
  "this.overlay_DB0D09D5_D53A_C466_41E5_D0E117EF9D06",
  "this.overlay_D8CB9F25_D53B_7C26_41E4_24C7EB39E567",
  "this.overlay_D84F25B1_D53B_CC21_41E0_36F070A5C682",
  "this.overlay_DA6DC162_D53A_C423_41D5_24184D68ED69"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Samping Gedung SI 2",
 "id": "panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D",
 "thumbnailUrl": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C26D3D3A_D352_6893_41D1_7864B6BD580D",
  "this.overlay_C26798ED_D352_E9B6_41D6_9FE1BBD6A3E9"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98"
  },
  {
   "yaw": -156.17,
   "backwardYaw": -117.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA0608E7_D7E3_D667_41D7_485497252B19"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C386A001_D356_9871_41E7_807F9E060344"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 6 B",
 "id": "panorama_C3BAC47B_D356_7892_41E1_3B467B883758",
 "thumbnailUrl": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C305EE5F_D3F2_A892_41D9_F8C25488D19D",
  "this.overlay_C1CE9D12_D3F3_A893_41DB_DAE440AFC8A8",
  "this.overlay_C38DB989_D3F3_A870_41E1_40C7257D1E34",
  "this.overlay_C21B80B5_D3F3_9991_41E5_609D5AF7398B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 129.49,
  "class": "PanoramaCameraPosition",
  "pitch": -12.86
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4605DC38_01B0_8045_4178_2A69F7889C64",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48006EC1_01B0_81C7_415B_EC16DD14DFEA",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 44.04,
   "backwardYaw": 83.38,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lab SI",
 "id": "panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB",
 "thumbnailUrl": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CB994F9A_D7E0_CAA8_41D5_C8B2EB195CE5"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.84,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B964F74_01B0_80CD_4143_741B25FC8E28",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -46.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4BDB1FC3_01B0_9FCB_4170_8DF44CCC831A",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 3 B",
 "id": "panorama_C36E6803_D352_6872_41D6_3B2EBD84939A",
 "thumbnailUrl": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DD712823_D3CE_E8B1_41E5_D7CAEA09AA93",
  "this.overlay_DD6CF2C0_D3CD_B9EF_41E2_17682E8C3B0A",
  "this.overlay_C1AC071F_D3CD_9892_41E6_C91A1687395B",
  "this.overlay_C0FA13CD_D3F2_9FF1_41C6_573D53D82040",
  "this.overlay_DCF1C7D6_D3F2_E793_41E4_223BF8926F9F",
  "this.overlay_DCAE5810_D3F2_686E_41EA_514E2934E856",
  "this.overlay_12A75F92_0151_8045_4155_4C743107E32F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -111.16,
   "backwardYaw": -88.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lab 2 IT",
 "id": "panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54",
 "thumbnailUrl": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CE5C174C_D7E0_BBA9_41DE_8622B2E52F5B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.08,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B864F61_01B0_80C7_416D_308FC668DF9E",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D"
  },
  {
   "yaw": -27.15,
   "backwardYaw": -78.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA"
  },
  {
   "yaw": 97.21,
   "backwardYaw": -49.73,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 7 A",
 "id": "panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2",
 "thumbnailUrl": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DB62CC8E_D52E_FCE3_41E4_FB79A0361196",
  "this.overlay_DA084F9D_D52F_BCE6_41E7_F707F4AE6F97",
  "this.overlay_DB7AC0EB_D52E_C421_41D8_5F46860FCF09",
  "this.overlay_DB403163_D529_4421_41D3_BCAC71880108"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4A37E17D_01B0_80BF_4154_D65A41F25182",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 157.91,
   "backwardYaw": -178.95,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCC81032_D352_9893_41E4_8442309AE672"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Musholla SI",
 "id": "panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4",
 "thumbnailUrl": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C9D3A863_D7E0_B59F_41B4_ADCA2086C895"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90.92,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4658DC98_01B0_8045_4175_D71C4D61FB67",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.67,
  "class": "PanoramaCameraPosition",
  "pitch": -0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4AE3F11C_01B0_807D_4160_17B26C038C4B",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4AC3A0F8_01B0_81C5_4172_CCFFFDCA817D",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C386A001_D356_9871_41E7_807F9E060344"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Samping Gedung SI 1",
 "id": "panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB",
 "thumbnailUrl": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DD4D51BC_D356_9B97_41E2_54BE06A249D4",
  "this.overlay_DE89A9FF_D356_AB91_41B8_48C711CCE82A",
  "this.overlay_C38D7AD8_D355_A99F_41E2_07F1F3696741"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -54.68,
   "backwardYaw": 109.65,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256"
  },
  {
   "yaw": 21.09,
   "backwardYaw": -49.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Tangga SI Kiri",
 "id": "panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA",
 "thumbnailUrl": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CD50556A_D7E1_5E69_41E6_D8274E20F92A",
  "this.overlay_CAB950BC_D7E1_76E9_41DA_7260E034AF3B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "yaw": -49.73,
   "backwardYaw": 97.21,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang 2 SI",
 "id": "panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7",
 "thumbnailUrl": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CD493267_D7E0_DA67_41DC_2CD0DE0E8371"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF838DB3_D332_6B91_41E4_949233E13792"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Depan Gedung SI",
 "id": "panorama_D839B6A2_D332_99B3_41E8_839025BAC96E",
 "thumbnailUrl": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DCAA3D15_D335_E891_41E8_D48B8BD028E3",
  "this.overlay_C36A4C60_D333_A8AF_41DD_E436701C7144",
  "this.overlay_DE96D43A_D333_F893_41D1_F6227FDB9154",
  "this.overlay_D915F307_D761_5B98_41CD_0D07D638003C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA0608E7_D7E3_D667_41D7_485497252B19"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 5 B",
 "id": "panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2",
 "thumbnailUrl": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C259EBB0_D3F6_AFAE_41C3_7066946E5D72",
  "this.overlay_C0D1B384_D3F7_9877_41DE_83F7DFD823BC",
  "this.overlay_DC67879F_D3F6_E791_41BB_6F7DB8B0AC1D",
  "this.overlay_C1C091A0_D3F6_7BAF_41D3_59A0AFC31168",
  "this.overlay_C1EC00E5_D3F5_B9B1_41B5_B08DD2CCB51A",
  "this.overlay_C2B3E2B3_D3F5_B992_41CD_7D206FCF7C36",
  "this.overlay_1A372DE0_0150_83C5_4169_707B240DACE8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -78.81,
   "backwardYaw": -27.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lab 1 IT",
 "id": "panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA",
 "thumbnailUrl": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CE0539DA_D7E0_B6A9_41E7_89A0AC93C4D8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 62.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4A9100C0_01B0_81C5_4170_6D40022EBB88",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 66.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49C04D30_01B0_8045_415A_3801DD3C8340",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49D3FD44_01B0_80CD_4172_D8F5792CA012",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 4 B",
 "id": "panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D",
 "thumbnailUrl": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DC674EEF_D3F5_A9B1_41CE_6566E7E9A7D3",
  "this.overlay_C2855F79_D3F5_A891_41D1_E376B53686FB",
  "this.overlay_DCE75FDD_D3F6_6791_41D6_81FDA16F2D47"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_46141C4B_01B0_80DB_4165_18EBDC742462",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4813BED4_01B0_81CD_415B_9DF73A584502",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B0BFFFE_01B0_9FBD_4163_3061226B0043",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC"
  },
  {
   "yaw": -151.86,
   "backwardYaw": 133.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 6 A",
 "id": "panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D",
 "thumbnailUrl": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DB3B6A6E_D526_C423_41E6_D3FC075D0B18",
  "this.overlay_DB92DC49_D527_5C61_41DD_EB613F8C8FC8",
  "this.overlay_DB718A8E_D529_44E2_41E6_DAF37821A066",
  "this.overlay_DB0D1F81_D529_DCE1_41E7_FFC82168FC51"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_497A0E02_01B0_8045_4176_57CDDB870F5A",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang 4 IT",
 "id": "panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98",
 "thumbnailUrl": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CBB2B662_D7E3_5D99_41EA_5A4B625A9DC0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -54.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B6FB074_01B0_80CD_4167_ACECF95A98BF",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang 4 SI",
 "id": "panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF",
 "thumbnailUrl": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CDB0660B_D7E1_BDAF_41D2_7BFAF88A666F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C3A23466_D355_98B2_41D0_86D0739C7329_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 130.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4A14B156_01B0_80CD_4174_4F445C696628",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -87.24,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4AA070D2_01B0_81C5_416D_EE2C659942FC",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DF838DB3_D332_6B91_41E4_949233E13792_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -112.04,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_46D06BFE_01B0_87BD_4173_299F44FF46C2",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 23.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B3AE03B_01B0_80BB_4162_422CD1CFD519",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_498D2CD1_01B0_81C7_413E_EB183340F412",
 "class": "PanoramaCamera"
},
{
 "hfovMin": "150%",
 "label": "Depan Lorong SI - Sipil",
 "id": "panorama_DE3E131A_D335_B893_41E4_23FD090FF02E",
 "thumbnailUrl": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_t.jpg",
 "class": "Panorama",
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DC4E729D_D353_9996_41EA_5D267922B127",
  "this.overlay_C17C8F5C_D353_E890_41E5_625014B91B2D",
  "this.overlay_C37B6FF5_D352_A791_41CA_6E499441F2A1",
  "this.overlay_DE9AC63C_D352_F897_41D3_B76D1E83717C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 99.18,
  "class": "PanoramaCameraPosition",
  "pitch": -4.59
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49AFFCF7_01B0_81CB_415B_27BB243CA77C",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E"
  },
  {
   "yaw": -114.88,
   "backwardYaw": -112.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 2 B",
 "id": "panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50",
 "thumbnailUrl": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C0B78571_D3CD_F890_41CD_14C57BCD9AE2",
  "this.overlay_DC95A727_D3CD_98B1_41D6_3D4A2F4533BB",
  "this.overlay_C19EC07F_D3CE_9892_41BE_27075B6F8A9E",
  "this.overlay_C315E5A9_D3CE_9BB1_41E5_5ED1B350C8EC"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCC81032_D352_9893_41E4_8442309AE672"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340"
  },
  {
   "yaw": -149.46,
   "backwardYaw": 77.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 1 A",
 "id": "panorama_DCE74B8C_D352_A877_41DF_BF9266259999",
 "thumbnailUrl": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D80BC90B_D52B_C5E1_41E8_658C4E942C44",
  "this.overlay_DB7F9B57_D52A_C461_41C2_256691FE778B",
  "this.overlay_D8EDE608_D52E_CFEF_41C0_8415AF8810B9",
  "this.overlay_258734C9_0170_81C7_4153_D71C3B80FA04"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 30.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_496A3DF0_01B0_83C5_4158_DA7C3CFB4888",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 96.43,
  "class": "PanoramaCameraPosition",
  "pitch": -2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49F40D6A_01B0_80C5_416C_36420A6CA694",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 133.75,
   "backwardYaw": -151.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Ruang 5 IT",
 "id": "panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7",
 "thumbnailUrl": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CAC80744_D7E0_FB99_41AA_45E4FD7B3E53"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": -3.67
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_499F3CE4_01B0_81CD_416B_68B5BA6A0D66",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E"
  },
  {
   "yaw": -90.73,
   "backwardYaw": 125.99,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CF54017A_D7E0_B669_41E1_EA8150949096"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong SI 1 B",
 "id": "panorama_DC86C70B_D352_B871_41E7_CE652973F4D9",
 "thumbnailUrl": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C1FB7631_D352_9891_41D6_24F4857713F3",
  "this.overlay_DD7BA9DC_D3D2_AB97_41E7_4155F43A0610",
  "this.overlay_DD481FDA_D3D3_A793_41EA_46D02565A7C3",
  "this.overlay_DD4697F2_D3D3_A793_41E8_F217E9BFA9B8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.89,
  "class": "PanoramaCameraPosition",
  "pitch": -11.99
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48BF2E4F_01B0_80DB_4176_65B59C2082C0",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 90.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4A9EF0AD_01B0_805F_4172_0538DE6723D6",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 7.35
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49045D7D_01B0_80BF_4173_124EC19DF627",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 68.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_467D7CBE_01B0_81BD_414C_E10F9A9CB4FE",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -82.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4BB9CF9B_01B0_807B_4172_6D2D644DEF8A",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": -178.95,
   "backwardYaw": 157.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lorong Musholla SI",
 "id": "panorama_DCC81032_D352_9893_41E4_8442309AE672",
 "thumbnailUrl": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8A3C587_D52A_CCE2_41B4_74096FB2F1AF",
  "this.overlay_DBB27F99_D52B_BCE1_41E6_6BD291EAEF5A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 86.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4855AF27_01B0_804B_4162_FC2CA3912434",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -135.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48AD9E3B_01B0_80BA_4175_7D1847E3B8B4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 0.8
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49487DCA_01B0_83C5_4168_A1234724BFAF",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DCC81032_D352_9893_41E4_8442309AE672_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DF838DB3_D332_6B91_41E4_949233E13792"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Samping Gedung SI 3",
 "id": "panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19",
 "thumbnailUrl": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_C2C2D9A2_D35E_6BB2_41E6_10FA9D36ECBE",
  "this.overlay_DD5E9553_D35D_F892_41BD_2FC39408F665",
  "this.overlay_C387533B_D35D_B892_41B2_F7F92DF65771"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_489D7E28_01B0_8045_4175_FB7EE1584809",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 67.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49BE3D0A_01B0_8045_4171_227B07D815E7",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.49,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49E24D57_01B0_80CB_4139_795A4E2BA152",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -90,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4BA61F88_01B0_8045_4165_F7AE0FB3679A",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -81.73,
  "class": "PanoramaCameraPosition",
  "pitch": -5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48748F4E_01B0_80DD_4176_9A1E3E947709",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C3BAC47B_D356_7892_41E1_3B467B883758_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4823EEEE_01B0_81DD_4161_B3CEE66C296E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 5.51
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4B7FD087_01B0_804B_4170_E618B6590DE6",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 87.24,
  "class": "PanoramaCameraPosition",
  "pitch": 4.59
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_48353F01_01B0_8047_4150_D5044715F97B",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "yaw": 82.15,
   "backwardYaw": -96.01,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Lab 3 IT",
 "id": "panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888",
 "thumbnailUrl": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CD33833F_D7FF_BBE8_41AA_0335A76BF1EF"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -102.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_49587DDD_01B0_83FF_4153_02D04079F58E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CF54017A_D7E0_B669_41E1_EA8150949096_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 180,
  "class": "PanoramaCameraPosition",
  "pitch": 0.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4AF5612F_01B0_805B_4173_97F13D21B42E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 127.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_46260C5E_01B0_80FD_414F_BE62517F49B4",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_DCE74B8C_D352_A877_41DF_BF9266259999_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4BC99FAE_01B0_805D_4134_14C7E793D00C",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4648BC84_01B0_804D_416E_42CEC4D3D241",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -96.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_46F38C25_01B0_804F_416D_E2473E66387E",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Depan Lorong Gedung SI 1",
 "id": "panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895",
 "thumbnailUrl": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DEC54721_D332_98AE_41E4_2EA83C2A4667",
  "this.overlay_DDB32B76_D332_A893_41E7_98DE29F1E4BD",
  "this.overlay_DC993557_D34D_B891_41E2_09DFFAD3436C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 95.51,
  "class": "PanoramaCameraPosition",
  "pitch": 2.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_4914BD90_01B0_8045_4170_888AB715F774",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 65.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_46368C71_01B0_80C7_4162_DCE061691A88",
 "class": "PanoramaCamera"
},
{
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipOpacity": 0.5,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "class": "ViewerArea",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "width": 550,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": 34,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "height": 140,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "visible",
 "data": {
  "name": "--STICKER"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "width": 115.05,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "height": 641,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_4041C033_7558_FB6E_41CE_BFE427F3AF92",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "horizontalAlign": "left",
 "width": 330,
 "children": [
  "this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
  "this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--INFO photo"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--LOCATION"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
  "this.Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "scrollBarMargin": 2,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "--REALTOR"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 39.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9605710_D7A1_BBB9_41D9_9AC37B72FE9B",
   "pitch": -9.55,
   "yaw": -140.86,
   "distance": 100
  }
 ],
 "id": "overlay_CA4BC12C_D7E0_D7E8_41E8_5F82322032DF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 39.24,
   "yaw": -140.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758, this.camera_4813BED4_01B0_81CD_415B_9DF73A584502); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0D118D_D7A0_F6AB_41E8_D60592DB686A",
   "pitch": 0.21,
   "yaw": -84.77,
   "distance": 100
  }
 ],
 "id": "overlay_DC1B2DB8_D3D5_EB9F_41E4_317A5BC82032",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.79,
   "yaw": -84.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0DA18D_D7A0_F6AB_41D8_029853150593",
   "pitch": -4.69,
   "yaw": 71.26,
   "distance": 100
  }
 ],
 "id": "overlay_C3358388_D3D5_B87F_41E0_C3C55A3A8CBF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.72,
   "yaw": 71.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758, this.camera_4823EEEE_01B0_81DD_4161_B3CEE66C296E); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0DE18D_D7A0_F6AB_41E5_A9CD520948C4",
   "pitch": -17.98,
   "yaw": 97.73,
   "distance": 100
  }
 ],
 "id": "overlay_C2A729E3_D3D6_ABB1_41E4_8AF37FF93625",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.03,
   "yaw": 97.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0DD18D_D7A0_F6AB_41E2_88B6D850F603",
   "pitch": -2.43,
   "yaw": -107.97,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C02B2D8C_D3D7_E877_41CD_2F0DCE8F76EB",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.37,
   "yaw": -107.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999, this.camera_496A3DF0_01B0_83C5_4158_DA7C3CFB4888); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9622713_D7A1_BBBF_41C7_775183B589C2",
   "pitch": -2.18,
   "yaw": 77.64,
   "distance": 100
  }
 ],
 "id": "overlay_CD1F53D2_D7FF_BAB9_41E7_57B836B5AAF8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 29.53,
   "yaw": 77.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA10B18F_D7A0_F6A7_41C1_8C3D71EAA6AC",
   "pitch": -0.82,
   "yaw": 79.86,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DBED8DE0_D52B_DC5F_41D0_4A1F84394356",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.98,
   "yaw": 79.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888, this.camera_4B2D5028_01B0_8045_4174_395E49111086); this.mainPlayList.set('selectedIndex', 35)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 41.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA10D190_D7A0_F6B9_41D9_ED7B43C7387C",
   "pitch": -10.17,
   "yaw": -96.01,
   "distance": 100
  }
 ],
 "id": "overlay_D8E2C030_D52B_443F_41C2_AAFFA0D6F8BC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 41.18,
   "yaw": -96.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA116190_D7A0_F6B9_41D5_70D24CDCECB4",
   "pitch": -4.9,
   "yaw": 26.2,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DB1F92EE_D52B_4423_41BA_799004B49E51",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.95,
   "yaw": 26.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.94,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA11B190_D7A0_F6B9_41CF_A57C919C9122",
   "pitch": -18.83,
   "yaw": 0.19,
   "distance": 100
  }
 ],
 "id": "overlay_D8F8E267_D527_4421_41C2_5175BE4F827B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.94,
   "yaw": 0.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.1,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA122190_D7A0_F6BA_41C5_419406B4164C",
   "pitch": -24.96,
   "yaw": 179.17,
   "distance": 100
  }
 ],
 "id": "overlay_DB5400F0_D527_443F_419F_45E9CAAF7DF5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.1,
   "yaw": 179.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_4_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9, this.camera_4A47F18F_01B0_805B_4139_F54457814506); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C95F470E_D7A1_BBA9_41E7_7FAFA00348D3",
   "pitch": -5.09,
   "yaw": 125.99,
   "distance": 100
  }
 ],
 "id": "overlay_CDE82E69_D7E1_4A6B_41D4_5B677E7C750D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.64,
   "yaw": 125.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9601710_D7A1_BBB9_41E9_835B2894F09F",
   "pitch": -8.5,
   "yaw": 171.6,
   "distance": 100
  }
 ],
 "id": "overlay_CE2DB70C_D7E1_5BA9_41E6_1F838A54DFB4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 37.67,
   "yaw": 171.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E, this.camera_46DFFBE9_01B0_87C6_4172_104B55832010); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA06C182_D7A0_F699_41E3_A062D2D0DC69",
   "pitch": -6.63,
   "yaw": 0.42,
   "distance": 100
  }
 ],
 "id": "overlay_C315BA50_D357_A8EF_41CB_C944D6587623",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.18,
   "yaw": 0.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A, this.camera_46F38C25_01B0_804F_416D_E2473E66387E); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA071182_D7A0_F699_41E5_3604C979B2CE",
   "pitch": -0.86,
   "yaw": -113.72,
   "distance": 50
  }
 ],
 "id": "overlay_DC878ADB_D355_A991_41CC_F7DE2ECF1420",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.67,
   "yaw": -113.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA, this.camera_46E33C11_01B0_8046_4150_1691F24CE1F3); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA074182_D7A0_F699_41CD_1C025CF64D3E",
   "pitch": 3.26,
   "yaw": 109.65,
   "distance": 50
  }
 ],
 "id": "overlay_C24444C9_D355_B9FE_41D7_F922AAE229A7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.56,
   "yaw": 109.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2, this.camera_4605DC38_01B0_8045_4178_2A69F7889C64); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.22,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA079182_D7A0_F699_41E3_390FD1C009ED",
   "pitch": -17.66,
   "yaw": 125.67,
   "distance": 100
  }
 ],
 "id": "overlay_C348BDBF_D352_6B91_41A2_F84AC227AFB7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.22,
   "yaw": 125.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A, this.camera_46D06BFE_01B0_87BD_4173_299F44FF46C2); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA064183_D7A0_F69F_41D3_11F8B45FD410",
   "pitch": -20.41,
   "yaw": -127.74,
   "distance": 100
  }
 ],
 "id": "overlay_C31679AE_D353_ABB3_41D6_73D6580806FC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.02,
   "yaw": -127.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_4_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758, this.camera_4B3AE03B_01B0_80BB_4162_422CD1CFD519); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 47.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C963F715_D7A1_BBBB_41EA_1004DD6C4C23",
   "pitch": -12.83,
   "yaw": -117.31,
   "distance": 100
  }
 ],
 "id": "overlay_CAB48F13_D7E1_4BB8_41DB_B82B4C392B95",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 47.18,
   "yaw": -117.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.83,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329, this.camera_49C04D30_01B0_8045_415A_3801DD3C8340); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.81,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C95FD70D_D7A1_BBAB_41DB_DC16192A0D06",
   "pitch": -47.61,
   "yaw": -3.91,
   "distance": 100
  }
 ],
 "id": "overlay_CDF0B836_D7E1_F5F9_41D0_80F5B42EB0F1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.81,
   "yaw": -3.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -47.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256, this.camera_49B1DD1E_01B0_807D_4163_1A48AF119872); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C95F070E_D7A1_BBA9_41E2_595455F5768A",
   "pitch": -45.56,
   "yaw": 83.73,
   "distance": 100
  }
 ],
 "id": "overlay_CD5DE843_D7E1_B59F_41C8_A5C7D7A8B50B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.34,
   "yaw": 83.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0FA18E_D7A0_F6A9_41D4_A75EA9E5BACE",
   "pitch": -21.78,
   "yaw": 2.02,
   "distance": 100
  }
 ],
 "id": "overlay_DBEE22A1_D52F_C421_41E4_7B9E80AA21A0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.5,
   "yaw": 2.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.52,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0FE18F_D7A0_F6A7_41CB_E14DD9CE03FF",
   "pitch": -7.46,
   "yaw": -21.73,
   "distance": 100
  }
 ],
 "id": "overlay_D8D6099A_D52F_44E3_41E1_959F153E75E8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.52,
   "yaw": -21.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.06,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA10318F_D7A0_F6A7_41C4_EEBF80E148B2",
   "pitch": -4.5,
   "yaw": 151.91,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D8B47FDF_D529_7C61_41D5_68543A7E60C5",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.06,
   "yaw": 151.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB, this.camera_4A37E17D_01B0_80BF_4154_D65A41F25182); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA10718F_D7A0_F6A7_41B8_CFA948B319DD",
   "pitch": -19.95,
   "yaw": -179.85,
   "distance": 100
  }
 ],
 "id": "overlay_D89E4C7A_D52A_BC23_41D6_9AE27F23E386",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.01,
   "yaw": -179.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50, this.camera_46368C71_01B0_80C7_4162_DCE061691A88); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9639714_D7A1_BBB9_41EA_11442CC92976",
   "pitch": -5.05,
   "yaw": -112.6,
   "distance": 100
  }
 ],
 "id": "overlay_C831CC7D_D7E1_CE68_41AB_F91A378B1FC1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.13,
   "yaw": -112.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 41.66,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9618710_D7A1_BBB9_41D0_4BEF4082C313",
   "pitch": -14.67,
   "yaw": 73.75,
   "distance": 100
  }
 ],
 "id": "overlay_CE39410F_D7E3_D7A7_41DB_300913975E6D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 41.66,
   "yaw": 73.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051, this.camera_4864DF3B_01B0_80BB_4141_8EEE0D891898); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9631715_D7A1_BBBB_41A9_710F91DD39D2",
   "pitch": -32.46,
   "yaw": -1.14,
   "distance": 100
  }
 ],
 "id": "overlay_CA0DEF75_D7E0_CA78_41E9_5FD6747E8A27",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.77,
   "yaw": -1.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF, this.camera_4855AF27_01B0_804B_4162_FC2CA3912434); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9635716_D7A1_BBB9_41E9_38F6DAB49E7C",
   "pitch": -34.1,
   "yaw": 88.96,
   "distance": 100
  }
 ],
 "id": "overlay_CA5240CF_D7E0_D6A8_41EA_8CFA0236FE89",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.44,
   "yaw": 88.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051, this.camera_46260C5E_01B0_80FD_414F_BE62517F49B4); this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C964A716_D7A1_BBB9_41E9_EE66B990A65A",
   "pitch": -37.37,
   "yaw": 0.09,
   "distance": 100
  }
 ],
 "id": "overlay_CAC3A016_D7E7_75B9_41E4_F0DD00FB2F70",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.74,
   "yaw": 0.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7, this.camera_46141C4B_01B0_80DB_4165_18EBDC742462); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C964F716_D7A1_BBB9_41E3_FFF49FA68E7E",
   "pitch": -40.24,
   "yaw": -93.7,
   "distance": 100
  }
 ],
 "id": "overlay_F7BC93FA_D7E7_5A69_41A6_F8196D92E821",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.08,
   "yaw": -93.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB, this.camera_48AD9E3B_01B0_80BA_4175_7D1847E3B8B4); this.mainPlayList.set('selectedIndex', 37)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 50.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA121191_D7A0_F6BB_41E5_9BB614DC7B96",
   "pitch": -13,
   "yaw": 83.38,
   "distance": 100
  }
 ],
 "id": "overlay_D8F92E6D_D539_DC21_41AC_17AD4F6F77AB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 50.78,
   "yaw": 83.38,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC, this.camera_497A0E02_01B0_8045_4176_57CDDB870F5A); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA12A191_D7A0_F6BB_41EA_C1D94F25B672",
   "pitch": -17.07,
   "yaw": 1.67,
   "distance": 100
  }
 ],
 "id": "overlay_DB2FFE2F_D53B_5C22_41C4_6A96D2F683EA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.31,
   "yaw": 1.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB, this.camera_48BF2E4F_01B0_80DB_4176_65B59C2082C0); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.27,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA129191_D7A0_F6BB_41E6_AF04437B6DFA",
   "pitch": -17.43,
   "yaw": -174.52,
   "distance": 100
  }
 ],
 "id": "overlay_D85D3535_D53B_4C21_41CB_E0E667B3F152",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.27,
   "yaw": -174.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA, this.camera_488A1E15_01B0_804F_4155_A5DF3B69CAB3); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.23,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA132191_D7A0_F6BB_41E5_ACB6CE7376D2",
   "pitch": -19.16,
   "yaw": -49.42,
   "distance": 100
  }
 ],
 "id": "overlay_DB07DAEC_D53F_C427_41E3_503A3C8274DA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.23,
   "yaw": -49.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_3_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A, this.camera_489D7E28_01B0_8045_4175_FB7EE1584809); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.23,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA137192_D7A0_F6B9_41BE_FA759318CFE8",
   "pitch": -19.16,
   "yaw": -113.69,
   "distance": 100
  }
 ],
 "id": "overlay_DB07D3CE_D53F_4463_41E1_711AF8F7F941",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.23,
   "yaw": -113.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_4_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 40,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9645717_D7A1_BBA7_41CA_6BFB5D7A9BD1",
   "pitch": -15.08,
   "yaw": 176.96,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_CAE12504_D7E0_DF98_41CB_848CC6CEF1DC",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 40,
   "yaw": 176.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF, this.camera_4B0BFFFE_01B0_9FBD_4163_3061226B0043); this.mainPlayList.set('selectedIndex', 41)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.83,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9658717_D7A1_BBA7_41E0_9481A7ED1349",
   "pitch": -36.96,
   "yaw": -52.34,
   "distance": 100
  }
 ],
 "id": "overlay_CB72F624_D7E7_DD98_41D9_D0D1E2A9F72D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.83,
   "yaw": -52.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7, this.camera_4BFA2FE9_01B0_9FC7_4123_10249B43A8F4); this.mainPlayList.set('selectedIndex', 40)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9633718_D7A1_BBA9_41E5_246D4D97F0C4",
   "pitch": -32.87,
   "yaw": 68.07,
   "distance": 100
  }
 ],
 "id": "overlay_CB36C498_D7E7_BEA8_41BC_220C24F0A0DA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.69,
   "yaw": 68.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19, this.camera_48EEDE88_01B0_8045_4176_BDF33C216045); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA03317E_D7A0_F669_41B5_51E06E7887B2",
   "pitch": -4.79,
   "yaw": 1.96,
   "distance": 100
  }
 ],
 "id": "overlay_DC653B50_D34E_68EE_41DD_8F59BB02A22A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.99,
   "yaw": 1.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.79,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E, this.camera_48DE9E75_01B0_80CF_4171_41B960330F59); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.1,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA03417F_D7A0_F667_41E9_05E272B71F4C",
   "pitch": -5.59,
   "yaw": -103.05,
   "distance": 100
  }
 ],
 "id": "overlay_DDC9BE98_D34D_A99F_41DC_EA3FCB056BAF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.1,
   "yaw": -103.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA11D192_D7A0_F6B9_41EA_B8B25928440B",
   "pitch": -3.36,
   "yaw": 99.45,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D8F11767_D539_CC22_41E5_501E6208F857",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.97,
   "yaw": 99.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA126192_D7A0_F6B9_41D6_B61BBED9905F",
   "pitch": -7.28,
   "yaw": 155.44,
   "distance": 100
  }
 ],
 "id": "overlay_DB0D09D5_D53A_C466_41E5_D0E117EF9D06",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.5,
   "yaw": 155.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329, this.camera_498D2CD1_01B0_81C7_413E_EB183340F412); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.15,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA12A193_D7A0_F6BF_418D_71F9A523D138",
   "pitch": -16.96,
   "yaw": 0.16,
   "distance": 100
  }
 ],
 "id": "overlay_D8CB9F25_D53B_7C26_41E4_24C7EB39E567",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.15,
   "yaw": 0.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA12E193_D7A0_F6BF_41C7_C379263B9D0A",
   "pitch": -19,
   "yaw": -179.65,
   "distance": 100
  }
 ],
 "id": "overlay_D84F25B1_D53B_CC21_41E0_36F070A5C682",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.91,
   "yaw": -179.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54, this.camera_467D7CBE_01B0_81BD_414C_E10F9A9CB4FE); this.mainPlayList.set('selectedIndex', 34)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 46.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA12D193_D7A0_F6BF_419D_3C733CD107D2",
   "pitch": -8.94,
   "yaw": -88.23,
   "distance": 100
  }
 ],
 "id": "overlay_DA6DC162_D53A_C423_41D5_24184D68ED69",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 46.18,
   "yaw": -88.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.94,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19, this.camera_4BA61F88_01B0_8045_4165_F7AE0FB3679A); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.29,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA05A180_D7A0_F699_41E7_8CDC523207C9",
   "pitch": -7.78,
   "yaw": -89.25,
   "distance": 100
  }
 ],
 "id": "overlay_C26D3D3A_D352_6893_41D1_7864B6BD580D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.29,
   "yaw": -89.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB, this.camera_4B964F74_01B0_80CD_4143_741B25FC8E28); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.33,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA05E181_D7A0_F69B_41CB_EF88D12F36D1",
   "pitch": -5.74,
   "yaw": 0.88,
   "distance": 100
  }
 ],
 "id": "overlay_C26798ED_D352_E9B6_41D6_9FE1BBD6A3E9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.33,
   "yaw": 0.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA0608E7_D7E3_D667_41D7_485497252B19, this.camera_4A9100C0_01B0_81C5_4170_6D40022EBB88); this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0D818B_D7A0_F6AF_41D6_FE6582A8A822",
   "pitch": -2.75,
   "yaw": -156.17,
   "distance": 100
  }
 ],
 "id": "overlay_C305EE5F_D3F2_A892_41D9_F8C25488D19D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.31,
   "yaw": -156.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0DC18C_D7A0_F6A9_41E8_8850237DBA08",
   "pitch": -4.78,
   "yaw": 25.67,
   "distance": 100
  }
 ],
 "id": "overlay_C1CE9D12_D3F3_A893_41DB_DAE440AFC8A8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.26,
   "yaw": 25.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C386A001_D356_9871_41E7_807F9E060344, this.camera_4AB040E4_01B0_81CD_4114_5974EDB3D880); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.99,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0E118C_D7A0_F6A9_41C8_6B2566CA8200",
   "pitch": -18.38,
   "yaw": -1.35,
   "distance": 100
  }
 ],
 "id": "overlay_C38DB989_D3F3_A870_41E1_40C7257D1E34",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.99,
   "yaw": -1.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2, this.camera_4AA070D2_01B0_81C5_416D_EE2C659942FC); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0EA18C_D7A0_F6A9_41DC_637647E8A265",
   "pitch": -21.24,
   "yaw": 179.25,
   "distance": 100
  }
 ],
 "id": "overlay_C21B80B5_D3F3_9991_41E5_609D5AF7398B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.63,
   "yaw": 179.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329, this.camera_48CF0E62_01B0_80C5_416B_898789E3F12D); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9626713_D7A1_BBBF_41D6_1FF146E1A3A1",
   "pitch": -0.89,
   "yaw": 44.04,
   "distance": 100
  }
 ],
 "id": "overlay_CB994F9A_D7E0_CAA8_41D5_C8B2EB195CE5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.25,
   "yaw": 44.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9, this.camera_4A8F909A_01B0_8045_4169_50F217BE02B4); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.45,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA08D187_D7A0_F6A7_41E5_B50F1B71D90D",
   "pitch": -14.48,
   "yaw": -80.64,
   "distance": 100
  }
 ],
 "id": "overlay_DD712823_D3CE_E8B1_41E5_D7CAEA09AA93",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.45,
   "yaw": -80.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA09A188_D7A0_F6A9_41E1_6287858A0749",
   "pitch": -7.41,
   "yaw": -54.48,
   "distance": 100
  }
 ],
 "id": "overlay_DD6CF2C0_D3CD_B9EF_41E2_17682E8C3B0A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.53,
   "yaw": -54.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 51.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA099188_D7A0_F6A9_41E4_2E5BEB98D0F8",
   "pitch": -9.47,
   "yaw": -174.36,
   "distance": 100
  }
 ],
 "id": "overlay_C1AC071F_D3CD_9892_41E6_C91A1687395B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 51.53,
   "yaw": -174.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D, this.camera_4A9EF0AD_01B0_805F_4172_0538DE6723D6); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0A2188_D7A0_F6A9_41BC_2151711F0A32",
   "pitch": -16.3,
   "yaw": 98.54,
   "distance": 100
  }
 ],
 "id": "overlay_C0FA13CD_D3F2_9FF1_41C6_573D53D82040",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.31,
   "yaw": 98.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_4_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.04,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0A6189_D7A0_F6AB_41BD_2EA50EDDC0FD",
   "pitch": -24.09,
   "yaw": 39.15,
   "distance": 100
  }
 ],
 "id": "overlay_DCF1C7D6_D3F2_E793_41E4_223BF8926F9F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.04,
   "yaw": 39.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_5_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02 Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0AB189_D7A0_F6AB_41E0_8C79F880B92E",
   "pitch": -1.31,
   "yaw": 47.52,
   "distance": 50
  }
 ],
 "id": "overlay_DCAE5810_D3F2_686E_41EA_514E2934E856",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.42,
   "yaw": 47.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.97,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47455B51_01B0_80C7_4167_905124FB7498",
   "pitch": -3.23,
   "yaw": -0.66,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_12A75F92_0151_8045_4155_4C743107E32F",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.97,
   "yaw": -0.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC, this.camera_4648BC84_01B0_804D_416E_42CEC4D3D241); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C962A712_D7A1_BBB9_41E1_F2B30AD48EF8",
   "pitch": -2.18,
   "yaw": -111.16,
   "distance": 100
  }
 ],
 "id": "overlay_CE5C174C_D7E0_BBA9_41DE_8622B2E52F5B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.34,
   "yaw": -111.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA, this.camera_4A053142_01B0_80C5_4154_EC733090D9A5); this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.33,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA150197_D7A0_F6A7_41DA_6A68899975DE",
   "pitch": -8.42,
   "yaw": -27.15,
   "distance": 100
  }
 ],
 "id": "overlay_DB62CC8E_D52E_FCE3_41E4_FB79A0361196",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.33,
   "yaw": -27.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7, this.camera_4A14B156_01B0_80CD_4174_4F445C696628); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA154197_D7A0_F6A7_41D7_7D4042847DEB",
   "pitch": -14.95,
   "yaw": 97.21,
   "distance": 100
  }
 ],
 "id": "overlay_DA084F9D_D52F_BCE6_41E7_F707F4AE6F97",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 36.03,
   "yaw": 97.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA158197_D7A0_F6A7_41E4_78B129A1BD8C",
   "pitch": -7.88,
   "yaw": -150.51,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DB7AC0EB_D52E_C421_41D8_5F46860FCF09",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.17,
   "yaw": -150.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D, this.camera_4AF5612F_01B0_805B_4173_97F13D21B42E); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.04,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA15C197_D7A0_F6A7_41C7_FBA64FC21BB2",
   "pitch": -25.3,
   "yaw": 1.06,
   "distance": 100
  }
 ],
 "id": "overlay_DB403163_D529_4421_41D3_BCAC71880108",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.04,
   "yaw": 1.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCC81032_D352_9893_41E4_8442309AE672, this.camera_48006EC1_01B0_81C7_415B_EC16DD14DFEA); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9637718_D7A1_BBA9_4178_85FDDD735A13",
   "pitch": -8.12,
   "yaw": 157.91,
   "distance": 100
  }
 ],
 "id": "overlay_C9D3A863_D7E0_B59F_41B4_ADCA2086C895",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 31.69,
   "yaw": 157.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895, this.camera_49D3FD44_01B0_80CD_4172_D8F5792CA012); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA048180_D7A0_F699_41E7_829DA18453EB",
   "pitch": -5.99,
   "yaw": 91.45,
   "distance": 100
  }
 ],
 "id": "overlay_DD4D51BC_D356_9B97_41E2_54BE06A249D4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.43,
   "yaw": 91.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D, this.camera_49E24D57_01B0_80CB_4139_795A4E2BA152); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA04C180_D7A0_F699_41B0_63D103949371",
   "pitch": -11.43,
   "yaw": -86.22,
   "distance": 100
  }
 ],
 "id": "overlay_DE89A9FF_D356_AB91_41B8_48C711CCE82A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.98,
   "yaw": -86.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C386A001_D356_9871_41E7_807F9E060344, this.camera_49F40D6A_01B0_80C5_416C_36420A6CA694); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA051180_D7A0_F699_41E9_F01C47FC29EA",
   "pitch": 4.46,
   "yaw": 0,
   "distance": 100
  }
 ],
 "id": "overlay_C38D7AD8_D355_A99F_41E2_07F1F3696741",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.58,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3A23466_D355_98B2_41D0_86D0739C7329, this.camera_48F07EAE_01B0_805D_4169_A385C2EDA666); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C95E570C_D7A1_BBA9_41E6_5D6565055AD8",
   "pitch": -28.77,
   "yaw": 21.09,
   "distance": 100
  }
 ],
 "id": "overlay_CD50556A_D7E1_5E69_41E6_D8274E20F92A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.95,
   "yaw": 21.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_1_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256, this.camera_48FECE9B_01B0_807B_4166_98E513D1EDD0); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.23,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C95F870D_D7A1_BBAB_41DF_14E5187507A3",
   "pitch": -45.97,
   "yaw": -54.68,
   "distance": 100
  }
 ],
 "id": "overlay_CAB950BC_D7E1_76E9_41DA_7260E034AF3B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.23,
   "yaw": -54.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_1_HS_1_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -45.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2, this.camera_4BB9CF9B_01B0_807B_4172_6D2D644DEF8A); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C960970F_D7A1_BBA7_41CE_C4901D2DF1D4",
   "pitch": -4.84,
   "yaw": -49.73,
   "distance": 100
  }
 ],
 "id": "overlay_CD493267_D7E0_DA67_41DC_2CD0DE0E8371",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.02,
   "yaw": -49.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256, this.camera_4AC3A0F8_01B0_81C5_4172_CCFFFDCA817D); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA00A17C_D7A0_F669_41CE_0780642209EF",
   "pitch": 5.67,
   "yaw": -1.55,
   "distance": 100
  }
 ],
 "id": "overlay_DCAA3D15_D335_E891_41E8_D48B8BD028E3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.55,
   "yaw": -1.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895, this.camera_4AD3B109_01B0_8046_4171_C562958331B9); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA01517D_D7A0_F66B_41E0_126E2AFF9A97",
   "pitch": -9.56,
   "yaw": -86.76,
   "distance": 100
  }
 ],
 "id": "overlay_C36A4C60_D333_A8AF_41DD_E436701C7144",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.92,
   "yaw": -86.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DF838DB3_D332_6B91_41E4_949233E13792, this.camera_4AE3F11C_01B0_807D_4160_17B26C038C4B); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.01,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA01E17D_D7A0_F66B_41BE_5A51261C429F",
   "pitch": -7.44,
   "yaw": 89.32,
   "distance": 100
  }
 ],
 "id": "overlay_DE96D43A_D333_F893_41D1_F6227FDB9154",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.01,
   "yaw": 89.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": true,
 "items": [
  {
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_1_HS_3_0.png",
      "width": 115,
      "height": 77,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.74,
   "roll": 0,
   "yaw": -34.5
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_D915F307_D761_5B98_41CD_0D07D638003C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.03,
   "yaw": -34.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_1_HS_3_1_0_map.gif",
      "width": 57,
      "height": 38,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 45.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0BE18A_D7A0_F6A9_41C8_63BB725B1B98",
   "pitch": -9.95,
   "yaw": -169.92,
   "distance": 100
  }
 ],
 "id": "overlay_C259EBB0_D3F6_AFAE_41C3_7066946E5D72",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 45.58,
   "yaw": -169.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 39)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0C218A_D7A0_F6A9_4191_8CD5BE44203D",
   "pitch": -7.88,
   "yaw": 67.41,
   "distance": 100
  }
 ],
 "id": "overlay_C0D1B384_D3F7_9877_41DE_83F7DFD823BC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.71,
   "yaw": 67.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0C818B_D7A0_F6AF_41D0_3B35F19EFD1C",
   "pitch": 7.02,
   "yaw": -30.86,
   "distance": 50
  }
 ],
 "id": "overlay_DC67879F_D3F6_E791_41BB_6F7DB8B0AC1D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.19,
   "yaw": -30.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.9,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0CC18B_D7A0_F6AF_41E4_D1C2B0C6A1FD",
   "pitch": -26.18,
   "yaw": -25.87,
   "distance": 100
  }
 ],
 "id": "overlay_C1C091A0_D3F6_7BAF_41D3_59A0AFC31168",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.9,
   "yaw": -25.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_4_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D, this.camera_4658DC98_01B0_8045_4175_D71C4D61FB67); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0D318B_D7A0_F6AF_41C0_3F7D7F54C362",
   "pitch": -18.02,
   "yaw": -84.59,
   "distance": 100
  }
 ],
 "id": "overlay_C1EC00E5_D3F5_B9B1_41B5_B08DD2CCB51A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.78,
   "yaw": -84.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_5_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3BAC47B_D356_7892_41E1_3B467B883758, this.camera_466B9CAB_01B0_805B_4172_29C296C07FDC); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.27,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0DA18B_D7A0_F6AF_41E4_6896621C133A",
   "pitch": -13.02,
   "yaw": 91.89,
   "distance": 100
  }
 ],
 "id": "overlay_C2B3E2B3_D3F5_B992_41CD_7D206FCF7C36",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.27,
   "yaw": 91.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_6_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_47403B54_01B0_80CD_416A_74940D8668F5",
   "pitch": 0.27,
   "yaw": 11.66,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_1A372DE0_0150_83C5_4169_707B240DACE8",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.98,
   "yaw": 11.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2, this.camera_4B4C604E_01B0_80DD_4160_6088F4176971); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9614712_D7A1_BBB9_41C8_C1E4B8FACFE5",
   "pitch": -3.82,
   "yaw": -78.81,
   "distance": 100
  }
 ],
 "id": "overlay_CE0539DA_D7E0_B6A9_41E7_89A0AC93C4D8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.95,
   "yaw": -78.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 42)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 49.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0AC189_D7A0_F6AB_41E7_7A56442F20F6",
   "pitch": -12.22,
   "yaw": -177.51,
   "distance": 100
  }
 ],
 "id": "overlay_DC674EEF_D3F5_A9B1_41CE_6566E7E9A7D3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 49.7,
   "yaw": -177.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A, this.camera_48748F4E_01B0_80DD_4176_9A1E3E947709); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0B3189_D7A0_F6AB_41E6_36EDAE10D7EE",
   "pitch": -19.41,
   "yaw": -89.2,
   "distance": 100
  }
 ],
 "id": "overlay_C2855F79_D3F5_A891_41D1_E376B53686FB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.87,
   "yaw": -89.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2, this.camera_4B864F61_01B0_80C7_416D_308FC668DF9E); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.43,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0B518A_D7A0_F6A9_41C9_14F3CFF2700A",
   "pitch": -22.69,
   "yaw": 91.4,
   "distance": 100
  }
 ],
 "id": "overlay_DCE75FDD_D3F6_6791_41D6_81FDA16F2D47",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.43,
   "yaw": 91.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7, this.camera_4BDB1FC3_01B0_9FCB_4170_8DF44CCC831A); this.mainPlayList.set('selectedIndex', 32)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA137193_D7A0_F6BF_41DC_705FAC6DAAF4",
   "pitch": -3.9,
   "yaw": -151.86,
   "distance": 100
  }
 ],
 "id": "overlay_DB3B6A6E_D526_C423_41E6_D3FC075D0B18",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.6,
   "yaw": -151.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.9,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.56,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA138193_D7A0_F6BF_41EA_A9FBA0098AB7",
   "pitch": -5.2,
   "yaw": 26.47,
   "distance": 100
  }
 ],
 "id": "overlay_DB92DC49_D527_5C61_41DD_EB613F8C8FC8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.56,
   "yaw": 26.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2, this.camera_4BEB1FD6_01B0_9FCD_4174_AF31E0BC7D86); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA13C194_D7A0_F6B9_41EA_48B7DD789885",
   "pitch": -22.98,
   "yaw": 2.15,
   "distance": 100
  }
 ],
 "id": "overlay_DB718A8E_D529_44E2_41E6_DAF37821A066",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.64,
   "yaw": 2.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC, this.camera_4BC99FAE_01B0_805D_4134_14C7E793D00C); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.47,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA146194_D7A0_F6B9_41D8_9010C345FA54",
   "pitch": -24.28,
   "yaw": -179.81,
   "distance": 100
  }
 ],
 "id": "overlay_DB0D1F81_D529_DCE1_41E7_FFC82168FC51",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.47,
   "yaw": -179.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C961D711_D7A1_BBBB_41E5_E0575B174AA6",
   "pitch": -9.14,
   "yaw": 78.46,
   "distance": 100
  }
 ],
 "id": "overlay_CBB2B662_D7E3_5D99_41EA_5A4B625A9DC0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.64,
   "yaw": 78.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.14,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.2,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C960C70F_D7A1_BBA7_41CE_4D701AF8C0F2",
   "pitch": -11.19,
   "yaw": -123.45,
   "distance": 100
  }
 ],
 "id": "overlay_CDB0660B_D7E1_BDAF_41D2_7BFAF88A666F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 32.2,
   "yaw": -123.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA03A17F_D7A0_F667_41DC_4C50181058F4",
   "pitch": -0.26,
   "yaw": -10.65,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DC4E729D_D353_9996_41EA_5D267922B127",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.49,
   "yaw": -10.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.49,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA03C17F_D7A0_F667_41D9_6484B4C1347C",
   "pitch": -0.21,
   "yaw": 9.68,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C17C8F5C_D353_E890_41E5_625014B91B2D",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.49,
   "yaw": 9.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA04317F_D7A0_F667_41DD_14CB14786E73",
   "pitch": -9.42,
   "yaw": 96.34,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_C37B6FF5_D352_A791_41CA_6E499441F2A1",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.44,
   "yaw": 96.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.25,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA047180_D7A0_F699_41DE_BB16BCBBC966",
   "pitch": -12.91,
   "yaw": -79.71,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DE9AC63C_D352_F897_41D3_B76D1E83717C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.25,
   "yaw": -79.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC86C70B_D352_B871_41E7_CE652973F4D9, this.camera_499F3CE4_01B0_81CD_416B_68B5BA6A0D66); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.16,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA07E185_D7A0_F69A_41E1_58515808F4C7",
   "pitch": -13.55,
   "yaw": 89.75,
   "distance": 100
  }
 ],
 "id": "overlay_C0B78571_D3CD_F890_41CD_14C57BCD9AE2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.16,
   "yaw": 89.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.54,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA083186_D7A0_F699_41E0_D6C01C643A3E",
   "pitch": -6.05,
   "yaw": 63.77,
   "distance": 100
  }
 ],
 "id": "overlay_DC95A727_D3CD_98B1_41D6_3D4A2F4533BB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.54,
   "yaw": 63.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C36E6803_D352_6872_41D6_3B2EBD84939A, this.camera_49AFFCF7_01B0_81CB_415B_27BB243CA77C); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.18,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA087186_D7A0_F6A6_41E9_9D4BF92139D4",
   "pitch": -15.45,
   "yaw": -89.35,
   "distance": 100
  }
 ],
 "id": "overlay_C19EC07F_D3CE_9892_41BE_27075B6F8A9E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.18,
   "yaw": -89.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7, this.camera_49BE3D0A_01B0_8045_4171_227B07D815E7); this.mainPlayList.set('selectedIndex', 38)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.59,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA089187_D7A0_F6A7_41D0_B2E8F06E846E",
   "pitch": -3.69,
   "yaw": -114.88,
   "distance": 100
  }
 ],
 "id": "overlay_C315E5A9_D3CE_9BB1_41E5_5ED1B350C8EC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.59,
   "yaw": -114.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 44.92,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0E418D_D7A0_F6AB_41D2_76F92D2CC107",
   "pitch": -9.35,
   "yaw": 79.08,
   "distance": 100
  }
 ],
 "id": "overlay_D80BC90B_D52B_C5E1_41E8_658C4E942C44",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 44.92,
   "yaw": 79.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD, this.camera_49587DDD_01B0_83FF_4153_02D04079F58E); this.mainPlayList.set('selectedIndex', 36)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0ED18E_D7A0_F6A9_41E7_4F183C664925",
   "pitch": -7.51,
   "yaw": -149.46,
   "distance": 100
  }
 ],
 "id": "overlay_DB7F9B57_D52A_C461_41C2_256691FE778B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.08,
   "yaw": -149.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340, this.camera_49487DCA_01B0_83C5_4168_A1234724BFAF); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA0F718E_D7A0_F6A9_41E5_3F9225C17251",
   "pitch": -21.4,
   "yaw": -179.3,
   "distance": 100
  }
 ],
 "id": "overlay_D8EDE608_D52E_CFEF_41C0_8415AF8810B9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.61,
   "yaw": -179.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.4,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 18.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_475C7B57_01B0_80CB_4150_D112C6A8E214",
   "pitch": -5.43,
   "yaw": -23.34,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_258734C9_0170_81C7_4153_D71C3B80FA04",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.35,
   "yaw": -23.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D, this.camera_4A24D169_01B0_80C7_4159_54B7B6ED30D8); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C9610712_D7A1_BBB9_41EA_67636BF37A00",
   "pitch": -10.58,
   "yaw": 133.75,
   "distance": 100
  }
 ],
 "id": "overlay_CAC80744_D7E0_FB99_41AA_45E4FD7B3E53",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 34.68,
   "yaw": 133.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50, this.camera_4B5C6061_01B0_80C7_4133_E73376C7D6F8); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.51,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA069183_D7A0_F69F_41E2_9D941417E2CC",
   "pitch": -13.17,
   "yaw": 1.74,
   "distance": 100
  }
 ],
 "id": "overlay_C1FB7631_D352_9891_41D6_24F4857713F3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.51,
   "yaw": 1.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CF54017A_D7E0_B669_41E1_EA8150949096, this.camera_4B6FB074_01B0_80CD_4167_ACECF95A98BF); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 54.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA072183_D7A0_F69F_41D7_D1CE526045B9",
   "pitch": -10.26,
   "yaw": -90.73,
   "distance": 100
  }
 ],
 "id": "overlay_DD7BA9DC_D3D2_AB97_41E7_4155F43A0610",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 54.02,
   "yaw": -90.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA071184_D7A0_F699_41D9_66384456C4D1",
   "pitch": -4.1,
   "yaw": 28.02,
   "distance": 100
  }
 ],
 "id": "overlay_DD481FDA_D3D3_A793_41EA_46D02565A7C3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.61,
   "yaw": 28.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.1,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19, this.camera_4B7FD087_01B0_804B_4170_E618B6590DE6); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA07A185_D7A0_F69B_41DF_C0FB58FD1DD8",
   "pitch": -6.56,
   "yaw": 179.56,
   "distance": 100
  }
 ],
 "id": "overlay_DD4697F2_D3D3_A793_41E8_F217E9BFA9B8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 28.5,
   "yaw": 179.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.56,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4, this.camera_4926BDA3_01B0_804B_4163_F9A2AB89F1FC); this.mainPlayList.set('selectedIndex', 43)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 49.26,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA14A196_D7A0_F6B9_41E3_DABF2FEEE0A0",
   "pitch": -12.42,
   "yaw": -178.95,
   "distance": 100
  }
 ],
 "id": "overlay_D8A3C587_D52A_CCE2_41B4_74096FB2F1AF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 49.26,
   "yaw": -178.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DCE74B8C_D352_A877_41DF_BF9266259999, this.camera_4936ADB7_01B0_804B_4172_763B52E08837); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 70.63,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA14E197_D7A0_F6A7_41E8_CCF25C79D357",
   "pitch": -18.77,
   "yaw": 55.53,
   "distance": 100
  }
 ],
 "id": "overlay_DBB27F99_D52B_BCE1_41E6_6BD291EAEF5A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 70.63,
   "yaw": 55.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA05D181_D7A0_F69B_41DD_6BDFA2F59A38",
   "pitch": -1.01,
   "yaw": -1.45,
   "distance": 100
  }
 ],
 "id": "overlay_C2C2D9A2_D35E_6BB2_41E6_10FA9D36ECBE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 29.95,
   "yaw": -1.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D, this.camera_4914BD90_01B0_8045_4170_888AB715F774); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA064181_D7A0_F69B_41C2_D8901743E287",
   "pitch": -10.75,
   "yaw": 89.37,
   "distance": 100
  }
 ],
 "id": "overlay_DD5E9553_D35D_F892_41BD_2FC39408F665",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.69,
   "yaw": 89.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DF838DB3_D332_6B91_41E4_949233E13792, this.camera_49045D7D_01B0_80BF_4173_124EC19DF627); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA06B181_D7A0_F69B_41E2_6E1C69DBAFB2",
   "pitch": -11.07,
   "yaw": -87.03,
   "distance": 100
  }
 ],
 "id": "overlay_C387533B_D35D_B892_41B2_F7F92DF65771",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.67,
   "yaw": -87.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DE960C71_D352_A891_41E4_9CB429946ACB, this.camera_4B1B9014_01B0_804D_4176_5B23ADAD6594); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C962D713_D7A1_BBBF_41C7_B41E8A25766F",
   "pitch": 0.28,
   "yaw": 82.15,
   "distance": 100
  }
 ],
 "id": "overlay_CD33833F_D7FF_BBE8_41AA_0335A76BF1EF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.08,
   "yaw": 82.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.28,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB, this.camera_4845AF14_01B0_804D_4162_10A17ABE0609); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA02617E_D7A0_F669_41E4_F9431A53DF08",
   "pitch": -2.36,
   "yaw": 1.29,
   "distance": 100
  }
 ],
 "id": "overlay_DEC54721_D332_98AE_41E4_2EA83C2A4667",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.95,
   "yaw": 1.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.36,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_D839B6A2_D332_99B3_41E8_839025BAC96E, this.camera_48353F01_01B0_8047_4150_D5044715F97B); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA02A17E_D7A0_F669_41DE_4131E6C24CB6",
   "pitch": -8.43,
   "yaw": 92.52,
   "distance": 100
  }
 ],
 "id": "overlay_DDB32B76_D332_A893_41E7_98DE29F1E4BD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.34,
   "yaw": 92.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.4,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CA02917E_D7A0_F669_41DE_6DCBA241CBBC",
   "pitch": -6.8,
   "yaw": -90.12,
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_DC993557_D34D_B891_41E2_09DFFAD3436C",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.4,
   "yaw": -90.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "width": 366,
 "scrollBarColor": "#000000",
 "data": {
  "name": "white block"
 },
 "shadowColor": "#000000",
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "top": 2,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "shadowBlurRadius": 7,
 "gap": 10,
 "height": 78,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0.01
 ],
 "scrollBarWidth": 10,
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 0,
 "width": 366,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue block"
 },
 "shadowColor": "#000000",
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "top": 86,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "shadowBlurRadius": 7,
 "gap": 10,
 "height": 46,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "propagateClick": true,
 "data": {
  "name": "text 1"
 },
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "left": 10,
 "horizontalAlign": "left",
 "fontColor": "#000000",
 "width": 391,
 "borderSize": 0,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Label",
 "fontSize": 61,
 "height": 75,
 "fontStyle": "italic",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "propagateClick": true,
 "textShadowHorizontalLength": 0,
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "left": 12,
 "data": {
  "name": "text 2"
 },
 "horizontalAlign": "left",
 "textShadowVerticalLength": 0,
 "fontColor": "#FFFFFF",
 "width": 385,
 "borderSize": 0,
 "textShadowOpacity": 1,
 "textShadowColor": "#000000",
 "text": "DOLOR SIT AMET, CONSECTETUR",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": 90,
 "paddingRight": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Label",
 "fontSize": 28,
 "height": 44,
 "fontStyle": "italic",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "fontWeight": "normal",
 "textShadowBlurRadius": 10
},
{
 "propagateClick": true,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "right": "0%",
 "width": 110,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "height": 110,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "data": {
  "name": "button menu sup"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "horizontalAlign": "center",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "91.304%",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 3,
 "height": "85.959%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll"
},
{
 "propagateClick": true,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4",
 "left": "0%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "horizontalAlign": "left",
 "width": 66,
 "children": [
  "this.Container_21F34780_3014_BF93_41A2_9BF700588BEC",
  "this.IconButton_223F0171_3014_B375_41C1_61063C3D73B3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll"
},
{
 "propagateClick": false,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD",
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "horizontalAlign": "left",
 "right": 0,
 "width": 330,
 "children": [
  "this.Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
  "this.IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "propagateClick": false
},
{
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 20,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "propagateClick": true
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 20,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "layout": "vertical",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "propagateClick": true
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_1E19923C_57F1_802D_41C4_18DBE75E48C1",
 "left": "15%",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
  "this.Container_1E19D23C_57F1_802D_41B0_92437DF80B82"
 ],
 "layout": "horizontal",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "top": "10%",
 "paddingRight": 0,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "shadowBlurRadius": 25,
 "gap": 10,
 "paddingBottom": 0,
 "shadowOpacity": 0.3,
 "shadow": true,
 "backgroundOpacity": 1,
 "shadowSpread": 1,
 "borderRadius": 0,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "propagateClick": false
},
{
 "propagateClick": false,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_1E18A23C_57F1_802D_41B9_D08FA26C7F4C",
 "left": "15%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "right": "15%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "10%",
 "paddingRight": 20,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 20,
 "overflow": "visible",
 "data": {
  "name": "Container X global"
 }
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CF7BFF1A_D7E3_4BA9_41A6_8D48818C31DC_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9605710_D7A1_BBB9_41D9_9AC37B72FE9B",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0D118D_D7A0_F6AB_41E8_D60592DB686A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0DA18D_D7A0_F6AB_41D8_029853150593",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0DE18D_D7A0_F6AB_41E5_A9CD520948C4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C386A001_D356_9871_41E7_807F9E060344_1_HS_3_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0DD18D_D7A0_F6AB_41E2_88B6D850F603",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE251067_D7E1_D598_41E4_7C1D2F58CCDD_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9622713_D7A1_BBBF_41C7_775183B589C2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_0_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA10B18F_D7A0_F6A7_41C1_8C3D71EAA6AC",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA10D190_D7A0_F6B9_41D9_ED7B43C7387C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_2_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA116190_D7A0_F6B9_41D5_70D24CDCECB4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA11B190_D7A0_F6B9_41CF_A57C919C9122",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE960C71_D352_A891_41E4_9CB429946ACB_1_HS_4_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA122190_D7A0_F6BA_41C5_419406B4164C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CF54017A_D7E0_B669_41E1_EA8150949096_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C95F470E_D7A1_BBA9_41E7_7FAFA00348D3",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CF1E1384_D7E0_DA99_41E4_985D869DC09E_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9601710_D7A1_BBB9_41E9_835B2894F09F",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA06C182_D7A0_F699_41E3_A062D2D0DC69",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_1_0.png",
   "width": 380,
   "height": 570,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA071182_D7A0_F699_41E5_3604C979B2CE",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_2_0.png",
   "width": 380,
   "height": 570,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA074182_D7A0_F699_41CD_1C025CF64D3E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA079182_D7A0_F699_41E3_390FD1C009ED",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC37642D_D352_78B1_41E3_DCBD59C9F256_1_HS_4_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA064183_D7A0_F69F_41D3_11F8B45FD410",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CA0608E7_D7E3_D667_41D7_485497252B19_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C963F715_D7A1_BBBB_41EA_1004DD6C4C23",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0_HS_0_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C95FD70D_D7A1_BBAB_41DB_DC16192A0D06",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36EBFA5_D356_E7B1_41D0_4B4401AB625A_0_HS_1_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C95F070E_D7A1_BBA9_41E2_595455F5768A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0FA18E_D7A0_F6A9_41D4_A75EA9E5BACE",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0FE18F_D7A0_F6A7_41CB_E14DD9CE03FF",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_1_HS_2_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA10318F_D7A0_F6A7_41C4_EEBF80E148B2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC9B028D_D352_9871_41C4_2CF4C1E0E340_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA10718F_D7A0_F6A7_41B8_CFA948B319DD",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CAFBB646_D7E3_FD99_41E1_D897B063D7B7_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9639714_D7A1_BBB9_41EA_11442CC92976",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CEBE195B_D7E3_77AF_41E5_95C3EEEE031E_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9618710_D7A1_BBB9_41D0_4BEF4082C313",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9631715_D7A1_BBBB_41A9_710F91DD39D2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CAFF0A8D_D7E3_4AAB_41C3_E12AF5F9EBA7_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9635716_D7A1_BBB9_41E9_38F6DAB49E7C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C964A716_D7A1_BBB9_41E9_EE66B990A65A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CABC5AFD_D7E3_4A6B_41D6_12B9639890EF_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C964F716_D7A1_BBB9_41E3_FFF49FA68E7E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA121191_D7A0_F6BB_41E5_9BB614DC7B96",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA12A191_D7A0_F6BB_41EA_C1D94F25B672",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA129191_D7A0_F6BB_41E6_AF04437B6DFA",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_3_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA132191_D7A0_F6BB_41E5_ACB6CE7376D2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3A23466_D355_98B2_41D0_86D0739C7329_1_HS_4_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA137192_D7A0_F6B9_41BE_FA759318CFE8",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9645717_D7A1_BBA7_41CA_6BFB5D7A9BD1",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9658717_D7A1_BBA7_41E0_9481A7ED1349",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CAF59CE6_D7E3_4E99_41E8_21E81D6BA051_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9633718_D7A1_BBA9_41E5_246D4D97F0C4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA03317E_D7A0_F669_41B5_51E06E7887B2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DF838DB3_D332_6B91_41E4_949233E13792_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA03417F_D7A0_F667_41E9_05E272B71F4C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_0_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA11D192_D7A0_F6B9_41EA_B8B25928440B",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA126192_D7A0_F6B9_41D6_B61BBED9905F",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA12A193_D7A0_F6BF_418D_71F9A523D138",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA12E193_D7A0_F6BF_41C7_C379263B9D0A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3CD3EA0_D355_E9AE_41E2_C86FB89CADAC_1_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA12D193_D7A0_F6BF_419D_3C733CD107D2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA05A180_D7A0_F699_41E7_8CDC523207C9",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DFE924F1_D335_F991_41B2_F82B64F23E8D_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA05E181_D7A0_F69B_41CB_EF88D12F36D1",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0D818B_D7A0_F6AF_41D6_FE6582A8A822",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0DC18C_D7A0_F6A9_41E8_8850237DBA08",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0E118C_D7A0_F6A9_41C8_6B2566CA8200",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3BAC47B_D356_7892_41E1_3B467B883758_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0EA18C_D7A0_F6A9_41DC_637647E8A265",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE2DED19_D7E1_CFA8_41D1_7B320B3B23AB_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9626713_D7A1_BBBF_41D6_1FF146E1A3A1",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA08D187_D7A0_F6A7_41E5_B50F1B71D90D",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA09A188_D7A0_F6A9_41E1_6287858A0749",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA099188_D7A0_F6A9_41E4_2E5BEB98D0F8",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_4_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0A2188_D7A0_F6A9_41BC_2151711F0A32",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_5_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0A6189_D7A0_F6AB_41BD_2EA50EDDC0FD",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_1_HS_6_0.png",
   "width": 380,
   "height": 570,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0AB189_D7A0_F6AB_41E0_8C79F880B92E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C36E6803_D352_6872_41D6_3B2EBD84939A_0_HS_7_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_47455B51_01B0_80C7_4167_905124FB7498",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CEDC75F3_D7E1_DE7F_41EA_59A543089F54_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C962A712_D7A1_BBB9_41E1_F2B30AD48EF8",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA150197_D7A0_F6A7_41DA_6A68899975DE",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA154197_D7A0_F6A7_41D7_7D4042847DEB",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_1_HS_2_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA158197_D7A0_F6A7_41E4_78B129A1BD8C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3AB1BF6_D356_AF92_41E7_1116A01D51B2_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA15C197_D7A0_F6A7_41C7_FBA64FC21BB2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F7BAF527_D7E0_DFE7_41B7_1ADFA18419A4_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9637718_D7A1_BBA9_4178_85FDDD735A13",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA048180_D7A0_F699_41E7_829DA18453EB",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA04C180_D7A0_F699_41B0_63D103949371",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE0DA525_D335_98B1_41E7_D81849BB32AB_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA051180_D7A0_F699_41E9_F01C47FC29EA",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_1_HS_0_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C95E570C_D7A1_BBA9_41E6_5D6565055AD8",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE49CF01_D7E0_CB98_41E0_A1D86B2FC8FA_1_HS_1_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C95F870D_D7A1_BBAB_41DF_14E5187507A3",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CEB73CA5_D7E3_4E9B_41E7_726E480B2AE7_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C960970F_D7A1_BBA7_41CE_C4901D2DF1D4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA00A17C_D7A0_F669_41CE_0780642209EF",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA01517D_D7A0_F66B_41E0_126E2AFF9A97",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_D839B6A2_D332_99B3_41E8_839025BAC96E_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA01E17D_D7A0_F66B_41BE_5A51261C429F",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0BE18A_D7A0_F6A9_41C8_63BB725B1B98",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0C218A_D7A0_F6A9_4191_8CD5BE44203D",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_3_0.png",
   "width": 300,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 3,
 "id": "AnimatedImageResource_CA0C818B_D7A0_F6AF_41D0_3B35F19EFD1C",
 "frameDuration": 62,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_4_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0CC18B_D7A0_F6AF_41E4_D1C2B0C6A1FD",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_5_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0D318B_D7A0_F6AF_41C0_3F7D7F54C362",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_1_HS_6_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0DA18B_D7A0_F6AF_41E4_6896621C133A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C24DF5B3_D355_9B92_41E6_9666E079E4A2_0_HS_7_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_47403B54_01B0_80CD_416A_74940D8668F5",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CDBC57F3_D7E1_BA7F_41D6_EB7D1F5609AA_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9614712_D7A1_BBB9_41C8_C1E4B8FACFE5",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0AC189_D7A0_F6AB_41E7_7A56442F20F6",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0B3189_D7A0_F6AB_41E6_36EDAE10D7EE",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3EEADF5_D355_AB96_41A1_8564C9DE160D_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0B518A_D7A0_F6A9_41C9_14F3CFF2700A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA137193_D7A0_F6BF_41DC_705FAC6DAAF4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA138193_D7A0_F6BF_41EA_A9FBA0098AB7",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA13C194_D7A0_F6B9_41EA_48B7DD789885",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C3EFCA47_D355_A8F2_41E1_6C2ADEED878D_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA146194_D7A0_F6B9_41D8_9010C345FA54",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CEA7F60A_D7E3_5DA9_41E9_BC2D355BBF98_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C961D711_D7A1_BBBB_41E5_E0575B174AA6",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CEB8A324_D7E3_BB99_41E4_747B11F51DBF_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C960C70F_D7A1_BBA7_41CE_4D701AF8C0F2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA03A17F_D7A0_F667_41DC_4C50181058F4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA03C17F_D7A0_F667_41D9_6484B4C1347C",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA04317F_D7A0_F667_41DD_14CB14786E73",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE3E131A_D335_B893_41E4_23FD090FF02E_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA047180_D7A0_F699_41DE_BB16BCBBC966",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA07E185_D7A0_F69A_41E1_58515808F4C7",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA083186_D7A0_F699_41E0_D6C01C643A3E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA087186_D7A0_F6A6_41E9_9D4BF92139D4",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_C33524AB_D352_F9B1_41E9_F8F8D1A03A50_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA089187_D7A0_F6A7_41D0_B2E8F06E846E",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0E418D_D7A0_F6AB_41D2_76F92D2CC107",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0ED18E_D7A0_F6A9_41E7_4F183C664925",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_1_HS_3_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA0F718E_D7A0_F6A9_41E5_3F9225C17251",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DCE74B8C_D352_A877_41DF_BF9266259999_0_HS_4_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_475C7B57_01B0_80CB_4150_D112C6A8E214",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CF1892FE_D7E3_DA69_41E0_3F80CF0D61A7_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C9610712_D7A1_BBB9_41EA_67636BF37A00",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA069183_D7A0_F69F_41E2_9D941417E2CC",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA072183_D7A0_F69F_41D7_D1CE526045B9",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA071184_D7A0_F699_41D9_66384456C4D1",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DC86C70B_D352_B871_41E7_CE652973F4D9_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA07A185_D7A0_F69B_41DF_C0FB58FD1DD8",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA14A196_D7A0_F6B9_41E3_DABF2FEEE0A0",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DCC81032_D352_9893_41E4_8442309AE672_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA14E197_D7A0_F6A7_41E8_CCF25C79D357",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA05D181_D7A0_F69B_41DD_6BDFA2F59A38",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA064181_D7A0_F69B_41C2_D8901743E287",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DE60A68E_D335_9873_41D0_92D9DA75FF19_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA06B181_D7A0_F69B_41E2_6E1C69DBAFB2",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CE4D035C_D7E1_FBA8_417B_28F3F27C9888_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C962D713_D7A1_BBBF_41C7_B41E8A25766F",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA02617E_D7A0_F669_41E4_F9431A53DF08",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_1_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA02A17E_D7A0_F669_41DE_4131E6C24CB6",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_DFE93D5D_D332_6891_41E5_58FB14B9C895_1_HS_2_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CA02917E_D7A0_F669_41DE_6DCBA241CBBC",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "transparencyActive": true,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "horizontalAlign": "center",
 "width": 60,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "toggle",
 "paddingLeft": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "height": 60,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "image button menu"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 58,
 "propagateClick": true,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "horizontalAlign": "center",
 "width": 58,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "height": 58,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_21F34780_3014_BF93_41A2_9BF700588BEC",
 "left": "0%",
 "propagateClick": true,
 "width": 36,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.4,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container black"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 80,
 "propagateClick": true,
 "id": "IconButton_223F0171_3014_B375_41C1_61063C3D73B3",
 "left": 10,
 "horizontalAlign": "center",
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3.png",
 "paddingRight": 0,
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, false, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, true, 0, null, null, false)",
 "class": "IconButton",
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_223F0171_3014_B375_41C1_61063C3D73B3_rollover.png",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 80,
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_4521E58D_74A8_853A_418A_CF7FF914DD83",
 "left": "0%",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_0B85764A_2D07_4D95_41A5_3AC872515A8C"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "90%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 50,
 "propagateClick": true,
 "id": "IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882",
 "horizontalAlign": "center",
 "right": 9,
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882.png",
 "paddingRight": 0,
 "bottom": "40%",
 "mode": "push",
 "minWidth": 1,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false)",
 "class": "IconButton",
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_1AF35943_2D07_479B_41AF_FBC8A1477882_rollover.png",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 50,
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "85%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "-left"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "50%",
 "paddingRight": 50,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "paddingLeft": 50,
 "class": "Container",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "25%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingBottom": 0,
 "height": "75%",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 140,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "header"
 }
},
{
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "scrollBarColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemLabelFontStyle": "italic",
 "scrollBarOpacity": 0.5,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemPaddingRight": 3,
 "itemMaxHeight": 1000,
 "itemThumbnailOpacity": 1,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "width": "100%",
 "minHeight": 1,
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "verticalAlign": "middle",
 "itemBorderRadius": 0,
 "itemLabelFontFamily": "Oswald",
 "minWidth": 1,
 "paddingLeft": 70,
 "itemMaxWidth": 1000,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelPosition": "bottom",
 "height": "92%",
 "itemPaddingLeft": 3,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemHorizontalAlign": "center",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "itemThumbnailBorderRadius": 0,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorRatios": [],
 "propagateClick": true,
 "itemWidth": 220,
 "selectedItemThumbnailShadow": true,
 "itemMinHeight": 50,
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#04A3E1",
 "rollOverItemThumbnailShadow": true,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "bottom": -0.2,
 "itemLabelFontSize": 16,
 "itemMinWidth": 50,
 "scrollBarMargin": 2,
 "itemVerticalAlign": "top",
 "itemLabelFontColor": "#666666",
 "itemThumbnailScaleMode": "fit_outside",
 "itemHeight": 160,
 "class": "ThumbnailGrid",
 "gap": 26,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "paddingBottom": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemThumbnailShadow": false,
 "itemLabelGap": 7,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "borderRadius": 5,
 "scrollBarWidth": 10,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "propagateClick": true,
 "width": "100%",
 "borderSize": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "paddingRight": 0,
 "minWidth": 1,
 "paddingLeft": 0,
 "insetBorder": false,
 "class": "WebFrame",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "data": {
  "name": "WebFrame"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "25%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingBottom": 0,
 "height": "75%",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "left": 0,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Floor Plan"
 },
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "height": "99.975%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "class": "ViewerArea",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "propagateClick": true,
 "layout": "absolute",
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "height": 140,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "header"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "Container photo"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_1E19E23C_57F1_802D_41D1_9B8B4D1D2BBD",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "55%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "-left"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_1E19D23C_57F1_802D_41B0_92437DF80B82",
 "propagateClick": false,
 "scrollBarColor": "#0069A3",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "children": [
  "this.Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
  "this.Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
  "this.Container_1E18523C_57F1_802D_41B1_88C86CD9A273"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "45%",
 "paddingRight": 60,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 460,
 "verticalAlign": "top",
 "paddingLeft": 60,
 "class": "Container",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 20,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "-right"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": false,
 "id": "IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "25%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "mode": "push",
 "minWidth": 50,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, false, 0, null, null, false)",
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_rollover.jpg",
 "paddingBottom": 0,
 "height": "75%",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_1E18B23C_57F1_802D_41C8_61C0F9BCC1FF_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "X"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_0B85764A_2D07_4D95_41A5_3AC872515A8C",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
  "this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
  "this.Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
  "this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
  "this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
  "this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
  "this.Container_1758A215_31FA_0014_41B6_9A4A5384548B",
  "this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
  "this.Container_168D8311_3106_01EC_41B0_F2D40886AB88"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 40,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 40,
 "scrollBarMargin": 2,
 "class": "Container",
 "top": "0%",
 "gap": 10,
 "backgroundColor": [
  "#000000"
 ],
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.7,
 "paddingBottom": 40,
 "borderRadius": 0,
 "paddingTop": 40,
 "overflow": "scroll",
 "data": {
  "name": "- Buttons set"
 }
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 2000,
 "data": {
  "name": "Image"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 0,
 "paddingBottom": 0,
 "height": 60,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container text"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "propagateClick": false,
 "width": 370,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "horizontalAlign": "right",
 "right": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingBottom": 0,
 "height": "36.14%",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "horizontalAlign": "right",
 "right": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingBottom": 0,
 "height": "36.14%",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "transitionDuration": 500,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBackgroundColorDirection": "vertical",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "class": "ViewerArea",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingBottom": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "paddingRight": 0,
 "bottom": "20%",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 50,
 "paddingLeft": 0,
 "class": "IconButton",
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton <"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "horizontalAlign": "center",
 "right": 10,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "borderSize": 0,
 "minHeight": 50,
 "width": "14.22%",
 "paddingRight": 0,
 "bottom": "20%",
 "mode": "push",
 "verticalAlign": "middle",
 "minWidth": 50,
 "paddingLeft": 0,
 "class": "IconButton",
 "top": "20%",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton >"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 60,
 "propagateClick": true,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "horizontalAlign": "right",
 "right": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "minHeight": 50,
 "width": "10%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "mode": "push",
 "minWidth": 50,
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "top": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingBottom": 0,
 "height": "10%",
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "propagateClick": false,
 "id": "Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1",
 "left": "0%",
 "horizontalAlign": "center",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_1E19C23C_57F1_802D_41D1_9DC72DB5C1E1.jpg",
 "minHeight": 1,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_outside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 2000,
 "data": {
  "name": "Image40635"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_1E18223C_57F1_802D_41D5_C1ECF1EB519F",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 0,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "5%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 20,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_1E18323C_57F1_802D_41AC_3EB4DE555BBC",
 "propagateClick": false,
 "scrollBarColor": "#E73B2C",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "children": [
  "this.HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
  "this.Container_1E18623C_57F1_802D_41D5_C4D10C61A206"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 520,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 100,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 30,
 "height": "100%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container text"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_1E18523C_57F1_802D_41B1_88C86CD9A273",
 "propagateClick": false,
 "width": 370,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 40,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container space"
 }
},
{
 "maxHeight": 1095,
 "propagateClick": true,
 "id": "Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19",
 "left": "0%",
 "horizontalAlign": "left",
 "width": "100%",
 "borderSize": 0,
 "url": "skin/Image_0435F73B_2D0F_4BF4_4181_65F86A8DAC19.jpg",
 "minHeight": 30,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 40,
 "paddingLeft": 0,
 "class": "Image",
 "top": "0%",
 "height": "25%",
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "paddingTop": 0,
 "maxWidth": 1095,
 "data": {
  "name": "Image Company"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "right": "0%",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
  "this.Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
  "this.Container_106C4A62_2D09_C594_41C0_0D00619DF541",
  "this.Button_0A054365_2D09_CB9F_4145_8C365B373D19",
  "this.Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
  "this.Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
  "this.Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
  "this.Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
  "this.Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
  "this.Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
  "this.Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
  "this.Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
  "this.Container_207ECEAD_3035_51EC_41A3_EE49910C654D"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "bottom": "26%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "26%",
 "gap": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-Level 1"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_19256A12_2D07_45B5_41AB_E9DE96B2DFF3",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
  "this.HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
  "this.Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
  "this.Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "gap": 5,
 "height": 130,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-Container footer"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_2A2CB53C_310E_0014_41C3_AB834B10253B",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
  "this.Container_2A2DB53B_310E_001C_41BA_0206228E495C",
  "this.Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
  "this.Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
  "this.Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
  "this.Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
  "this.Button_2A2C053B_310E_001C_41A2_583DE489828C",
  "this.Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
  "this.Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
  "this.Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
  "this.Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
  "this.Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
  "this.Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "paddingRight": 0,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "gap": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-Level 2-1"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_159EADDD_31FA_0014_41C8_8A5203EC627B",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
  "this.Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
  "this.Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
  "this.Button_15A10DDC_31FA_0014_4185_021C898E177D",
  "this.Button_15A13DDC_31FA_0014_41C5_41AE80876834",
  "this.Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
  "this.Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
  "this.Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
  "this.Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
  "this.Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
  "this.Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
  "this.Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
  "this.Button_159EBDDD_31FA_0014_41C8_935504B30727"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "paddingRight": 0,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "gap": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-Level 2-2"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_17569D7D_31FA_0015_41C4_CBC688763A8D",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
  "this.Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
  "this.Container_17578D7D_31FA_0015_41BE_353D3005648A",
  "this.Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
  "this.Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
  "this.Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
  "this.Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
  "this.Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
  "this.Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
  "this.Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
  "this.Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
  "this.Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
  "this.Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "paddingRight": 0,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "gap": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-Level 2-3"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_1758A215_31FA_0014_41B6_9A4A5384548B",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_175A5214_31FA_0014_4198_930DF49BADD9",
  "this.Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
  "this.Container_1759B215_31FA_0014_41C0_84C99CBD5517",
  "this.Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
  "this.Button_17598215_31FA_0014_41AC_1166AB319171",
  "this.Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
  "this.Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
  "this.Button_17593215_31FA_0014_41C0_42BAFB0080F0",
  "this.Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
  "this.Button_17590215_31FA_0014_41C1_2B2D012DCC76",
  "this.Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
  "this.Button_17596215_31FA_0014_41C6_A42670770708",
  "this.Button_1758B215_31FA_0014_41BC_C4EAC2A9544B"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "paddingRight": 0,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "gap": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-Level 2-4"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
  "this.Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
  "this.Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
  "this.Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
  "this.Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
  "this.Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
  "this.Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
  "this.Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
  "this.Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
  "this.Button_17EB52B7_3106_0014_419C_439E593AEC43",
  "this.Button_17EB62B7_3106_0014_41C5_43B38271B353",
  "this.Button_17EB72B7_3106_0014_41B9_61857077BF4A",
  "this.Button_17EB92B7_3106_0014_41B2_34A3E3F63779"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "paddingRight": 0,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "gap": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-Level 2-5"
 }
},
{
 "propagateClick": true,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "id": "Container_168D8311_3106_01EC_41B0_F2D40886AB88",
 "left": "0%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Button_168CA310_3106_01EC_41C7_72CE0522951A",
  "this.Container_168C8310_3106_01EC_4187_B16F315A4A23",
  "this.Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
  "this.Button_168D6310_3106_01EC_41B8_A0B6BE627547",
  "this.Button_168D5310_3106_01EC_41B5_96D9387401B8",
  "this.Button_168D3310_3106_01EC_41AC_5D524E4677A5",
  "this.Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
  "this.Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
  "this.Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
  "this.Button_168DD310_3106_01EC_4190_7815FA70349E",
  "this.Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
  "this.Button_168DA310_3106_01EC_41BE_DF88732C2A28",
  "this.Button_168D9311_3106_01EC_41A8_3BD8769525D6"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "width": "100%",
 "paddingRight": 0,
 "bottom": "25%",
 "contentOpaque": false,
 "minWidth": 1,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "class": "Container",
 "verticalAlign": "middle",
 "top": "25%",
 "gap": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "overflow": "scroll",
 "data": {
  "name": "-Level 2-6"
 }
},
{
 "propagateClick": false,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingLeft": 10,
 "class": "HTMLText",
 "height": "100%",
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.24vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.18vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.18vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.34vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.18vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.69vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "propagateClick": false,
 "width": 180,
 "data": {
  "name": "Button"
 },
 "horizontalAlign": "center",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": "2.39vh",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "mode": "push",
 "minWidth": 1,
 "paddingLeft": 0,
 "label": "LOREM IPSUM",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 1,
 "fontStyle": "italic",
 "paddingBottom": 0,
 "height": 50,
 "shadow": false,
 "backgroundOpacity": 0.7,
 "paddingTop": 0,
 "borderRadius": 50,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "bold"
},
{
 "propagateClick": false,
 "id": "HTMLText_1E18123C_57F1_802D_41D2_B0CD0D6533F4",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "HTMLText",
 "height": "46%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.24vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.71vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_1E18623C_57F1_802D_41D5_C4D10C61A206",
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Image_1E18723C_57F1_802D_41C5_8325536874A5",
  "this.HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "height": "75%",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "- content"
 }
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_208C289A_3033_51B4_41BC_C3F8D8B8F86D",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_0AEB5577_2D08_CE7B_41B6_192923248F4E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Tour Info"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "RECEPTION >",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_106C4A62_2D09_C594_41C0_0D00619DF541",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_0A054365_2D09_CB9F_4145_8C365B373D19",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Panorama List"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "ROOMS >",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 23,
 "iconBeforeLabel": true,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_152401E8_2D0B_4694_41C5_9141C985F9C3",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_0B73474A_2D18_CB95_41B5_180037BA80BC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Location"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Inserdt Text",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "AMENITIES >",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_1BA343A6_2D0B_4A9D_41A8_3A02573B3B89",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1D2C4FDF_2D7F_BAAB_4198_FBD1E9E469FF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Floorplan"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "SPORTS AREA >",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_15283BED_2D08_DA6F_41C5_5635F0C6DB03",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_0399826A_2D79_4594_41BA_934A50D0E6B4",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Photoalbum"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "SWIMMING POOL >",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_146FF082_2D09_C695_41C4_13DE74CDAF5E",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1D0C50DE_2D07_C6AD_41C1_CF4547A6CFAB",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button Contact"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "RESTAURANTS >",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, false, 0, null, null, false); this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_207ECEAD_3035_51EC_41A3_EE49910C654D",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.3,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "id": "Container_193B8A52_2D1B_C5B5_41C3_F44FF520A3F0",
 "propagateClick": true,
 "width": 40,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 2,
 "shadow": false,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "blue line"
 }
},
{
 "propagateClick": true,
 "id": "HTMLText_29DD1615_3597_79DF_41C4_7593739E5260",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "HTMLText",
 "height": 78,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "propagateClick": false,
 "layout": "horizontal",
 "children": [
  "this.IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
  "this.IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
  "this.IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
  "this.IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5"
 ],
 "id": "Container_2B9EE463_3593_BA7B_4195_8E8F4568BB13",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "bottom",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 7,
 "height": 56,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "data": {
  "name": "-Container Icons 1"
 }
},
{
 "propagateClick": false,
 "layout": "horizontal",
 "children": [
  "this.IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
  "this.IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
  "this.IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
  "this.IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F"
 ],
 "id": "Container_283049D5_35F3_AA5F_419D_20B6A59ABCA6",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 7,
 "height": 44,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "data": {
  "name": "-Container Icons 2"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverIconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B_rollover.png",
 "id": "Button_2A2DA53B_310E_001C_41C7_8885E712C50B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_2A2DA53B_310E_001C_41C7_8885E712C50B.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "paddingLeft": 5,
 "label": "BACK",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_2A2CB53C_310E_0014_41C3_AB834B10253B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 30,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_2A2DB53B_310E_001C_41BA_0206228E495C",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "id": "Container_1303E3BB_3106_001D_41C8_60D6F4D70B2F",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "height": 8,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2D853B_310E_001C_41C4_1C2E2BAFC35D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Main Entrance",
 "class": "Button",
 "shadowBlurRadius": 15,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2DE53B_310E_001C_41BB_C7AB6950A4DD",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lobby",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 23,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2C253B_310E_001C_41B6_D3A7F4F68C3E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Reception",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Reception",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2C053B_310E_001C_41A2_583DE489828C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Meeting Area 1",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2C753B_310E_001C_41C4_B649CCC20E3D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Meeting Area 2",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_2A2C553C_310E_0014_41C4_86393D0ADCC7",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Bar",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15EF2665_3106_0035_41AE_9BACA1A48D02",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Chill Out",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15F5A318_3106_001C_41C5_9AA2EF2184CF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Terrace",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1203FDB8_3106_001C_41B6_C9BE8EDD0DA9",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "label": "Garden",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_13D4FC1E_310A_0017_41BA_DDA6D071C1BA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "visible": false,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverIconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1_rollover.png",
 "id": "Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_15A15DDC_31FA_0014_41A4_CE4305FEC7D1.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "paddingLeft": 5,
 "label": "BACK",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_159EADDD_31FA_0014_41C8_8A5203EC627B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 30,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_15A14DDC_31FA_0014_41BE_C93192DD207E",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "id": "Container_15A16DDC_31FA_0014_4199_0FBF7553300D",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "height": 8,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15A10DDC_31FA_0014_4185_021C898E177D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 15,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15A13DDC_31FA_0014_41C5_41AE80876834",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 23,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_15A12DDC_31FA_0014_416B_ED845741AE5F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159EDDDC_31FA_0014_419A_61C18E43FE01",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159ECDDC_31FA_0014_41B9_2D5AB1021813",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159EFDDC_31FA_0014_41C6_9CF7032F84E0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159EEDDC_31FA_0014_41B6_22A86B2D2FEB",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159E9DDC_31FA_0015_41B6_CB1D433C7673",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159E8DDD_31FA_0014_41C5_F18F441AF371",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_159EBDDD_31FA_0014_41C8_935504B30727",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverIconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B_rollover.png",
 "id": "Button_1757CD7D_31FA_0015_4143_A9E37B16A50B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_1757CD7D_31FA_0015_4143_A9E37B16A50B.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "paddingLeft": 5,
 "label": "BACK",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_17569D7D_31FA_0015_41C4_CBC688763A8D, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 30,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_17579D7D_31FA_0015_41A1_D2B94269F28D",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "id": "Container_17578D7D_31FA_0015_41BE_353D3005648A",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "height": 8,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1757AD7D_31FA_0015_41C7_FB79F56FA149",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 15,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17565D7D_31FA_0015_4193_78BBCB2DC70F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 23,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17564D7D_31FA_0015_41B8_A9191CD56C52",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17567D7D_31FA_0015_41C2_1E0D0AF05C7A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17566D7D_31FA_0015_41AD_98D7C60C694F",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17561D7D_31FA_0015_41B5_BD72FAC26B8B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17560D7D_31FA_0015_41C4_7F0EC7540CC2",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17562D7D_31FA_0015_41A3_96B282B30DBA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1756DD7D_31FA_0015_41A5_988B67FCF8B7",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1756FD7D_31FA_0015_41C7_DA2AAC2AAAEC",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverIconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9_rollover.png",
 "id": "Button_175A5214_31FA_0014_4198_930DF49BADD9",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_175A5214_31FA_0014_4198_930DF49BADD9.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "paddingLeft": 5,
 "label": "BACK",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_1758A215_31FA_0014_41B6_9A4A5384548B, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 30,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_175A4215_31FA_0014_41B2_5B8676CC3F2F",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "id": "Container_1759B215_31FA_0014_41C0_84C99CBD5517",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "height": 8,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1759A215_31FA_0014_41C7_F6B1044E5BB3",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 15,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17598215_31FA_0014_41AC_1166AB319171",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 23,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1759F215_31FA_0014_41BD_BBFA5FB0D882",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1759D215_31FA_0014_41AD_B6C5744A0B97",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17593215_31FA_0014_41C0_42BAFB0080F0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17592215_31FA_0014_41B2_AA3B5CC318B8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17590215_31FA_0014_41C1_2B2D012DCC76",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17597215_31FA_0014_41C0_9BEE1DE4D7F6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17596215_31FA_0014_41C6_A42670770708",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_1758B215_31FA_0014_41BC_C4EAC2A9544B",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverIconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C_rollover.png",
 "id": "Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_17EA82B7_3106_0014_41C2_C9B0D9E6F22C.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "paddingLeft": 5,
 "label": "BACK",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_17EBA2B7_3106_0014_41A9_D6C96D0633AE, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 30,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_17EA92B7_3106_0014_41A6_2B88DF32BBA7",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "id": "Container_17EAA2B7_3106_0014_41B0_ACBB1485A79E",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "height": 8,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EAB2B7_3106_0014_41A7_209417AD3E9A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 15,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EAD2B7_3106_0014_41C0_0B5453B4841D",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 23,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EAE2B7_3106_0014_41C7_DB7FC43AAEE0",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB02B7_3106_0014_41AF_05D9AC36B189",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB32B7_3106_0014_41C8_467BF6AECBE8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB42B7_3106_0014_41B0_CE70CBDDF438",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB52B7_3106_0014_419C_439E593AEC43",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB62B7_3106_0014_41C5_43B38271B353",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB72B7_3106_0014_41B9_61857077BF4A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_17EB92B7_3106_0014_41B2_34A3E3F63779",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverIconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A_rollover.png",
 "id": "Button_168CA310_3106_01EC_41C7_72CE0522951A",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "iconBeforeLabel": true,
 "data": {
  "name": "Button <BACK"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "iconURL": "skin/Button_168CA310_3106_01EC_41C7_72CE0522951A.png",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 30,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "rollOverFontFamily": "Oswald",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverFontSize": 18,
 "paddingLeft": 5,
 "label": "BACK",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "rollOverBackgroundOpacity": 0.8,
 "height": 50,
 "click": "this.setComponentVisibility(this.Container_168D8311_3106_01EC_41B0_F2D40886AB88, false, 0, null, null, false); this.setComponentVisibility(this.Container_0A898462_2D0B_4D94_41B3_BDB53B7688EE, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 30,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "Container_168C8310_3106_01EC_4187_B16F315A4A23",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "paddingBottom": 0,
 "height": 1,
 "shadow": false,
 "backgroundOpacity": 0.5,
 "paddingTop": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "data": {
  "name": "line"
 }
},
{
 "propagateClick": true,
 "layout": "absolute",
 "id": "Container_168D7310_3106_01EC_41BE_5FCBD9E27BE4",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "100%",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "gap": 10,
 "height": 8,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "data": {
  "name": "line separator"
 }
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D6310_3106_01EC_41B8_A0B6BE627547",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 1"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 15,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "rollOverShadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "width": "100%",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D5310_3106_01EC_41B5_96D9387401B8",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 2"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 23,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D3310_3106_01EC_41AC_5D524E4677A5",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 3"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "pressedLabel": "Lorem Ipsum",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D2310_3106_01EC_41B8_9D7D1B2B55FA",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 4"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D0310_3106_01EC_41A1_FA8FC42E6FF3",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 5"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168DE310_3106_01EC_4192_6A9F468A0ADE",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 6"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168DD310_3106_01EC_4190_7815FA70349E",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 7"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168DB310_3106_01EC_41B2_3511AA5E40E1",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 8"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168DA310_3106_01EC_41BE_DF88732C2A28",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 9"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "shadowSpread": 1,
 "propagateClick": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "id": "Button_168D9311_3106_01EC_41A8_3BD8769525D6",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "data": {
  "name": "Button text 10"
 },
 "horizontalAlign": "left",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "shadowColor": "#000000",
 "borderSize": 0,
 "iconHeight": 32,
 "fontSize": 18,
 "minHeight": 1,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 10,
 "label": "Lorem Ipsum",
 "class": "Button",
 "shadowBlurRadius": 6,
 "gap": 5,
 "iconBeforeLabel": true,
 "height": 36,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_21627DB7_302D_53FD_41B2_58A68D7DB3D4, true, 0, null, null, false); this.setComponentVisibility(this.Container_2FBFE191_3AA1_A2D1_4144_E7F6523C83CD, false, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "iconWidth": 32,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "fontWeight": "normal"
},
{
 "maxHeight": 200,
 "propagateClick": false,
 "id": "Image_1E18723C_57F1_802D_41C5_8325536874A5",
 "horizontalAlign": "left",
 "width": "25%",
 "borderSize": 0,
 "url": "skin/Image_1E18723C_57F1_802D_41C5_8325536874A5.jpg",
 "minHeight": 1,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Image",
 "height": "100%",
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "maxWidth": 200,
 "data": {
  "name": "agent photo"
 }
},
{
 "propagateClick": false,
 "id": "HTMLText_1E18423C_57F1_802D_41C4_458DB7F892AC",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "width": "75%",
 "paddingRight": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "paddingLeft": 10,
 "class": "HTMLText",
 "height": "100%",
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.18vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.18vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "data": {
  "name": "HTMLText19460"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038_rollover.png",
 "id": "IconButton_2B90E40F_3593_B9CB_41B4_408768336038",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90E40F_3593_B9CB_41B4_408768336038.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "class": "IconButton",
 "height": 44,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83_rollover.png",
 "id": "IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90C410_3593_B9D5_41AB_13AB96397D83.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "class": "IconButton",
 "height": 44,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F_rollover.png",
 "id": "IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B90A410_3593_B9D5_41B7_0B5CCA80EF0F.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "class": "IconButton",
 "height": 44,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5_rollover.png",
 "id": "IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B917411_3593_B9D7_41C6_8D1102463EC5.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "class": "IconButton",
 "height": 44,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "transparencyActive": true,
 "maxHeight": 101,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15_rollover.png",
 "id": "IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2BBEA1DF_35B3_BA4B_41B8_DE69AA453A15.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "class": "IconButton",
 "height": 44,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "propagateClick": false,
 "rollOverIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_rollover.png",
 "id": "IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_1E18823C_57F1_802D_41C1_C325A6BB2CA9, true, 0, null, null, false)",
 "class": "IconButton",
 "height": 44,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2B721244_35B1_D9BD_41C8_FCB90D5BD7F7_pressed.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Realtor"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF",
 "horizontalAlign": "center",
 "width": 44,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 44,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A159B11_35B0_EFD6_41C9_DF408F8120FF_rollover.png",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton Video"
 }
},
{
 "transparencyActive": false,
 "maxHeight": 101,
 "propagateClick": false,
 "id": "IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F",
 "horizontalAlign": "center",
 "width": 50,
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F.png",
 "paddingRight": 0,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "class": "IconButton",
 "height": 50,
 "paddingBottom": 0,
 "shadow": false,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "pressedIconURL": "skin/IconButton_2B371BEA_35AF_6E75_41C9_D7DBED7ABF6F_pressed.png",
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101,
 "data": {
  "name": "IconButton --"
 }
}],
 "width": "100%",
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
