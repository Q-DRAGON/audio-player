var player = function() {
    this.audio = document.querySelector('#id-audio-player')
    this.processor = document.querySelector('.processor')
    this.processorVol = document.querySelector('.processor-vol')
    this.volume = document.querySelector('.volume')
    this.buttons = document.querySelector('.buttons')
    this.cont = document.querySelector('.slider-cont')
    this.currenttime = document.querySelector('.currenttime')
    this.durationTime = document.querySelector('.durationTime')
    this.timeshow = document.querySelector('.timeshow')
    this.style = document.querySelector('style')
    this.singer = document.querySelector('.singer')
    this.song = document.querySelector('.song')
    this.cover = document.querySelector('.cover')
    this.albums = document.querySelector('.Albums')
    this.issued = document.querySelector('.issued')
    this.issuedhtml = []
    this.albumsArr = [
        {
            song: '等你下课',
            artist: '周杰伦',
            src: 'src/music/周杰伦-等你下课.mp3',
            cover: 'src/music/周杰伦-等你下课.jpg'
        },
        {
            song: 'JULY',
            artist: '吴亦凡',
            src: 'src/music/吴亦凡-JULY.mp3',
            cover: 'src/music/吴亦凡-JULY.jpg'
        },
        {
            song: '你好',
            artist: '初音ミク',
            src: 'src/music/初音ミク - 你好.mp3',
            cover: 'src/music/初音ミク - 你好.jpg'
        },
        {
            song: '伟大的渺小',
            artist: '林俊杰',
            src: 'src/music/林俊杰-伟大的渺小.mp3',
            cover: 'src/music/林俊杰-伟大的渺小.jpg'
        },
        {
            song: 'Shape of You',
            artist: 'Ed Sheeran',
            src: 'src/music/Ed Sheeran-Shape of You.mp3',
            cover: 'src/music/Ed Sheeran-Shape of You.jpg'
        },
    ]
    this.issuedArr = [
        {
            song: 'Refrain(TV size)',
            artist: 'Aimer',
            src: 'src/music/Aimer - Refrain (TV size).mp3',
            cover: 'src/music/Aimer - Refrain (TV size).jpg'
        },
        {
            song: 'Superstar',
            artist: 'Beatrich',
            src: 'src/music/Beatrich-Superstar.mp3',
            cover: 'src/music/Beatrich-Superstar.jpg'
        },
        {
            song: 'Something Just Like This',
            artist: 'Chainsmokers Coldplay',
            src: 'src/music/Chainsmokers Coldplay-Something Just Like This.mp3',
            cover: 'src/music/Chainsmokers Coldplay-Something Just Like This.jpg'
        },
        {
            song: 'Panama',
            artist: 'Matteo',
            src: 'src/music/Matteo-Panama.mp3',
            cover: 'src/music/Matteo-Panama.jpg'
        },
        {
            song: '大一岁',
            artist: 'Tizzy T',
            src: 'src/music/Tizzy T-大一岁.mp3',
            cover: 'src/music/Tizzy T-大一岁.jpg'
        },
        {
            song: 'Hand in Hand',
            artist: '初音ミク',
            src: 'src/music/初音ミク-Hand in Hand.mp3',
            cover: 'src/music/初音ミク-Hand in Hand.jpg'
        },
        {
            song: 'ODDS&ENDS  メルト',
            artist: '初音ミク',
            src: 'src/music/初音ミク-ODDS&ENDS.mp3',
            cover: 'src/music/初音ミク-ODDS&ENDS.jpg'
        },
        {
            song: '告白气球',
            artist: '周杰伦',
            src: 'src/music/周杰伦-告白气球.mp3',
            cover: 'src/music/周杰伦-告白气球.jpg'
        },
        {
            song: '6',
            artist: '吴亦凡',
            src: 'src/music/吴亦凡-6.mp3',
            cover: 'src/music/吴亦凡-6.jpg'
        },
        {
            song: '她说',
            artist: '林俊杰',
            src: 'src/music/林俊杰-她说.mp3',
            cover: 'src/music/林俊杰-她说.jpg'
        },
    ]
    this.allArr = [
        {
            song: '等你下课',
            artist: '周杰伦',
            src: 'src/music/周杰伦-等你下课.mp3',
            cover: 'src/music/周杰伦-等你下课.jpg'
        },
        {
            song: 'JULY',
            artist: '吴亦凡',
            src: 'src/music/吴亦凡-JULY.mp3',
            cover: 'src/music/吴亦凡-JULY.jpg'
        },
        {
            song: '你好',
            artist: '初音ミク',
            src: 'src/music/初音ミク - 你好.mp3',
            cover: 'src/music/初音ミク - 你好.jpg'
        },
        {
            song: '伟大的渺小',
            artist: '林俊杰',
            src: 'src/music/林俊杰-伟大的渺小.mp3',
            cover: 'src/music/林俊杰-伟大的渺小.jpg'
        },
        {
            song: 'Shape of You',
            artist: 'Ed Sheeran',
            src: 'src/music/Ed Sheeran-Shape of You.mp3',
            cover: 'src/music/Ed Sheeran-Shape of You.jpg'
        },
        {
            song: 'Refrain(TV size)',
            artist: 'Aimer',
            src: 'src/music/Aimer - Refrain (TV size).mp3',
            cover: 'src/music/Aimer - Refrain (TV size).jpg'
        },
        {
            song: 'Superstar',
            artist: 'Beatrich',
            src: 'src/music/Beatrich-Superstar.mp3',
            cover: 'src/music/Beatrich-Superstar.jpg'
        },
        {
            song: 'Something Just Like This',
            artist: 'Chainsmokers Coldplay',
            src: 'src/music/Chainsmokers Coldplay-Something Just Like This.mp3',
            cover: 'src/music/Chainsmokers Coldplay-Something Just Like This.jpg'
        },
        {
            song: 'Panama',
            artist: 'Matteo',
            src: 'src/music/Matteo-Panama.mp3',
            cover: 'src/music/Matteo-Panama.jpg'
        },
        {
            song: '大一岁',
            artist: 'Tizzy T',
            src: 'src/music/Tizzy T-大一岁.mp3',
            cover: 'src/music/Tizzy T-大一岁.jpg'
        },
        {
            song: 'Hand in Hand',
            artist: '初音ミク',
            src: 'src/music/初音ミク-Hand in Hand.mp3',
            cover: 'src/music/初音ミク-Hand in Hand.jpg'
        },
        {
            song: 'ODDS&ENDS メルト',
            artist: '初音ミク',
            src: 'src/music/初音ミク-ODDS&ENDS.mp3',
            cover: 'src/music/初音ミク-ODDS&ENDS.jpg'
        },
        {
            song: '告白气球',
            artist: '周杰伦',
            src: 'src/music/周杰伦-告白气球.mp3',
            cover: 'src/music/周杰伦-告白气球.jpg'
        },
        {
            song: '6',
            artist: '吴亦凡',
            src: 'src/music/吴亦凡-6.mp3',
            cover: 'src/music/吴亦凡-6.jpg'
        },
        {
            song: '她说',
            artist: '林俊杰',
            src: 'src/music/林俊杰-她说.mp3',
            cover: 'src/music/林俊杰-她说.jpg'
        },
    ]
    this.musicList = []
}

 // 显示音乐时间，换算成显示的数目
