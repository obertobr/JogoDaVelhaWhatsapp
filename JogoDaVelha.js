const event = new InputEvent('input', { bubbles: true });

XO = true;
tutorial = true;

function limpar() {
    JogoDaVelha = [[" "," "," "],[" "," "," "],[" "," "," "]];
}
limpar();

function desenhar() {
    escrito = ""
    for(a = 0;a<=2;a++) {
        for(ap = 0;ap<=2;ap++) {
            for(c = 0;c<=2;c++) {
                for(cp = 0;cp<=2;cp++) {
                    if (JogoDaVelha[a][c] == "X"){
                        if(ap == 0 && cp == 0 || ap == 0 && cp == 2) {escrito = escrito + "🔳"
                        } else if (ap == 1 && cp == 1) {escrito = escrito + "🔳"
                          } else if (ap == 2 && cp == 0 || ap == 2 && cp == 2) {escrito = escrito + "🔳"
                            } else {escrito = escrito + "⬜"};
                    } else if (JogoDaVelha[a][c] == "O"){
                          if(ap == 0 && cp == 0 || ap == 0 && cp == 1 || ap == 0 && cp == 2){escrito = escrito + "🔳";
                          } else if (ap == 1 && cp == 0 || ap == 1 && cp == 2){escrito = escrito + "🔳";
                            } else if (ap == 2 && cp == 0 || ap == 2 && cp == 1 || ap == 2 && cp == 2){escrito = escrito + "🔳";
                              } else {escrito = escrito + "⬜"};
                    } else {escrito = escrito + "⬜"};
                }
                if (c < 2) {escrito = escrito + "⬛"}
            }
            escrito = escrito + "\n"
        }
        if (a < 2) {escrito = escrito + "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ \n"};
    }
    escrever(escrito);
}

function escrever(texto) {
    document.getElementsByClassName("_1awRl copyable-text selectable-text")[1].innerText = texto
    document.querySelector('div._1awRl[data-tab="6"]').dispatchEvent(event);
    document.getElementsByClassName("_2Ujuu")[0].click();
}

function jogar(moviment) {
    if (moviment[0] == "!") {
        if (moviment[1] == 'A' || moviment[1] == 'a') {
            x = 0;
            console.log("primeiro digito é A");
        } else if (moviment[1] == 'B' || moviment[1] == 'b') {
            x = 1;
            console.log("primeiro digito é B");
        } else if (moviment[1] == 'C' || moviment[1] == 'c') {
            x = 2;
            console.log("primeiro digito é C");
        } else if (moviment[1] == 'R') {
            limpar();
            XO = true;
            desenhar();
            return;
        } else if (moviment == "!jogar") {
            if (tutorial) {escrever("Como Jogar:\n    1        2        3\nA ⬜⬛⬜⬛⬜\n   ⬛⬛⬛⬛⬛\nB ⬜⬛⬜⬛⬜\n   ⬛⬛⬛⬛⬛\nC ⬜⬛⬜⬛⬜\n\nColoque a linha e a coluna onde vc quer marcar\nExemplo !A1"); tutorial = false;};
            desenhar();
            return;
        } else {escrever(moviment[1] + " não é uma localização valida");}
        if (JogoDaVelha[x][parseInt(moviment[2])-1] == " ") {
            if (XO) {
                JogoDaVelha[x][parseInt(moviment[2])-1] = "X";
                XO = false
            } else {
                JogoDaVelha[x][parseInt(moviment[2])-1] = "O";
                XO = true
            }
        } else { escrever("ja usaram essa localização, escolha outra"); return;}
        desenhar();
        testar();
    }
}

function testar() {
    for (l = 0;l <= 1;l++) {
        if (l == 0) {lado = "X"} else {lado = "O"};
        for (i = 0; i <= 2; i++) {
            if (JogoDaVelha[0][i] == lado && JogoDaVelha[1][i] == lado && JogoDaVelha[2][i] == lado){escrever("*PARABÉNS!!!, O \"" + lado + "\" GANHOU!!!*"); limpar();}
            if (JogoDaVelha[i][0] == lado && JogoDaVelha[i][1] == lado && JogoDaVelha[i][2] == lado){escrever("*PARABÉNS!!!, O \"" + lado + "\" GANHOU!!!*"); limpar();}
        }
        if (JogoDaVelha[0][0] == lado && JogoDaVelha[1][1] == lado && JogoDaVelha[2][2] == lado){escrever("*PARABÉNS!!!, O \"" + lado + "\" GANHOU!!!*"); limpar();}
        if (JogoDaVelha[2][0] == lado && JogoDaVelha[1][1] == lado && JogoDaVelha[0][2] == lado){escrever("*PARABÉNS!!!, O \"" + lado + "\" GANHOU!!!*"); limpar();}
    }
    if (JogoDaVelha[0][0]!=" "&&JogoDaVelha[0][1]!=" "&&JogoDaVelha[0][2]!=" "&&JogoDaVelha[1][0]!=" "&&JogoDaVelha[1][1]!=" "&&JogoDaVelha[1][2]!=" "&&JogoDaVelha[2][0]!=" "&&JogoDaVelha[2][1]!=" "&&JogoDaVelha[2][2]!=" "){limpar();escrever("* O JOGO EMPATOU* "); limpar();}
}


dataid = document.getElementsByClassName("tSmQ1")[0].getElementsByClassName("_1RAno")[document.getElementsByClassName("tSmQ1")[0].getElementsByClassName("_1RAno").length - 1].getAttribute("data-id");

setInterval(function(){ 
    if (document.getElementsByClassName("tSmQ1")[0].getElementsByClassName("_1RAno")[document.getElementsByClassName("tSmQ1")[0].getElementsByClassName("_1RAno").length - 1].getAttribute("data-id") != dataid) {
        mensagem = document.getElementsByClassName("tSmQ1")[0].getElementsByClassName("_1RAno")[document.getElementsByClassName("tSmQ1")[0].getElementsByClassName("_1RAno").length - 1].getElementsByClassName("_1VzZY")[0].querySelector("span").innerText
        jogar(mensagem);

    setTimeout(function(){dataid = document.getElementsByClassName("tSmQ1")[0].getElementsByClassName("_1RAno")[document.getElementsByClassName("tSmQ1")[0].getElementsByClassName("_1RAno").length - 1].getAttribute("data-id");}, 100);
    }
 }, 1000);