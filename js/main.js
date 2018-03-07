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
    this.music = []
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

// ajax 模板
var ajax = function(request) {
    var r = new XMLHttpRequest()
    r.open(request.method, request.url, true)
    r.onreadystatechange = function(event) {
        if(r.readyState === 4) {
            request.callback(r.response)
        }
    }
    if (request.method === 'GET') {
        r.send()
    } else {
        r.send(request.data)
    }
}

player.prototype.inspectButton = function() {
    var playbutton = document.querySelector('.play')
    if (playbutton.classList.contains('icon-bofang')) {
        playbutton.classList.remove('icon-bofang')
        playbutton.classList.add('icon-zanting')
    }
}

// albums 模板
player.prototype.albumstemplate = function(music) {
    var picture = music.picture
    var title = music.title
    var artist = music.artist
    var t = `
            <li class='music'>
                <img src=http://imgsrc.baidu.com/forum/pic/item/4c50c51b9d16fdfaa8237e83b28f8c5495ee7b4b.jpg>
                <div class='title'>${title}</div>
                <div class='artist'>${artist}</div>
            </li>
            `
    var AlbumDiv = document.querySelector('.Albums')
    AlbumDiv.insertAdjacentHTML('beforeend', t)
    this.music.push(music)
    console.log('this.albumsMusic', this.albumsMusic)
}

// Issued 模板
player.prototype.issuedtemplate = function(music) {
        var picture = music.picture
        var title = music.title
        var artist = music.artist
        var t = `
        <div class="table-cell music">
            <img src=http://img.sj33.cn/uploads/allimg/201508/7-150P4221929.jpg>
            <div class='music-info'>
                <span class='title'>${title}</span>
                <span class='artist'>${artist}</span>
            </div>
        </div>
        `
    this.issuedhtml.push(t)
    this.music.push(music)
    console.log('this.issuedMusic', this.issuedMusic)
    if(this.issuedhtml.length == 3) {
        var issuedhtml = this.issuedhtml.join('')
        var tem = `
            <div class='table-row'>
            ${issuedhtml}
            </div>
        `
        console.log('tem', tem)
        var issuedDiv = document.querySelector('.issued')
        issuedDiv.insertAdjacentHTML('beforeend', tem)
        this.issuedhtml = []
    }
}

// 音乐信息和音源的切换
player.prototype.musicLayout = function(area, music) {
    console.log(typeof area)
    if (area == 'player') {
        this.audio.src = music.src
        this.cover.setAttribute('src', 'http://img.sj33.cn/uploads/allimg/201508/7-150P4221947.jpg')
        this.singer.innerHTML = music.artist
        this.song.innerHTML = music.title
        this.audio.play()
        this.inspectButton()
    } else if (area == 'Albums') {
        this.albumstemplate(music)
    } else if (area == 'issued') {
        console.log('issued启动', music)
        this.issuedtemplate(music)
    }
}

// 给音乐信息建立对象
player.prototype.musicObject = function(response) {
    var music = {
        src: response.song[0].url,
        title: response.song[0].title,
        picture: response.song[0].picture,
        artist: response.song[0].artist
    }
    return music
}

// 音乐 api 请求
player.prototype.audioRequest = function(area) {
    var self = this
    var request = {
        method: 'GET',
        url: 'http://api.jirengu.com/fm/getSong.php',
        callback: function(response) {
            // 不考虑错误情况(断网/服务器返回错误等等)
            var response = JSON.parse(response)
            console.log('响应', response)
            // 把音乐信息建立对象
            var music = self.musicObject(response)
            // 布局音乐信息
            self.musicLayout(area, music)
        }
    }
    ajax(request)
}

// albums 音乐 api 请求
player.prototype.albumsRequest = function() {
    for(let i = 0; i < 5; i++) {
        this.audioRequest('Albums')
    }
}

// issued 音乐 api 请求
player.prototype.issuedRequest = function() {
    for(let j = 0; j < 3; j++) {
        for(let i = 0; i < 3; i++) {
            this.audioRequest('issued')
        }
    }
}

// 播放音乐 api 请求
player.prototype.playerRequest = function() {
    this.audioRequest('player')
}

// 切歌时寻找对象的下标时
player.prototype.index = function(o) {
    var songs = this.audio
    var numberOfSongs = parseInt(songs.dataset.songs)
    var activeIndex = parseInt(songs.dataset.active)
    var nextIndex = (activeIndex + numberOfSongs + o) % numberOfSongs
    songs.dataset.active = nextIndex
    console.log(songs.dataset.active)
    return nextIndex
}

