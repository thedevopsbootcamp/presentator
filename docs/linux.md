Linux para Devops

Introdução
O Linux é um sistema operacional de código aberto baseado no núcleo (kernel) desenvolvido por Linus Torvalds em 1991. Inspirado no Unix, Linux foi criado como um sistema operacional livre, oferecendo uma alternativa ao software proprietário. Desde seu lançamento inicial, o Linux tem evoluído com a colaboração de milhares de desenvolvedores em todo o mundo, tornando-se uma base sólida e amplamente utilizada em servidores, desktops, dispositivos móveis e, mais recentemente, na computação em nuvem.
A essência do Linux está na sua filosofia de abertura e colaboração. O lançamento sob a licença GNU General Public License (GPL) permitiu que qualquer pessoa pudesse usar, modificar e distribuir o software, criando um movimento global em torno do software livre e colaborativo. Este modelo comunitário permitiu que o Linux crescesse rapidamente em popularidade e importância, sendo adotado por empresas, governos e instituições acadêmicas para uma variedade de propósitos.
Kernel Linux
O kernel do Linux é o coração do sistema operacional, responsável por gerenciar os recursos do sistema, incluindo memória, processos e dispositivos de hardware. Ele funciona como uma camada intermediária entre os aplicativos e o hardware, garantindo que cada recurso seja utilizado de forma eficiente e segura. A modularidade do kernel permite que ele seja altamente configurável, adaptando-se a diferentes necessidades, desde dispositivos embarcados e smartphones até data centers de grande escala.
O kernel é desenvolvido de forma colaborativa por uma comunidade global, incluindo contribuições de grandes empresas de tecnologia. A cada versão, são adicionadas melhorias de desempenho, segurança e suporte a novos dispositivos. Essa evolução contínua faz com que o kernel Linux seja robusto, seguro e preparado para lidar com os desafios das demandas modernas.

Shell Linux
O que é o Shell?

O shell no Linux é uma interface de linha de comando (CLI) que permite aos usuários interagir com o sistema operacional. Diferente das interfaces gráficas, o shell é utilizado por meio de comandos digitados em um terminal, permitindo uma interação direta e poderosa com o sistema. O shell interpreta os comandos do usuário e os passa para o núcleo do sistema operacional, que os executa.
Tipos de Shell
Existem diversos tipos de shells disponíveis no Linux, cada um com suas características e funcionalidades. Os mais comuns incluem:
Bourne Again Shell (Bash): O Bash é um dos shells mais populares e amplamente utilizado em distribuições Linux. Ele é conhecido por sua flexibilidade e pela capacidade de executar scripts, manipular variáveis e criar funções​​.
Zsh (Z Shell): Apresenta melhorias em relação ao Bash, com funcionalidades avançadas, como autocompletar comandos, sugestões de correção automática e suporte a plugins.
Ksh (Korn Shell): Oferece recursos como manipulação de arrays associativos e suporte avançado a scripts.
C Shell (csh): Baseado na linguagem de programação C, é conhecido por seu estilo de sintaxe diferenciado.
O shell mais comum em sistemas Linux modernos é o Bash (GNU Bourne Again Shell)​​.

Como o Shell Funciona?

O shell funciona em dois modos principais:

Interativo: O usuário digita comandos diretamente, e o shell executa os comandos um por um, respondendo com a saída correspondente.
Modo de script: Permite que você crie scripts, que são arquivos contendo uma série de comandos que são executados sequencialmente​​.
Os caracteres # e $
No terminal Linux, os caracteres # e $ são indicadores de prompt e têm significados distintos, relacionados ao nível de permissão do usuário que está usando o shell:
# (cerquilha ou "hash"): Este símbolo é usado para indicar que você está trabalhando como superusuário (root), ou seja, um usuário com permissões administrativas. O superusuário tem controle total sobre o sistema e pode executar qualquer comando, incluindo aqueles que afetam criticamente o sistema. A presença do # como prompt indica que você tem privilégios elevados.
Exemplo de prompt para o usuário root:

root@host:/#

$ (cifrão): Este símbolo é usado para indicar que você está trabalhando como um usuário comum sem privilégios administrativos. Os usuários com o prompt $ têm permissões limitadas e não podem executar comandos que possam prejudicar o sistema sem a utilização de sudo (para comandos com elevação de privilégios).
Exemplo de prompt para um usuário comum:

