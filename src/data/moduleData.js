export const moduleData = {
  id: 'm1',
  name: 'Busca e Otimização',
  description: 'Aprenda como um programador encontra informações de forma inteligente.',
  activities: [
    {
      id: 1,
      title: 'Nó 1: A Prateleira de Livros',
      scenario: 'Você está em uma biblioteca procurando um livro específico chamado "O Código Limpo".\n\nOs livros não estão em nenhuma ordem lógica.',
      problem: 'Qual é a forma mais garantida de encontrar o livro?',
      options: [
        { 
          id: 'A', 
          text: 'Olhar aleatoriamente até achar.', 
          isCorrect: false,
          feedbackIncorrect: 'Ao olhar aleatoriamente, você pode rever o mesmo livro várias vezes e nunca passar pelo livro que deseja.',
          visualConsequence: 'Você gasta 3 horas correndo pela biblioteca, revisando o livro "Duna" 5 vezes seguidas e vai embora sem encontrar "O Código Limpo".'
        },
        { 
          id: 'B', 
          text: 'Verificar livro por livro, do primeiro ao último, até encontrar.', 
          isCorrect: true 
        },
        { 
          id: 'C', 
          text: 'Olhar apenas a primeira e a última estante.', 
          isCorrect: false,
          feedbackIncorrect: 'Você ignorou 99% da biblioteca. Se o livro não tiver a sorte de estar exatamente nas extremidades, você falhará.',
          visualConsequence: 'Você examina o livro 1 e o livro 1000. O livro "O Código Limpo" estava na posição 542 e você o deixou lá.'
        }
      ],
      hint: 'Pense em como você garante que nada ficará para trás quando o ambiente está bagunçado.',
      guidedExplanation: 'Como os livros não estão ordenados (como um dicionário A-Z), a única maneira lógica e infalível de não pular nada é checar um por um sequencialmente. Essa é a Busca Linear.',
      feedbackCorrect: 'Correto! Essa é a essência da Busca Linear.',
      concept: 'Busca Linear (Intuição)',
      whyItWorks: 'Quando os dados estão desorganizados, não há atalhos. A única forma de garantir que você encontrará o item (ou terá certeza de que ele não existe) é checando cada um sequencialmente.',
      pythonCode: `livros = ["Hobbit", "O Código Limpo", "Duna"]

for livro in livros:
    if livro == "O Código Limpo":
        print("Encontrei!")
        break`,
      relation: 'O loop `for` é exatamente você caminhando pela estante. O `if` é você lendo o título de cada livro para ver se é o que você quer.'
    },
    {
      id: 2,
      title: 'Nó 2: A Espada Perdida',
      scenario: 'Você está jogando RPG e possui um inventário de 100 itens.\nVocê precisa saber se possui a "Espada Lendária" para poder entrar na masmorra.',
      problem: 'Como aplicar a mesma lógica da biblioteca aqui?',
      options: [
        { 
          id: 'A', 
          text: 'Comparar o nome de cada item no inventário com "Espada Lendária" um por um.', 
          isCorrect: true 
        },
        { 
          id: 'B', 
          text: 'Tentar entrar na masmorra e ver se o jogo permite.', 
          isCorrect: false,
          feedbackIncorrect: 'Delegar o problema não resolve a sua lógica de busca no inventário, é apenas depender do erro do sistema.',
          visualConsequence: 'O guarda da masmorra te expulsa violentamente porque você foi tentar a sorte sem saber se tinha a espada.'
        },
        { 
          id: 'C', 
          text: 'Olhar apenas os itens que começam com a letra E.', 
          isCorrect: false,
          feedbackIncorrect: 'Se o inventário não está organizado em ordem alfabética, a espada pode estar em qualquer lugar da mochila, não só junto dos outros itens com "E".',
          visualConsequence: 'Você abre o bolso das letras "E", acha um "Escudo", pensa que perdeu a espada e compra outra, gastando todo o seu ouro à toa.'
        }
      ],
      hint: 'Lembre-se do aprendizado da biblioteca: se a mochila é uma bagunça, o computador não tem instinto visual, ele precisa ler tudo.',
      guidedExplanation: 'Assim como na biblioteca, a mochila não está ordenada. O computador não pode "bater o olho", ele precisa ler cada string de texto até achar uma correspondência exata.',
      feedbackCorrect: 'Exato! Você aplicou a Busca Linear num contexto de lista de jogo.',
      concept: 'Aplicação de Algoritmo de Busca',
      whyItWorks: 'Novamente, como o inventário não está necessariamente ordenado alfabeticamente, o computador precisa fazer o trabalho braçal de olhar tudo para não perder o item.',
      pythonCode: `def tem_espada(inventario):
    for item in inventario:
        if item == "Espada Lendária":
            return True
    return False`,
      relation: 'A função `tem_espada` automatiza a tarefa repetitiva. Ela recebe o inventário, olha item por item e responde `True` (sim) assim que acha.'
    },
    {
      id: 3,
      title: 'Nó 3: O Gargalo de Tempo',
      scenario: 'Imagine que você tem 1.000.000 de usuários cadastrados.\n\nVocê precisa verificar se o usuário "joao123" existe.\nProcurar um por um agora demora vários segundos.',
      problem: 'Qual das opções abaixo seria uma forma mais inteligente de organizar os dados ANTES de precisar buscar?',
      options: [
        { 
          id: 'A', 
          text: 'Dividir os usuários em 10 listas menores.', 
          isCorrect: false,
          feedbackIncorrect: 'Dividir em 10 listas apenas diminui o tamanho das prateleiras, mas o computador ainda precisará abrir cada lista e procurar de forma linear.',
          visualConsequence: 'O servidor precisou abrir 10 arquivos diferentes, leu 500 mil nomes e o usuário ficou olhando a tela de carregamento por 3 segundos.'
        },
        { 
          id: 'B', 
          text: 'Atribuir uma "etiqueta" direta (como um índice de livro) para cada usuário no momento do cadastro.', 
          isCorrect: true 
        },
        { 
          id: 'C', 
          text: 'Pedir para o servidor procurar mais rápido.', 
          isCorrect: false,
          feedbackIncorrect: 'Você não pode apenas "pedir para o hardware ser mais rápido". A ineficiência está na arquitetura da sua informação, não na velocidade da máquina.',
          visualConsequence: 'A CPU atinge 100% de uso. O servidor esquenta, consome mais energia e os usuários continuam experimentando lentidão em dias de pico.'
        }
      ],
      hint: 'Pense em como um dicionário físico de palavras funciona. Você não lê da página 1 até a 500. Você pula direto para a seção da letra que procura.',
      guidedExplanation: 'Para evitar o gargalo de olhar item por item (O(N)), usamos Dicionários/Hash Maps, onde a chave (joao123) aponta imediatamente para o valor, sem precisar olhar o resto.',
      feedbackCorrect: 'Exato! Criar um índice muda as regras do jogo.',
      concept: 'Análise de Estrutura de Dados',
      whyItWorks: 'Se você sabe exatamente a "página" (ou chave) onde uma informação está, você não precisa ler o livro todo. Você pula direto para a resposta.',
      pythonCode: `# Em vez de usar uma lista (array):
# usuarios = ["ana", "joao123", "maria"]

# Usamos um Dicionário (Hash Map):
usuarios = {
    "ana": "Ativa",
    "joao123": "Ativo",
    "maria": "Inativa"
}

# Busca instantânea:
if "joao123" in usuarios:
    print("Usuário existe!")`,
      relation: 'O `Dicionário` no Python permite que você pergunte diretamente "joao123 existe?". O computador não faz um loop, ele calcula o local exato da memória e acha na mesma hora.'
    },
    {
      id: 4,
      title: 'Nó 4: Otimizando o Catálogo',
      scenario: 'Você gerencia um e-commerce com milhares de produtos. Quando o cliente digita o ID "PROD-99", a página deve carregar instantaneamente.',
      problem: 'Considerando que velocidade é crucial, como você armazenaria os produtos?',
      options: [
        { 
          id: 'A', 
          text: 'Em uma estrutura de dicionário, usando o ID do produto como chave.', 
          isCorrect: true 
        },
        { 
          id: 'B', 
          text: 'Em uma lista simples, já que o ID tem números.', 
          isCorrect: false,
          feedbackIncorrect: 'Ter números não torna a lista instantânea. O computador ainda precisará percorrer o array para ler o valor de cada ID.',
          visualConsequence: 'O cliente tenta comprar o PROD-99 na Black Friday. O sistema varre 5 milhões de produtos até achá-lo. O cliente desiste da compra pelo tempo de espera.'
        },
        { 
          id: 'C', 
          text: 'Em uma lista, mas varrendo de trás para frente.', 
          isCorrect: false,
          feedbackIncorrect: 'Se o item for o PROD-01, começar do final será a pior coisa possível. A direção não cura o fato de ser uma busca cega.',
          visualConsequence: 'Você investe na ideia, e de repente quem procura pelos produtos antigos (PROD-01) espera 5x mais tempo que o normal.'
        }
      ],
      hint: 'Você tem uma chave de identificação única ("PROD-99"). Que estrutura estudamos que tira proveito máximo de chaves diretas?',
      guidedExplanation: 'Sempre que houver identificadores únicos que precisem de busca imediata para performance, a escolha profissional é usar estruturas de chave-valor (Hash Maps), não listas contínuas.',
      feedbackCorrect: 'Perfeito. Tempo é dinheiro em e-commerce.',
      concept: 'Otimização com Hash Maps O(1)',
      whyItWorks: 'Um Dicionário/Hash Map possui tempo de busca constante, conhecido como O(1). Não importa se você tem 10 produtos ou 10 milhões, o tempo para achar a chave "PROD-99" é exatamente o mesmo.',
      pythonCode: `catalogo = {
    "PROD-01": {"nome": "TV", "preco": 2000},
    "PROD-99": {"nome": "Notebook", "preco": 4500}
}

# Retorna o produto inteiro no mesmo milissegundo:
produto = catalogo.get("PROD-99")
print(produto["nome"])`,
      relation: 'O método `.get()` é a materialização da eficiência. Ele pega a chave "PROD-99" e imediatamente devolve os dados completos (nome, preço) associados a ela.'
    },
    {
      id: 5,
      title: 'Nó 5: Transferência de Lógica',
      scenario: 'Você está no aeroporto de guarulhos. Existem milhares de malas no porão.\n\nSua mala foi extraviada e você tem o ticket "GRU-404".',
      problem: 'O sistema do aeroporto é super rápido. Qual lógica de programação o sistema de bagagens usa para achar sua mala?',
      options: [
        { 
          id: 'A', 
          text: 'Ele usa um loop (Busca Linear) verificando mala por mala.', 
          isCorrect: false,
          feedbackIncorrect: 'A Busca Linear em um aeroporto gigante significaria atrasar voos por horas enquanto esteiras passam malas aleatórias sob um leitor.',
          visualConsequence: 'Pilhas de bagagens paradas. Você perde seu voo de conexão enquanto um scanner tenta achar a GRU-404 rodando esteiras.'
        },
        { 
          id: 'B', 
          text: 'Ele tenta sortear malas aleatórias até achar a GRU-404.', 
          isCorrect: false,
          feedbackIncorrect: 'Sortear aleatoriamente não é uma lógica computacional de logística. É jogar na loteria com os pertences das pessoas.',
          visualConsequence: 'Malas de dezenas de passageiros são mandadas para os aviões errados porque o sistema simplesmente desistiu de otimizar.'
        },
        { 
          id: 'C', 
          text: 'Ele usa a lógica de Dicionários (Chave/Valor), onde "GRU-404" aponta direto para a localização da mala.', 
          isCorrect: true 
        }
      ],
      hint: 'O problema parece logístico, mas é exatamente o mesmo do E-commerce (Nó 4) e do Índice (Nó 3).',
      guidedExplanation: 'Assim como "PROD-99" abre o banco de dados direto na TV, "GRU-404" abre a base de dados do aeroporto direto na estante e setor em que a mala física foi armazenada. É a mesma abstração.',
      feedbackCorrect: 'Brilhante! Você transferiu o conhecimento computacional para o mundo real.',
      concept: 'Mapeamento Universal',
      whyItWorks: 'Sistemas físicos de logística funcionam exatamente como a memória de um computador otimizado. O código de barras (chave) é atrelado a uma prateleira específica (valor), eliminando buscas cegas.',
      pythonCode: `sistema_bagagens = {
    "GRU-101": "Setor A, Prateleira 2",
    "GRU-404": "Setor F, Prateleira 9"
}

localizacao = sistema_bagagens["GRU-404"]
print(f"Sua mala está na: {localizacao}")`,
      relation: 'A variável `localizacao` acessa diretamente o valor vinculado à chave `"GRU-404"`. Você usou o mesmo raciocínio do e-commerce num problema de logística de aeroporto!'
    }
  ]
};
