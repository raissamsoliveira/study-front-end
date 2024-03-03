let listadeCarros = [
    {
        "nome": "BMW iX M60",
        "img": "img/bmw-ix-m60.png",
        "descricao": "O BMW iX M 60 é um esportivo totalmente elétrico, com zero emissões de CO2, que desperta emoção com a tração totalmente elétrica M Power, dinâmica de dirigir precisa e componentes inovadores"
    },
    {
        "nome": "BMW i7",
        "img": "img/bmw-i7.png",
        "descricao": "O BMW i7 combina o desempenho elétrico e o entretenimento multissensorial para oferecer uma experiência de dirigir inesquecível, quase silencioso e isento de emissões locais, graças a inovador conceito de propulsão eDrive."
    },
    {
        "nome": "BMW i4",
        "img": "img/bmw-i4.png",
        "descricao": "O BMW i4 é o Primeiro Gran Coupé totalmente elétrico, e oferece uma dinâmica excepcional, com alto nível de conforto, além das qualidades ideais para torná-lo o seu carro de uso diário. O modelo de cinco portas vem equipado com a tecnologia BMW eDrive de quinta geração, com desempenho esportivo, que chega a 544 cv (BMW i4 M50)."
    }, 
    {
        "nome": "BMW ix3",
        "img": "img/bmw-ix3.png",
        "descricao": "O BMW iX3 é um carro totalmente elétrico e parece mais esportivo do que nunca. Com uma autonomia de até 381km (PBEV - Inmetro)  e consumo de eletricidade de 18,5 kWh/100 km, o novo BMW iX3 é ideal para percorrer todas as rotas."
    },
    {
        "nome": "BMW ix1",
        "img": "img/bmw-ix1.png",
        "descricao": "O BMW iX1 é um carro totalmente elétrico que irradia uma determinação eletrizante e, com a sua funcionalidade e versatilidade, oferece inspiração para seguir novos caminhos, mesmo na utilização diária."
    }, 
    {
        "nome": "BMW x6",
        "img": "img/bmw-x6.png",
        "descricao": "O BMW x6 é um carro para você desfrutar da máxima dinâmica ao dirigir esportivamente, bem como do seu design esportivo, com luxuosos equipamentos, onde ão empregadas as mais modernas tecnologias, bem como os materiais da mais alta qualidade."
    }
]

listadeCarros.map((carro, posicao)=> {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
            <div class="col-md-4">
                <div class="card m-3">
                    <img src="${carro.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${carro.nome}</h5>
                      <a href="#" class="btn btn-secondary" onClick ="zoomImg('${posicao}')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                        </svg> Saiba mais </a>
                    </div>
                </div>
            </div>
    `
})

// Adicionando o Modal

function zoomImg (posicao){
    let carroSelecionado = listadeCarros [posicao];
    document.getElementById ("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById ("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById ("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal ('#zoomImg').show();

}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme","light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme","dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}
