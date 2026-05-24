# Para utilizar esse projeto

## Fazer o download do repositório

1. Abra o terminal e aceda a pasta onde deseja salvar o projeto.
2. Clone o repositório com o comando:

```bash
git clone https://github.com/seu-usuario/javascript_assincrono_01.git
```

3. Entre na pasta do projeto:

```bash
cd javascript_assincrono_01
```

## Instalar as dependências

1. Instale as dependências listadas no `package.json`:

```bash
npm install
```

2. Após a instalação, a pasta `node_modules` será criada.

## Executar o projeto

1. Verifique se o `package.json` possui um script de execução. Você pode listar os scripts com:

```bash
cat package.json
```

2. Se houver um script como `start`, execute:

```bash
npm start
```

3. Se não houver script `start`, veja os arquivos do projeto e rode o arquivo desejado com Node.js, por exemplo:

```bash
node server.js
```

## Verificar se a instalação deu certo

Execute os comandos abaixo para confirmar que o Node.js e o npm estão funcionando:

```bash
node -v
npm -v
```

Se os comandos retornarem versão, a instalação está correta.