var fill = function(m) {
    if(m < 1) {
        var m = '00'
    } else if(m < 10) {
        var m = '0' + String(m)
    } else {
        var m = String(m)
    }
    return m
}

// 从数组里抽取随机下标
player.prototype.getRandom = function(){
    var len = this.allArr.length
    var i = Math.ceil(Math.random() * (len)) % len
    return this.allArr[i]
}


player.prototype.inspectButton = function() {
    var playbutton = document.querySelector('.play')
    if (playbutton.classList.contains('icon-bofang')) {
        playbutton.classList.remove('icon-bofang')
        playbutton.classList.add('icon-zanting')
    }
}

// albums 模板
player.prototype.albumstemplate = function(album) {
    var t = `
            <li class='music'>
                <img src='${album.cover}'>
                <div class='title'>${album.song}</div>
                <div class='artist'>${album.artist}</div>
            </li>
            `
    var AlbumDiv = document.querySelector('.Albums')
    AlbumDiv.insertAdjacentHTML('beforeend', t)
}

// Issued 模板
player.prototype.issuedtemplate = function(issued) {
        var t = `
        <div class="table-cell music">
            <img src='${issued.cover}'>
            <div class='music-info'>
                <span class='title'>${issued.song}</span>
                <span class='artist'>${issued.artist}</span>
            </div>
        </div>
        `
    this.issuedhtml.push(t)
    if(this.issuedhtml.length == 3) {
        var issuedhtml = this.issuedhtml.join('')
        var tem = `
            <div class='table-row'>
            ${issuedhtml}
            </div>
        `
        var issuedDiv = document.querySelector('.issued')
        issuedDiv.insertAdjacentHTML('beforeend', tem)
        this.issuedhtml = []
    }
}

