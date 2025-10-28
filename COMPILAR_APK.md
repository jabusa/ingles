# 🔨 Como Compilar o APK do Inglês Diário

Este guia passo a passo mostra como compilar o aplicativo para Android e gerar o APK pronto para publicar na Google Play Store.

## 📋 Pré-requisitos

1. **Conta Expo**: Crie uma conta gratuita em [expo.dev](https://expo.dev)
2. **EAS CLI**: Instalado globalmente (`npm install -g eas-cli`)
3. **Node.js**: Versão 14 ou superior
4. **Conta Google Play**: Para publicar na Play Store

## 🚀 Passo 1: Preparar o Projeto

```bash
# Navegar para o diretório do projeto
cd /home/ubuntu/ingles-diario

# Verificar se todas as dependências estão instaladas
npm install
```

## 🔑 Passo 2: Configurar Credenciais Expo

```bash
# Fazer login na conta Expo
eas login

# Ou criar uma conta
eas auth:signup
```

Você será redirecionado para o navegador para fazer login/criar conta.

## 🏗️ Passo 3: Compilar o APK

### Opção A: APK Simples (mais rápido)

```bash
eas build --platform android --type apk
```

### Opção B: Android App Bundle (recomendado para Play Store)

```bash
eas build --platform android --type app-bundle
```

**Diferenças:**
- **APK**: Arquivo único, pode ser instalado diretamente em qualquer dispositivo
- **App Bundle**: Otimizado para Play Store, reduz tamanho do download

## ⏳ Passo 4: Aguardar Compilação

O processo de compilação pode levar de 5 a 15 minutos. Você verá:

```
Building for Android...
[████████████████████] 100%
Build complete!

Your build is ready!
Download URL: https://expo.dev/builds/...
```

## 📥 Passo 5: Baixar o Arquivo

```bash
# O arquivo será baixado automaticamente ou você pode copiar o link
# APK: ingles-diario.apk
# App Bundle: ingles-diario.aab
```

## ✅ Passo 6: Testar o APK (Opcional)

### Testar em Emulador Android

```bash
# Instalar em emulador
adb install ingles-diario.apk

# Ou executar diretamente
eas build --platform android --type apk --local
```

### Testar em Dispositivo Físico

1. Conecte o dispositivo via USB
2. Ative "Depuração USB" nas configurações do desenvolvedor
3. Execute:
   ```bash
   adb install ingles-diario.apk
   ```

## 🎯 Passo 7: Publicar na Google Play Store

### 7.1 Criar Conta de Desenvolvedor

1. Acesse [Google Play Console](https://play.google.com/console)
2. Crie uma nova conta (taxa única de $25)
3. Crie um novo aplicativo

### 7.2 Configurar Aplicativo

1. Preencha informações básicas:
   - Nome: "Inglês Diário"
   - Descrição
   - Categoria: Educação
   - Classificação de conteúdo

2. Faça upload do arquivo:
   - Para APK: **Versão de Lançamento** → **APK**
   - Para App Bundle: **Versão de Lançamento** → **App Bundle**

### 7.3 Adicionar Detalhes

- **Ícone**: 512x512 pixels
- **Screenshots**: Mínimo 2, máximo 8 (1080x1920 ou 1440x2560)
- **Descrição**: Veja `GUIA_PUBLICACAO.md`
- **Política de Privacidade**: URL obrigatória

### 7.4 Enviar para Revisão

1. Revise todos os dados
2. Clique em **Enviar para Revisão**
3. Aguarde aprovação (24-48 horas)

## 🔄 Atualizar Versão

Para enviar uma nova versão:

1. Edite `app.json`:
   ```json
   {
     "expo": {
       "version": "1.1.0",
       "android": {
         "versionCode": 2
       }
     }
   }
   ```

2. Compile novamente:
   ```bash
   eas build --platform android --type app-bundle
   ```

3. Faça upload no Google Play Console

## 🐛 Troubleshooting

### Erro: "Build failed"

```bash
# Limpar cache e tentar novamente
eas build --platform android --type apk --clear-cache
```

### Erro: "Not authenticated"

```bash
# Fazer login novamente
eas logout
eas login
```

### Erro: "Invalid package name"

Verifique em `app.json`:
```json
"android": {
  "package": "com.inglesdiario.app"
}
```

### Arquivo muito grande

Para reduzir tamanho:
1. Remova assets desnecessários
2. Use App Bundle em vez de APK
3. Comprima imagens

## 📊 Monitorar Build

```bash
# Ver status de builds anteriores
eas build:list

# Ver detalhes de um build específico
eas build:view <build-id>
```

## 💾 Backup do Projeto

Recomenda-se fazer backup do projeto completo:

```bash
# Criar arquivo zip
zip -r ingles-diario-backup.zip ingles-diario/

# Ou usar git
git init
git add .
git commit -m "Initial commit"
```

## 📚 Recursos Adicionais

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [React Native Documentation](https://reactnative.dev/)

## ✨ Dicas Finais

1. **Teste sempre** antes de publicar
2. **Leia a política** da Google Play Store
3. **Mantenha versões** do APK para histórico
4. **Atualize regularmente** com novas lições
5. **Monitore avaliações** dos usuários

---

**Pronto para publicar? Siga os passos acima e boa sorte! 🚀**
