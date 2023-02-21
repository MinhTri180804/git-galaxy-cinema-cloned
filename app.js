var moviePlayingApi = "http://localhost:3000/moviePlaying";
var movieComingApi = "http://localhost:3000/movieComming";
var blogCommentApi = "http://localhost:3000/blogComment";
var blogMovieApi = "http://localhost:3000/blogMovie";
var blogVoucherApi = "http://localhost:3000/blogVoucher";

// start
function start() {
    getMoviesPlaying(renderMoviesPlaying);
    getMoviesPlaying(renderTabPlayingMovie);
    getMovieComing(renderMovieComing);
    getMovieComing(renderTabComingMovie);
    selectTabMoviePlaying();
    selectTabMovieComing();
    getBlogComment(renderBlogComment);
    getBlogMovie(renderBlogMovie);
    getBlogVoucher(renderBlogVoucher);
}

start();

// function get movies playing

function getMoviesPlaying(callback) {
    fetch(moviePlayingApi)
        .then(function (response) {
            return response.json();
        })

        .then(callback);
}

function renderMoviesPlaying(data) {
    var blockListPlaying = document.querySelector('.movie_playing-list');
    var html = data.map(function (moviePlaying) {
        return `
        <li class="movie_playing-item">
            <div class="movie_playing-image">
                <img src="${moviePlaying.banner}" alt=""
                    class="movie_playing-img">
                <div class="blur-img flex-center">
                    <a href="/datve.html"><button class="btn_buy-ticket cursor-pointer">Đặt Vé</button></a>
                </div>
            </div>
            <h3 class="movie_playing-name text-uppercase">
                ${moviePlaying.name}
            </h3>
        </li>`
    })
    blockListPlaying.innerHTML = html.join('');
}

function renderTabPlayingMovie(data) {
    var blockTabPlayingMovie = document.querySelector('.info-tab-movie-playing');
    var html = data.map(function (movie) {
        return `
        <li class="item-info-movie l-4">
            <div class="item__info-movie-img mg-bt_10px">
                <img src="${movie.banner}" alt="" class="img__movie img__banner ">
                <div class="blur-img flex-center">
                    <a href="/datve.html"><button class="btn_buy-ticket cursor-pointer">Đặt Vé</button></a>
                 </div>
            </div>
                <span class="item-info-movie__name text-uppercase">${movie.name}</span>
        </li>
        `
    })
    blockTabPlayingMovie.innerHTML = html.join('');
}



// function get movie coming

