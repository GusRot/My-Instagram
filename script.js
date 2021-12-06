function adicionarComentario(button) {
    const inputButton = button.parentNode.firstElementChild;
    const comment = inputButton.value;
    const supportSection = button.parentNode.parentNode;
    supportSection.classList.add("active");

    const commentSection = document.querySelector(".active .comment-section");

    commentSection.innerHTML += `<div class="padding">
            <p><strong>${username}</strong> ${comment}</p>
            <ion-icon class="logo2" name="heart-outline"></ion-icon>
            <p class="curtir">❤️</p>
        </div>
    `;
    inputButton.value = "";
    supportSection.classList.remove("active");
}

function curtirComentario() {}

const username = "Gustavo";
const time = getRandomInt(1, 4);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
const time2 = time + getRandomInt(1, 4);
const time3 = time2 + getRandomInt(1, 4);
const stories = [
    {
        img: "https://bn02pap001files.storage.live.com/y4miyXMbccm13byjHAdVXtLSYeU00b6pE_jzh-rHg5EAcJ75VDb1-QUxMAfQQ-o14UvzIe-XAqhctNQI8DjNh8yYHXVZV-N_UxDEefiQmruj9ILkKQsJ6RUNuK2WczqDskvK5nZOI-EyFduJKTbCJ17gvvFxOTNC-MbOjpzPPeB1uB4ZPLvXDoB0AWIuY-Micig?width=56&height=56&cropmode=none",
        name: "Meowed",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4m8yfvCUSj448lFZbcDcVQF0i4MqUMHhF-2qMGld1-KOmyLdgpB4mEScF6GOleodC7JIxLwv3rxeBov-jVm4f_QF85uQA70ARprNdTGQdYpyaGik_h5ZpbVFzamt8SCV4M30KRcXbcg1bin4GW5AfoS1-_aNlesy0ifWCM1kDClYk8I8VLNUnS-V7KitdlnSPf?width=32&height=32&cropmode=none",
        name: "CuteCat",
    },
    {
        img: "https://github.com/GusRot.png",
        name: "GustavoRotta",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4m7LA1wrJEOSMBd0dRIRG6u1SgeHWN2Q36wSDtWeQREnRcpR8TA1_aiBFk-jqBAvoRG31zjveZgyR8Xo3U4jXRAfVmP9Vc_0dEdtiCMIRVAyGZ0VDp8mvZ61c7PH_GnrYs9FPANKEt7jwLI___-jjLLNSI1-hGVCwmVJkMjHpA1JJZb10wTUfqXsVUQwdKS3To?width=56&height=56&cropmode=none",
        name: "LoveMemes",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mvOJlUwwJeW0yKpF45QR8nh7iqk-Wg1eO_yTrU2vconqxqvbz_KMBblM7R3WAqMU4VwOLa_x_8GrCpAuuxPF6JkJ5gXJDDt1RxURqccSHpjtOVinWJ4pKlYVjLJ_EFzqSP6XYVHXTNwByHSoWoQr9yto2fdM9H37m1gHCoF5dTBg8pqLkLfBUKyfuYzyvsuL4?width=32&height=32&cropmode=none",
        name: "SlayerFanclub",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mOXGmKOrKS0AAY1-bT4NlCQDMzBz27OKiP8vdKWWZ2mwr7pwY-wNQHOKjJvuxOevAL1KCz6V7jeC26xV8XzIbWFYOpD6OEe42jXgEtUYA9t5IappSWBu5ZTWNxhOst2BKZ6XkyArM6VE_kmrsOsQm-hWkFfkpqYeq5uOpRBLP26ZA1lxZximKCG2RQgiqWJr0?width=56&height=56&cropmode=none",
        name: "99gang",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4m9XUL4b6van_D90oHuDLlOX-_r9A_vTbLAX_yRKTBc_jZhfbvv93cgIOtQtuJmaLqeomFBwniS7bSgp2G9uCvlm32cI9TfCUFyQ4VHUCFw17EvGv1lUKgJ241iemyVGOxYdQMVh05Wi1waynchqsJOZjjQR3iYLmFF6Nu_Sk14Q4jkKtOGVl2SfKrBRdDnVKL?width=56&height=56&cropmode=none",
        name: "Cake2u",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4m2f9up5stHbNHY-Pz0Sxched7isKp5p5Ubeg5zcIlcYqBlN98q2Sy2Syarq-kAUG6pWWb7c2zv3uJE9wUEA2P5d9kJo1vnUCS7XmU2t3ywahlAs6lZ25y-lZYrP-DH0mtrvR9nvd63-4evFLr5vqS-MEeERndaXFeiwGhZlVqQy9IjkYfHgyLlyOTKt5RqGKS?width=56&height=56&cropmode=none",
        name: "ETET",
    },
];
console.log(time);
const posts = [
    {
        img: "https://bn02pap001files.storage.live.com/y4miyXMbccm13byjHAdVXtLSYeU00b6pE_jzh-rHg5EAcJ75VDb1-QUxMAfQQ-o14UvzIe-XAqhctNQI8DjNh8yYHXVZV-N_UxDEefiQmruj9ILkKQsJ6RUNuK2WczqDskvK5nZOI-EyFduJKTbCJ17gvvFxOTNC-MbOjpzPPeB1uB4ZPLvXDoB0AWIuY-Micig?width=56&height=56&cropmode=none",
        name: "Meowed",
        type: "photo",
        post: "https://bn02pap001files.storage.live.com/y4mf-z7_zE3jap0PDt_6x3NsfeeMEDXK8q6Ae-bf6csS-irRVqcZeisCRUJWdfF_OcUYdgqVsv-GqMUjF0skhhs2TLpERN67fObCbEhgG9kXMulOQjn6cBZ4o2Y1PWLj6YB35owAWk_WKX-FuzUJd7ukLSGtfaj3A8b29XLpWjG3EugfUO2mgRDWLZX-fBQ7wQw?width=3000&height=4000&cropmode=none",
        title: "",
        likedimg:
            "https://bn02pap001files.storage.live.com/y4m8yfvCUSj448lFZbcDcVQF0i4MqUMHhF-2qMGld1-KOmyLdgpB4mEScF6GOleodC7JIxLwv3rxeBov-jVm4f_QF85uQA70ARprNdTGQdYpyaGik_h5ZpbVFzamt8SCV4M30KRcXbcg1bin4GW5AfoS1-_aNlesy0ifWCM1kDClYk8I8VLNUnS-V7KitdlnSPf?width=32&height=32&cropmode=none",
        likedname: "Chloe Decker",
        qtd: `${(Math.random() * 1000).toFixed(0)}`,
        comments: {
            name: "Lucifer Morningstar",
            text: "Que fofinhooo",
            name2: "Amenadiel",
            text2: "❤️❤️",
            time: time,
            qtd: `${(Math.random() * 1000).toFixed(0)}`,
        },
    },
    {
        img: "https://github.com/GusRot.png",
        name: "Gustavo Rotta",
        type: "video",
        post: "https://www.youtube.com/embed/wpPafsSX5v8?autoplay=1&mute=1&controls=1&loop=1&playlist=wpPafsSX5v8",
        title: "hercules-video",
        likedimg:
            "https://bn02pap001files.storage.live.com/y4m7LA1wrJEOSMBd0dRIRG6u1SgeHWN2Q36wSDtWeQREnRcpR8TA1_aiBFk-jqBAvoRG31zjveZgyR8Xo3U4jXRAfVmP9Vc_0dEdtiCMIRVAyGZ0VDp8mvZ61c7PH_GnrYs9FPANKEt7jwLI___-jjLLNSI1-hGVCwmVJkMjHpA1JJZb10wTUfqXsVUQwdKS3To?width=56&height=56&cropmode=none",
        likedname: "José Pedro",
        qtd: `${(Math.random() * 1000).toFixed(0)}`,
        comments: {
            name: "Patricia Holanda",
            text: "😂😂😂😂",
            name2: "Raí Patricio",
            text2: "Genial!",
            time: time2,
            qtd: `${(Math.random() * 1000).toFixed(0)}`,
        },
    },
    {
        img: "https://github.com/GusRot.png",
        name: "Gustavo Rotta",
        type: "video",
        post: "https://www.youtube.com/embed/5Z5Oh3SbPWQ?autoplay=1&mute=1&controls=1&loop=1&playlist=5Z5Oh3SbPWQ",
        title: "avengers-video",
        likedimg:
            "https://bn02pap001files.storage.live.com/y4mviNm1cpPPQ0Gn2trTZzPb34d1oxoNw8tMBRen44Qs4dIG0C1rtDk6OQJFU62LuOyZlArpLOKVhUUbLOTtgmxGUAph7RZQBhK0U94J8gu7Gq9tzmUFDa4ToA4fb3o_OxFw7IWnFopwFbpniCt6vEAe5iqe4g61HdGDi1VPvHr85a8wOMHbu1KQ_yWpclqC7nV?width=56&height=56&cropmode=none",
        likedname: "José Paulo",
        qtd: `${(Math.random() * 1000).toFixed(0)}`,
        comments: {
            name: "Petterson Santos",
            text: "Muito Bom!!",
            name2: "Roberto Costa",
            text2: "😂😂😂😂",
            time: time3,
            qtd: `${(Math.random() * 1000).toFixed(0)}`,
        },
    },
];

