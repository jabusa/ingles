# Guia de Publicação do Inglês Diário na Google Play Store

## 📱 Informações do Aplicativo

- **Nome**: Inglês Diário
- **Package**: com.inglesdiario.app
- **Versão**: 1.0.0
- **Plataforma**: Android

## 🚀 Passos para Publicar

### 1. Preparar a Conta Google Play

1. Acesse [Google Play Console](https://play.google.com/console)
2. Crie uma nova conta de desenvolvedor (se não tiver)
3. Pague a taxa única de $25 USD
4. Crie um novo aplicativo

### 2. Gerar Chave de Assinatura (Keystore)

Execute o comando abaixo para gerar a chave de assinatura:

```bash
cd /home/ubuntu/ingles-diario
keytool -genkey -v -keystore ingles-diario.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias ingles-diario
```

**Informações a fornecer:**
- Senha do keystore: (escolha uma senha forte)
- Nome e Sobrenome: (seu nome)
- Unidade Organizacional: (sua empresa/nome)
- Organização: (sua empresa)
- Cidade: (sua cidade)
- Estado: (seu estado)
- Código do País: (BR para Brasil)

### 3. Compilar o APK com EAS

```bash
cd /home/ubuntu/ingles-diario
eas build --platform android --type apk
```

Ou para compilar um bundle (recomendado para Play Store):

```bash
eas build --platform android --type app-bundle
```

### 4. Configurar no Google Play Console

1. Acesse seu aplicativo no Google Play Console
2. Vá para **Versão de Lançamento** → **Produção**
3. Clique em **Criar novo lançamento**
4. Faça upload do arquivo APK ou AAB (Android App Bundle)

### 5. Preencher Informações do Aplicativo

#### 5.1 Detalhes do Aplicativo
- **Título**: Inglês Diário
- **Descrição Curta**: Aprenda inglês de forma divertida e interativa
- **Descrição Completa**:
```
Bem-vindo ao Inglês Diário! 🌍

Aprenda inglês de forma divertida e interativa com nosso aplicativo educacional.

✨ Características:
- Lições estruturadas por níveis (Básico, Intermediário, Avançado)
- Múltiplos tipos de perguntas: tradução, múltipla escolha e completar frases
- Sistema de pontuação e acompanhamento de progresso
- Feedback instantâneo para cada resposta
- Interface amigável e intuitiva
- Aprenda no seu próprio ritmo

🎯 Perfeito para:
- Iniciantes em inglês
- Pessoas que querem melhorar suas habilidades
- Estudantes que buscam praticar diariamente
- Qualquer pessoa interessada em aprender um novo idioma

Comece sua jornada de aprendizado hoje mesmo!
```

#### 5.2 Ícone do Aplicativo
- Tamanho: 512x512 pixels
- Formato: PNG
- Coloque em: `/home/ubuntu/ingles-diario/assets/images/icon.png`

#### 5.3 Screenshots
- Mínimo: 2 screenshots
- Máximo: 8 screenshots
- Tamanho: 1080x1920 pixels ou 1440x2560 pixels
- Formato: PNG ou JPEG

#### 5.4 Imagem de Destaque
- Tamanho: 1024x500 pixels
- Formato: PNG ou JPEG

### 6. Classificação de Conteúdo

1. Vá para **Classificação de Conteúdo**
2. Preencha o questionário:
   - Violência: Nenhuma
   - Conteúdo Sexual: Nenhum
   - Linguagem Ofensiva: Nenhuma
   - Álcool/Tabaco/Drogas: Nenhum
   - Jogos de Azar: Não
   - Informações Pessoais: Nenhuma

### 7. Configurar Privacidade

1. Vá para **Política de Privacidade**
2. Adicione um link para sua política de privacidade (obrigatório)
3. Declare que o aplicativo não coleta dados pessoais

### 8. Preço e Distribuição

1. **Preço**: Gratuito (recomendado) ou pago
2. **Países**: Selecione os países onde deseja distribuir
3. **Público-alvo**: Todos os públicos

### 9. Revisar e Enviar

1. Revise todas as informações
2. Clique em **Enviar para Revisão**
3. Aguarde a aprovação (geralmente 24-48 horas)

## 📋 Checklist Pré-Publicação

- [ ] Conta Google Play criada e taxa paga
- [ ] Keystore gerado
- [ ] APK/AAB compilado com sucesso
- [ ] Ícone do aplicativo (512x512) preparado
- [ ] Screenshots (1080x1920 ou 1440x2560) preparados
- [ ] Descrição do aplicativo preenchida
- [ ] Classificação de conteúdo completada
- [ ] Política de privacidade adicionada
- [ ] Informações de contato adicionadas
- [ ] Versão testada em múltiplos dispositivos

## 🔐 Segurança

**IMPORTANTE**: Guarde seu keystore em um local seguro. Você precisará dele para todas as atualizações futuras.

```bash
# Fazer backup do keystore
cp ingles-diario.keystore ~/backup/ingles-diario.keystore
```

## 📞 Suporte

Para dúvidas sobre publicação na Google Play Store, consulte:
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [Expo Documentation](https://docs.expo.dev/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)

## 🔄 Atualizações Futuras

Para enviar atualizações:

1. Aumente o `versionCode` em `app.json`
2. Aumente o `version` em `app.json`
3. Compile novamente com EAS
4. Faça upload da nova versão no Google Play Console

Exemplo:
```json
"android": {
  "versionCode": 2
}
```

---

**Boa sorte com seu aplicativo! 🚀**