// 点播歌曲
player.prototype.mod = function(target) {
    console.log('mod', target)
    if (target.classList.contains('music')) {
        console.log('if')
        var title = target.querySelector('.title').innerText
        console.log('iftitle', target.querySelector('.title'), title)
    } else {
        console.log('else')
        var title = target.parentElement.querySelector('.title').innerText
        console.log('elsetitle', target.parentElement.querySelector('.title'), title)
    }
    for(let i = 0; i < this.music.length; i++) {
        console.log('forxp,', title)
        if(title == this.music[i].title) {
            var music = this.music[i]
            this.musicLayout('player', music)
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
            console.log('this', self.audio)
            self.audio.play()
        } else {
            target.classList.remove('icon-zanting')
            target.classList.add('icon-bofang')
            self.audio.pause()
        }
}

// 上一首
player.prototype.previous = function(target) {
    console.log('previous-song')
    var playbutton = document.querySelector('.play')
    // 获取歌曲的暂停键
    this.playerRequest()
}

// 下一首
player.prototype.next = function(target) {
    console.log('next-song')
    var playbutton = document.querySelector('.play')
    // 获取歌曲的暂停键
    this.playerRequest()
}

// 判断按钮是播放，上一首，还是下一首
player.prototype.button = function(target) {
    if(target.classList.contains('play')){
        console.log('click 被判断为 play')
        this.playIt(target)
    } else if(target.classList.contains('previous-song')){
        console.log('click 被判断为 previous')
        this.previous(target)
    } else if(target.classList.contains('next-song')){
        console.log('click 被判断为 next')
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
        console.log(self.audio.volume)
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
                        console.log(self.audio.volume)
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
        console.log('自动切歌')
        this.playerRequest()
    }
}

// 进度条拖动
player.prototype.dragBar = function() {
    var self = this
    var contWidth = parseInt(this.cont.style.width)
    var processorWidth = parseInt(this.processor.style.width)
    this.cont.addEventListener('mousedown', function(event){
        console.log('click')
        self.processor.style.width =  event.offsetX + "px"
        self.processor.setAttribute('data-active', 'unfinished')
        document.addEventListener('mousemove', function(event){
            // if 语句为了避免 chrome的 bug： mouseup 后再次运行 mousemove
            if(self.processor.getAttribute('data-active') == 'finish'){
                return false
            } else if(self.processor.getAttribute('data-active') == 'unfinished'){
                   self.processor.style.width = event.offsetX + "px"
                // 防止拖拽进度条时溢出, 设置最大值为进度条的极限
                console.log('contWidth', contWidth)
                if(processorWidth > contWidth) {
                        console.log('触发超越')
                        self.processor.style.width = contWidth + "px"
                }
            }
        })
        // 拖动进度条后鼠标抬起， 跳转到当前的进度
        document.addEventListener('mouseup', function(event){
            if(self.processor.getAttribute('data-active') == 'unfinished'){
                self.processor.setAttribute('data-active', 'finish')
                console.log(self.timeshow.innerHTML)
                var num = self.timeshow.innerHTML.split(':')
                console.log('num', num)
                var seconds = parseInt(num[0]) * 60 + parseInt(num[1])
                console.log('seconds', seconds)
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
    // 进度条悬停提示
    this.timeShow()
    // 进度条拖动
    this.dragBar()
    // 当三个播放控制按钮其中有被按下,传 target 去判断
    this.buttons.addEventListener('click', function(){
        console.log('click 被点击')
        self.button(event.target)
    })
    // 当 albums 区域有事件,传 target 去判断
    this.albums.addEventListener('click', function(){
        if(!event.target.classList.contains('Albums')) {
            console.log('albums click 被点击', event.target)
            self.mod(event.target)
        }
    })
    // 当 issued 区域有事件,传 target 去判断
    this.issued.addEventListener('click', function(){
        console.log('issued click 被点击', event.target)
        self.mod(event.target)
    })
    // 音量条
    this.volume.addEventListener('mouseover', function(){
        console.log('音量条等待触发', self, self.volume)
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
    // 打开界面初请求
    this.playerRequest()
    this.albumsRequest()
    this.issuedRequest()
}


var _main = function() {
     var p = new player()
     p.initPlayer()
}

_main()