user@host:~$
Resumo:
#: Indica que você está como root ou com permissões de superusuário.
$: Indica que você está como usuário comum com permissões normais.
Importância:
Segurança: Trabalhar como root (#) exige cuidado, pois você pode alterar configurações críticas ou remover arquivos importantes. Prefira usar um usuário comum ($) e eleve privilégios temporariamente com sudo apenas quando necessário.
Identificação rápida: Ao ver # ou $ no terminal, você sabe instantaneamente seu nível de acesso e pode ajustar seu comportamento de acordo para evitar erros perigosos.
Filosofia Unix: "Faça uma coisa e faça bem"
Uma das filosofias fundamentais que guiam o desenvolvimento do Linux é a abordagem "Faça uma coisa e faça bem", herdada do Unix. Esta filosofia preconiza que cada programa ou ferramenta deva ser projetado para realizar uma tarefa específica de maneira eficiente. Em vez de sistemas monolíticos que tentam resolver todos os problemas de uma só vez, a abordagem Unix/Linux favorece a criação de programas modulares que podem ser combinados para realizar tarefas mais complexas.
Por exemplo, comandos como ls (para listar arquivos), grep (para buscar padrões em arquivos) e awk (para processamento de texto) são pequenas ferramentas que realizam suas funções de forma eficiente e podem ser usadas em conjunto através do pipe (|), permitindo a criação de fluxos de trabalho poderosos. Essa simplicidade e flexibilidade são características que tornaram o Linux uma escolha preferida para administradores de sistemas, desenvolvedores e engenheiros DevOps.
Software Livre
O Linux é um símbolo do movimento do software livre, promovido por figuras como Richard Stallman e o projeto GNU. A filosofia do software livre defende a liberdade dos usuários para executar, estudar, modificar e distribuir software. Essa liberdade é garantida por licenças como a GPL, que exige que as modificações no código permaneçam livres e abertas. O modelo de desenvolvimento aberto incentivou a colaboração global, resultando em soluções altamente robustas, seguras e acessíveis para todos.
O software livre promove não apenas a liberdade técnica, mas também a transparência e a inovação. Com o acesso ao código-fonte, os usuários têm a capacidade de entender como o software funciona, adaptar suas funcionalidades para necessidades específicas e contribuir com melhorias, fortalecendo um ciclo contínuo de inovação.
Distribuições Populares
O Linux possui diversas distribuições (distros), que são variações do sistema operacional adaptadas para diferentes casos de uso. Algumas das principais distribuições incluem:
Red Hat Enterprise Linux (RHEL): Voltada para ambientes corporativos, com foco em estabilidade, suporte técnico e certificações. É amplamente utilizada em servidores e infraestrutura crítica.
Ubuntu: Uma das distribuições mais populares, voltada tanto para desktops quanto para servidores, com foco em facilidade de uso e suporte a tecnologias modernas.
Debian: Conhecida por sua estabilidade e vasto repositório de pacotes, é a base para várias outras distribuições, incluindo Ubuntu.
CentOS: Historicamente, um clone livre do RHEL, utilizado em servidores devido à sua robustez e ausência de custos de licenciamento.
Fedora: Focada em inovações tecnológicas e frequentemente utilizada como um "laboratório" para testar funcionalidades que eventualmente são incorporadas no RHEL.
Linux, DevOps e Uso Corporativo
O Linux tem desempenhado um papel fundamental no mundo DevOps e no uso corporativo. Sua flexibilidade, estabilidade e capacidade de personalização fazem dele uma escolha ideal para ambientes que exigem automação, orquestração e alta disponibilidade. Ferramentas populares como Ansible, Docker, Kubernetes e outras soluções de automação são desenvolvidas com o Linux em mente, tornando-o uma peça-chave para Integração Contínua/Entrega Contínua (CI/CD).
Nos ambientes de cloud computing, o Linux é predominante, com provedores como AWS, Google Cloud Platform e Azure, oferecendo amplas opções de distribuições Linux para máquinas virtuais, containers e serviços gerenciados. Empresas de todos os tamanhos utilizam Linux para executar desde pequenas aplicações até grandes sistemas distribuídos, aproveitando sua segurança, confiabilidade e capacidade de adaptação a diferentes demandas.