// albums 音乐区域渲染
player.prototype.albumsRender = function() {
    for(let i = 0; i < this.albumsArr.length; i++) {
        var album = this.albumsArr[i]
        this.albumstemplate(album)
    }
}

// issued 音乐区域渲染
player.prototype.issuedRender = function() {
        for(let i = 0; i < this.issuedArr.length - 1; i++) {
            var issued = this.issuedArr[i]
            this.issuedtemplate(issued)
        }
}

// 切歌时寻找对象的下标时
player.prototype.index = function(o) {
    var songs = this.audio
    var numberOfSongs = parseInt(songs.dataset.songs)
    var activeIndex = parseInt(songs.dataset.active)
    var nextIndex = (activeIndex + numberOfSongs + o) % numberOfSongs
    songs.dataset.active = nextIndex
    return nextIndex
}

// 点播歌曲
player.prototype.mod = function(target) {
    if (target.classList.contains('music')) {
        var title = target.querySelector('.title').innerText
    } else {
        var title = target.parentElement.querySelector('.title').innerText
    }
    for(let i = 0; i < this.allArr.length; i++) {
        if(title == this.allArr[i].song) {
            this.cover.setAttribute('src', this.allArr[i].cover)
            this.audio.src = this.allArr[i].src
            this.song.innerText = this.allArr[i].song
            this.singer.innerText = this.allArr[i].artist
            this.audio.play()
            this.inspectButton()
            this.saveMusicRecords(this.allArr[i])
            break
        }
    }
}

// 播放
player.prototype.playIt = function(target) {
    var self = this
        if (target.classList.contains('icon-bofang')) {
            target.classList.remove('icon-bofang')
            target.classList.add('icon-zanting')
            self.audio.play()
        } else {
            target.classList.remove('icon-zanting')
            target.classList.add('icon-bofang')
            self.audio.pause()
        }
}


player.prototype.saveMusicRecords = function(music) {
    if(this.musicList.length > 0) {
        for(let i = 0; i < this.musicList.length; i++) {
            if(this.musicList[i].song == music.song){
                return false
            }
        }
        this.musicList.push(music)
    } else {
        this.musicList.push(music)
    }
}


player.prototype.musicIndex = function(song) {
    for(let i = 0; i < this.musicList.length; i++) {
        if(this.musicList[i].song == song){
            return i
            break
        }
    }
}

// 上一首
player.prototype.previous = function(target) {
    // 获取歌曲的暂停键
    var index = this.musicIndex(this.song.innerText)
    if(index - 1 > -1) {
        this.audio.src = this.musicList[index - 1].src
        this.cover.setAttribute('src', this.musicList[index - 1].cover)
        this.singer.innerHTML = this.musicList[index - 1].artist
        this.song.innerHTML = this.musicList[index - 1].song
        this.audio.play()
        this.inspectButton()
    }
}

// 下一首
player.prototype.next = function(target) {
    // 获取歌曲的暂停键
    var index = this.musicIndex(this.song.innerText)
    if(index + 1 < this.musicList.length) {
        this.audio.src = this.musicList[index + 1].src
        this.cover.setAttribute('src', this.musicList[index + 1].cover)
        this.singer.innerHTML = this.musicList[index + 1].artist
        this.song.innerHTML = this.musicList[index + 1].song
        this.audio.play()
        this.inspectButton()
    }
}

// 判断按钮是播放，上一首，还是下一首
player.prototype.button = function(target) {
    if(target.classList.contains('play')){
        this.playIt(target)
    } else if(target.classList.contains('previous-song')){
        this.previous(target)
    } else if(target.classList.contains('next-song')){
        this.next(target)
    }
}

// 音量条
player.prototype.vol = function() {
    var self = this
    this.volume.addEventListener('mousedown', function(event){
        self.processorVol.style.width =  event.offsetX + "px"
        self.processorVol.setAttribute('data-active', 'unfinished')
        self.audio.volume = parseInt(self.processorVol.style.width) / self.volume.offsetWidth
        document.addEventListener('mousemove', function(event){
            // if 语句为了避免 chrome的 bug： mouseup 后再次运行 mousemove
            if(self.processorVol.getAttribute('data-active') == 'finish'){
                return false
            } else if(self.processorVol.getAttribute('data-active') == 'unfinished'){
                self.processorVol.style.width = event.offsetX + "px"
                // 防止拖拽音量条时溢出及声音溢出, 设置最大值为进度条的极限
                var processorVolWidth = parseInt(self.processorVol.style.width)
                var volumeWidth = self.volume.offsetWidth
                    if(processorVolWidth > volumeWidth) {
                            self.processorVol.style.width = volumeWidth + "px"
                            self.audio.volume = 1
                    } else {
                        self.audio.volume = processorVolWidth / volumeWidth
                    }
            }
        })
        // 拖动音量条后鼠标抬起， 跳转到当前的进度
        document.addEventListener('mouseup', function(event){
            self.processorVol.setAttribute('data-active', 'finish')
        })
    })
}

