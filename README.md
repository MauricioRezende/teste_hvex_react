Para execução da API estou utilizando Apache 2.4 e PHP 7.2 configurados no WampServer 3.1

Criei um banco de dados em MySQL no phpMyAdmin para salvar as atividades favoritas do usuário.

Dentro da pasta "api", na pasta "conf", há um arquivo chamado "configuration.php", nele está configurado o acesso ao banco de dados, onde estou utilizando o servidor "localhost", usuário "root", senha em branco "" e nome do banco de dados "hvex". Caso utilize configurações diferentes de conexão com banco de dados, basta alterar esse arquivo.

Dentro da pasta "api", na pasta "sql", há um arquivo chamado "create.sql", onde, basta criar um banco de dados chamado "hvex" (caso utilize outro nome, lembre-se de alterar o arquivo "configuration.php" citado acima) e executar o script salvo no arquivo ou importa-lo.

Utilizei o Insomnia para fazer os teste na API. A API responde as seguintes requisições:

GET    api/activity/ -> trás todas as atividades;

GET    api/activity/chave -> trás a atividade de chave especificada na URL;

POST   api/activity/ -> salva no banco de dados uma atividade vinda por POST de nome "key_activity" contendo a chave como valor;

DELETE api/activity/chave -> deleta uma atividade de chave especificada na URL.

Para executar a aplicação basta abrir uma janela do terminal dentro da pasta "web" e executo o comando "yarn start" (é necessário ter o yarn instalado ou outro gerenciador de pacotes também instalado)

Minha API está configurada no seguinte caminho "http://localhost/hvex-api/api", ou seja, a pasta "api" que estou enviando deve ficar detro da pasta "hvex-api" (a organização das pastas não ficou muito boa, mas é por que já estava utilizando diversas outras aqui com nomes muito parecidos). A pasta "web" irá funcionar independente do caminho, mas para fim de organização, pode ser colocada dentro da pasta "hvex-api" também. Caso queira alterar o caminho da api, basta abrir o arquivo "api_localhost.js" que está no caminho "web/src/services" e alterar da maneira que achar melhor.

OBS.:

Como a API é em PHP, é necesário roda-la em um servidor APACHE
