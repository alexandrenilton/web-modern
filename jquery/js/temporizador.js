//proteger a variavel dolar:
(function ($){
    $.fn.temporizador = function (opcoes) {
        //caso o usuário nao tenha passado a mensagem e horario..
        const opcoesFinais = $.extend( {
            mensagem: 'Em breve!',
            horario: '23:59:59'
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        $(this).addClass('temporizador')
        $(this).append(horaDezena, horaUnidade, separadorHora, 
                    minutoDezena, minutoUnidade, separadorMinuto, 
                    segundoDezena, segundoUnidade)
        
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/) // padrao NN:NN:NN
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        console.log(horarioAlvo) //(4) ["18:00:00", "18", "00", "00", index: 0, input: "18:00:00", groups: undefined]
        
        let temporizador = setInterval(() => {
            const agora = new Date();
            const alvo = new Date();

            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            const diferencaEmMili = alvo.getTime() - agora.getTime()

            if ( diferencaEmMili >= 0 ){
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())
                console.log(diferenca)
                horaDezena.html(diferenca[1][0])
                horaUnidade.html(diferenca[1][1]) 
                minutoDezena.html(diferenca[2][0])
                minutoUnidade.html(diferenca[2][1])
                segundoDezena.html(diferenca[3][0])
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador)
            }

        }, 1000)

        return this
    }
})(jQuery)

//obs 
// new Date(1000 * 60 * 60 * 5 + 6000).toISOString() // 5horas