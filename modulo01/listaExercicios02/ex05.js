//  5. Debounce

//    Crie function debounce(fn, delay) que receba uma função fn e um delay
//    em ms, retornando uma nova função que só executa fn se não for
//    chamada novamente dentro do intervalo.

<input id="busca" placeholder="Digite Algo..."></input>

<script>
    function debouce(fn, delay) {
        let timer = null

        return function(...args) {
            clearTimeout(timer)

            timer = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }

    function pesquisar(texto) {
        console.log("Buscando por: ", texto)
    }

    let pesquisaDebouced = debouce(pesquisar, 3000)

    document.getElementById('busca').addEventListener('input', event => {
        pesquisaDebouced(event.target.value)
    })
</script>