const suggestion = [
    {
        img: "https://bn02pap001files.storage.live.com/y4mgXWWXm9voCyF6EkoRcd3MXDVBfX8J8j8TfObXJQQWvi8i8mEVmA9fjli1rzlWWXdWXPpNycyBtnDQND1XOkDWfH5adVCHRg746UAgltCAS4HIWatVEtX-EMO1GYLf_lxvdoOFUtP9yEVmIuQI8NympciuGL9mrCQapmlknSxGaMySkOXFbh7mDLG9ueCvV38?width=32&height=32&cropmode=none",
        name: "razoesparaacreditar",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4meZAlWu79ODKAjvMcFNDdE8eu6fl6WYYqnHHVbxBUHhjgBr4Ub1rfTjJ76WLzuD0wWSDT62vEgP9dXysxN6LxAnuqwhFm4kStiu54TmhQ5xC9xqye0XNDMj6PRhUd3CRnuloicc8V_NabYrbMEpJoSVwfBG1f8mlyYE9qpaStXqiQqBAaE2MssWnCoCyChRLZ?width=32&height=32&cropmode=none",
        name: "adorable_animals",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mJbXaxroAjjs85iNKtZbvxPmnhOCcG-dVxe4ELEQKM2lwr4vdmHAOrgaxAGgSR9jwLB4NCj4JK16-MWWT1FRmuBf5M2h2kJeZeltB5cictdVcaheLAlwiIhJ8x5YRKATU7Ru6mONIhl6sukKRbUgvp1XMgcBj9UVfLXTWn-frZ4Tx8h5Nr6aaMEfPqQ_5TiD0?width=32&height=32&cropmode=none",
        name: "chibirdart",
    },
    {
        img: "https://bn02pap001files.storage.live.com/y4mkljHQB0Pm5aqX3-Y2ga1IvLqazb_xuVKlZkGrEmifp-VywCPS4jrCa97l_CpVeI1rn_Di7OX0xEqEHZFq1suNZFod3beIzRUQqNNlu4Wxv9WEcBX8lkqPTlTjELQHvCjDD_iADV6BDvPyxK-RbORiAjC-IGFZH3tqafOb_ii3kj6U9bjoEMF6tAIfzAfA5OF?width=56&height=56&cropmode=none",
        name: "filomoderna",
    },
];

