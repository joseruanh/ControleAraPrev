function acessar()
{
    let a = window.document.getElementById("res")
    let senha = window.document.getElementById("senha")
    let b = window.document.getElementById("acessou")
    let content = window.document.getElementById("content")
    if(senha.value.length == 0){
        window.alert("favor inserir a senha de acesso")
    }else if(senha.value == "150876"){
        b.innerHTML = ` <h1> ㅤ </h1> `

        content.innerHTML = ` 
        <img src="images/araprev.jpg" alt="Araçoiaba Prev" class="fotoaraprev">
        
        <div class="botoes">
        <button class="opcoes" onclick="parcelamentos()"> Parcelamentos </button>
        <button class="opcoes" onclick="guias()"> Guias Abertas </button>
        <button class="opcoes" onclick="relatorio()"> Relatório de Guias </button>
        </div> `

    } else{
        a.innerHTML = `senha incorreta`
    }
    senha.value = ""
}

function limpar()
{
    let a = window.document.getElementById("res")
    a.innerHTML = ` ㅤ `
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#acessar");
      
      btn.click();
    
    }
  });

  function parcelamentos()
  {
    let a = window.document.getElementById("content")
    a.innerHTML = ` <h1> ㅤ </h1> `

    content.innerHTML = ` 
    <img src="images/araprev.jpg" alt="Araçoiaba Prev" class="fotoaraprev">
    
    <div class="botoes">
    <button class="opcoes" onclick="parcelamentos()"> Parcelamentos </button>
    <button class="opcoes" onclick="guias()"> Guias Abertas </button>
    <button class="opcoes" onclick="relatorio()"> Relatório de Guias </button>
    </div> 
    
    <div class="parcelamentosdiv">

    <div class="tabela">

    <p class="tituloguia">Controle de Pagamento de Repasses</p>

    <br>
    

    <table>
    
    <tr>
        <td class="head"> Nº </td> <td class="head">MÊS/ANO</td> <td class="head"> VENCIMENTO </td> <td class="head"> VALOR </td> <td class="head"> SITUAÇÃO </td> <td class="head"> REPASSE </td>
    </tr>

    <tr>
        <td> 44/60 </td> <td> ago/23 </td> <td> a definir </td> <td> a definir </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td>
    </tr>

    <tr>
        <td> 43/60 </td> <td> jul/23 </td> <td> a definir </td> <td> a definir </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td>
    </tr>

    <tr>
        <td> 42/60 </td> <td> jun/23 </td> <td> 17/07/23 </td> <td> R$ 74 130,69 </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td>
    </tr>

    <tr>
        <td> 41/60 </td> <td> mai/23 </td> <td> 19/06/23 </td> <td> R$ 73 824,36 </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td>
    </tr>

    <tr>
        <td> 40/60 </td> <td> abr/23 </td> <td> 17/05/23 </td> <td> R$ 72 867,07 </td> <td class="win"> PAGO </td> <td> 10/05/23 </td> 
    </tr>

    <tr>
        <td> 39/60 </td> <td> mar/23 </td> <td> 17/04/23 </td> <td> R$ 72 100,42 </td> <td class="win"> PAGO </td> <td> 10/04/23 </td> 
    </tr>

    <tr>
        <td> 38/60 </td> <td> fev/23 </td> <td> 17/03/23 </td> <td> R$ 71 251,19 </td> <td class="win"> PAGO </td> <td> 10/03/23 </td> 
    </tr>

    <tr>
        <td> 37/60 </td> <td> jan/23 </td> <td> 17/02/23 </td> <td> R$ 70 624,66 </td> <td class="win"> PAGO </td> <td> 10/02/23 </td> 
    </tr>

    <tr>
        <td> 36/60 </td> <td> dez/22 </td> <td> 17/01/23 </td> <td> R$ 70 326,67 </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td>
    </tr>

    <tr>
        <td> 35/60 </td> <td> nov/22 </td> <td> 19/12/22 </td> <td> R$ 69 288,83 </td> <td class="win"> PAGO </td> <td> 09/12/22 </td> 
    </tr>

    <tr>
        <td> 34/60 </td> <td> out/22 </td> <td> 17/11/22 </td> <td> R$ 68 670,99 </td> <td class="win"> PAGO </td> <td> 10/11/22 </td> 
    </tr>

    <tr>
        <td> 33/60 </td> <td> set/22 </td> <td> 17/10/22 </td> <td> R$ 68 597,58 </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td>
    </tr>

    <tr>
        <td> 32/60 </td> <td> ago/22 </td> <td> 19/09/22 </td> <td> R$ 68 544,63 </td> <td class="loss"> ABERTO </td> <td class="loss"> falta </td>
    </tr>

    <tr>
        <td> 31/60 </td> <td> jul/22 </td> <td> 17/08/22 </td> <td> R$ 68 663,35 </td> <td class="win"> PAGO </td> <td> 10/08/22 </td> 
    </tr>

</table>

    
    </div>
    

    
    
    </div>

    `
  }

  function guias()
  {
    let a = window.document.getElementById("content")
    a.innerHTML = ` <h1> ㅤ </h1> `

    content.innerHTML = ` 
    <img src="images/araprev.jpg" alt="Araçoiaba Prev" class="fotoaraprev">
    
    <div class="botoes">
    <button class="opcoes" onclick="parcelamentos()"> Parcelamentos </button>
    <button class="opcoes"> Guias Abertas </button>
    <button class="opcoes" onclick="relatorio()"> Relatório de Guias </button>
    </div> 
    
    <div class="parcelamentosdiv">

    <div class="tabela">

    <p class="tituloguia"> Controle de Pagamento de Guias </p> <br>
    

    <table>
    <tr>
        <td class="head"> Nº DA GUIA </td> <td class="head"> SETOR </td> <td class="head"> Nº SERV </td> <td class="head"> TOTAL </td> <td class="head"> VENCIMENTO </td>
    </tr> 
    <tr>
        <td> 70511202201D - 70511202202D </td> <td> PACS </td> <td> 27 </td> <td> R$ 22 383,27 </td> <td class="loss"> 20/12/2022 </td>
    </tr>
    <tr>
        <td> 5279202201 - 5279202202 </td> <td> SAMU </td> <td> 1 </td> <td> R$ 362,69 </td> <td class="loss"> 10/10/2022 </td>
    </tr>
    <tr>
        <td> 5319202201 - 5319202202 </td> <td> USF IV </td> <td> 1 </td> <td> R$ 362,69 </td> <td class="loss"> 10/10/2022 </td>
    </tr>
    <tr>
        <td> 4698202201 - 4698202202 </td> <td> USF IV </td> <td> 1 </td> <td> R$ 362,69 </td> <td class="loss"> 10/09/2022 </td>
    </tr>
    <tr>
        <td> 4658202201 - 4658202202 </td> <td> SAMU </td> <td> 1 </td> <td> R$ 362,69 </td> <td class="loss"> 10/09/2022 </td>
    </tr>
    <tr>
        <td> 3937202201 - 3937202202 </td> <td> USF II </td> <td> 1 </td> <td> R$ 362,69 </td> <td class="loss"> 10/08/2022 </td>
    </tr>

    
</table>

    
    </div>
    

    
    
    </div>

    `
  }

  function relatorio()
  {
    let a = window.document.getElementById("content")
    a.innerHTML = ` <h1> ㅤ </h1> `

    content.innerHTML = ` 
    <img src="images/araprev.jpg" alt="Araçoiaba Prev" class="fotoaraprev">
    
    <div class="botoes">
    <button class="opcoes" onclick="parcelamentos()"> Parcelamentos </button>
    <button class="opcoes" onclick="guias()"> Guias Abertas </button>
    <button class="opcoes" onclick="relatorio()"> Relatório de Guias </button>
    </div> 
    
    <div class="parcelamentosdiv">

    <div class="tabela">

    <p class="tituloguia">Relatório Mensal de Guias</p> <br>
    

    <table>
        <tr>
            <td class="head">Mês/Ano</td> <td class="head"> Secretaria </td> <td class="head">Arquivo</td>
        </tr>

        <tr>
            <td>Julho/2023</td> <td>Prefeitura</td> <td> <a href="https://drive.google.com/file/d/1QcMMhWpTug9gR0SFkb3H7ygO-Kp9QLrs/view?usp=sharing" target="_blank">Visualizar</a></td>
        </tr>

        <tr>
            <td>Julho/2023</td> <td>Educação</td> <td> <a href="https://drive.google.com/file/d/1E4ddHUZ2aqgolRTKCBCNmNTZ5JYnvici/view?usp=sharing" target="_blank">Visualizar</a></td>
        </tr>

        <tr>
            <td>Julho/2023</td> <td>Assistência Social</td> <td> <a href="https://drive.google.com/file/d/1m2_W6vXJNotRNqFEgMvG1KSow6TTlZ3U/view?usp=sharing" target="_blank">Visualizar</a></td>
        </tr>

        <tr>
            <td>Julho/2023</td> <td>Saúde</td> <td> <a href="https://drive.google.com/file/d/1aYCYCtgezgeyCZooJCGuHTbjpN6U1RlQ/view?usp=sharing" target="_blank">Visualizar</a></td>
        </tr>

        <tr>
            <td>
            </td>
        </tr>

        <tr>
            <td>
            </td>
        </tr>

        <tr>
            <td>Junho/2023</td> <td>Prefeitura</td> <td> <a href="https://drive.google.com/file/d/12KJS_5yjtTmBIOkmc9XOpGxECAA2nWtJ/view?usp=sharing" target="_blank">Visualizar</a></td>
        </tr>

        <tr>
            <td>Junho/2023</td> <td>Educação</td> <td> <a href="https://drive.google.com/file/d/12I2sZldWdrHVz5IjS1w6eexG4BH-itc2/view?usp=sharing" target="_blank">Visualizar</a></td>
        </tr>

        <tr>
            <td>Junho/2023</td> <td>Assistência Social</td> <td> <a href="https://drive.google.com/file/d/12OfxKlLgulyCM2-WcpjtmXBdNPzOBB_H/view?usp=sharing" target="_blank">Visualizar</a></td>
        </tr>

        <tr>
            <td>Junho/2023</td> <td>Saúde</td> <td> <a href="https://drive.google.com/file/d/12OIPsq_eH1ceXhkKvDpKZBQaaJsAtj8V/view?usp=sharing" target="_blank">Visualizar</a></td>
        </tr>

    </table>

    
    </div>
    

    
    
    </div>

    `
  }