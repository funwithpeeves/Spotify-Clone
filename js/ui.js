import { elements } from "./helpers.js";
// Ekrana gönderilen müzikleri aktarır.
export const renderSearchMusic = (songs) => {
    elements.list.innerHTML = "";
    songs.forEach((song) => {
        console.log(song);
        const div = document.createElement("div");
        //* Kart datasına kart elemanına bazı verileri ekleme
        div.dataset.url = song.track.hub.actions.pop().uri;
        div.dataset.title = song.title
        div.dataset.img = song.track.images.coverart;
        div.className = "card";
        console.log(div);

        div.innerHTML = `
      <figure>
                        <img src="${song.track.images.coverart}">
                     <div class="play">
                        <i class="bi bi-play-fill" id="play-btn"></i>
                     </div>
                    </figure>
                    <h4>${song.track.subtitle}</h4>
                    <h4>${song.track.title.slice(0, 15) + "..."}</h4>
      `;
      elements.list.appendChild(div);
    });

};
// Başlığı aldığı parametreye göre günceller.
export const updateTitle = (message) => {
    elements.title.innerText = message;
}
// Popüler müzikleri ekrana yazdırır.
export const renderSong = (songs) => {
elements.list.innerHTML = "";
songs.forEach((song) => {
    const div = document.createElement("div");
    console.log(song);
    div.dataset.url = song.preview_url;
    div.dataset.title = song.name;
    div.dataset.img = song.album.images[1].url;
    div.className = "card";
    div.innerHTML = `
    
    <figure>
            <img src="${song.album.images[1].url}" alt="">
                <div class="play">
            <i class="bi bi-play-fill" id="play-btn"></i>
                    </div>
                    </figure>
                    <h4>${song.album.artists[0].name}</h4>
                    <h4>${song.name}</h4>
    
    `;
    elements.list.appendChild(div);
});
};

//* Playinginfo kısmına resmi ve titlea aktardık.
export const renderPlayingInfo = (song) => {
    console.log(song);
    console.log(elements.playingInfo);
    elements.playingInfo.innerHTML = ` 
    <img
      src="${song.img}"
      class="animate"
      id="info-img"
      alt=""
    />
    <div>
      <p>Şu an oynatılıyor...</p>
      <h3>${song.title}</h3>
    </div>`;
  };