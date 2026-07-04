### Passo 1: Pegar o Código de Autorização

Copie a URL abaixo e modifique **apenas** duas coisas: o seu `client_id` e a `redirect_uri` (coloque **exatamente** a URL do seu projeto que você cadastrou no painel do Spotify).

```text
https://accounts.spotify.com/authorize?client_id=SEU_CLIENT_ID&response_type=code&redirect_uri=A_URL_DO_SEU_PROJETO_AQUI&scope=user-read-currently-playing%20user-read-playback-state

```

1. Cole isso no seu navegador e aperte Enter.
2. O Spotify vai pedir para você autorizar o app. Clique em **Aceitar**.

### Passo 2: O Resgate (A parte Hacker 👾)

1. O Spotify vai te redirecionar para o seu site ao vivo.
2. Provavelmente o seu site vai dar uma tela de "Página não encontrada (404)" ou algo do tipo, já que a rota `/callback` não existe no seu React. **Isso não importa!**
3. Olhe para a **barra de endereços do navegador**. Ela vai estar brilhando com algo assim:
`https://seu-site.../callback?code=NApCCg...UM_CODIGO_GIGANTE...`
4. Copie **Apenas** o texto gigante que vem depois do `code=`.

### Passo 3: O Terminal (Onde a mágica acontece)

Agora, abra o seu terminal e monte o comando `curl` abaixo.

**⚠️ Regra de Ouro:** O campo `redirect_uri` dentro deste comando tem que ser **identicamente igual** à URL do projeto que você cadastrou no painel do Spotify, senão a API recusa!

```bash
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code" \
     -d "code=COLE_O_CODIGO_GIGANTE_DO_PASSO_2_AQUI" \
     -d "redirect_uri=A_URL_DO_SEU_PROJETO_AQUI" \
     -d "client_id=SEU_CLIENT_ID" \
     -d "client_secret=SEU_CLIENT_SECRET"

```

Assim que você der o Enter, o terminal vai te devolver aquele JSON bonito com o `"refresh_token"`. É só copiar, colar no seu `.env` e a sua integração vai estar viva! d(^_^)b