window.onload = function () {
    const story = document.getElementById("stories");
    for (let i = 0; i < stories.length; i++) {
        story.innerHTML += `
        <ul> 
            <li><img class="stories" src="${stories[i].img}"></li>
            <li>${stories[i].name}</li>
        </ul>`;
    }

    const feed = document.getElementById("feed");
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].type === "photo") {
            feed.innerHTML += `
            <div id="feed" class="caixa-feed">
                <div>
                    <div class="padding"> 
                        <img class="imagem-pessoa" src="${posts[i].img}">
                        <h2 class="nome-pessoa">${posts[i].name}</h2>
                    </div>
                    <p class="pontos">...</p>
                </div>
                
                <img class="img-principal" src="${posts[i].post}">

                <div>
                    <div>
                        <ion-icon class="logo" name="heart-outline"></ion-icon>
                        <ion-icon class="logo" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="logo" name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon style="padding-right: 1rem;" class="logo" name="bookmark-outline"></ion-icon>
                </div>

                <div style="justify-content: flex-start;" class="curtidas">
                    <img class="quem-curtiu" src="${posts[i].likedimg}">
                    <p class="curtido-por">Curtido por <strong>${posts[i].likedname}</strong> e <strong>outras ${posts[i].qtd} pessoas</strong></p>
                </div>
                
                <p class="mostrar-comentario">Ver todos os ${posts[i].comments.qtd} comentários</p>

                <section class="comment-section">
                    <div class="padding teste">
                        <p><strong>${posts[i].comments.name}</strong> ${posts[i].comments.text}</p>
                        <ion-icon class="logo2" name="heart-outline"></ion-icon>
                        <p class="curtir">❤️</p>
                    </div>
                    <div class="padding teste">
                        <p><strong>${posts[i].comments.name2}</strong> ${posts[i].comments.text2}</p>
                        <ion-icon class="logo2" name="heart-outline"></ion-icon>
                        <p class="curtir">❤️</p>
                    </div>
                </section>
                <p class="mostrar-horas">Há ${posts[i].comments.time} horas</p>

                <div class="comentar">
                    <input class="input-comentario" type="text" placeholder="Adicione um comentário">
                    <input class = "send-comentario" type = "submit" value="Publicar" onclick="adicionarComentario(this)"> 
                </div> 
            </div> 
            `;
        } else if (posts[i].type === "video") {
            feed.innerHTML += `
            <div id="feed" class="caixa-feed">
                <div>
                    <div class="padding"> 
                        <img class="imagem-pessoa" src="${posts[i].img}">
                        <h2 class="nome-pessoa">${posts[i].name}</h2>
                    </div>
                    <p class="pontos">...</p>
                </div>
                
                <div class="video-container" >
                        <iframe src="${posts[i].post}" title="${posts[i].title}"> </iframe>
                </div>   

                <div>
                    <div>
                        <ion-icon class="logo" name="heart-outline"></ion-icon>
                        <ion-icon class="logo" name="chatbubble-outline"></ion-icon>
                        <ion-icon class="logo" name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon style="padding-right: 1rem;" class="logo" name="bookmark-outline"></ion-icon>
                </div>

                <div style="justify-content: flex-start;" class="curtidas">
                    <img class="quem-curtiu" src="${posts[i].likedimg}">
                    <p class="curtido-por">Curtido por <strong>${posts[i].likedname}</strong> e <strong>outras ${posts[i].qtd} pessoas</strong></p>
                </div>
                
                <p class="mostrar-comentario">Ver todos os ${posts[i].comments.qtd} comentários</p>

                <section class="comment-section">
                    <div class="padding">
                        <p><strong>${posts[i].comments.name}</strong> ${posts[i].comments.text}</p>
                        <ion-icon class="logo2" name="heart-outline"></ion-icon>
                        <p class="curtir">❤️</p>
                    </div>
                    <div class="padding">
                        <p><strong>${posts[i].comments.name2}</strong> ${posts[i].comments.text2}</p>
                        <ion-icon class="logo2" name="heart-outline"></ion-icon>
                        <p class="curtir">❤️</p>
                    </div>
                </section>
                
                <p class="mostrar-horas">Há ${posts[i].comments.time} horas</p>

                <div class="comentar">
                    <input class="input-comentario" type="text" placeholder="Adicione um comentário">
                    <input class = "send-comentario" type = "submit" value="Publicar" onclick="adicionarComentario(this)"> 
                </div> 
            </div> 
            `;
        }
    }

    const suggest = document.getElementById("sugestoes");
    for (let i = 0; i < suggestion.length; i++) {
        suggest.innerHTML += `
        <div class="container-coluna">
            <div>
                <div>
                    <div class="flex-padding">
                        <img class="imagem-pessoa" src="${suggestion[i].img}" alt="">
                        <div>
                            <h2 class="nome-pessoa">${suggestion[i].name}</h2>
                            <p>Segue você</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="seguir">Seguir</p>
                </div>
            </div>
        </div>`;
    }
};