// 进度条悬停提示
player.prototype.timeShow = function() {
    var self = this
    this.cont.addEventListener('mousemove', function(event){
        self.timeshow.classList.remove('none')
        self.timeshow.style.left =  event.offsetX - 12 + "px";
        // 悬停时间显示
        var v =  (event.offsetX) / parseInt(self.cont.style.width)
        var currentTime = v * self.audio.duration
        var min = fill(Math.floor(currentTime / 60))
        var sec = fill(Math.floor(currentTime % 60))
        self.timeshow.innerHTML = `${min}:${sec}`
    })
    // 移开进度条，提示消失
    this.cont.addEventListener('mouseout', function(event){
        self.timeshow.classList.add('none')
    })
}

// 进度条移动
player.prototype.moveBar = function() {
    var currentTime = this.audio.currentTime
    var duration = this.audio.duration
    var v = currentTime / duration
    this.processor.style.width = v * parseInt(this.cont.style.width) + 'px'
    // 显示当前播放时间
    var current = this.audio.currentTime
    var min = fill(Math.floor(current / 60))
    var sec = fill(Math.floor(current % 60))
    this.currenttime.innerHTML = `${min}:${sec}`
    if(this.audio.currentTime == this.audio.duration) {
        this.playerRequest()
    }
}

// 进度条拖动
player.prototype.dragBar = function() {
    var self = this
    var contWidth = parseInt(this.cont.style.width)
    var processorWidth = parseInt(this.processor.style.width)
    this.cont.addEventListener('mousedown', function(event){
        self.processor.style.width =  event.offsetX + "px"
        self.processor.setAttribute('data-active', 'unfinished')
        document.addEventListener('mousemove', function(event){
            // if 语句为了避免 chrome的 bug： mouseup 后再次运行 mousemove
            if(self.processor.getAttribute('data-active') == 'finish'){
                return false
            } else if(self.processor.getAttribute('data-active') == 'unfinished'){
                   self.processor.style.width = event.offsetX + "px"
                // 防止拖拽进度条时溢出, 设置最大值为进度条的极限
                if(processorWidth > contWidth) {
                        self.processor.style.width = contWidth + "px"
                }
            }
        })
        // 拖动进度条后鼠标抬起， 跳转到当前的进度
        document.addEventListener('mouseup', function(event){
            if(self.processor.getAttribute('data-active') == 'unfinished'){
                self.processor.setAttribute('data-active', 'finish')
                var num = self.timeshow.innerHTML.split(':')
                var seconds = parseInt(num[0]) * 60 + parseInt(num[1])
                self.audio.currentTime = seconds
            }
        })
    })
}

// 总时长
player.prototype.time = function() {
    // 显示音乐总时长
    var duration = this.audio.duration
    var minutes = fill(Math.floor(duration / 60))
    var seconds = fill(Math.floor(duration % 60))
    this.durationTime.innerHTML = `${minutes}:${seconds}`
}

// 总控制
player.prototype.initPlayer = function() {
    var self = this
    // 打开界面初渲染
    this.albumsRender()
    this.issuedRender()
    // 进度条悬停提示
    this.timeShow()
    // 进度条拖动
    this.dragBar()
    // 初始音乐
    var initMusic = this.getRandom()
    this.cover.setAttribute('src', initMusic.cover)
    this.audio.src = initMusic.src
    this.song.innerText = initMusic.song
    this.singer.innerText = initMusic.artist
    this.saveMusicRecords(initMusic)
    // 当三个播放控制按钮其中有被按下,传 target 去判断
    this.buttons.addEventListener('click', function(){
        self.button(event.target)
    })
    // 当 albums 区域有事件,传 target 去判断
    this.albums.addEventListener('click', function(){
        if(!event.target.classList.contains('Albums')) {
            self.mod(event.target)
        }
    })
    // 当 issued 区域有事件,传 target 去判断
    this.issued.addEventListener('click', function(){
        self.mod(event.target)
    })
    // 音量条
    this.volume.addEventListener('mouseover', function(){
        self.vol()
    })
    // 进度条移动
    this.audio.addEventListener('timeupdate', function(){
        self.moveBar()
    })
    // 播放时长
    this.audio.addEventListener('canplay', function(){
        self.time()
    })
}


var _main = function() {
     var p = new player()
     p.initPlayer()
}

_main()
