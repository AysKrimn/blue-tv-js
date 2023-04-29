const data =
[
    [
        {
            name: "blue-tv-2",
            url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/6295d42d866ac31658881732'
        },

        {
            name: "cn",
            url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdfa04866ac313f01126f7'
        },

        {
            name: "Boomerang",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdf9e0866ac31b149aa2e2"
        },

        {
            name: "E1",
            url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fdde1d866ac31b782685d0'
        }
    ],
    
    [

        { 
            name: "Beyaz",
            url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/5c63c27a866ac30cbc2ad836'
        },

        {
            name: "trt-i",
            url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fddc8b866ac30c40f2aa2a'
        },
        
        {
            name: "trt-o",
            url: "https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fddcba866ac31b149aa277"
        },
        
        {
            name: "trt-l",
            url: 'https://blutv-images.mncdn.com/q/t/i/bluv2/75/70x70/63fddca3866ac31b782685cc'
        }
    ]

]


console.log(data[0][0])
const live_channel_container = document.getElementById('live_channels_container') // flex-container
// show more'a tıklanam yetkisi ver
const dahaFazlaGoster = document.getElementById('show_more')

let asama = 0;
dahaFazlaGoster.onclick = function() {

    if(asama >= data.length) return;

    data[asama].forEach(function(veri) {

        // herbir veri icin flex-item divi ve onun icinede img oluştur
        const div = document.createElement('div') // boş bir div
        div.classList.add('flex-item')
        // img oluştur
        const img = document.createElement('img')
        img.src = veri.url
        img.alt = veri.name
        // img'i dive ata
        div.appendChild(img)
        // flex-containera divi at
        live_channel_container.appendChild(div)

    })

    // asama 1 arttir
    asama += 1;

}