function getMovieComing(callback) {
    fetch(movieComingApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderMovieComing(data) {
    var blockListComing = document.querySelector('.movie_comming-list');
    var html = data.map(function (movieComing) {
        return `
            <li class="movie_playing-item">
                <div class="movie_playing-image">
                    <img src="${movieComing.banner}" alt=""
                        class="movie_playing-img">
                    <div class="blur-img flex-center">
                        <a href="/datve.html"><button class="btn_buy-ticket cursor-pointer">Đặt Vé</button></a>
                    </div>
                </div>
                <h3 class="movie_playing-name text-uppercase">
                    ${movieComing.name}
                </h3>
            </li>
            `
    })
    blockListComing.innerHTML = html.join('');
}

function renderTabComingMovie(data) {
    var blockTabComingMovie = document.querySelector('.info-tab-movie-coming');
    var html = data.map(function (movie) {
        return `
        <li class="item-info-movie l-4">
            <div class="item__info-movie-img mg-bt_10px">
                <img src="${movie.banner}" alt="" class="img__movie img__banner ">
                <div class="blur-img flex-center">
                    <a href="/datve.html"><a href="/datve.html"><button class="btn_buy-ticket cursor-pointer">Đặt Vé</button></a></a>
                </div>
            </div>
            <span class="item-info-movie__name text-uppercase">${movie.name}</span>
        </li>
        `
    })
    blockTabComingMovie.innerHTML = html.join('');
}

// function get blog comment
function getBlogComment(callback) {
    fetch(blogCommentApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderBlogComment(data) {
    var listBlogComment = document.querySelector('.list__blog-comment');
    var html = data.map((blog) => {
        return `
            <li class="item__blog-comment flex-around">
                <div class="item__blog-comment-img cursor-pointer">
                    <img src="${blog.image}" alt="" class="img__banner">
                    <div class="blur-img"></div>
                </div>

                <div class="item__blog-comment-content">
                    <h4 class="blog__comment-content-title cursor-pointer">
                        ${blog.title}
                    </h4>

                    <div class="blog__comment-content-actical">
                        <span class="blog__comment-actical-view">
                            <i class="fa-solid fa-eye"></i> ${blog.view}
                        </span>

                        <span class="blog__comment-actical-star">
                            <i class="fa-solid fa-star color-yellow"></i> <b>${blog.rate}</b> /10 (${blog.totalRate})
                        </span>
                    </div>

                    <p class="blog__comment-content-decs">
                        ${blog.description};
                    </p>
                </div>
            </li>
            `
    })

    listBlogComment.innerHTML = html.join('');
}

// get blog movie 
function getBlogMovie(callback) {
    fetch(blogMovieApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderBlogMovie(data) {
    var listBlogMovie = document.querySelector('.list__blog-movie');
    var html = data.map(function (blog) {
        return `
                            <li class="item__blog-comment flex-around">
                                <div class="item__blog-comment-img cursor-pointer">
                                    <img src="${blog.image}" alt="" class="img__banner">
                                    <div class="blur-img"></div>
                                </div>

                                <div class="item__blog-comment-content">
                                    <h4 class="blog__comment-content-title cursor-pointer">
                                        ${blog.title}}
                                    </h4>

                                    <div class="blog__comment-content-actical">
                                        <span class="blog__comment-actical-view">
                                            <i class="fa-solid fa-eye"></i> ${blog.view}
                                        </span>

                                    </div>

                                    <p class="blog__comment-content-decs">
                                        ${blog.description}
                                    </p>
                                </div>
                            </li>
        `
    })
    listBlogMovie.innerHTML = html.join('');
}

// function get blog voucher

function getBlogVoucher(callback) {
    fetch(blogVoucherApi)
        .then(function (response) {
            return response.json();
        })

            .then(callback)
}

function renderBlogVoucher(data) {
    var blockVoucherList = document.querySelector('.blog__voucher-list .row');
    var html = data.map(function (blog) {
        return `
        <li class="blog__voucher-item col l-3 cursor-pointer">
            <div class="container__voucher-item">
                <img src="${blog.image}" alt="" class="blog__voucher-item-img img__banner">
                <div class="blur-img">
                    <div class="container__voucher-item-info">
                        <h1 class="info_voucher-title text-uppercase">
                            ${blog.title}
                        </h1>

                        <p class="info_voucher-decs">
                            ${blog.description}
                        </p>
                    </div>
                </div>
            </div>
        </li>
        `
    })
    blockVoucherList.innerHTML = html.join('');
}
// 

function selectTabMoviePlaying() {
    var blockTabMoviePlaying = document.querySelector('.info-tab-movie-playing')
    var blockTabMovieComing = document.querySelector('.info-tab-movie-coming')
    var moviePlaying = document.querySelector('.movie_playing');
    var movieComing = document.querySelector('.movie_coming');
    moviePlaying.addEventListener('click', function () {
        blockTabMoviePlaying.classList.add('active-container');
        blockTabMovieComing.classList.remove('active-container');
        moviePlaying.classList.add('active-select');
        movieComing.classList.remove('active-select');
    })
}

function selectTabMovieComing() {
    var blockTabMoviePlaying = document.querySelector('.info-tab-movie-playing');
    var blockTabMovieComing = document.querySelector('.info-tab-movie-coming');
    var moviePlaying = document.querySelector('.movie_playing');
    var movieComing = document.querySelector('.movie_coming');
    movieComing.addEventListener('click', function () {
        blockTabMovieComing.classList.add('active-container');
        blockTabMoviePlaying.classList.remove('active-container');
        moviePlaying.classList.remove('active-select');
        movieComing.classList.add('active-select');
    })
}

